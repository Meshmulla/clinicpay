export default function CTA() {
  return (
    <section className="relative overflow-hidden section-padding" style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f1f3d 100%)" }}>
      {/* Decorative elements */}
      <div className="blob w-[400px] h-[400px] bg-[#3a7bd5] top-[-100px] right-[-100px]" style={{ opacity: 0.1 }} />
      <div className="blob w-[300px] h-[300px] bg-[#5eead4] bottom-[-80px] left-[-80px]" style={{ opacity: 0.08 }} />

      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)",
        backgroundSize: "40px 40px",
      }} />

      <div className="relative max-w-3xl mx-auto text-center flex flex-col items-center gap-8">
        {/* Icon */}
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#3a7bd5] to-[#2d6abf] flex items-center justify-center shadow-[0_8px_30px_rgba(58,123,213,0.3)] animate-float-slow">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
          </svg>
        </div>

        <h2 className="text-white font-extrabold text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight">
          Healthcare shouldn&apos;t wait{" "}
          <br />
          <span className="text-gradient">because of money.</span>
        </h2>

        <p className="text-white/50 text-base md:text-lg leading-relaxed max-w-xl">
          Start your first treatment plan today. Pay a little at a time, get the care you need now.
          No credit checks. No paperwork. Just small, consistent steps.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-2">
          <button className="btn-primary !px-8 !py-4 !text-[0.95rem] !rounded-xl">
            Start a Treatment Plan
          </button>
          <button className="btn-secondary-light !px-8 !py-4 !text-[0.95rem] !rounded-xl">
            Register Your Clinic
          </button>
        </div>

        <p className="text-white/30 text-xs mt-2 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#34d399] inline-block" />
          Powered by Stellar · USDC stablecoin · Soroban smart contracts
        </p>
      </div>
    </section>
  );
}
