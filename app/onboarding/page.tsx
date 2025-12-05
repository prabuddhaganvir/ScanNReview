"use client";

import React, { useState,useEffect } from "react";
import { redirect, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import onboardingImage from "@/public/undraw_onboarding_dcq2.svg";
import { useUser } from "@clerk/nextjs";
import  {toast}  from "sonner";

function OnBoarding( ) {

const router = useRouter();
const { user, isLoaded, isSignedIn } = useUser();
  

useEffect(() => {
  if (isLoaded && !isSignedIn) {
    router.push("/sign-in");
  }
}, [isLoaded, isSignedIn, router]);

// STOP RENDER UNTIL CLERK IS READY
if (!isLoaded) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-muted-foreground">Loading...</p>
    </div>
  );
}

// IF NOT LOGGED IN → don't show onboarding UI
if (!isSignedIn) return null;


  const [businessName, setBusinessName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [placeId, setPlaceId] = useState("");
   
    useEffect(() => {
    if (user?.primaryEmailAddress?.emailAddress) {
      setEmail(user.primaryEmailAddress.emailAddress);
    }
    
  }, [user]);

   const handleform = async (e: any) => {
    e.preventDefault();

    if (!businessName || !address || !placeId) {
      toast.error("Please fill in all required fields.");
      return;
    }

    const res = await fetch("/api/onboarding", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        businessName,
        address,
        email,
        placeId,
        
      }),
    });
    const data = await res.json();
    const businessId = data.businessId; 

    if (res.status === 200) {
      toast.success(
        "Successfully onboarded 🎉",
        
      );

      setTimeout(() => {
        router.push("/");
      }, 800);
    } else {
      toast.error("Failed to onboard. Please try again.");
        
    }
  };

  return (
    <main className="min-h-screen w-full flex items-center justify-center bg-background relative overflow-hidden">

      {/* -------- SUBTLE SHADCN GRID -------- */}
      <div
        className="absolute inset-0 -z-20 opacity-[0.06]"
        style={{
          backgroundImage: `
            linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* -------- LEFT + RIGHT LAYOUT -------- */}
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6 py-20">

        {/* LEFT SIDE – SHADCN CARD WITH FORM */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="rounded-2xl border bg-card shadow-xl p-10 backdrop-blur-md"
        >
          <h1 className="text-3xl font-semibold mb-2 text-foreground">
            Set up your business
          </h1>
          <p className="text-muted-foreground mb-8">
            Complete your profile to continue to your dashboard.
          </p>

          {/* ---------------- FORM ---------------- */}
          <form onSubmit={handleform} className="space-y-6">

            <div className="space-y-1">
              <label className="text-sm text-muted-foreground">Business Name</label>
              <input
                className="w-full h-11 rounded-md px-4 border border-border bg-background focus:ring-2 focus:ring-primary transition"
                type="text"
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
              />
            </div>

            <div className="space-y-1">
              <label className="text-sm text-muted-foreground">Address</label>
              <input
                className="w-full h-11 rounded-md px-4 border border-border bg-background focus:ring-2 focus:ring-primary transition"
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>

            <div className="space-y-1">
              <label className="text-sm text-muted-foreground">Email</label>
              <input
                className="w-full h-11 rounded-md px-4 border border-border bg-background focus:ring-2 focus:ring-primary transition"
                type="email"
                value={email}
                 disabled
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="space-y-1">
              <label className="text-sm text-muted-foreground">PlaceId</label>
              <input
                className="w-full h-11 rounded-md px-4 border border-border bg-background focus:ring-2 focus:ring-primary transition"
                type="text"
                value={placeId}
                onChange={(e) => setPlaceId(e.target.value)}
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
              type="submit"
              className="
                w-full h-11 rounded-md bg-primary text-primary-foreground 
                font-medium shadow-sm hover:bg-primary/90 transition
              "
            >
              Continue
            </motion.button>
          </form>
        </motion.div>

        {/* -------- RIGHT SIDE – PREMIUM ILLUSTRATION -------- */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="flex items-center justify-center"
        >
          <Image
            src={onboardingImage}
            alt="business onboarding"
            width={480}
            height={480}
            className="drop-shadow-xl"
          />
        </motion.div>

      </div>
    </main>
  );
}

export default OnBoarding;
