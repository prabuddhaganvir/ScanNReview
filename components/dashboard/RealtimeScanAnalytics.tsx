"use client";

import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

type ScanPoint = { label: string; count: number };

type ScanAnalyticsResponse = {
  todayScans: number;
  totalScans: number;
  monthScans: number;
  maxScansPerMonth: number;  // ⭐ added
  weeklyData: ScanPoint[];
  monthlyData: ScanPoint[];
};

export default function RealtimeScanAnalytics({ businessId }: { businessId: string }) {
  const [data, setData] = useState<ScanAnalyticsResponse | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchAnalytics = async () => {
    try {
      const res = await fetch(`/api/analytics/scans?businessId=${businessId}`);
      if (!res.ok) throw new Error("Failed to fetch analytics");
      const json = await res.json();
      setData({
        todayScans: json.todayScans ?? 0,
        totalScans: json.totalScans ?? 0,
        monthScans: json.monthScans ?? 0,
        maxScansPerMonth: json.maxScansPerMonth ?? 0, // ⭐ added
        weeklyData: json.weeklyData ?? [],
        monthlyData: json.monthlyData ?? [],
      });
    } catch (err) {
      console.error("Realtime analytics error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAnalytics();
    const id = setInterval(fetchAnalytics, 5000);
    return () => clearInterval(id);
  }, []);

  if (loading && !data) return null;
  if (!data) return null;

  const { todayScans, totalScans, monthScans, maxScansPerMonth, weeklyData, monthlyData } = data;

  const remainingScans = maxScansPerMonth - monthScans;

  return (
    <>
      {/* Live Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

        <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col gap-2">
          <p className="text-gray-500 text-sm">Today's Scans</p>
          <h3 className="text-3xl font-bold">{todayScans}</h3>
          <p className="text-xs text-green-500">Live updating · 5s</p>
        </div>

          <div className="rounded-2xl border bg-card shadow-sm p-6 hover:shadow-md transition-all">
        <p className="text-sm text-muted-foreground">Monthly Usage</p>
        <h3 className="text-3xl font-semibold mt-1">
          {monthScans} / {maxScansPerMonth}
        </h3>

        <div className="mt-2 h-2 bg-muted rounded-full overflow-hidden">
          <div
            className="h-full bg-primary transition-all"
            style={{
              width: `${Math.min(
                (monthScans / maxScansPerMonth) * 100 || 0,
                100
              )}%`,
            }}
          ></div>
        </div>

        <span className="text-xs text-blue-600 font-semibold mt-2 block">
          Remaining: {remainingScans >= 0 ? remainingScans : 0}
        </span>
      </div>

        <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col gap-2">
          <p className="text-gray-500 text-sm">Total Scans</p>
          <h3 className="text-3xl font-bold">{totalScans}</h3>
          <p className="text-xs text-gray-400">All-time</p>
        </div>
      </div>

      {/* Weekly & Monthly charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="text-lg font-semibold mb-4">Last 7 Days</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={weeklyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="label" />
                <YAxis allowDecimals={false} />
                <Tooltip />
                <Line type="monotone" dataKey="count" stroke="#6366f1" strokeWidth={3} dot={{ r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="text-lg font-semibold mb-4">Last 6 Months</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="label" />
                <YAxis allowDecimals={false} />
                <Tooltip />
                <Bar dataKey="count" fill="#10b981" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>
    </>
  );
}
