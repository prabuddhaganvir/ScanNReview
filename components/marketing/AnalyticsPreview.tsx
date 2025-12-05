"use client";

import { motion } from "framer-motion";
import { Star, TrendingUp, MessageCircle } from "lucide-react";

export default function AnalyticsPreview() {
  const stats = [
    {
      title: "Today's Scans",
      value: "1,248",
      change: "+32%",
      icon: <MessageCircle className="w-6 h-6 text-primary" />,
    },
    {
      title: "Monthly Usage ",
      value: "100",
      change: "+0.2",
      icon: <Star className="w-6 h-6 text-primary" />,
    },
    {
      title: "Total Scans",
      value: "50",
      change: "",
      icon: <TrendingUp className="w-6 h-6 text-primary" />,
    },
  ];

  return (
    <>
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
          Analytics That Grow Your Business
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl text-muted-foreground mb-14 max-w-2xl mx-auto"
        >
          See every scan the moment it happens with instant charts, trends, and customer insights
        </motion.p>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl border bg-white/40 backdrop-blur-sm shadow-sm hover:shadow-lg transition"
            >
              <div className="mb-4 p-3 rounded-lg bg-primary/10 w-fit mx-auto">
                {s.icon}
              </div>

              <h3 className="text-xl font-semibold mb-1">{s.title}</h3>

              <p className="text-4xl font-bold tracking-tight mb-1">{s.value}</p>

              <p className="text-sm text-primary font-medium">{s.change} this month</p>
            </motion.div>
          ))}
        </div>

        {/* Fake Chart Preview Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 max-w-5xl mx-auto p-8 rounded-xl border bg-white/40 backdrop-blur-md shadow-lg"
        >
          <div className="w-full h-64 rounded-lg bg-gradient-to-br from-gray-200 to-gray-100 flex items-center justify-center text-gray-500 text-sm">
           <iframe
  src="https://www.google.com/maps/embed?pb=!1m3!1d26245473.49879606!2d-30!3d10!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f1!3m3!1m2!1s0x0%3A0x0!2z!5e0!3m2!1sen!2sin!4v1700000000000"
  className="w-full h-full rounded-b-2xl"
  loading="lazy"
  allowFullScreen
></iframe>
          </div>
        </motion.div>

      </div>
    </section>
    <div className="w-full h-[1px] my-8 bg-gradient-to-r from-transparent via-gray-400 to-transparent rounded-full"></div>

    </>
  );
}
