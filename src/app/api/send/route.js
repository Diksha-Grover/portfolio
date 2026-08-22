import { NextResponse } from "next/server";
import { Resend } from "resend";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request) {
  try {
    const { email, subject, message } = await request.json();

    if (!email || !emailRegex.test(email) || !subject || !message) {
      return NextResponse.json({ error: "Invalid form data" }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_TO;

    if (!apiKey || !to) {
      return NextResponse.json({ error: "Email service not configured" }, { status: 500 });
    }

    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      // Switch to a verified domain sender (e.g. noreply@dikshagrover.in) once DNS is verified.
      from: "Portfolio Contact <onboarding@resend.dev>",
      to,
      replyTo: email,
      subject: `Portfolio: ${subject}`,
      text: `From: ${email}\n\n${message}`,
      html: `<p><strong>From:</strong> ${email}</p><p>${String(message).replace(/\n/g, "<br/>")}</p>`,
    });

    if (error) {
      console.error("resend send failed:", error);
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("send email failed:", err);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
