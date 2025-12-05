import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import ConnectDB from "@/lib/db";
import { Business } from "@/models/Business";

export async function POST(req: Request) {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const { businessName, address, email, placeId } = body;

    if (!businessName || !address || !email || !placeId) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    await ConnectDB();

    // Check if business exists for that email
    const existingBusiness = await Business.findOne({ email });
    if (existingBusiness) {
      return NextResponse.json(
        { error: "Business with this email already exists" },
        { status: 409 }
      );
    }

    // Create business with DEFAULT manual plan system
    const newBusiness = await Business.create({
      ownerId: userId,
      businessName,
      address,
      email,
      placeId,

      // ⭐ NEW FIELDS FOR SIMPLE MANUAL PLAN LOGIC
      plan: "free",              // default plan tag (NOT active yet)
      trialUsed: false,          // free trial not used yet
      maxScansPerMonth: 0,       // locked until you activate trial or paid
      currentMonthScans: 0,
    });

    return NextResponse.json(
      {
        message: "Business created successfully",
        business: newBusiness,
        businessId: newBusiness._id,
      },
      { status: 200 }
    );

  } catch (error) {
    console.error("Error in onboarding route:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
