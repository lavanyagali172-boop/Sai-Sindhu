import type { Metadata } from "next";
import Link from "next/link";
import { Sparkles, Building2, ShieldCheck, Route as RouteIcon, Waves, Leaf, Zap, Droplets, Trees, Check, FileText, ChevronRight, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Gated Amenities & Clubhouse | Sai Sindhu Developers",
  description:
    "Explore modern amenities, 40' roads, underground cabling, water pipelines, and clubhouse recreation at Sai Sindhu Developers, Vikarabad.",
};

const amenitiesList = [
  {
    icon: Building2,
    title: "Grand Entrance Gateway",
    text: "Architectural entrance archway with 24/7 security personnel, boom barriers, and landscaped surrounds.",
    color: "#0284c7",
  },
  {
    icon: ShieldCheck,
    title: "24×7 Security & CCTV",
    text: "Compound wall with solar fencing, HD CC camera coverage across all junctions, and round-the-clock guards.",
    color: "#16a34a",
  },
  {
    icon: RouteIcon,
    title: "40' & 30' Wide BT Roads",
    text: "Blacktop internal avenues with concrete kerb stones, avenue lighting, and pedestrian footpaths.",
    color: "#d4a359",
  },
  {
    icon: Waves,
    title: "Direct Water Supply",
    text: "Individual pressurized water line to each plot, overhead reservoir, underground sumps, and rainwater recharge pits.",
    color: "#0284c7",
  },
  {
    icon: Leaf,
    title: "Tree-Lined Avenues",
    text: "Indigenous shade-giving and flowering trees planted along avenues with automated drip irrigation.",
    color: "#16a34a",
  },
  {
    icon: Zap,
    title: "Underground Power Grid",
    text: "Underground armored electrical cabling, dedicated transformer, and concealed storm-water drainage.",
    color: "#d4a359",
  },
];

const technicalSpecs = [
  {
    title: "Roads & Walkways",
    icon: RouteIcon,
    desc: "40' Main Arterial & 30' Internal BT roads with concrete kerb stones and paved pedestrian walkways.",
    color: "#0284c7",
  },
  {
    title: "Power & Underground Cabling",
    icon: Zap,
    desc: "Dedicated transformer, underground armored electrical cabling to each plot, and designer LED streetlights.",
    color: "#16a34a",
  },
  {
    title: "Water Supply Network",
    icon: Droplets,
    desc: "Centrally positioned overhead storage tank with dedicated supply conduits to every individual plot.",
    color: "#d4a359",
  },
  {
    title: "7-Foot Gated Security",
    icon: ShieldCheck,
    desc: "7-foot high perimeter compound wall reinforced with live solar fencing and 24/7 CC camera surveillance.",
    color: "#0284c7",
  },
  {
    title: "Avenue Landscaping",
    icon: Trees,
    desc: "Indigenous shade-giving and flowering trees with automated drip-irrigation networks.",
    color: "#16a34a",
  },
  {
    title: "Storm Water Drainage",
    icon: Waves,
    desc: "Concealed RCC underground drainage network designed for zero waterlogging during heavy monsoon rains.",
    color: "#d4a359",
  },
];

