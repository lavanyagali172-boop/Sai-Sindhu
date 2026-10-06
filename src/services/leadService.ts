export interface LeadPayload {
  name: string;
  phone: string;
  email?: string;
  plot_size?: string;
  visit_date?: string;
  message?: string;
  source_page?: string;
}

export interface SubmitResponse {
  success: boolean;
  message?: string;
  refId?: string;
}

/**
 * Submits lead data directly to SheetDB.io REST API with automatic failover.
 */
export async function submitLead(payload: LeadPayload): Promise<SubmitResponse> {
  const sheetDbUrl =
    process.env.NEXT_PUBLIC_SHEETDB_API_URL ||
    "https://sheetdb.io/api/v1/7o8p60bgfp38b";

  const formattedTimestamp = new Intl.DateTimeFormat("en-IN", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Asia/Kolkata",
  }).format(new Date());

  const refCode = `SSD-${Math.floor(100000 + Math.random() * 900000)}`;

  const record = {
    ref_id: refCode,
    timestamp: formattedTimestamp,
    name: payload.name.trim(),
    phone: payload.phone.trim(),
    email: payload.email?.trim() || "N/A",
    plot_size: payload.plot_size || "Standard Villa",
    visit_date: payload.visit_date?.trim() || "N/A",
    message: payload.message?.trim() || "N/A",
    source_page: payload.source_page || "Website",
  };

  // 1. Primary: Direct submission to SheetDB.io
  try {
    const response = await fetch(sheetDbUrl, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: [record] }),
    });

    if (response.ok) {
      return {
        success: true,
        message: "Thank you! Your site visit and price sheet inquiry have been successfully registered.",
        refId: refCode,
      };
    }
  } catch (directError) {
    console.warn("[Direct SheetDB failed, attempting internal fallback]:", directError);
  }

  // 2. Secondary Failover: Try via internal Next.js API route
  try {
    const fallbackResponse = await fetch("/api/lead", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...payload,
        ref_id: refCode,
      }),
    });

    const result = await fallbackResponse.json().catch(() => null);

    if (fallbackResponse.ok && result?.success) {
      return {
        success: true,
        message: "Inquiry successfully recorded! Our team will contact you shortly.",
        refId: refCode,
      };
    }
  } catch (fallbackError) {
    console.error("[Internal API fallback also failed]:", fallbackError);
  }

  // If both failed:
  return {
    success: false,
    message: "Unable to record inquiry right now. Please call us directly at +91 87479 94499.",
  };
}
