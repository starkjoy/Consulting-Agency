
import nodemailer from "nodemailer"
import { emailTemplate } from "./email";

export async function sendFormEmail({ metadata, attachments }) {
  // 1. Create a test account from Ethereal
  const testAccount = await nodemailer.createTestAccount()
  console.log("Ethereal account:", testAccount.user, testAccount.pass);

  // 2. Create transporter using the Ethereal account
  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    auth: {
      user: testAccount.user,
      pass: testAccount.pass,
    },
  })

  // 3. Send email
  const info = await transporter.sendMail({
    from: `"Realmer Form" <no-reply@realmer.com>`,
    to: "test@receiver.com", // fake recipient for now
    subject: "New Application Submission",
    text: JSON.stringify(metadata, null, 2), // plain text fallback
    html: emailTemplate(metadata),
    attachments,
  });

  // 4. Return preview URL
  return { previewUrl: nodemailer.getTestMessageUrl(info) }
}
