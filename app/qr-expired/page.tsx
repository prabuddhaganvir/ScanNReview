

import { AlertTriangle, ArrowRight } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";


export default async function QRExpired({ searchParams }: { searchParams: { from?: string } }) {
     if (searchParams.from !== "qr") {
    redirect("/");   // ❌ User manually typed → no access
  }
  return (
    <main className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">

      {/* ====== PREMIUM BACKGROUND GRID ====== */}
      <div
        className="absolute inset-0 -z-20 opacity-[0.07]"
        style={{
          backgroundImage: `
            linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* ====== BLUR BLOBS ====== */}
      <div
        className="absolute top-24 left-10 h-64 w-64 bg-red-400/20 blur-3xl -z-10 rounded-full"
        
      />
      <div
        className="absolute bottom-24 right-10 h-64 w-64 bg-orange-400/20 blur-3xl -z-10 rounded-full"

      />

      {/* ====== MAIN CARD ====== */}
      <div
        
        className="max-w-md w-full bg-card border border-border shadow-xl backdrop-blur-xl rounded-2xl p-8 text-center"
      >
        {/* ICON */}
        <div className="mb-6 flex justify-center">
          <div className="h-16 w-16 rounded-full bg-red-500/10 flex items-center justify-center">
            <AlertTriangle className="h-9 w-9 text-red-500" />
          </div>
        </div>

        {/* TITLE */}
        <h1 className="text-2xl font-semibold text-foreground mb-2">
          QR Code Expired 🔒
        </h1>

        {/* MESSAGE */}
        <p className="text-muted-foreground mb-6 leading-relaxed">
          This QR code is no longer active.  
          Please renew your subscription to continue receiving reviews.
        </p>

        {/* BUTTON */}
        <Link href="/dashboard/subscription" className="block">
          <div
          >
            <button className="
              w-full h-11 rounded-lg 
              bg-primary text-primary-foreground 
              font-medium flex items-center justify-center gap-2 
              shadow-md hover:bg-primary/90 transition
            ">
              Renew Subscription
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </Link>

        {/* FOOTER */}
        <p className="text-xs text-muted-foreground mt-6">
          Need help? Contact support.
        </p>
      </div>
    </main>
  );
}
