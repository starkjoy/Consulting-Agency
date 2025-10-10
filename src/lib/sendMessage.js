
// src/lib/sendMessage.js
import nodemailer from "nodemailer";


export async function sendMessage({ contactName, messageTitle, contactEmail, contactMessage }) {


  const transporter = nodemailer.createTransport({
    host: "smtp.hostinger.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Send the message
  const info = await transporter.sendMail({
    from: `Realmer Contact Form <${process.env.EMAIL_USER}>`,
    replyTo: contactEmail,
    to: process.env.EMAIL_USER,
    subject: `${messageTitle} - from ${contactName}`,
    text: contactMessage,
    html: `${contactMessage}`,
  });

  return { success: true, messageId: info.messageId };

}
