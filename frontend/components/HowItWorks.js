const steps = [
  {
    number: "01",
    title: "Choose your clinic",
    description: "Scan the clinic's QR code or search from our verified list. Select your treatment type and total cost.",
    color: "#3a7bd5",
    bgColor: "#e6f2ff",
  },
  {
    number: "02",
    title: "Set your payment plan",
    description: "Pick daily or weekly installments. The app calculates how much you need to deposit each time.",
    color: "#34d399",
    bgColor: "#d1fae5",
  },
  {
    number: "03",
    title: "Make small deposits",
    description: "Pay in small USDC amounts at your own pace. Watch your progress bar grow with every deposit.",
    color: "#fbbf24",
    bgColor: "#fef3c7",
  },
  {
    number: "04",
    title: "Clinic gets paid",
    description: "Once the full amount is reached, the smart contract releases funds directly to the clinic. No delays.",
    color: "#5eead4",
    bgColor: "#ccfbf1",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-[#f8fafc] section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 bg-[#e6f2ff] text-[#3a7bd5] text-xs font-semibold px-4 py-1.5 rounded-full mb-4">
            Simple Process
          </span>
          <h2 className="text-[#0f172a] font-extrabold text-3xl md:text-4xl tracking-tight">
            How ClinicPay works
          </h2>
          <p className="text-[#64748b] text-base mt-4 max-w-lg mx-auto leading-relaxed">
            Four simple steps from treatment plan to full payment — no paperwork, no stress.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className="relative bg-white rounded-2xl p-7 border border-[#e2e8f0]/60 flex flex-col gap-5 card-hover group"
            >
              {/* Connector line (desktop only) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 -right-4 lg:-right-5 w-8 lg:w-10 h-[2px] bg-[#e2e8f0]" />
              )}

              <div className="flex items-center justify-between">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: step.bgColor }}
                >
                  <span className="font-extrabold text-sm" style={{ color: step.color }}>
                    {step.number}
                  </span>
                </div>
                <span className="text-[#e2e8f0] font-extrabold text-4xl select-none">
                  {step.number}
                </span>
              </div>

              <div>
                <h3 className="text-[#0f172a] font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-[#64748b] text-sm leading-relaxed">{step.description}</p>
              </div>

              {/* Bottom accent bar */}
              <div
                className="h-1 w-12 rounded-full mt-auto transition-all duration-300 group-hover:w-full"
                style={{ backgroundColor: step.color, opacity: 0.4 }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
