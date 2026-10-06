export default function Loading() {
  return (
    <div className="flex min-h-[70vh] w-full flex-col items-center justify-center bg-white px-4">
      <div className="relative flex flex-col items-center justify-center p-6">
        {/* Shimmering Ambient Glow Background */}
        <div className="absolute size-40 rounded-full bg-gradient-to-tr from-[#0284c7]/20 via-[#16a34a]/15 to-[#38bdf8]/20 animate-pulse blur-xl" />

        {/* Brand Logo Card */}
        <div className="relative z-10 flex items-center justify-center rounded-2xl bg-white p-4 shadow-lg border border-slate-100">
          <img
            src="/assets/sai_sindhu_developers.png"
            alt="Sai Sindhu Developers"
            className="h-20 sm:h-24 w-auto object-contain animate-brand-pulse"
          />
        </div>

        {/* Linear Loading Progress Bar */}
        <div className="mt-6 w-44 overflow-hidden rounded-full bg-slate-100 h-1.5 shadow-inner">
          <div className="h-full w-full bg-gradient-to-r from-[#0284c7] via-[#38bdf8] to-[#16a34a] rounded-full animate-pulse" />
        </div>

        <p className="mt-3 text-[11px] font-bold uppercase tracking-widest text-slate-500 animate-pulse">
          Loading Page...
        </p>
      </div>
    </div>
  );
}
