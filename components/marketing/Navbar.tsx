"use client";
import type { Metadata } from 'next'
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'

import { useState,useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";


export default function Navbar() {
  

  const [open, setOpen] = useState(false);
  const [onboarded, setOnboarded] = useState<boolean | null>(null);

useEffect(() => {
  if (open) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }

  return () => {
    document.body.classList.remove("overflow-hidden");
  };
}, [open]);

  const clerkAppearance = {
  elements: {
    modalContent: "flex justify-center items-center",
    rootBox: "flex justify-center items-center",
  },
};
 useEffect(() => {
    async function check() {
      const res = await fetch("/api/me");
      const data = await res.json();
      setOnboarded(data.onboarded);
    }
    check();
  }, []);

  return (
    <>
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl border-b  bg-white/75 dark:bg-gray-900/75">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">

        {/* Logo */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-2xl font-bold"
        >
          ScanNReview
        </motion.div>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="features" className="hover:text-primary transition">Features</Link>
          <Link href="pricing" className="hover:text-primary transition">Pricing</Link>
          <Link href="demo" className="hover:text-primary transition">Demo</Link>
          <Link href="#faq" className="hover:text-primary transition">FAQ</Link>
        </nav>

        {/* Desktop Buttons */}
       <motion.div
      initial={{ opacity: 0, y: -6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="hidden md:flex items-center gap-4"
    >
      {/* Logged OUT */}
      <SignedOut>
        <SignInButton mode="modal">
          <button className="text-sm font-medium">Login</button>
        </SignInButton>
        <SignUpButton mode="modal">
          <Button className="rounded-full">Sign Up</Button>
        </SignUpButton>
      </SignedOut>

      {/* Logged IN */}
      <SignedIn>
        {/* ⭐ Onboarding button ONLY when NOT onboarded */}
        {onboarded === false && (
          <Link href="/onboarding">
            <Button variant="ghost" className="font-medium">
              Onboarding
            </Button>
          </Link>
        )}

        {/* ⭐ Dashboard button ONLY when onboarded */}
        {onboarded === true && (
          <Link href="/dashboard">
            <Button variant="ghost" className="font-medium">
              Dashboard
            </Button>
          </Link>
        )}

        <UserButton />
      </SignedIn>
    </motion.div>

        {/* Mobile Menu Button */}
        <button onClick={() => setOpen(true)} className="md:hidden">
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
  {open && (
    
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 right-0 min-h-screen w-64 bg-white shadow-xl z-50 p-6 md:hidden"
    >
      {/* Close Button */}
      <button
        onClick={() => setOpen(false)}
        className="absolute top-4 right-4"
      >
        <X className="w-6 h-6" />
      </button>

      <div className="mt-12 space-y-6 text-lg font-medium">
        <Link
          href="#features"
          onClick={() => setOpen(false)}
          className="block"
        >
          Features
        </Link>

        <Link
          href="#pricing"
          onClick={() => setOpen(false)}
          className="block"
        >
          Pricing
        </Link>

        <Link
          href="#demo"
          onClick={() => setOpen(false)}
          className="block"
        >
          Demo
        </Link>

        <Link
          href="#faq"
          onClick={() => setOpen(false)}
          className="block"
        >
          FAQ
        </Link>

        <div className="pt-6 flex flex-col gap-3">
          <SignedOut>
            <SignInButton />

            <SignUpButton>
              <button className="bg-[#6c47ff] text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
                Sign Up
              </button>
            </SignUpButton>
          </SignedOut>

          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </motion.div>
  )}
</AnimatePresence>

    </header>
  

    </>
  );
}
