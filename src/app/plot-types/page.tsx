"use client";

import { useState } from "react";
import Link from "next/link";
import { LandPlot, Check, ArrowUpRight, Calculator, ChevronRight } from "lucide-react";

const plotCategories = [
  {
    type: "Standard Villa Plot",
    sizeRange: "150 – 200 Sq. Yds",
    sqFt: "1,350 – 1,800 Sq. Ft",
    dimensions: "33' × 41' or 36' × 50'",
    facing: "East & North Facing",
    highlight: "Ideal for Weekend Cottages & Investments",
    description:
      "Carefully planned plots for tranquil 2-3 BHK holiday cottages and reliable capital growth in Vikarabad.",
    tags: [
      "100% Vaastu Compliant",
      "30' Wide Road Access",
      "Immediate Registration Ready",
      "Clear Demarcation",
    ],
    badge: "Popular Choice",
    color: "#0284c7",
  },
  {
    type: "Executive Villa Plot",
    sizeRange: "250 – 350 Sq. Yds",
    sqFt: "2,250 – 3,150 Sq. Ft",
    dimensions: "45' × 50' or 50' × 63'",
    facing: "East, North & Corner Options",
    highlight: "Spacious Multi-Generational Family Living",
    description:
      "Generous plots designed for 3-4 BHK luxury duplex villas, covered parking, and private gardens.",
    tags: [
      "Corner Road Options",
      "40' Main Avenue Facing",
      "Solar Fencing Perimeter",
      "Underground Utilities",
    ],
    badge: "Family Favorite",
    color: "#16a34a",
  },
  {
    type: "Estate Signature Plot",
    sizeRange: "400 – 650 Sq. Yds",
    sqFt: "3,600 – 5,850 Sq. Ft",
    dimensions: "60' × 60' or 65' × 90'",
    facing: "Boulevard & Park Frontage",
    highlight: "Grand Mansions & Private Orchard Estates",
    description:
      "Exclusive grand plots fronting scenic boulevards for custom architectural residences.",
    tags: [
      "Park Facing Frontage",
      "Dual 40' Road Access",
      "Dedicated Water & Power Line",
      "VIP Enclave Position",
    ],
    badge: "Limited Inventory",
    color: "#d4a359",
  },
];

