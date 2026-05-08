import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      id="navbar"
      className={`w-full fixed top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-[0_1px_20px_rgba(0,0,0,0.06)] border-b border-gray-200/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-[72px] flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#3a7bd5] to-[#2d6abf] flex items-center justify-center shadow-[0_4px_12px_rgba(58,123,213,0.3)] group-hover:shadow-[0_4px_20px_rgba(58,123,213,0.4)] transition-shadow duration-300">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
          </div>
          <span className={`font-bold text-lg tracking-tight transition-colors duration-300 ${scrolled ? "text-[#0f172a]" : "text-white"}`}>
            ClinicPay
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {[
            { label: "How It Works", href: "#how-it-works" },
            { label: "Features", href: "#features" },
            { label: "Who It's For", href: "#who-its-for" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                scrolled
                  ? "text-[#475569] hover:text-[#3a7bd5] hover:bg-[#e6f2ff]/60"
                  : "text-white/70 hover:text-white hover:bg-white/10"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <button
            className={`text-sm font-semibold px-4 py-2 rounded-lg transition-all duration-300 ${
              scrolled
                ? "text-[#475569] hover:text-[#3a7bd5]"
                : "text-white/80 hover:text-white"
            }`}
          >
            Log In
          </button>
          <button className="btn-primary !py-2.5 !px-5 !text-[0.85rem] !min-h-[40px] !rounded-xl">
            Get Started
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className={`md:hidden p-2.5 rounded-xl transition-colors ${
            scrolled ? "text-[#475569] hover:bg-gray-100" : "text-white/80 hover:bg-white/10"
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="3" y1="7" x2="21" y2="7" /><line x1="3" y1="12" x2="17" y2="12" /><line x1="3" y1="17" x2="21" y2="17" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white/95 backdrop-blur-xl border-t border-gray-200/50 px-6 py-5 flex flex-col gap-1">
          {[
            { label: "How It Works", href: "#how-it-works" },
            { label: "Features", href: "#features" },
            { label: "Who It's For", href: "#who-its-for" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-[#475569] text-sm font-medium py-3 px-4 rounded-xl hover:bg-[#f1f5f9] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="flex flex-col gap-3 pt-4 mt-2 border-t border-gray-200/60">
            <button className="text-[#475569] text-sm font-semibold text-left px-4 py-2">Log In</button>
            <button className="btn-primary !rounded-xl w-full">Get Started</button>
          </div>
        </div>
      </div>
    </nav>
  );
}
