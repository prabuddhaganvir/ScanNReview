"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export default function FAQSection() {
  const faqs = [
    {
      question: "How does the QR review system work?",
      answer:
        "Your customer scans the QR code, writes a review instantly—no login required. You see all reviews in your dashboard.",
    },
    {
      question: "Is there any limit on reviews?",
      answer:
        "In the Pro plan, you get unlimited reviews. Starter plan includes limited monthly scans.",
    },
    {
      question: "Can I use this for multiple branches?",
      answer:
        "Yes, the Business plan supports multi-location and team accounts.",
    },
    {
      question: "Do I need a mobile app?",
      answer:
        "No, everything works in the browser. Customers just scan and write a review directly.",
    },
    {
      question: "Can I see analytics and growth?",
      answer:
        "Yes, you get detailed insights such as total reviews, ratings, growth charts, and sentiment trends.",
    },
  ];

  return (
    <section className="py-20 md:py-32 relative" id="faq">

      {/* Subtle Grid Background */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#e2e2e210_1px,transparent_1px),linear-gradient(to_bottom,#e2e2e210_1px,transparent_1px)] bg-[size:28px_28px]"></div>

      <div className="container mx-auto px-4">
        
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center text-3xl md:text-5xl font-bold tracking-tight mb-10"
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="max-w-3xl mx-auto mt-8">
          <Accordion type="single" collapsible>
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <AccordionItem value={`faq-${i}`} className="border rounded-xl mb-4 bg-white/40 backdrop-blur-sm">
                  <AccordionTrigger className="text-left text-lg font-medium px-4 py-4">
                    {faq.question}
                  </AccordionTrigger>

                  <AccordionContent className="px-4 pb-4 text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>

      </div>
    </section>
  );
}
