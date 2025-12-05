import { NextResponse } from "next/server";
import { Business } from "@/models/Business";
import Scan from "@/models/Scan";
import ConnectDB from "@/lib/db";

export async function GET(
  _req: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;

  await ConnectDB();

  const business = await Business.findById(id);
  const baseURL = process.env.NEXT_PUBLIC_BASE_URL!;

  if (!business) {
    return NextResponse.redirect(`${baseURL}/qr-not-found?from=qr`);
  }

  // ⭐ ONLY ONE REAL CHECK (review limit check)
  if (business.currentMonthScans >= business.maxScansPerMonth) {
    return NextResponse.redirect(`${baseURL}/qr-limit-reached?from=qr`);
  }

  // ⭐ LOG SCAN
  await Scan.create({
    businessId: business._id,
    userAgent: _req.headers.get("user-agent") || "",
    ip: _req.headers.get("x-forwarded-for") || "",
  });

  // ⭐ Increase count
  business.currentMonthScans += 1;
  await business.save();

  // ⭐ Redirect user to Google review page
  return NextResponse.redirect(business.googleReviewLink);
}
