"use client";

import AnalyticsPreview from "@/components/marketing/AnalyticsPreview";
import FAQSection from "@/components/marketing/Faq";
import Features from "@/components/marketing/Features";

import Hero from "@/components/marketing/Hero";
import HowItWorks from "@/components/marketing/HowItWorks";
// import LiveDemo from "@/components/marketing/LiveDemo";
import Navbar from "@/components/marketing/Navbar";
// import Pricing from "@/components/marketing/Pricing";
import Testimonials from "@/components/marketing/Testimonial";



export default function HomePage() {
  return (
      <>
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <AnalyticsPreview />
      {/* <Pricing /> */}
      <Testimonials />
      <FAQSection />
      </>

  );
}
