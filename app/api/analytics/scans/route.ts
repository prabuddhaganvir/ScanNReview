import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import ConnectDB from "@/lib/db";
import { Business } from "@/models/Business";
import Scan from "@/models/Scan";

export async function GET() {
  try {
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    await ConnectDB();

    const business = await Business.findOne({ ownerId: userId });
    if (!business) {
      return NextResponse.json({ error: "Business not found" }, { status: 404 });
    }

    const businessId = business._id;

    // === TODAY SCANS ===
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const todayScans = await Scan.countDocuments({
      businessId,
      createdAt: { $gte: today },
    });

    // === TOTAL SCANS ===
    const totalScans = await Scan.countDocuments({ businessId });

    // === CURRENT MONTH SCANS (manual plan logic) ===
    const monthScans = business.currentMonthScans ?? 0;

    // === WEEKLY DATA (last 7 days) ===
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 6);
    sevenDaysAgo.setHours(0, 0, 0, 0);

    const rawWeekly = await Scan.aggregate([
      {
        $match: {
          businessId,
          createdAt: { $gte: sevenDaysAgo },
        },
      },
      {
        $group: {
          _id: {
            day: { $dayOfMonth: "$createdAt" },
            month: { $month: "$createdAt" },
            year: { $year: "$createdAt" },
          },
          count: { $sum: 1 },
        },
      },
      { $sort: { "_id.year": 1, "_id.month": 1, "_id.day": 1 } },
    ]);

    // Fill missing days
    const weeklyData: { label: string; count: number }[] = [];

    for (let i = 0; i < 7; i++) {
      const d = new Date(sevenDaysAgo);
      d.setDate(sevenDaysAgo.getDate() + i);

      const day = d.getDate();
      const month = d.getMonth() + 1;
      const year = d.getFullYear();

      const match = rawWeekly.find(
        (item) =>
          item._id.day === day &&
          item._id.month === month &&
          item._id.year === year
      );

      weeklyData.push({
        label: `${day}/${month}`,
        count: match ? match.count : 0,
      });
    }

    // === MONTHLY DATA (last 6 months) ===
    const sixMonthsAgo = new Date();
    sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 5);
    sixMonthsAgo.setDate(1);
    sixMonthsAgo.setHours(0, 0, 0, 0);

    const rawMonthly = await Scan.aggregate([
      {
        $match: {
          businessId,
          createdAt: { $gte: sixMonthsAgo },
        },
      },
      {
        $group: {
          _id: {
            month: { $month: "$createdAt" },
            year: { $year: "$createdAt" },
          },
          count: { $sum: 1 },
        },
      },
      { $sort: { "_id.year": 1, "_id.month": 1 } },
    ]);

    const monthlyData = rawMonthly.map((item) => ({
      label: `${item._id.month}/${String(item._id.year).slice(-2)}`,
      count: item.count,
    }));

    return NextResponse.json({
      todayScans,
      totalScans,
      monthScans,
      weeklyData,
      maxScansPerMonth: business.maxScansPerMonth, // ⭐ added
      monthlyData,
    });

  } catch (err) {
    console.error("SCAN ANALYTICS ERROR:", err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
