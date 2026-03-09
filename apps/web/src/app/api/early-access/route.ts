import { NextResponse } from "next/server";
import { Resend } from "resend";

const fromEmail = process.env.FROM_EMAIL || "OmenLabs <no-reply@omenlabs.com>";
const adminEmail = process.env.ADMIN_EMAIL || "admin@omenlabs.com";


export async function POST(req: Request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      console.warn("RESEND_API_KEY is not defined. Email will not be sent.");
    }
    const resend = new Resend(process.env.RESEND_API_KEY || "missing_key_for_build");

    const data = await req.json();
    const email = data.email;
    const honeypot = data["bot-field"];

    // 1. Honeypot check
    if (honeypot) {
      console.warn("Honeypot filled, blocking spam.");
      return NextResponse.json({ message: "Success (spambot trapped)" }, { status: 200 });
    }

    // 2. Validation
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ message: "Invalid email address" }, { status: 400 });
    }

    // 3. Send Confirmation to User
    await resend.emails.send({
      from: fromEmail,
      to: email,
      subject: "You’re on the OmenLabs Early Access list",
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h1 style="color: #B11226; text-transform: uppercase; letter-spacing: 2px;">OmenLabs Verified</h1>
          <p>Handshake established. We've added your identity to the Omen Protocol waitlist.</p>
          <p>You'll be among the first to access our programmable security infrastructure.</p>
          <div style="margin-top: 30px; padding: 20px; background: #f9f9f9; border-radius: 5px;">
            <p><strong>Status:</strong> Priority Queue Active</p>
            <p><strong>Identity:</strong> ${email}</p>
          </div>
          <p style="margin-top: 30px;">
            <a href="https://omenlabs.xyz/login" style="background: #B11226; color: #fff; padding: 12px 24px; text-decoration: none; border-radius: 5px; font-weight: bold; text-transform: uppercase; font-size: 12px;">Access Terminal</a>
          </p>
          <hr style="margin-top: 40px; border: 0; border-top: 1px solid #eee;" />
          <p style="font-size: 10px; color: #999; text-transform: uppercase; letter-spacing: 1px;">OmenLabs Network. Secure Infrastructure Protocol.</p>
        </div>
      `,
    });

    // 4. Send Notification to Admin
    await resend.emails.send({
      from: fromEmail,
      to: adminEmail,
      subject: "New OmenLabs Early Access Signup",
      html: `
        <div style="font-family: sans-serif;">
          <h2>New Signup Detected</h2>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Timestamp:</strong> ${new Date().toISOString()}</p>
          <p><strong>System Status:</strong> Handshake Success</p>
        </div>
      `,
    });

    return NextResponse.json({ message: "You’re on the waitlist ✅ Check your inbox" }, { status: 200 });
  } catch (error: any) {
    console.error("Email Sender Error:", error);
    return NextResponse.json({ message: "System error, please try again later." }, { status: 500 });
  }
}
