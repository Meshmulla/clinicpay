const groups = [
  {
    label: "Patients",
    color: "#3a7bd5",
    bg: "#e6f2ff",
    points: [
      "Cannot afford upfront medical costs",
      "Need lab tests, antenatal care, or medication",
      "Families with recurring health expenses",
      "Chronic disease patients",
    ],
  },
  {
    label: "Clinics & Hospitals",
    color: "#34d399",
    bg: "#d1fae5",
    points: [
      "Private clinics and diagnostic centers",
      "Pharmacies offering expensive medication",
      "Guaranteed payment — no more defaults",
      "Instant USDC settlement on completion",
    ],
  },
  {
    label: "NGOs & Donors",
    color: "#5eead4",
    bg: "#ccfbf1",
    points: [
      "Support maternal health programs",
      "Subsidize HIV, TB, and malaria treatments",
      "Transparent on-chain contribution tracking",
      "Match patient deposits dollar-for-dollar",
    ],
  },
  {
    label: "Employers",
    color: "#fbbf24",
    bg: "#fef3c7",
    points: [
      "Offer co-pay support for staff",
      "Subsidize workplace medical checks",
      "Verifiable on-chain contribution records",
      "Improve employee health outcomes",
    ],
  },
];

export default function WhoItsFor() {
  return (
    <section id="who-its-for" className="bg-[#f8fafc] section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 bg-[#e6f2ff] text-[#3a7bd5] text-xs font-semibold px-4 py-1.5 rounded-full mb-4">
            Who It&apos;s For
          </span>
          <h2 className="text-[#0f172a] font-extrabold text-3xl md:text-4xl tracking-tight">
            Everyone in the care chain benefits
          </h2>
          <p className="text-[#64748b] text-base mt-4 max-w-lg mx-auto leading-relaxed">
            ClinicPay connects patients, clinics, donors, and employers in one transparent payment system.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
          {groups.map((g) => (
            <div
              key={g.label}
              className="bg-white rounded-2xl border border-[#e2e8f0]/60 p-7 flex flex-col gap-5 card-hover group"
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: g.bg }}
                >
                  <div className="w-3.5 h-3.5 rounded-full" style={{ backgroundColor: g.color }} />
                </div>
                <h3 className="text-[#0f172a] font-bold text-lg">{g.label}</h3>
              </div>
              <ul className="flex flex-col gap-3">
                {g.points.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-sm text-[#64748b] leading-relaxed">
                    <svg className="mt-0.5 shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" fill={g.bg} stroke="none" />
                      <polyline points="16 9 10.5 14.5 8 12" stroke={g.color} strokeWidth="2.5" fill="none" />
                    </svg>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
