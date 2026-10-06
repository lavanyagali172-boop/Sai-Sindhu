import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, ArrowUpRight, ChevronRight, Compass } from "lucide-react";

export const metadata: Metadata = {
  title: "Nearby Destinations & Highway Connectivity | Sai Sindhu Developers",
  description:
    "Explore strategic connectivity from Vikarabad to Gachibowli, RGIA Airport, Ananthagiri Hills, Shankarpally, and Moinabad.",
};

const nearbyOrbitLocations = [
  {
    id: "vikarabad",
    title: "VIKARABAD TOWN & RAILWAY",
    distance: "5 KM",
    time: "7 MINS",
    image: "/assets/sai-sindhu-vikarabad.jpg",
    borderColor: "#0284c7",
    top: "calc(50% - 270px)",
    left: "50%",
  },
  {
    id: "airport",
    title: "RGIA AIRPORT & HITEC CITY",
    distance: "55 KM",
    time: "50 MINS",
    image: "/assets/sai-sindhu-airport.jpg",
    borderColor: "#ea580c",
    top: "calc(50% - 135px)",
    left: "calc(50% + 234px)",
  },
  {
    id: "gachibowli",
    title: "GACHIBOWLI FINANCIAL DIST",
    distance: "42 KM",
    time: "45 MINS",
    image: "/assets/sai-sindhu-hyderabad-connectivity.jpg",
    borderColor: "#d4a359",
    top: "calc(50% + 135px)",
    left: "calc(50% + 234px)",
  },
  {
    id: "moinabad",
    title: "MOINABAD RESORT BELT",
    distance: "30 KM",
    time: "28 MINS",
    image: "/assets/sai-sindhu-moinabad.jpg",
    borderColor: "#84cc16",
    top: "calc(50% + 270px)",
    left: "50%",
  },
  {
    id: "shankarpally",
    title: "SHANKARPALLY CORRIDOR",
    distance: "22 KM",
    time: "20 MINS",
    image: "/assets/sai-sindhu-shankarpally.jpg",
    borderColor: "#16a34a",
    top: "calc(50% + 135px)",
    left: "calc(50% - 234px)",
  },
  {
    id: "ananthagiri",
    title: "ANANTHAGIRI HILLS & FOREST",
    distance: "12 KM",
    time: "15 MINS",
    image: "/assets/sai-sindhu-ananthagiri.jpg",
    borderColor: "#0ea5e9",
    top: "calc(50% - 135px)",
    left: "calc(50% - 234px)",
  },
];

