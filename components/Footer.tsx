import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-8 px-8 border-t border-white/10 mt-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="text-sm text-white/50">
          &copy; {new Date().getFullYear()} Lumirix Digital Solutions
        </div>
        <div className="space-x-6 mt-4 md:mt-0 flex items-center">
          <Link href="/privacy" className="text-sm text-white/70 hover:text-brand-gold transition-colors">Privacy</Link>
          <Link href="/terms" className="text-sm text-white/70 hover:text-brand-gold transition-colors">Terms</Link>
          <Link href="/contact" className="text-sm text-white/70 hover:text-brand-gold transition-colors">Contact</Link>
        </div>
      </div>
    </footer>
  );
}