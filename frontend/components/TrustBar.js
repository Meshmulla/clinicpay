const stats = [
  { value: "100%", label: "Guaranteed clinic payment", color: "#3a7bd5" },
  { value: "USDC", label: "Stablecoin — no volatility", color: "#34d399" },
  { value: "Zero", label: "Credit checks required", color: "#fbbf24" },
  { value: "On-chain", label: "Fully transparent escrow", color: "#5eead4" },
];

export default function TrustBar() {
  return (
    <section className="relative bg-white py-16 md:py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-center text-center gap-3 p-6 rounded-2xl bg-[#f8fafc] border border-[#e2e8f0]/60 card-hover"
            >
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: s.color }} />
              <span className="text-[#0f172a] font-extrabold text-2xl md:text-3xl tracking-tight">
                {s.value}
              </span>
              <span className="text-[#64748b] text-xs md:text-sm font-medium leading-snug">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