export default function PlotTypesPage() {
  const [customPlotSize, setCustomPlotSize] = useState(200);
  const calculatedSqFt = customPlotSize * 9;

  return (
    <main className="bg-white py-10 sm:py-16 text-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-8" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-[#0284c7] transition-colors">Home</Link>
          <ChevronRight className="size-3 text-slate-400" />
          <span className="text-slate-900 font-bold">Plot Configurations & Dimensions</span>
        </nav>

        <div className="text-center">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0284c7] uppercase tracking-wider">
            <LandPlot className="size-3.5" /> PLOT CONFIGURATIONS & DIMENSIONS
          </span>
          <h1 className="mt-2 font-display text-3xl font-bold text-slate-900 sm:text-5xl">
            Choose the Canvas for Your Dream Villa.
          </h1>
          <p className="mx-auto mt-2 max-w-2xl text-xs leading-relaxed text-slate-600 sm:text-sm">
            From compact weekend getaways to signature luxury estates, choose from tailored plot
            dimensions configured for optimal sunlight and authentic Vaastu alignment.
          </p>
        </div>

        {/* 3 Plot Cards */}
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {plotCategories.map((plot, index) => (
            <div
              key={plot.type}
              className="flex flex-col justify-between p-6 rounded-2xl bg-white border-t-4 border border-slate-200/80 shadow-xs hover:shadow-md transition-all hover:-translate-y-0.5"
              style={{ borderTopColor: plot.color }}
            >
              <div>
                <div className="flex items-center justify-between">
                  <span
                    className="rounded px-2.5 py-1 text-[10px] font-bold uppercase text-white"
                    style={{ backgroundColor: plot.color }}
                  >
                    {plot.badge}
                  </span>
                  <span className="font-display text-xl font-bold text-slate-400">
                    0{index + 1}
                  </span>
                </div>

                <h2 className="mt-4 font-display text-2xl font-bold text-slate-900">
                  {plot.type}
                </h2>

                <div className="mt-3 rounded-lg bg-slate-50 p-3 border border-slate-100">
                  <div className="flex items-baseline justify-between border-b border-slate-200/60 pb-2">
                    <span className="text-xs font-bold text-slate-500">Area:</span>
                    <strong className="text-sm font-bold" style={{ color: plot.color }}>
                      {plot.sizeRange}
                    </strong>
                  </div>
                  <div className="flex items-baseline justify-between pt-2">
                    <span className="text-xs font-bold text-slate-500">
                      Total Built Footprint:
                    </span>
                    <strong className="text-xs font-bold text-slate-800">{plot.sqFt}</strong>
                  </div>
                </div>

                <p className="mt-4 text-xs font-semibold" style={{ color: plot.color }}>
                  {plot.highlight}
                </p>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">{plot.description}</p>

                <div className="mt-4 space-y-1.5 border-t border-slate-100 pt-4">
                  <span className="block text-[10px] font-bold uppercase text-slate-500">
                    Key Specifications:
                  </span>
                  {plot.tags.map((tag) => (
                    <div
                      key={tag}
                      className="flex items-center gap-2 text-xs font-semibold text-slate-800"
                    >
                      <Check className="size-3.5 text-[#16a34a]" /> {tag}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-2">
                <Link
                  href="/contact"
                  className="group inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-slate-900 text-xs font-bold uppercase tracking-wider text-white transition-all duration-300 hover:bg-[#0284c7] shadow-xs"
                >
                  <span>Inquire Plot Pricing</span>
                  <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Estimator */}
        <div className="mt-12 rounded-2xl bg-gradient-to-br from-slate-50 to-white p-6 sm:p-8 shadow-xs border border-slate-200">
          <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase text-[#d4a359]">
                <Calculator className="size-4 text-[#d4a359]" /> Interactive Plot Estimator
              </div>
              <h2 className="mt-2 font-display text-2xl font-bold text-slate-900">
                Calculate Your Plot Area in Sq. Yards & Sq. Feet
              </h2>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                Select your desired plot size to see approximate dimensions and total area conversion.
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {[150, 180, 200, 267, 300, 400, 500, 650].map((size) => (
                  <button
                    key={size}
                    onClick={() => setCustomPlotSize(size)}
                    className={`rounded-xl px-3.5 py-1.5 text-xs font-bold transition-all cursor-pointer ${
                      customPlotSize === size
                        ? "bg-[#0284c7] text-white shadow-xs scale-105"
                        : "border border-slate-200 bg-white text-slate-800 hover:bg-[#0284c7]/10"
                    }`}
                  >
                    {size} Sq. Yd
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 rounded-2xl bg-slate-100/70 p-4 text-center sm:grid-cols-3 border border-slate-200">
              <div className="rounded-xl bg-white p-3 shadow-2xs">
                <span className="block text-[10px] font-bold uppercase text-slate-500">
                  Plot Size
                </span>
                <strong className="font-display text-2xl font-bold text-[#0284c7]">
                  {customPlotSize}
                </strong>
                <span className="block text-[10px] text-slate-500">Sq. Yards</span>
              </div>

              <div className="rounded-xl bg-white p-3 shadow-2xs">
                <span className="block text-[10px] font-bold uppercase text-slate-500">
                  Total Area
                </span>
                <strong className="font-display text-2xl font-bold text-[#16a34a]">
                  {calculatedSqFt}
                </strong>
                <span className="block text-[10px] text-slate-500">Sq. Feet</span>
              </div>

              <div className="col-span-2 rounded-xl bg-white p-3 shadow-2xs sm:col-span-1">
                <span className="block text-[10px] font-bold uppercase text-slate-500">
                  Configuration
                </span>
                <strong className="text-xs font-bold text-[#d4a359]">
                  {customPlotSize <= 200
                    ? "2-3 BHK Cottage"
                    : customPlotSize <= 350
                      ? "3-4 BHK Duplex"
                      : "Luxury Villa"}
                </strong>
                <span className="block text-[10px] text-slate-500">With Garden</span>
              </div>

              <div className="col-span-2 sm:col-span-3">
                <Link
                  href="/contact"
                  className="group inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-[#0284c7] text-xs font-bold uppercase tracking-wider text-white hover:bg-[#0369a1] transition-all shadow-xs"
                >
                  <span>Check Availability for {customPlotSize} Sq. Yd Plot</span>
                  <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Cross Navigation Strip */}
        <div className="mt-16 pt-10 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-50 p-6 rounded-2xl border border-slate-200">
          <div>
            <h3 className="text-sm font-bold text-slate-900">Explore Related Pages</h3>
            <p className="text-xs text-slate-600 mt-0.5">Check out the master layout plan or explore community amenities & clubhouse.</p>
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
