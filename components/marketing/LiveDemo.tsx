"use client";

import { motion } from "framer-motion";
import { QrCode } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function LiveDemo() {
  return (
    <section className="py-20 md:py-32 relative">
      
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#e2e2e210_1px,transparent_1px),linear-gradient(to_bottom,#e2e2e210_1px,transparent_1px)] bg-[size:28px_28px]"></div>
      
      <div className="container mx-auto px-4 text-center">
        
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold tracking-tight mb-8"
        >
          Try It Yourself
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto"
        >
          Scan the QR below and experience the review flow exactly like your customers will.
        </motion.p>

        {/* Demo Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          viewport={{ once: true }}
          className="max-w-sm mx-auto p-8 border rounded-2xl bg-white/50 backdrop-blur-md shadow-sm hover:shadow-lg transition"
        >
          {/* QR Placeholder or image */}
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-primary/10 rounded-xl">
              {/* Replace this with your actual QR Image */}
              <QrCode className="w-32 h-32 text-primary" />
            </div>
          </div>

          <h3 className="text-xl font-semibold mb-2">Scan to Test</h3>
          <p className="text-muted-foreground mb-6">
            Works instantly on any smartphone camera.
          </p>

          <Button size="lg" className="w-full">
            Open Demo
          </Button>
        </motion.div>

      </div>
    </section>
  );
}
