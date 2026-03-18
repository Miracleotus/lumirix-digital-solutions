"use client";

import Link from "next/link";
import { ArrowRight, Zap, Target, Users } from "lucide-react";
import { motion, Variants } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Web Design & Development",
    desc: "Fast, responsive, and visually stunning websites engineered to convert visitors into clients.",
  },
  {
    num: "02",
    title: "Brand Identity",
    desc: "Comprehensive visual systems that communicate your unique value and resonate with your target market.",
  },
  {
    num: "03",
    title: "Digital Marketing",
    desc: "SEO, PPC, and content strategies designed to amplify your reach and maximize your ROI.",
  },
];

const advantages = [
  { icon: <Zap size={28} />, title: "Design Excellence", desc: "Bespoke digital experiences, never cookie-cutter templates." },
  { icon: <Target size={28} />, title: "Conversion-Focused", desc: "Every pixel is strategically placed to drive user action." },
  { icon: <Users size={28} />, title: "Seamless Collaboration", desc: "Transparent communication from kickoff to launch." },
];

const process = [
  { step: "01", title: "Discovery", desc: "We immerse ourselves in your brand, analyzing your market, competitors, and core objectives." },
  { step: "02", title: "Design & Architecture", desc: "Our team drafts wireframes, crafts the visual identity, and designs high-fidelity mockups." },
  { step: "03", title: "Development & Launch", desc: "We write clean, optimized code, test rigorously across all devices, and launch your project." },
];

const fadeInUp: Variants = {
  initial: { opacity: 0, y: 30 },
  whileInView: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const staggerContainer: Variants = {
  initial: { opacity: 0 },
  whileInView: { 
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const staggerItem: Variants = {
  initial: { opacity: 0, y: 20 },
  whileInView: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

export default function HomePage() {
  return (
    <main className="bg-brand-dark text-white font-body">

      {/* HERO */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(ellipse at center, rgba(255, 215, 0, 0.1) 0%, transparent 70%)" }} />
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 flex flex-col items-center"
        >
          <p className="text-brand-gold tracking-[0.3em] uppercase text-xs mb-6 font-body">
            Design &amp; Marketing Agency
          </p>
          <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight mb-6 max-w-4xl">
            Illuminating Your<br />
            <span className="text-brand-gold">Digital Potential.</span>
          </h1>
          <p className="text-white/60 max-w-2xl text-lg mb-10 leading-relaxed">
            We engineer striking brand identities and high-performance websites that captivate audiences and drive measurable growth.
          </p>
          <Link
            href="/contact"
            className="bg-brand-gold text-brand-dark px-8 py-4 font-bold tracking-widest uppercase text-sm hover:bg-brand-accent transition-all inline-flex items-center gap-2 rounded-full"
          >
            Start Your Project <ArrowRight size={16} />
          </Link>
        </motion.div>
      </section>

      {/* ABOUT SNIPPET */}
      <motion.section 
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeInUp}
        className="max-w-4xl mx-auto px-6 py-24 text-center"
      >
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
          Where Strategy Meets{" "}
          <span className="text-brand-gold">Spectacular Design</span>
        </h2>
        <p className="text-white/60 text-lg leading-relaxed">
          In a crowded digital landscape, blending in is the ultimate risk. At Lumirix, we combine cutting-edge UI/UX design, magnetic branding, and data-backed marketing strategies to elevate your business from an industry player to an industry leader.
        </p>
      </motion.section>

      {/* SERVICES */}
      <section className="bg-white/5 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
          >
            <p className="text-brand-gold tracking-[0.3em] uppercase text-xs text-center mb-4">What We Do</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-16">
              Engineered for Digital Dominance
            </h2>
          </motion.div>
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-50px" }}
            className="grid md:grid-cols-3 gap-8"
          >
            {services.map((s) => (
              <motion.div
                variants={staggerItem}
                key={s.num}
                className="border border-white/10 p-8 hover:border-brand-gold/50 transition-colors group rounded-2xl bg-white/2 hover:bg-white/4"
              >
                <div className="font-display text-5xl font-bold text-brand-gold/20 mb-4 group-hover:text-brand-gold/50 transition-colors">
                  {s.num}
                </div>
                <h3 className="font-display text-xl font-bold mb-3">{s.title}</h3>
                <p className="text-white/50 leading-relaxed text-sm">{s.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <motion.h2 
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
          className="font-display text-4xl font-bold text-center mb-16"
        >
          The Lumirix <span className="text-brand-gold">Advantage</span>
        </motion.h2>
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-3 gap-8 text-center"
        >
          {advantages.map((item) => (
            <motion.div variants={staggerItem} key={item.title} className="flex flex-col items-center gap-4">
              <div className="text-brand-dark bg-brand-gold p-4 rounded-full mb-2">
                {item.icon}
              </div>
              <h3 className="font-display text-xl font-bold">{item.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* PROCESS */}
      <section className="bg-white/5 py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
            className="font-display text-4xl font-bold text-center mb-16"
          >
            How We Bring Your{" "}
            <span className="text-brand-gold">Vision to Light</span>
          </motion.h2>
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-8"
          >
            {process.map((p) => (
              <motion.div variants={staggerItem} key={p.step} className="flex gap-8 items-start border-b border-white/10 pb-8">
                <span className="font-display text-5xl font-bold text-brand-gold/50 shrink-0">
                  {p.step}
                </span>
                <div>
                  <h3 className="font-display text-2xl font-bold mb-2">{p.title}</h3>
                  <p className="text-white/50 leading-relaxed">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FINAL CTA */}
      <motion.section 
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeInUp}
        className="py-32 px-6 text-center"
      >
        <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
          Ready to Step into the{" "}
          <span className="text-brand-gold">Spotlight?</span>
        </h2>
        <p className="text-white/50 max-w-xl mx-auto mb-10 text-lg">
          Let&apos;s build a digital presence that reflects the true caliber of your business.
        </p>
        <Link
          href="/contact"
          className="border border-brand-gold text-brand-gold px-10 py-4 uppercase tracking-widest text-sm font-bold hover:bg-brand-gold hover:text-brand-dark transition-all inline-block rounded-full"
        >
          Request a Consultation
        </Link>
      </motion.section>

    </main>
  );
}