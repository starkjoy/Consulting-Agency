
// src/app/api/send-form/route.js
import { NextResponse } from "next/server";
import busboy from "busboy";
import { sendFormEmail } from "@/lib/sendForm";

// ✅ Main POST handler
export async function POST(req) {
  try {
    const formData = await parseMultipart(req); // <-- busboy handles parsing

    const metadata = JSON.parse(formData.metadata);

    const info = await sendFormEmail({
      metadata,
      attachments: formData.attachments,
    });

    return NextResponse.json({ success: true, preview: info.preview });
  } catch (e) {
    console.error("❌ Upload failed:", e);
    return NextResponse.json({ success: false, error: e.message });
  }
}

// ✅ Helper: Parse multipart/form-data with Busboy
function parseMultipart(req) {
  return new Promise(async (resolve, reject) => {
    const bb = busboy({
      headers: Object.fromEntries(req.headers),
    });

    const fields = {};
    const attachments = [];

    bb.on("file", (fieldname, file, info) => {
      const chunks = [];
      file.on("data", (chunk) => chunks.push(chunk));
      file.on("end", () => {
        attachments.push({
          filename: info.filename,
          content: Buffer.concat(chunks),
          contentType: info.mimeType,
        });
      });
    });

    bb.on("field", (fieldname, val) => {
      fields[fieldname] = val;
    });

    bb.on("finish", () => {
      resolve({
        ...fields,
        attachments,
      });
    });

    bb.on("error", reject);

    // 🚨 Important: req.body is an async iterable in App Router
    const reader = req.body.getReader();
    async function read() {
      const { done, value } = await reader.read();
      if (done) return bb.end();
      bb.write(value);
      await read();
    }
    read();
  });
}
