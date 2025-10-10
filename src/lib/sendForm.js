
import nodemailer from "nodemailer"
import { emailTemplate } from "./email";

export async function sendFormEmail({ metadata, attachments }) {

  // 2. Create transporter using the Ethereal account
  const transporter = nodemailer.createTransport({
    host: "smtp.hostinger.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // 3. Send email
  const info = await transporter.sendMail({
    from: `Realmer Applicantion Form <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER,
    subject: "New Application Submission",
    html: emailTemplate(metadata),
    attachments,
  });

  return { success: true, messageId: info.messageId };
}
