import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { developerSchema } from "@/lib/schema";
import { Resend } from "resend";
import { isRateLimited, DEFAULT_RATE_LIMIT } from "@/lib/rateLimit";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get("x-forwarded-for") || "unknown";
    
    if (isRateLimited(ip, DEFAULT_RATE_LIMIT)) {
      return NextResponse.json(
        { 
          type: "rate_limit", 
          error: "Too many requests. Please try again in a minute." 
        },
        { status: 429 }
      );
    }

    const body = await req.json();
    const validated = developerSchema.safeParse(body);

    if (!validated.success) {
      return NextResponse.json(
        { 
          type: "invalid_input", 
          error: "Invalid application data", 
          details: validated.error.flatten().fieldErrors 
        },
        { status: 400 }
      );
    }

    const { github, x_profile, email } = validated.data;
    
    // Normalized by Zod schema
    const normalizedGithub = github;
    const normalizedX = x_profile;
    const normalizedEmail = email || null;

    // Check for existing records (any of the unique fields)
    const orQuery = [
      `github.eq.${normalizedGithub}`,
      `x_profile.eq.${normalizedX}`
    ];
    if (normalizedEmail) orQuery.push(`email.eq.${normalizedEmail}`);

    const { data: existing } = await supabase
      .from("developer_access")
      .select("github, x_profile, email")
      .or(orQuery.join(','))
      .maybeSingle();

    if (existing) {
      return NextResponse.json({
        type: "already_exists",
        message: "You've already applied for Developer Access. We're currently reviewing your credentials.",
      });
    }

    // Insert into database
    const { error: insertError } = await supabase
      .from("developer_access")
      .insert([{ 
        github: normalizedGithub, 
        x_profile: normalizedX, 
        email: normalizedEmail,
        status: "pending"
      }]);

    if (insertError) {
      if (insertError.code === "23505") {
        return NextResponse.json({
          type: "already_exists",
          message: "Application already in system. Review in progress.",
        });
      }
      console.error("[Developer API] Supabase insert error:", insertError);
      return NextResponse.json(
        { 
          type: "server_error", 
          error: "We couldn't process your application right now. Please try again shortly." 
        }, 
        { status: 500 }
      );
    }

    // Email delivery (non-blocking)
    let emailStatus: 'sent' | 'failed' | 'not_configured' = 'not_configured';

    if (resend && normalizedEmail) {
      try {
        const { error: emailError } = await resend.emails.send({
          from: "Omen Labs <access@omenlabs.com>",
          to: normalizedEmail,
          subject: "Omen Developer Access Application Received",
          html: `<div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #080B12; line-height: 1.6;">
            <h1 style="color: #49A5BD;">Application Received</h1>
            <p>Your application for Omen Developer Access has been received.</p>
            <p>Our team will review your GitHub (<strong>${normalizedGithub}</strong>) and X (<strong>${normalizedX}</strong>) profiles and notify you once your access has been approved.</p>
            <p>Thank you for your interest in building on the Omen Trust Layer.</p>
            <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
            <p style="font-size: 12px; color: #94A3B8;">Omen Labs - The Trust Primitive for the Sui Network</p>
          </div>`
        });

        if (emailError) {
          console.error("[Developer API] Resend error:", emailError);
          emailStatus = 'failed';
        } else {
          emailStatus = 'sent';
        }
      } catch (emailError) {
        console.error("[Developer API] Resend exception:", emailError);
        emailStatus = 'failed';
      }
    }

    return NextResponse.json({ 
      type: "success",
      emailStatus,
      message: "Application received. Our team will review your credentials and notify you soon." 
    }, { status: 200 });

  } catch (error) {
    console.error("[Developer API] Global catch-all error:", error);
    return NextResponse.json(
      { 
        type: "server_error", 
        error: "We encountered a deployment-level sync error. Please try again." 
      }, 
      { status: 500 }
    );
  }
}
