import { NextResponse } from "next/server";
import QRCode from "qrcode";

export async function POST(req: Request) {
  try {
    const { url } = await req.json();

    // Validate URL
    if (!url || typeof url !== "string" || !url.startsWith("http")) {
      return NextResponse.json({ error: "Invalid or missing QR URL" }, { status: 400 });
    }

    // Generate QR Code (Base64 PNG)
    const qrImage = await QRCode.toDataURL(url, {
      width: 600,
      margin: 2,
      errorCorrectionLevel: "H", // best for printing
      color: {
        dark: "#000000",
        light: "#FFFFFF",
      },
    });

    return NextResponse.json({ qrImage });

  } catch (error) {
    console.error("QR Generation Error:", error);
    return NextResponse.json({ error: "Failed to generate QR" }, { status: 500 });
  }
}
