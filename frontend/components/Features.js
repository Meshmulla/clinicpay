import { useState } from "react";

const patientFeatures = [
  {
    title: "Treatment Plan Creation",
    description: "Select a clinic, enter your treatment cost, and choose a daily or weekly repayment schedule. Funds are locked into a secure escrow.",
    iconPath: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z",
    color: "#3a7bd5",
    bg: "#e6f2ff",
  },
  {
    title: "Micro-Payments",
    description: "Pay small USDC amounts daily or weekly. A live progress bar shows exactly how close you are to completing your plan.",
    iconPath: "M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",
    color: "#3a7bd5",
    bg: "#e6f2ff",
  },
  {
    title: "Auto-Completion",
    description: "When the full amount is deposited, the smart contract automatically releases funds to the clinic. No manual steps needed.",
    iconPath: "M22 11.08V12a10 10 0 1 1-5.93-9.14",
    color: "#34d399",
    bg: "#d1fae5",
  },
  {
    title: "Subsidy Layer",
    description: "NGOs or employers can top up your plan on-chain. Every contribution is tracked transparently — no hidden funds.",
    iconPath: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2",
    color: "#5eead4",
    bg: "#ccfbf1",
  },
];

const clinicFeatures = [
  {
    title: "Treatment Plan Dashboard",
    description: "View all pending patient escrows in one place. Verify patients and confirm service delivery with a single tap.",
    iconPath: "M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z",
    color: "#3a7bd5",
    bg: "#e6f2ff",
  },
  {
    title: "Instant Settlement",
    description: "Once a patient's plan is complete, USDC lands in your clinic wallet instantly. No waiting, no chasing payments.",
    iconPath: "M13 2L3 14h9l-1 8 10-12h-9l1-8z",
    color: "#34d399",
    bg: "#d1fae5",
  },
  {
    title: "Partial Release Mode",
    description: "For multi-stage treatments like antenatal care, release funds in milestones as each stage is completed.",
    iconPath: "M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01",
    color: "#5eead4",
    bg: "#ccfbf1",
  },
  {
    title: "Reports & Analytics",
    description: "Track completed treatments, revenue trends, and subsidy impact. All your data in one clean dashboard.",
    iconPath: "M18 20V10M12 20V4M6 20v-6",
    color: "#3a7bd5",
    bg: "#e6f2ff",
  },
];

export default function Features() {
  const [tab, setTab] = useState("patient");
  const features = tab === "patient" ? patientFeatures : clinicFeatures;

  return (
    <section id="features" className="bg-white section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 bg-[#e6f2ff] text-[#3a7bd5] text-xs font-semibold px-4 py-1.5 rounded-full mb-4">
            What You Get
          </span>
          <h2 className="text-[#0f172a] font-extrabold text-3xl md:text-4xl tracking-tight">
            Built for patients and clinics
          </h2>
          <p className="text-[#64748b] text-base mt-4 max-w-lg mx-auto leading-relaxed">
            Powerful features designed to make healthcare payments simple, transparent, and reliable.
          </p>
        </div>

        {/* Tab Toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-[#f1f5f9] rounded-2xl p-1.5 flex gap-1">
            <button
              onClick={() => setTab("patient")}
              className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 min-h-[44px] ${
                tab === "patient"
                  ? "bg-white text-[#0f172a] shadow-sm"
                  : "text-[#64748b] hover:text-[#0f172a]"
              }`}
            >
              For Patients
            </button>
            <button
              onClick={() => setTab("clinic")}
              className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 min-h-[44px] ${
                tab === "clinic"
                  ? "bg-white text-[#0f172a] shadow-sm"
                  : "text-[#64748b] hover:text-[#0f172a]"
              }`}
            >
              For Clinics
            </button>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-[#f8fafc] rounded-2xl p-7 border border-[#e2e8f0]/60 flex gap-5 card-hover group"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: f.bg }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={f.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d={f.iconPath} />
                </svg>
              </div>
              <div>
                <h3 className="text-[#0f172a] font-bold text-base mb-2">{f.title}</h3>
                <p className="text-[#64748b] text-sm leading-relaxed">{f.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