export default function NearbyPage() {
  return (
    <main className="bg-gradient-to-b from-white via-slate-50/60 to-white py-10 sm:py-16 text-slate-900 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-8" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-[#0284c7] transition-colors">Home</Link>
          <ChevronRight className="size-3 text-slate-400" />
          <span className="text-slate-900 font-bold">Nearby & Highway Connectivity</span>
        </nav>

        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0284c7] uppercase tracking-wider">
            <MapPin className="size-3.5" /> STRATEGIC HIGHWAY CONNECTIVITY
          </span>
          <h1 className="mt-2 font-display text-3xl font-bold leading-tight text-slate-900 sm:text-5xl">
            Connected to Everywhere from Vikarabad.
          </h1>
          <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
            The master sanctuary is situated at the epicenter of the Vikarabad-Hyderabad Highway
            with rapid, signal-free access to all commercial, hill, and IT destinations.
          </p>
        </div>

        {/* Desktop 360° Circular Radial Orbit (Radius R = 270px) */}
        <div className="relative mx-auto hidden lg:flex items-center justify-center w-full max-w-5xl h-[760px]">
          {/* CENTER BRAND LOGO HUB */}
          <div className="relative z-20 flex size-60 flex-col items-center justify-center rounded-full bg-white border-4 border-[#0284c7] shadow-2xl p-6 text-center transition-transform duration-300 hover:scale-105">
            <span className="text-[10px] font-extrabold text-[#0284c7] uppercase tracking-widest">
              EPICENTER OF GROWTH
            </span>
            <div className="my-2.5 flex items-center justify-center">
              <img
                src="/assets/sai_sindhu_developers.png"
                alt="Sai Sindhu Developers - Center Hub"
                className="h-16 w-auto max-w-[185px] object-contain"
              />
            </div>
            <span className="rounded-full bg-emerald-50 border border-emerald-200 px-3 py-0.5 text-[10px] font-bold text-emerald-800">
              Kothrepally · Vikarabad
            </span>
            <span className="mt-1 text-[9px] font-semibold text-slate-500">
              DTCP & TG RERA Sanctuary
            </span>
          </div>

          {/* 6 ORBITAL DESTINATION NODES */}
          {nearbyOrbitLocations.map((loc) => (
            <div
              key={loc.id}
              className="absolute z-10 flex flex-col items-center transition-all duration-300 hover:scale-110 hover:z-30 group"
              style={{
                top: loc.top,
                left: loc.left,
                transform: "translate(-50%, -50%)",
              }}
            >
              <div
                className="relative flex size-44 flex-col items-center justify-center rounded-full overflow-hidden shadow-xl border-4 transition-all duration-300 group-hover:shadow-2xl group-hover:ring-4 group-hover:ring-[#0284c7]/40"
                style={{ borderColor: loc.borderColor }}
              >
                <img
                  src={loc.image}
                  alt={loc.title}
                  className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/70 to-slate-950/40" />

                <span className="relative z-10 font-sans text-3xl font-black text-white leading-none drop-shadow-md">
                  {loc.distance}
                </span>

                <span className="relative z-10 mt-1 text-[10px] font-extrabold uppercase tracking-tight text-[#d4a359] leading-tight max-w-[120px] px-2 text-center drop-shadow-sm">
                  {loc.title}
                </span>

                <span className="relative z-10 text-[9px] font-semibold text-sky-200">
                  {loc.time}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Grid Layout */}
        <div className="flex flex-col items-center gap-6 lg:hidden">
          <div className="flex size-52 sm:size-60 flex-col items-center justify-center rounded-full bg-white border-4 border-[#0284c7] shadow-xl p-5 text-center">
            <span className="text-[10px] font-extrabold text-[#0284c7] uppercase tracking-widest">
              EPICENTER OF GROWTH
            </span>
            <div className="my-2 flex items-center justify-center">
              <img
                src="/assets/sai_sindhu_developers.png"
                alt="Sai Sindhu Developers - Center Hub"
                className="h-14 w-auto max-w-[160px] object-contain"
              />
            </div>
            <span className="rounded-full bg-emerald-50 border border-emerald-200 px-3 py-0.5 text-[9px] font-bold text-emerald-800">
              Kothrepally · Vikarabad
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full">
            {nearbyOrbitLocations.map((loc) => (
              <div key={loc.id} className="flex flex-col items-center">
                <div
                  className="relative flex size-36 sm:size-40 flex-col items-center justify-center rounded-full overflow-hidden shadow-lg border-4 group"
                  style={{ borderColor: loc.borderColor }}
                >
                  <img
                    src={loc.image}
                    alt={loc.title}
                    className="absolute inset-0 size-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/70 to-slate-950/40" />
                  <span className="relative z-10 font-sans text-2xl font-black text-white leading-none">
                    {loc.distance}
                  </span>
                  <span className="relative z-10 mt-1 text-[9px] font-extrabold uppercase tracking-tight text-[#d4a359] leading-tight max-w-[105px] px-1 text-center">
                    {loc.title}
                  </span>
                  <span className="relative z-10 text-[8px] font-semibold text-slate-200">
                    {loc.time}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-12 sm:mt-16 text-center">
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#0284c7] via-[#0369a1] to-[#0284c7] bg-[length:200%_auto] hover:bg-right px-8 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-white shadow-lg transition-all duration-500 hover:shadow-[#0284c7]/30 hover:scale-[1.02]"
          >
            <span>Book Site Tour with Free Cab Pickup</span>
            <span className="grid size-6 place-items-center rounded-full bg-white/20 ml-2.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              <ArrowUpRight className="size-3.5 text-white" />
            </span>
          </Link>
        </div>

        {/* Cross Navigation Strip */}
        <div className="mt-16 pt-10 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-50 p-6 rounded-2xl border border-slate-200">
          <div>
            <h3 className="text-sm font-bold text-slate-900">Ready to Visit the Site?</h3>
            <p className="text-xs text-slate-600 mt-0.5">Complimentary weekend cab pickups available from Hyderabad.</p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/master-plan"
              className="group inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-800 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all duration-300 shadow-2xs hover:shadow-md hover:-translate-y-0.5"
            >
              <span>Master Plan</span>
              <ChevronRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-[#0284c7] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#0369a1] transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              <span>Schedule Visit</span>
              <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
