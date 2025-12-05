"use client";

import { motion } from "framer-motion";
import { Star, QrCode, BarChart3, MessageCircle, ShieldCheck, Rocket } from "lucide-react";

export default function Features() {
  const features = [
    {
      title: "Instant QR Reviews",
      desc: "Customers scan & submit reviews instantly—no login needed.",
      icon: <QrCode className="w-7 h-7 text-primary" />,
    },
    {
      title: "Smart Analytics",
      desc: "Monitor ratings, growth, review trends, and customer sentiment.",
      icon: <BarChart3 className="w-7 h-7 text-primary" />,
    },
    {
      title: "Auto 5-Star Boost",
      desc: "Frictionless flow increases positive reviews automatically.",
      icon: <Star className="w-7 h-7 text-primary" />,
    },
    {
      title: "AI Reply Suggestions (Soon)",
      desc: "Smart AI helps you respond to reviews instantly.",
      icon: <MessageCircle className="w-7 h-7 text-primary" />,
    },
    {
      title: "Secure & Reliable",
      desc: "All data is encrypted and securely stored.",
      icon: <ShieldCheck className="w-7 h-7 text-primary" />,
    },
    {
      title: "Super Fast Setup",
      desc: "Get your business onboard in under 60 seconds.",
      icon: <Rocket className="w-7 h-7 text-primary" />,
    },
  ];

  return (
    <>
    <section className="py-20 md:py-28 relative">
      
      {/* Subtle grid background */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#e2e2e210_1px,transparent_1px),linear-gradient(to_bottom,#e2e2e210_1px,transparent_1px)] bg-[size:28px_28px]"></div>

      <div className="container mx-auto px-4">
        
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center text-3xl md:text-5xl font-bold tracking-tight mb-14"
        >
          Powerful Features, Zero Complexity
        </motion.h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-xl border bg-white/40 backdrop-blur-sm shadow-sm hover:shadow-lg transition"
            >
              <div className="mb-4 p-3 rounded-lg bg-primary/10 w-fit">
                {feature.icon}
              </div>

              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
      
    </section>
    <div className="w-full h-[1px] my-8 bg-gradient-to-r from-transparent via-gray-400 to-transparent rounded-full"></div>
    
    </>
  );
}