export default function AmenitiesPage() {
  return (
    <main className="bg-white py-10 sm:py-16 text-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-8" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-[#0284c7] transition-colors">Home</Link>
          <ChevronRight className="size-3 text-slate-400" />
          <span className="text-slate-900 font-bold">Gated Amenities & Clubhouse</span>
        </nav>

        <div className="text-center">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#16a34a] uppercase tracking-wider">
            <Sparkles className="size-3.5" /> PLANNED IN EVERY DETAIL
          </span>
          <h1 className="mt-2 font-display text-3xl font-bold text-slate-900 sm:text-5xl">
            Essential Infrastructure & Lifestyle Comforts.
          </h1>
          <p className="mx-auto mt-2 max-w-2xl text-xs text-slate-600 sm:text-sm">
            Every utility, road surface, drainage channel, and power connection is pre-built
            before hand-over.
          </p>
        </div>

        {/* 6 Amenities Grid */}
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {amenitiesList.map(({ icon: Icon, title, text, color }, i) => (
            <div
              key={title}
              className="p-6 rounded-xl bg-slate-50 border-l-4 hover:shadow-md transition-shadow border border-slate-200/80"
              style={{ borderLeftColor: color }}
            >
              <div className="flex items-start justify-between">
                <div
                  className="grid size-12 place-items-center rounded-full bg-white shadow-2xs"
                  style={{ color }}
                >
                  <Icon className="size-6" />
                </div>
                <span className="font-display text-2xl font-bold text-slate-300">0{i + 1}</span>
              </div>
              <h2 className="mt-4 text-base font-bold text-slate-900">{title}</h2>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">{text}</p>
            </div>
          ))}
        </div>

        {/* Clubhouse Showcase */}
        <div className="mt-14 rounded-2xl bg-slate-50 p-6 sm:p-10 border border-slate-200">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div className="overflow-hidden rounded-xl shadow-sm border border-slate-200">
              <img
                src="/assets/sai-sindhu-amenities-life.jpg"
                alt="Clubhouse and sports recreation center"
                className="aspect-[16/11] w-full object-cover"
              />
            </div>

            <div>
              <span className="text-xs font-bold uppercase text-[#0284c7]">
                Active Lifestyle & Recreation
              </span>
              <h2 className="mt-2 font-display text-2xl font-bold text-slate-900 sm:text-3xl">
                Recreation for Every Family Member.
              </h2>
              <p className="mt-3 text-xs leading-relaxed text-slate-600 sm:text-sm">
                The clubhouse and outdoor recreation spaces provide amenities to stay active,
                relax, and socialize.
              </p>

              <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-3">
                {[
                  "Multi-Level Clubhouse",
                  "Fitness Gym",
                  "Community Hall",
                  "Indoor Games",
                  "Children Play Zone",
                  "Jogging Track",
                  "Cricket Net",
                  "Manicured Parks",
                  "Yoga Lawn",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 rounded-lg bg-white p-2.5 text-[11px] font-semibold text-slate-800 shadow-2xs border border-slate-100"
                  >
                    <Check className="size-3 shrink-0 text-[#16a34a]" />
                    <span className="truncate">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Project Specifications */}
        <div className="mt-16 pt-12 border-t border-slate-200">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0284c7] uppercase tracking-wider">
              <FileText className="size-3.5" /> PROJECT SPECIFICATIONS
            </span>
            <h2 className="mt-2 font-display text-3xl font-bold text-slate-900 sm:text-4xl">
              Engineered for Lifetime Reliability.
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {technicalSpecs.map((spec) => (
              <div
                key={spec.title}
                className="p-5 rounded-xl bg-slate-50 border-t-2 border border-slate-200 shadow-2xs hover:shadow-md transition-shadow"
                style={{ borderTopColor: spec.color }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="grid size-10 place-items-center rounded-full bg-white shadow-2xs"
                    style={{ color: spec.color }}
                  >
                    <spec.icon className="size-5" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900">{spec.title}</h3>
                </div>
                <p className="mt-3 text-xs leading-relaxed text-slate-600">{spec.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Cross Navigation Strip */}
        <div className="mt-16 pt-10 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-50 p-6 rounded-2xl border border-slate-200">
          <div>
            <h3 className="text-sm font-bold text-slate-900">Explore Nearby Highway Connectivity</h3>
            <p className="text-xs text-slate-600 mt-0.5">See travel times and distances to Gachibowli, RGIA Airport, and Ananthagiri Hills.</p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/nearby"
              className="group inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-800 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all duration-300 shadow-2xs hover:shadow-md hover:-translate-y-0.5"
            >
              <span>Nearby Destinations</span>
              <ChevronRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-[#0284c7] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#0369a1] transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              <span>Book Site Visit</span>
              <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
