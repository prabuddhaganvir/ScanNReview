"use client";

import { SignIn } from "@clerk/nextjs";
import { motion } from "framer-motion";

export default function SignInPage() {
  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* ---- GRADIENT BACKGROUND ---- */}
      <div className="absolute inset-0 -z-30 bg-gradient-to-br from-[#6c47ff]/30 via-transparent to-[#ff47c2]/30" />

      {/* ---- MOVING GRID BACKGROUND ---- */}
      <motion.div
        className="absolute inset-0 -z-20 opacity-[0.35]"
        initial={{ backgroundPosition: "0px 0px" }}
        animate={{ backgroundPosition: ["0px 0px", "60px 60px"] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(250, 227, 250, 0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(17, 107, 115, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* ---- FLOATING BLUR BLOBS ---- */}
      <motion.div
        className="absolute top-20 right-20 h-60 w-60 rounded-full bg-[#6c47ff]/25 blur-[90px]"
        animate={{ x: [0, 40, -20, 0], y: [0, -30, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 left-20 h-60 w-60 rounded-full bg-[#ff47c2]/25 blur-[90px]"
        animate={{ x: [0, -40, 20, 0], y: [0, 30, -20, 0] }}
        transition={{ duration: 14, repeat: Infinity }}
      />

      {/* ---- SOFT PARTICLES ---- */}
      {Array.from({ length: 25 }).map((_, i) => (
        <motion.div
          key={i}
          className="pointer-events-none absolute h-1.5 w-1.5 rounded-full bg-white/20"
          initial={{
            opacity: 0.2,
            x: Math.random() * 600 - 300,
            y: Math.random() * 500 - 250,
          }}
          animate={{
            opacity: 0.55,
            x: Math.random() * 600 - 300,
            y: Math.random() * 500 - 250,
          }}
          transition={{
            duration: 7 + Math.random() * 5,
            repeat: Infinity,
            repeatType: "mirror",
          }}
        />
      ))}

      {/* ---- SIGN IN CARD ---- */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="relative w-full max-w-md p-6 rounded-2xl border border-white/30 bg-white/30 backdrop-blur-2xl shadow-2xl"
      >
        {/* GLOW EFFECT BEHIND CARD */}
        <motion.div
          className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-[#6c47ff]/40 to-[#ff47c2]/40 blur-3xl opacity-40"
          initial={{ opacity: 0.2 }}
          animate={{ opacity: 0.45 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
        />

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.45 }}
          className="text-3xl font-bold text-center mb-6 
          bg-gradient-to-r from-[#6c47ff] to-[#ff47c2] bg-clip-text text-transparent"
        >
          Welcome Back 👋
        </motion.h1>

        <SignIn
          appearance={{
            elements: {
              formButtonPrimary:
                "bg-[#6c47ef] hover:bg-[#5237db] text-white rounded-lg shadow-lg transition-all",
              card: "shadow-none bg-transparent",
              headerTitle: "text-xl font-semibold",
              headerSubtitle: "text-gray-600",
            },
          }}
          afterSignOutUrl={"/auth-redirect"}
        />
      </motion.div>
    </main>
  );
}
