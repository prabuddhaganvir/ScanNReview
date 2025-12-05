import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import ConnectDB from "@/lib/db";
import { Business } from "@/models/Business";
import { Review } from "@/models/Review";

export async function POST(req: Request) {
  try {
    const { userId } = await auth();
    if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const body = await req.json();
    const { rating, comment, customerName } = body;

    await ConnectDB();

    const business = await Business.findOne({ ownerId: userId });

    if (!business) {
      return NextResponse.json({ error: "Business not found" }, { status: 404 });
    }

    const newReview = await Review.create({
      businessId: business._id,   // ⭐ MUST HAVE
      rating,
      comment,
      customerName,
      source: "qr"
    });

    return NextResponse.json({ success: true, review: newReview });

  } catch (error) {
    console.error("Review save error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
