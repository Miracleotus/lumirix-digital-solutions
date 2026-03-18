export default function ContactPage() {
  return (
    <main className="bg-brand-dark text-white min-h-screen pt-32 pb-24 px-6 font-body">
      <div className="max-w-2xl mx-auto">
        <p className="text-brand-gold tracking-[0.3em] uppercase text-xs mb-4">Get In Touch</p>
        <h1 className="font-display text-5xl font-bold mb-6">
          Let&apos;s Illuminate Your Next Project
        </h1>
        <p className="text-white/60 mb-10 leading-relaxed">
          Have a vision to bring to life? Need a complete rebrand or a high-performance website?
          Reach out — we&apos;re ready to listen, strategize, and execute.
        </p>

        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            name="name"
            aria-label="Your Name"
            placeholder="Your Name"
            className="w-full bg-white/5 border border-white/10 px-5 py-4 text-white placeholder-white/30 focus:outline-none focus:border-brand-gold transition-colors"
          />
          <input
            type="email"
            name="email"
            aria-label="Email Address"
            placeholder="Email Address"
            className="w-full bg-white/5 border border-white/10 px-5 py-4 text-white placeholder-white/30 focus:outline-none focus:border-brand-gold transition-colors"
          />
          <input
            type="text"
            name="company"
            aria-label="Company (Optional)"
            placeholder="Company (Optional)"
            className="w-full bg-white/5 border border-white/10 px-5 py-4 text-white placeholder-white/30 focus:outline-none focus:border-brand-gold transition-colors"
          />
          <textarea
            name="message"
            aria-label="Your message"
            rows={5}
            placeholder="Tell us about your project..."
            className="w-full bg-white/5 border border-white/10 px-5 py-4 text-white placeholder-white/30 focus:outline-none focus:border-brand-gold transition-colors resize-none"
          />
          <button
            type="submit"
            className="w-full bg-brand-gold text-black py-4 font-bold uppercase tracking-widest hover:bg-brand-accent transition-colors"
          >
            Send Message
          </button>
        </form>

        <div className="mt-12 space-y-3 text-white/40 text-sm">
          <p>✉ hello@lumirixdigital.com</p>
          <p>🕐 Monday – Friday, 9:00 AM – 6:00 PM EST</p>
        </div>
      </div>
    </main>
  );
}