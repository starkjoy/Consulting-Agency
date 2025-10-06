
// src/lib/sendMessage.js
import nodemailer from "nodemailer";


export async function sendMessage({ contactName, messageTitle, contactEmail, contactMessage }) {
  // Create a test Ethereal account (for sandbox testing)
  const testAccount = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    auth: {
      user: testAccount.user,
      pass: testAccount.pass,
    },
  });

  // Send the message
  const info = await transporter.sendMail({
    from: `<${contactEmail}>`,
    to: "you@realmer.com",
    subject: `${messageTitle}`,
    text: contactMessage,
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6;">
        <h2>New message from ${contactName}</h2>
        <p><strong>Email:</strong> ${contactEmail}</p>
        <p><strong>Message:</strong></p>
        <p>${contactMessage}</p>
      </div>
    `,
  });

  return {
    success: true,
    previewUrl: nodemailer.getTestMessageUrl(info),
  };
}
