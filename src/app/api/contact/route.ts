import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, company, budget, message, services } = body;

    // ── Validate required fields ──
    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required." },
        { status: 400 }
      );
    }

    // ── Create transporter (reads from env variables) ──
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === "true", // true for port 465
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // ── HTML email body ──
    const htmlBody = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8" />
          <style>
            body { font-family: 'Helvetica Neue', Arial, sans-serif; background: #f9f9f9; margin: 0; padding: 0; }
            .wrapper { max-width: 620px; margin: 32px auto; background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 24px rgba(0,0,0,0.08); }
            .header { background: linear-gradient(135deg, #FFB21A 0%, #FF7A00 45%, #F43B24 100%); padding: 32px 40px; }
            .header h1 { color: #fff; margin: 0; font-size: 24px; font-weight: 800; letter-spacing: -0.5px; }
            .header p { color: rgba(255,255,255,0.85); margin: 4px 0 0; font-size: 13px; }
            .body { padding: 36px 40px; }
            .label { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1.2px; color: #FF7A00; margin-bottom: 4px; }
            .value { font-size: 15px; color: #111318; margin-bottom: 20px; font-weight: 500; }
            .divider { border: none; border-top: 1px solid #f0f0f0; margin: 24px 0; }
            .message-box { background: #FAF9F7; border-left: 3px solid #FF7A00; border-radius: 8px; padding: 16px 20px; font-size: 14px; color: #444; line-height: 1.7; }
            .services-chip { display: inline-block; background: #FFF3E8; color: #FF7A00; border-radius: 20px; padding: 4px 12px; font-size: 12px; font-weight: 600; margin: 3px; }
            .footer { background: #111318; padding: 20px 40px; text-align: center; }
            .footer p { color: #888; font-size: 12px; margin: 0; }
            .footer span { color: #FF7A00; font-weight: 700; }
          </style>
        </head>
        <body>
          <div class="wrapper">
            <div class="header">
              <h1>New Project Inquiry</h1>
              <p>Submitted via XhibitIQ website — ${new Date().toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric", hour: "2-digit", minute: "2-digit" })}</p>
            </div>
            <div class="body">
              <div class="label">Full Name</div>
              <div class="value">${name}</div>

              <div class="label">Work Email</div>
              <div class="value"><a href="mailto:${email}" style="color:#FF7A00;text-decoration:none;">${email}</a></div>

              <div class="label">Company</div>
              <div class="value">${company || "—"}</div>

              <div class="label">Estimated Budget</div>
              <div class="value">${budget || "—"}</div>

              ${
                services && services.length > 0
                  ? `<div class="label">Capabilities Required</div>
                     <div class="value">${services.map((s: string) => `<span class="services-chip">${s}</span>`).join("")}</div>`
                  : ""
              }

              <hr class="divider" />

              <div class="label">Project Details / Challenge</div>
              <div class="message-box">${message ? message.replace(/\n/g, "<br/>") : "No details provided."}</div>
            </div>
            <div class="footer">
              <p>This message was sent via <span>XhibitIQ</span> website contact form.</p>
            </div>
          </div>
        </body>
      </html>
    `;

    // ── Send email to XhibitIQ ──
    await transporter.sendMail({
      from: `"XhibitIQ Website" <${process.env.SMTP_USER}>`,
      to: "info@xhibitiq.com",
      replyTo: email,
      subject: `New Project Inquiry from ${name}${company ? ` — ${company}` : ""}`,
      html: htmlBody,
    });

    // ── Auto-reply to the submitter ──
    const autoReplyHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8" />
          <style>
            body { font-family: 'Helvetica Neue', Arial, sans-serif; background: #f9f9f9; margin: 0; padding: 0; }
            .wrapper { max-width: 580px; margin: 32px auto; background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 24px rgba(0,0,0,0.08); }
            .header { background: linear-gradient(135deg, #FFB21A 0%, #FF7A00 45%, #F43B24 100%); padding: 40px; text-align: center; }
            .header h1 { color: #fff; margin: 0 0 8px; font-size: 26px; font-weight: 800; }
            .header p { color: rgba(255,255,255,0.9); margin: 0; font-size: 14px; }
            .body { padding: 40px; text-align: center; }
            .body h2 { font-size: 22px; color: #111318; font-weight: 700; margin: 0 0 12px; }
            .body p { font-size: 15px; color: #62666D; line-height: 1.7; margin: 0 0 16px; }
            .cta { display: inline-block; margin-top: 8px; padding: 14px 32px; border-radius: 50px; background: linear-gradient(135deg, #FF7A00, #F43B24); color: #fff; font-weight: 700; font-size: 14px; text-decoration: none; }
            .footer { background: #111318; padding: 20px 40px; text-align: center; }
            .footer p { color: #888; font-size: 12px; margin: 0; }
            .footer span { color: #FF7A00; font-weight: 700; }
          </style>
        </head>
        <body>
          <div class="wrapper">
            <div class="header">
              <h1>XhibitIQ</h1>
              <p>Marketing • Creative • Experiences • Technology</p>
            </div>
            <div class="body">
              <h2>Thank you, ${name}! 🎉</h2>
              <p>We've received your inquiry and our strategic team will review it carefully. Expect to hear from us within <strong>24 hours</strong>.</p>
              <p>In the meantime, feel free to explore our work or reach out directly at <a href="mailto:info@xhibitiq.com" style="color:#FF7A00;font-weight:600;">info@xhibitiq.com</a></p>
              <a href="https://www.xhibitiq.com" class="cta">Visit XhibitIQ →</a>
            </div>
            <div class="footer">
              <p><span>XhibitIQ</span> — Build What's Next.</p>
            </div>
          </div>
        </body>
      </html>
    `;

    await transporter.sendMail({
      from: `"XhibitIQ" <${process.env.SMTP_USER}>`,
      to: email,
      subject: `We've received your inquiry, ${name}!`,
      html: autoReplyHtml,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
