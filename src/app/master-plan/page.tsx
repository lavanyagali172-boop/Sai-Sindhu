import type { Metadata } from "next";
import Link from "next/link";
import { LandPlot, BadgeCheck, ShieldCheck, ArrowUpRight, ChevronRight, Compass, Trees, Route as RouteIcon, Building2 } from "lucide-react";

export const metadata: Metadata = {
  title: "13-Acre Master Layout Plan | Sai Sindhu Developers",
  description:
    "Explore the official DTCP (LP No. 0025/LO/3042/2023) approved master layout plan of Sai Sindhu Developers at Kothrepally, Vikarabad.",
};

export default function MasterPlanPage() {
  const specs = [
    {
      label: "Highway Frontage",
      val: "Vikarabad-Hyderabad Highway (66' / 100' Wide)",
      color: "#0284c7",
    },
    {
      label: "Total Plotted Units",
      val: "143 Villa Plots (150 to 650 Sq. Yds)",
      color: "#16a34a",
    },
    {
      label: "Internal Road Network",
      val: "40' Main & 30' Wide BT Roads",
      color: "#d4a359",
    },
    {
      label: "Greenery & Parks",
      val: "Dedicated Landscaped Parks & Open Spaces",
      color: "#16a34a",
    },
    {
      label: "Statutory Approval",
      val: "100% DTCP Compliant with Clear Freehold Title",
      color: "#0284c7",
    },
  ];

  const layoutHighlights = [
    {
      icon: Compass,
      title: "100% Vaastu Planned Layout",
      desc: "East, North, and corner plots engineered with precise cardinal alignment for optimal energy and ventilation.",
      color: "#0284c7",
    },
    {
      icon: RouteIcon,
      title: "Wide 40' & 30' BT Roads",
      desc: "Heavy-duty blacktop roads with kerb stones, avenue plantation, and concealed drainage channels.",
      color: "#16a34a",
    },
    {
      icon: Trees,
      title: "Designated Green Parks",
      desc: "Multiple landscaped open recreation spaces and children play parks seamlessly interwoven across the community.",
      color: "#d4a359",
    },
    {
      icon: Building2,
      title: "Clear Demarcation & Stones",
      desc: "Every single plot is distinctly boundary-marked with permanent numbered plot stones and boundary markers.",
      color: "#0284c7",
    },
  ];

  return (
    <main className="bg-white py-10 sm:py-16 border-b border-slate-100 text-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-8" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-[#0284c7] transition-colors">Home</Link>
          <ChevronRight className="size-3 text-slate-400" />
          <span className="text-slate-900 font-bold">13-Acre Master Layout Plan</span>
        </nav>

        {/* Top Hero Layout Section */}
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
          <div>
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0284c7] uppercase tracking-wider">
              <LandPlot className="size-3.5" /> OFFICIAL MASTER LAYOUT PLAN
            </span>

            <h1 className="mt-2 font-display text-3xl font-bold leading-tight text-slate-900 sm:text-5xl">
              13 Acres of Architectural Precision.
            </h1>

            <p className="mt-3 text-xs leading-relaxed text-slate-600 sm:text-sm">
              Official DTCP approved layout plan situated directly on the Vikarabad-Hyderabad
              Highway corridor. Engineered with wide internal blacktop roads, designated open
              parks, and commercial utility zones.
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-1.5 rounded-full border border-[#d4a359]/40 bg-[#d4a359]/10 px-3 py-1 text-xs font-bold text-amber-900">
                <BadgeCheck className="size-4 text-[#d4a359]" /> DTCP LP No: 0025/LO/3042/2023
              </div>
              <div className="inline-flex items-center gap-1.5 rounded-full border border-[#16a34a]/40 bg-[#16a34a]/10 px-3 py-1 text-xs font-bold text-emerald-900">
                <ShieldCheck className="size-4 text-[#16a34a]" /> TG RERA No: P02100005950
              </div>
            </div>

            <div className="mt-6 space-y-2">
              {specs.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between p-3 rounded-lg bg-slate-50 border border-slate-200 text-xs shadow-2xs"
                >
                  <span className="font-bold" style={{ color: item.color }}>
                    {item.label}
                  </span>
                  <span className="font-semibold text-slate-900">{item.val}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="/assets/sai-sindhu-master-plan.jpg"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex h-11 items-center gap-2 rounded-full bg-[#0284c7] px-6 text-xs font-bold uppercase tracking-wider text-white shadow-md hover:bg-[#0369a1] transition-all hover:-translate-y-0.5"
              >
                <span>View Full Resolution Map</span>
                <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <Link
                href="/contact"
                className="inline-flex h-11 items-center gap-2 rounded-full border border-slate-300 bg-white px-5 text-xs font-bold uppercase tracking-wider text-slate-800 shadow-2xs hover:bg-slate-50 transition-colors"
              >
                <span>Request Availability</span>
                <ChevronRight className="size-3.5 text-slate-500" />
              </Link>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl shadow-md border border-slate-300 bg-white p-2">
            <a
              href="/assets/sai-sindhu-master-plan.jpg"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block overflow-hidden rounded-xl cursor-zoom-in"
            >
              <img
                src="/assets/sai-sindhu-master-plan.jpg"
                alt="Official Master Layout Plan of Sai Sindhu Developers"
                loading="lazy"
                width={1600}
                height={1100}
                className="w-full object-contain transition-transform duration-300 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-slate-900/10 opacity-0 transition-opacity group-hover:opacity-100 flex items-center justify-center">
                <span className="rounded-full bg-slate-950/80 px-4 py-2 text-xs font-bold text-white backdrop-blur-md">
                  Click to Zoom Master Plan
                </span>
              </div>
            </a>
          </div>
        </div>

        {/* Master Plan Key Engineering Features */}
        <div className="mt-16 pt-12 border-t border-slate-200">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0284c7] uppercase tracking-wider">
              LAYOUT HIGHLIGHTS
            </span>
            <h2 className="mt-2 font-display text-3xl font-bold text-slate-900 sm:text-4xl">
              Precision Planned for Modern Families.
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {layoutHighlights.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="p-5 rounded-2xl bg-slate-50 border-t-4 border border-slate-200 shadow-2xs hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
                  style={{ borderTopColor: item.color }}
                >
                  <div
                    className="grid size-11 place-items-center rounded-full shadow-2xs bg-white"
                    style={{ color: item.color }}
                  >
                    <Icon className="size-5" />
                  </div>
                  <h3 className="mt-3 text-sm font-bold text-slate-900">{item.title}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-slate-600">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Cross Navigation Strip */}
        <div className="mt-16 pt-10 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-50 p-6 rounded-2xl border border-slate-200">
          <div>
            <h3 className="text-sm font-bold text-slate-900">Next Steps</h3>
            <p className="text-xs text-slate-600 mt-0.5">Explore plot sizes & dimensions or check out the community amenities.</p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/plot-types"
              className="group inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-800 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all duration-300 shadow-2xs hover:shadow-md hover:-translate-y-0.5"
            >
              <span>Plot Sizes & Calculator</span>
              <ChevronRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/amenities"
              className="group inline-flex items-center gap-2 rounded-full bg-[#0284c7] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#0369a1] transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              <span>Amenities</span>
              <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
