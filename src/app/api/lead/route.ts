import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const payload = await req.json();

    if (!payload.name || !payload.phone) {
      return NextResponse.json(
        { success: false, message: "Full Name and WhatsApp Phone Number are required." },
        { status: 400 }
      );
    }

    const endpoint =
      process.env.NEXT_PUBLIC_SHEETDB_API_URL ||
      "https://sheetdb.io/api/v1/7o8p60bgfp38b";

    const formattedTimestamp = new Intl.DateTimeFormat("en-IN", {
      dateStyle: "medium",
      timeStyle: "short",
      timeZone: "Asia/Kolkata",
    }).format(new Date());

    const refCode = payload.ref_id || `SSD-${Math.floor(100000 + Math.random() * 900000)}`;

    const record = {
      ref_id: refCode,
      timestamp: formattedTimestamp,
      name: String(payload.name).trim(),
      phone: String(payload.phone).trim(),
      email: payload.email ? String(payload.email).trim() : "N/A",
      plot_size: payload.plot_size || "Standard Villa",
      visit_date: payload.visit_date ? String(payload.visit_date).trim() : "N/A",
      message: payload.message ? String(payload.message).trim() : "N/A",
      source_page: payload.source_page || "Website",
    };

    const isSheetDB = endpoint.includes("sheetdb.io");
    const body = isSheetDB ? JSON.stringify({ data: [record] }) : JSON.stringify(record);

    const sheetResponse = await fetch(endpoint, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body,
    });

    if (!sheetResponse.ok) {
      const errorText = await sheetResponse.text().catch(() => "Unknown error");
      console.error("[SheetDB API Response Error]:", sheetResponse.status, errorText);
      return NextResponse.json(
        {
          success: false,
          message: "Unable to record inquiry right now. Please call us directly at +91 87479 94499.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Inquiry successfully recorded! Our team will contact you shortly.",
      refId: refCode,
    });
  } catch (error: any) {
    console.error("[Lead API Route Exception]:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Network or server error. Please call +91 87479 94499 directly.",
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ status: "Lead API is active and ready." });
}
