"use client";

import { useEffect, useState } from "react";

export default function PagePreloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Dismiss preloader once window has fully loaded or after a brief minimum display for branding
    const timer = setTimeout(() => {
      setLoading(false);
    }, 450);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white/98 backdrop-blur-xl transition-all duration-500 animate-in fade-in"
    >
      {/* Brand Logo with Pulsing Glow Frame */}
      <div className="relative flex flex-col items-center justify-center p-6">
        <div className="absolute size-40 sm:size-48 rounded-full bg-gradient-to-tr from-[#0284c7]/20 via-[#16a34a]/15 to-[#38bdf8]/20 animate-pulse blur-xl" />

        <div className="relative z-10 flex items-center justify-center rounded-2xl bg-white/90 p-4 shadow-xl border border-slate-100">
          <img
            src="/assets/sai_sindhu_developers.png"
            alt="Sai Sindhu Developers"
            className="h-20 sm:h-24 md:h-28 w-auto object-contain animate-brand-pulse"
          />
        </div>

        {/* Animated Loading Progress Strip */}
        <div className="mt-6 w-44 sm:w-56 overflow-hidden rounded-full bg-slate-100 h-1.5 shadow-inner">
          <div className="h-full w-full bg-gradient-to-r from-[#0284c7] via-[#38bdf8] to-[#16a34a] rounded-full animate-pulse" />
        </div>

        <p className="mt-3 text-[11px] font-bold uppercase tracking-widest text-slate-500 animate-pulse">
          Sai Sindhu Developers
        </p>
      </div>
    </div>
  );
}
