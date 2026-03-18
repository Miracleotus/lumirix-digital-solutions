"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-brand-dark/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO — replaced text with image */}
        <Link href="/">
          <Image
            src="/logo.jpeg"
            alt="Lumirix Digital Solutions"
            width={120}
            height={40}
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-white/70 hover:text-brand-gold transition-colors font-body text-sm tracking-widest uppercase"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-brand-gold text-brand-dark px-6 py-2.5 text-sm font-bold tracking-widest uppercase hover:bg-brand-accent transition-colors rounded-full"
          >
            Start Project
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-brand-dark border-t border-white/10 px-6 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-white/70 hover:text-brand-gold transition-colors uppercase tracking-widest text-sm"
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}