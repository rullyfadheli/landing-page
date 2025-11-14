import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.USER_EMAIL,
    pass: process.env.EMAIL_PASS,
  },
});

const USER_EMAIL = process.env.USER_EMAIL as string;
const EMAIL_PASS = process.env.EMAIL_PASS as string;
const COMPANY_EMAIL = process.env.COMPANY_EMAIL as string;

export async function POST(req: Request) {
  const { email, subject, name, message } = await req.json();

  console.log(USER_EMAIL)
  console.log(EMAIL_PASS)
  console.log(COMPANY_EMAIL)
  if (!USER_EMAIL || !EMAIL_PASS || !COMPANY_EMAIL) {
    return NextResponse.json(
      {
        success: false,
        message: "Server configuration error: Missing email credentials.",
      },
      { status: 500 } // Internal Server Error
    );
  }
  try {
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      subject: subject || "Pesan baru dari landing page",
      to: process.env.COMPANY_EMAIL,
      html: `
      <h3>Pesan Baru dari Landing Page Civika</h3>
      <p><strong>Nama:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subjek:</strong> ${subject}</p>
      <p><strong>Pesan:</strong><br/>${message}</p>
    `,
    });
    console.log("Hello");

    return NextResponse.json({ success: true });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
