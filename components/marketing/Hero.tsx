"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ScanLine } from "lucide-react";

export default function Hero() {
  return (
    <>
    <section className="relative w-full overflow-hidden py-20 md:py-28 ">
      {/* Grid Lines Background */}
<div
  className="absolute inset-0 -z-10
    bg-[linear-gradient(to_right,rgba(0,0,0,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.12)_1px,transparent_1px)]
    [background-size:28px_28px]"
></div>


      <div className="container mx-auto flex flex-col items-center text-center px-4">
        
        {/* Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-1 text-sm font-medium text-gray-600 backdrop-blur"
        >
          <ScanLine className="w-4 h-4" />
          Boost Your Reviews Instantly
        </motion.div>

        {/* Heading */}
      <motion.h1
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  className="text-4xl md:text-6xl font-bold tracking-tight max-w-4xl leading-tight"
>
  Get More{" "}
  <span className="bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
    5-Star Reviews
  </span>
  {" "}
  With One Simple{" "}
  <span className="bg-gradient-to-r from-fuchsia-500 via-purple-500 to-indigo-400 bg-clip-text text-transparent">
    QR Code
  </span>
</motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-6 text-lg md:text-xl max-w-2xl text-muted-foreground"
        >
          Customers scan → write review → your ratings grow automatically.
          A frictionless way for small businesses to increase customer trust.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-8 flex items-center gap-4"
        >
          <Button size="lg" className="px-8">
            Get Started <ArrowRight className="w-4 h-4 ml-2" />
          </Button>

          <Button size="lg" variant="outline" className="px-8">
            See Demo
          </Button>
        </motion.div>
      </div>
    </section>
    <div className="w-full h-[1px] my-8 bg-gradient-to-r from-transparent via-gray-400 to-transparent rounded-full"></div>

    </>
  );
}
