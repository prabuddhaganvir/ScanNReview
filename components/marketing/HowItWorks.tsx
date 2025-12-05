"use client";

import { motion } from "framer-motion";
import { QrCode, PencilLine, BarChart3 } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      title: "Generate Your QR Code",
      desc: "Create a unique QR for your business in one click.",
      icon: <QrCode className="w-7 h-7 text-primary" />,
    },
    {
      title: "Customer Scans & Writes Review",
      desc: "No login, no friction. Just scan → rate → submit.",
      icon: <PencilLine className="w-7 h-7 text-primary" />,
    },
    {
      title: "Track Growth & Analytics",
      desc: "See ratings, review trends, and growth in your dashboard.",
      icon: <BarChart3 className="w-7 h-7 text-primary" />,
    },
  ];

  return (
    <>
    <section className="py-20 md:py-28 relative">
      {/* subtle grid background */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#e2e2e210_1px,transparent_1px),linear-gradient(to_bottom,#e2e2e210_1px,transparent_1px)] bg-[size:28px_28px]"></div>

      <div className="container mx-auto px-4 text-center">
        
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold tracking-tight mb-12"
        >
          How It Works
        </motion.h2>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center p-8 rounded-xl border bg-white/40 backdrop-blur-sm hover:shadow-lg transition"
            >
              <div className="mb-4 p-4 rounded-full bg-primary/10 flex items-center justify-center">
                {step.icon}
              </div>

              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    <div className="w-full h-[1px] my-8 bg-gradient-to-r from-transparent via-gray-400 to-transparent rounded-full"></div>
    
    </>
  );
}
