import Link from "next/link";

const footerLinks = [
  {
    title: "Product",
    links: [
      { label: "How It Works", href: "#how-it-works" },
      { label: "Features", href: "#features" },
      { label: "Who It's For", href: "#who-its-for" },
      { label: "Pricing", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", href: "#" },
      { label: "API Reference", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Support", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Contact", href: "mailto:hello@clinicpay.app" },
      { label: "Privacy Policy", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-white relative overflow-hidden">
      {/* Subtle top gradient line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#3a7bd5]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#3a7bd5] to-[#2d6abf] flex items-center justify-center shadow-[0_4px_12px_rgba(58,123,213,0.3)]">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
              <span className="font-bold text-lg tracking-tight">ClinicPay</span>
            </Link>
            <p className="text-[#94a3b8] text-sm leading-relaxed max-w-xs">
              Pay-as-you-heal. Micro-payments for healthcare, powered by Stellar blockchain and USDC stablecoins.
            </p>
            <p className="text-[#94a3b8] text-sm">
              Built for Africa. Powered by{" "}
              <span className="text-[#3a7bd5] font-medium">Stellar</span>.
            </p>
          </div>

          {/* Link Columns */}
          {footerLinks.map((col) => (
            <div key={col.title} className="flex flex-col gap-4">
              <p className="text-sm font-semibold text-white tracking-wide">{col.title}</p>
              <div className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-sm text-[#94a3b8] hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-7 border-t border-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#64748b]">
            © {new Date().getFullYear()} ClinicPay. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-[#64748b] hover:text-white transition-colors">Terms</a>
            <a href="#" className="text-xs text-[#64748b] hover:text-white transition-colors">Privacy</a>
            <a href="#" className="text-xs text-[#64748b] hover:text-white transition-colors">MIT License</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
