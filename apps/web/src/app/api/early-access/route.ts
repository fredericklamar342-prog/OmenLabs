import { NextRequest, NextResponse } from "next/server";
import { waitlistSchema } from "@/lib/schema";
import { submitWaitlistAction } from "@/lib/actions";
import { isRateLimited, DEFAULT_RATE_LIMIT } from "@/lib/rateLimit";

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
    
    // Honeypot check
    if (body.website_url) {
      return NextResponse.json({ type: "success", message: "Thank you for joining!" });
    }

    const validated = waitlistSchema.safeParse(body);

    if (!validated.success) {
      return NextResponse.json(
        { 
          type: "invalid_input",
          error: "Please enter a valid email address.",
          details: validated.error.flatten().fieldErrors 
        },
        { status: 400 }
      );
    }

    // Reuse the verified Server Action logic
    const actionResult = await submitWaitlistAction(validated.data);

    if (!actionResult.success) {
      // Check for already exists
      if (actionResult.error?.includes("already on the waitlist")) {
        return NextResponse.json({
          type: "already_exists",
          message: actionResult.error,
        });
      }

      return NextResponse.json(
        { 
          type: "server_error", 
          error: actionResult.error || "We couldn't secure your spot right now." 
        }, 
        { status: 500 }
      );
    }

    return NextResponse.json({
      type: "success",
      message: actionResult.message,
    });

  } catch (error) {
    console.error("[Waitlist API] Global catch-all error:", error);
    return NextResponse.json(
      { 
        type: "server_error", 
        error: "We're experiencing a high-volume sync delay. Please try again or reach out to support." 
      }, 
      { status: 500 }
    );
  }
}
