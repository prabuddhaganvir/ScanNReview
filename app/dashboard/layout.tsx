"use client";

import Link from "next/link";
import React from "react";
import { BarChart3, QrCode, Star, Users } from "lucide-react";


export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex bg-gray-50">

      {/* ------- SIDEBAR (always visible on dashboard) ------- */}
         {/* Left Sidebar */}
      <aside className="w-64 bg-white shadow-lg p-6 flex flex-col gap-6">
        <Link href="/">
        <h1 className="text-2xl font-bold mb-4">ScanNReview</h1>
         </Link>

        <nav className="flex flex-col gap-4 text-gray-700">
             <Link href="/dashboard">
          <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-100 transition cursor-pointer">
            <BarChart3 className="w-5 h-5" /> Dashboard
          </div>
          </Link>
          <Link href="/dashboard/reviews">
          <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-100 transition cursor-pointer">
            <Star className="w-5 h-5" /> Total Reviews
          </div>
          </Link>
          <Link href="/dashboard/visitors">
          <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-100 transition cursor-pointer">
            <Users className="w-5 h-5" /> Visitors
          </div>
          </Link>
          <Link href="/dashboard/qrcode">
          <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-100 transition cursor-pointer">
            <QrCode className="w-5 h-5" /> Generate QR
          </div>
          </Link>
        </nav>
      </aside>

      {/* ------- MAIN CONTENT (page content goes here) ------- */}
      <main className="flex-1 p-6 md:p-10">
        {children}
      </main>

    </div>
  );
}
