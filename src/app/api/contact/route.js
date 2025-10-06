
// src/app/api/contact/route.js
import { NextResponse } from "next/server";
import { sendMessage } from "@/lib/sendMessage";

export async function POST(req) {
    try {
      const { contactName, messageTitle, contactEmail, contactMessage } = await req.json();
  
      const result = await sendMessage({
        contactName,
        messageTitle,
        contactEmail,
        contactMessage,
      });
  
      return NextResponse.json(result);
    } catch (err) {
      return NextResponse.json({ success: false, error: err.message });
    }
  }
  