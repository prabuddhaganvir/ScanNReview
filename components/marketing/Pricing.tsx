// "use client";

// import { motion } from "framer-motion";
// import { Check, Star } from "lucide-react";
// import { Button } from "@/components/ui/button";

// export default function PricingSection() {
//   const plans = [
//     {
//       name: "Free Trial",
//       price: "₹0",
//       period: "/3 Days",
//       highlight: false,
//       tag: "Start Risk-Free",
//       features: [
//         "30 Reviews Limit",
//         "One Business",
//         "Basic QR Poster",
//         "Smart Dashboard",
//         "Redirect to Google Reviews",
//       ],
//       button: "Start Free Trial",
//     },
//     {
//       name: "Starter",
//       price: "₹299",
//       period: "/month",
//       highlight: true,
//       tag: "Best for Small Businesses",
//       features: [
//         "100 Reviews / Month",
//         "Custom QR Poster",
//         "Smart Dashboard",
//         "Device Analytics",
//         "Redirect to Google Reviews",
//         "Email Support",
//       ],
//       button: "Upgrade Now",
//     },
//   ];

//   return (
//     <section className="py-20 md:py-32 relative">

//       {/* Background Grid */}
//       <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#e2e2e210_1px,transparent_1px),linear-gradient(to_bottom,#e2e2e210_1px,transparent_1px)] bg-[size:28px_28px]"></div>

//       <div className="container mx-auto px-4 text-center">

//         {/* Heading */}
//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           viewport={{ once: true }}
//           className="text-3xl md:text-5xl font-bold tracking-tight mb-6"
//         >
//           Simple, Transparent Pricing
//         </motion.h2>

//         <motion.p
//           initial={{ opacity: 0, y: 10 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.1 }}
//           viewport={{ once: true }}
//           className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-14"
//         >
//           Start free for 3 days. Upgrade when you're ready.
//         </motion.p>

//         {/* 2 Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
//           {plans.map((plan, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.15 }}
//               viewport={{ once: true }}
//               className={`p-8 rounded-2xl border backdrop-blur-md shadow-lg transition 
//                 ${plan.highlight ? "bg-primary/10 border-primary scale-[1.02]" : "bg-white/40"}
//               `}
//             >
//               {/* Badge */}
//               <div
//                 className={`mb-4 inline-flex items-center gap-1 rounded-full px-4 py-1 text-sm font-medium 
//                   ${plan.highlight ? "bg-primary/20 text-primary" : "bg-slate-200 text-slate-700"}
//                 `}
//               >
//                 <Star className="w-4 h-4" />
//                 {plan.tag}
//               </div>

//               <h3 className="text-2xl font-semibold mb-4">{plan.name}</h3>

//               {/* Price */}
//               <p className="text-5xl font-bold tracking-tight">
//                 {plan.price}
//                 <span className="text-lg font-normal text-muted-foreground">{plan.period}</span>
//               </p>

//               {/* Features */}
//               <ul className="mt-6 space-y-3 text-left">
//                 {plan.features.map((feature, idx) => (
//                   <li key={idx} className="flex items-center gap-3 text-muted-foreground">
//                     <Check className="w-5 h-5 text-primary" />
//                     {feature}
//                   </li>
//                 ))}
//               </ul>

//               {/* Button */}
//               <Button
//                 className={`w-full mt-8 py-6 text-lg ${
//                   plan.highlight ? "bg-primary text-white" : ""
//                 }`}
//               >
//                 {plan.button}
//               </Button>
//             </motion.div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }


















