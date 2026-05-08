export default function Hero() {
  return (
    <section
      className="relative overflow-hidden pt-[72px]"
      style={{ background: "var(--gradient-hero)" }}
    >
      {/* Decorative blobs */}
      <div className="blob w-[500px] h-[500px] bg-[#3a7bd5] top-[-100px] right-[-150px]" style={{ opacity: 0.12 }} />
      <div className="blob w-[400px] h-[400px] bg-[#5eead4] bottom-[-100px] left-[-100px]" style={{ opacity: 0.08 }} />
      <div className="blob w-[250px] h-[250px] bg-[#3a7bd5] top-[40%] left-[30%]" style={{ opacity: 0.06 }} />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 md:py-28 lg:py-36">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          {/* Text Content */}
          <div className="flex-1 flex flex-col gap-8 max-w-xl">
            {/* Badge */}
            <div className="animate-fade-in-up">
              <span className="inline-flex items-center gap-2.5 bg-white/[0.08] backdrop-blur-sm border border-white/[0.12] text-white/90 text-xs font-medium px-4 py-2 rounded-full">
                <span className="w-2 h-2 rounded-full bg-[#34d399] animate-pulse-glow inline-block" />
                Built on Stellar · USDC Payments
              </span>
            </div>

            {/* Headline */}
            <div className="animate-fade-in-up delay-100">
              <h1 className="text-white font-extrabold text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.1] tracking-tight">
                Pay for your treatment{" "}
                <span className="text-gradient">a little at a time.</span>
              </h1>
            </div>

            {/* Sub-copy */}
            <div className="animate-fade-in-up delay-200">
              <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-md">
                ClinicPay lets you pay for medical care in small daily or weekly
                installments. Your money is held safely in escrow — released to
                your clinic only when you&apos;re fully covered.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300">
              <button className="btn-primary !px-8 !py-4 !text-[0.95rem] !rounded-xl">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
                Start a Treatment Plan
              </button>
              <button className="btn-secondary-light !px-8 !py-4 !text-[0.95rem] !rounded-xl">
                I&apos;m a Clinic
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </div>

            {/* Trust note */}
            <div className="flex items-center gap-3 animate-fade-in-up delay-400">
              <div className="flex -space-x-2">
                {["#3a7bd5", "#34d399", "#fbbf24"].map((color, i) => (
                  <div
                    key={i}
                    className="w-7 h-7 rounded-full border-2 border-[#0f172a] flex items-center justify-center"
                    style={{ backgroundColor: color }}
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                ))}
              </div>
              <p className="text-white/40 text-xs">
                No credit checks · No upfront costs · No paperwork
              </p>
            </div>
          </div>

          {/* Mock Treatment Card */}
          <div className="flex-1 w-full max-w-md animate-slide-in-right delay-200">
            <div className="relative">
              {/* Background glow */}
              <div className="absolute -inset-4 bg-[#3a7bd5]/20 rounded-3xl blur-2xl" />

              {/* Main Card */}
              <div className="relative glass rounded-2xl p-7 flex flex-col gap-6">
                {/* Card Header */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white/40 text-xs font-medium tracking-wide uppercase">Treatment Plan</p>
                    <p className="text-white font-bold text-lg mt-1">Antenatal Care</p>
                  </div>
                  <span className="bg-[#34d399]/15 text-[#34d399] text-xs font-semibold px-3.5 py-1.5 rounded-full border border-[#34d399]/20">
                    Active
                  </span>
                </div>

                {/* Clinic Info */}
                <div className="flex items-center gap-3 bg-white/[0.06] rounded-xl p-4 border border-white/[0.06]">
                  <div className="w-10 h-10 rounded-xl bg-[#3a7bd5]/20 flex items-center justify-center">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3a7bd5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                      <polyline points="9 22 9 12 15 12 15 22" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white/40 text-xs">Clinic</p>
                    <p className="text-white/90 text-sm font-medium">Lagos Maternal Health Centre</p>
                  </div>
                </div>

                {/* Progress */}
                <div className="flex flex-col gap-3">
                  <div className="flex justify-between items-baseline">
                    <span className="text-white/40 text-xs font-medium">Progress</span>
                    <span className="text-[#34d399] text-sm font-bold">68%</span>
                  </div>
                  <div className="w-full h-3 bg-white/[0.08] rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: "68%",
                        background: "linear-gradient(90deg, #3a7bd5 0%, #34d399 100%)",
                      }}
                    />
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-white/50 font-medium">$68.00 <span className="text-white/30">paid</span></span>
                    <span className="text-white/50 font-medium">$100.00 <span className="text-white/30">total</span></span>
                  </div>
                </div>

                {/* Payment info pills */}
                <div className="flex gap-2">
                  <span className="flex-1 text-center bg-white/[0.06] text-white/60 text-xs font-medium px-3 py-2.5 rounded-xl border border-white/[0.06]">
                    $4 / day
                  </span>
                  <span className="flex-1 text-center bg-white/[0.06] text-white/60 text-xs font-medium px-3 py-2.5 rounded-xl border border-white/[0.06]">
                    8 days left
                  </span>
                  <span className="flex-1 text-center bg-white/[0.06] text-white/60 text-xs font-medium px-3 py-2.5 rounded-xl border border-white/[0.06]">
                    USDC
                  </span>
                </div>

                {/* CTA Button */}
                <button className="btn-primary w-full !rounded-xl !py-3.5">
                  Continue Payment
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>
              </div>

              {/* Floating decoration */}
              <div className="absolute -top-4 -right-4 w-12 h-12 rounded-xl bg-[#34d399]/20 backdrop-blur-sm border border-[#34d399]/20 flex items-center justify-center animate-float">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>

              {/* Floating USDC badge */}
              <div className="absolute -bottom-3 -left-3 glass rounded-xl px-4 py-2.5 flex items-center gap-2 animate-float-slow">
                <div className="w-6 h-6 rounded-full bg-[#3a7bd5] flex items-center justify-center">
                  <span className="text-white text-[10px] font-bold">$</span>
                </div>
                <div>
                  <p className="text-white/40 text-[10px]">Last deposit</p>
                  <p className="text-white text-xs font-bold">+$4.00 USDC</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom curve */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-[40px] md:h-[60px]">
          <path d="M0 60L1440 60L1440 0C1440 0 1080 40 720 40C360 40 0 0 0 0L0 60Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
