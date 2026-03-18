"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="bg-brand-dark text-white min-h-screen pt-32 pb-24 px-6 font-body">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-3xl mx-auto"
      >
        <p className="text-brand-gold tracking-[0.3em] uppercase text-xs mb-4">Our Story</p>
        <h1 className="font-display text-5xl md:text-6xl font-bold mb-10 leading-tight">
          Designing the Future of Your Brand
        </h1>
        <p className="text-white/60 text-lg leading-relaxed mb-8">
          Lumirix Digital Solutions was founded on a singular principle: digital experiences should be both breathtakingly beautiful and ruthlessly effective. We are a collective of digital architects, brand strategists, and marketing specialists dedicated to helping forward-thinking companies scale.
        </p>
        <p className="text-white/60 text-lg leading-relaxed">
          We know that a successful digital presence requires more than just a fresh coat of paint. It requires a deep understanding of user psychology, rock-solid technical infrastructure, and a brand narrative that connects on a human level. Whether launching a complex e-commerce platform or designing a ground-up brand identity, we approach every project with meticulous attention to detail and a relentless drive for perfection.
        </p>
      </motion.div>
    </main>
  );
}