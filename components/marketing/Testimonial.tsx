"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Cafe Owner",
      text: "My shop's rating jumped from 3.9 to 4.7 in just 3 weeks. The QR flow is unbelievably smooth!",
      image: "/avatar1.png", // replace with your image path
      stars: 5,
    },
    {
      name: "Sneha Patil",
      role: "Salon Owner",
      text: "Customers actually leave reviews now! The dashboard insights help me understand what to improve.",
      image: "/avatar2.png",
      stars: 5,
    },
    {
      name: "Vivek Traders",
      role: "Local Retail Store",
      text: "Super easy setup, premium design, and the analytics are a game changer for my business.",
      image: "/avatar3.png",
      stars: 5,
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
          Loved by Small Businesses
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-16"
        >
          See how real businesses boosted their ratings using our QR-based review system.
        </motion.p>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl border bg-white/40 backdrop-blur-sm shadow-sm hover:shadow-lg transition"
            >
              {/* Profile */}
              <div className="flex flex-col items-center">
                <Image
                  src={t.image}
                  alt={t.name}
                  width={70}
                  height={70}
                  className="rounded-full mb-4"
                />

                <h3 className="text-xl font-semibold">{t.name}</h3>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </div>

              {/* Stars */}
              <div className="flex justify-center mt-4 mb-4">
                {Array.from({ length: t.stars }).map((_, idx) => (
                  <Star
                    key={idx}
                    className="w-4 h-4 text-primary fill-primary"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-muted-foreground leading-relaxed">
                {t.text}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
    <div className="w-full h-[1px] my-8 bg-gradient-to-r from-transparent via-gray-400 to-transparent rounded-full"></div>

    </>
  );
}
