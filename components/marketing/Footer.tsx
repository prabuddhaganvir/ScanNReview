"use client";

import { motion } from "framer-motion";
import { Mail, Instagram, Facebook, Twitter } from "lucide-react";

export default function FooterSection() {
  return (
    <>
    <div className="w-full h-[1px] my-8 bg-gradient-to-r from-transparent via-gray-400 to-transparent rounded-full"></div>
    
    <footer className="py-16 md:py-20 relative">
      
      
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#e2e2e210_1px,transparent_1px),linear-gradient(to_bottom,#e2e2e210_1px,transparent_1px)] bg-[size:28px_28px]"></div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-20">

          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold">ScanNReview</h3>
            <p className="text-muted-foreground max-w-sm">
              Boost your business ratings with instant QR reviews and powerful analytics.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-4">
              <Instagram className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer" />
              <Facebook className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer" />
              <Twitter className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer" />
            </div>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li className="hover:text-primary cursor-pointer">Pricing</li>
              <li className="hover:text-primary cursor-pointer">Features</li>
              <li className="hover:text-primary cursor-pointer">Dashboard</li>
              <li className="hover:text-primary cursor-pointer">Contact</li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-muted-foreground" />
                support@scanreview.com
              </li>
              <li>India</li>
            </ul>
          </motion.div>

        </div>

        {/* Bottom Line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="border-t mt-12 pt-6 text-center text-sm text-muted-foreground"
        >
          © {new Date().getFullYear()} ScanReview. All rights reserved.
        </motion.div>

      </div>
    </footer>
    </>
  );
}
