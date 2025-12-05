

import { Gauge, ArrowRight } from "lucide-react";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function QRLimitReached({ searchParams }: { searchParams: Promise<{ from?: string }> }) {

  const { from } = await searchParams;  

    if (from !== "qr") {
    redirect("/"); // ❌ direct access not allowed
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">

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

      <div
        
        className="max-w-md w-full bg-card border border-border shadow-xl backdrop-blur-xl rounded-2xl p-8 text-center"
      >
        <div className="mb-6 flex justify-center">
          <div className="h-16 w-16 rounded-full bg-orange-500/10 flex items-center justify-center">
            <Gauge className="h-9 w-9 text-orange-600" />
          </div>
        </div>

        <h1 className="text-2xl font-semibold mb-2">Scan Limit Reached 🚫</h1>

        <p className="text-muted-foreground mb-6">
          You have reached your monthly scan limit. Upgrade to unlock unlimited scans.
        </p>

        <Link href="/dashboard/subscription">
          <button className="w-full h-11 rounded-lg bg-primary text-primary-foreground font-medium flex items-center justify-center gap-2 shadow hover:bg-primary/90 transition">
            Upgrade Plan <ArrowRight className="h-4 w-4" />
          </button>
        </Link>
      </div>
    </main>
  );
}
