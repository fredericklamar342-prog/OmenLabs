import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { waitlistSchema } from "@/lib/schema";
import { z } from "zod";

// Simple in-memory rate limiting (per runtime instance)
const rateLimitMap = new Map<string, { count: number; lastReset: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS = 5;

function checkRateLimit(ip: string) {
  const now = Date.now();
  const userData = rateLimitMap.get(ip) || { count: 0, lastReset: now };

  if (now - userData.lastReset > RATE_LIMIT_WINDOW) {
    userData.count = 0;
    userData.lastReset = now;
  }

  userData.count++;
  rateLimitMap.set(ip, userData);

  return userData.count <= MAX_REQUESTS;
}

export async function POST(req: NextRequest) {
  try {
    // 1. Rate Limiting
    const ip = req.headers.get("x-forwarded-for") || "unknown";
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again in a minute." },
        { status: 429 }
      );
    }

    // 2. Parse and Validate
    const body = await req.json();
    
    // Honeypot check
    if (body.website_url) {
      console.warn("Honeypot triggered by:", ip);
      return NextResponse.json({ success: true, message: "Thank you for joining!" }); // Silent reject
    }

    const validated = waitlistSchema.safeParse(body);

    if (!validated.success) {
      return NextResponse.json(
        { 
          error: "Please enter a valid email address.",
          details: validated.error.flatten().fieldErrors 
        },
        { status: 400 }
      );
    }

    const { email, source } = validated.data;
    const sanitizedEmail = email.trim().toLowerCase();

    // 3. Supabase Insert
    const { error: insertError } = await supabase
      .from("waitlist")
      .insert([{ email: sanitizedEmail }]);

    if (insertError) {
      // 4. Handle Duplicates
      if (insertError.code === "23505") {
        return NextResponse.json({
          success: true,
          message: "You’re already on the list. We’ll notify you when access opens.",
          isDuplicate: true
        });
      }

      console.error("Supabase insert error:", insertError);
      throw new Error("Durable storage failure");
    }

    // 5. Trigger EmailJS (Server-side Notification)
    // Note: Since EmailJS is primarily client-side, we'll return success 
    // and let the client know it can proceed with secondary notification if needed,
    // OR we could call an EmailJS REST API here if service keys are available.
    // For now, based on instructions, Supabase is the truth.

    return NextResponse.json({
      success: true,
      message: "You’re on the list. We’ll notify you when access opens.",
    });

  } catch (error) {
    console.error("API Route Error:", error);
    return NextResponse.json(
      { error: "Our system is experiencing high load, but we've noted your request." },
      { status: 500 }
    );
  }
}
