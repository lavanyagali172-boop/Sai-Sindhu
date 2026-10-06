"use client";

import { useState } from "react";
import Link from "next/link";
import {
  BadgeCheck,
  ShieldCheck,
  ArrowUpRight,
  ArrowDown,
  Sparkles,
  Building2,
  LandPlot,
  Trees,
  MapPin,
  Phone,
  Leaf,
  Route as RouteIcon,
  Waves,
  Zap,
  Check,
  ChevronRight,
  Clock,
  Compass,
  Loader2,
  AlertCircle,
} from "lucide-react";
import { submitLead } from "@/services/leadService";
import SubmissionModal from "@/components/SubmissionModal";

export default function HomePage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    plotSize: "150 – 200 Sq. Yds (Standard)",
    visitDate: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState<"success" | "error">("success");
  const [submittedLead, setSubmittedLead] = useState<{
    name: string;
    phone: string;
    plotSize: string;
    refId?: string;
  } | null>(null);

  const handleQuickSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const currentLead = {
      name: form.name,
      phone: form.phone,
      plotSize: form.plotSize,
    };

    const result = await submitLead({
      name: form.name,
      phone: form.phone,
      plot_size: form.plotSize,
      visit_date: form.visitDate,
      source_page: "Homepage Quick Form",
    });

    setIsSubmitting(false);

    if (result.success) {
      setSubmitStatus("success");
      setStatusMessage(result.message || "Visit Request Received!");
      setSubmittedLead({
        ...currentLead,
        refId: result.refId,
      });
      setModalType("success");
      setModalOpen(true);
      setForm({
        name: "",
        phone: "",
        plotSize: "150 – 200 Sq. Yds (Standard)",
        visitDate: "",
      });
    } else {
      setSubmitStatus("error");
      setStatusMessage(result.message || "Failed to submit. Please call us.");
      setModalType("error");
      setModalOpen(true);
    }
  };

  // Curated plot summary cards
  const plotSummaries = [
    {
      type: "Standard Villa Plot",
      size: "150 – 200 Sq. Yds",
      sqFt: "1,350 – 1,800 Sq. Ft",
      facing: "East & North Facing",
      highlight: "Ideal for Weekend Cottages & Investments",
      badge: "Popular",
      color: "#0284c7",
    },
    {
      type: "Executive Villa Plot",
      size: "250 – 350 Sq. Yds",
      sqFt: "2,250 – 3,150 Sq. Ft",
      facing: "East, North & Corner Options",
      highlight: "Spacious Multi-Generational Family Living",
      badge: "Family Choice",
      color: "#16a34a",
    },
    {
      type: "Estate Signature Plot",
      size: "400 – 650 Sq. Yds",
      sqFt: "3,600 – 5,850 Sq. Ft",
      facing: "Boulevard & Park Frontage",
      highlight: "Grand Mansions & Private Orchard Estates",
      badge: "Signature",
      color: "#d4a359",
    },
  ];

  // Curated 6 core amenities
  const coreAmenities = [
    {
      icon: Building2,
      title: "Grand Entrance Arch",
      desc: "Boom barriers & 24/7 security station",
      color: "#0284c7",
    },
    {
      icon: ShieldCheck,
      title: "24×7 Solar Fenced Security",
      desc: "Perimeter solar wall & HD CC cameras",
      color: "#16a34a",
    },
    {
      icon: RouteIcon,
      title: "40' & 30' Wide BT Roads",
      desc: "Blacktop avenues with kerb stones & LED lights",
      color: "#d4a359",
    },
    {
      icon: Waves,
      title: "Direct Plot Water Lines",
      desc: "Overhead reservoir & underground sumps",
      color: "#0284c7",
    },
    {
      icon: Zap,
      title: "Underground Power Grid",
      desc: "Concealed armored electrical conduits",
      color: "#16a34a",
    },
    {
      icon: Trees,
      title: "Clubhouse & Recreation",
      desc: "Gym, indoor games, parks & jogging track",
      color: "#d4a359",
    },
  ];

  // Curated connectivity highlights
  const transitHighlights = [
    {
      name: "Vikarabad Town & Railway",
      distance: "5 KM",
      time: "7 Mins",
      color: "#0284c7",
    },
    {
      name: "Ananthagiri Hills & Forests",
      distance: "12 KM",
      time: "15 Mins",
      color: "#0ea5e9",
    },
    {
      name: "Shankarpally Growth Corridor",
      distance: "22 KM",
      time: "20 Mins",
      color: "#16a34a",
    },
    {
      name: "Moinabad Resort Belt",
      distance: "30 KM",
      time: "28 Mins",
      color: "#84cc16",
    },
    {
      name: "Gachibowli Financial District",
      distance: "42 KM",
      time: "45 Mins",
      color: "#d4a359",
    },
    {
      name: "RGIA International Airport",
      distance: "55 KM",
      time: "50 Mins",
      color: "#ea580c",
    },
  ];

  return (
    <main className="overflow-hidden bg-white text-slate-900">
      {/* 1. HERO SHOWCASE SECTION */}
      <section className="relative min-h-[85vh] sm:min-h-[90vh] bg-slate-950 text-white flex items-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster="/assets/sai-sindhu-hero.jpg"
          className="absolute inset-0 size-full object-cover object-center opacity-100 will-change-transform transform-gpu"
        >
          <source src="/assets/hero-banner-video.mp4" type="video/mp4" />
          <img
            src="/assets/sai-sindhu-hero.jpg"
            alt="Sai Sindhu Developers - 13-Acre Villa Plots at Vikarabad"
            className="size-full object-cover"
          />
        </video>

        <div className="relative mx-auto w-full max-w-7xl px-4 py-20 sm:px-8">
          <div className="max-w-3xl">
            {/* Headline with Logo Blue Accent */}
            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1.08] tracking-tight text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.95)]">
              A lifetime of <span className="text-[#0284c7]">pleasant living.</span>
            </h1>

            {/* Subtitle */}
            <p className="mt-4 text-base sm:text-xl leading-relaxed text-white max-w-2xl font-medium drop-shadow-[0_3px_12px_rgba(0,0,0,0.95)]">
              By <strong className="text-white font-bold">Sai Sindhu Developers</strong>. A
              13-acre master-planned residential plotted sanctuary with 143 luxury villa plots
              situated directly on Kothrepally Highway, Vikarabad.
            </p>
          </div>
        </div>
      </section>

      {/* 2. ABOUT US TEASER SECTION */}
      <section id="about" className="py-16 sm:py-20 bg-white border-b border-slate-100 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#16a34a] uppercase tracking-wider">
                <Leaf className="size-3.5 text-[#16a34a]" /> ABOUT SAI SINDHU DEVELOPERS
              </div>

              <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-slate-900 sm:text-5xl">
                Crafting Peaceful Sanctuaries for Generations to Come.
              </h2>

              <p className="mt-4 text-sm leading-relaxed text-slate-700 sm:text-base">
                Welcome to <strong className="font-bold text-slate-900">Sai Sindhu Developers</strong>. Founded
                by <strong className="font-bold text-slate-900">Pabbathi Tharun Raju</strong>, we
                create legally clear, high-standard plotted gated communities where families build
                their dream holiday homes and long-term capital wealth.
              </p>

              {/* 2 Core Legal & Location Badges */}
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="flex items-start gap-3 rounded-xl border border-sky-100 bg-sky-50/50 p-3.5">
                  <BadgeCheck className="size-5 shrink-0 text-[#0284c7] mt-0.5" />
                  <div>
                    <strong className="block text-xs font-bold text-slate-900">
                      DTCP & TG RERA Approved
                    </strong>
                    <span className="text-[11px] text-slate-600">
                      100% marketable freehold title ready for spot registration.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-xl border border-emerald-100 bg-emerald-50/50 p-3.5">
                  <Trees className="size-5 shrink-0 text-[#16a34a] mt-0.5" />
                  <div>
                    <strong className="block text-xs font-bold text-slate-900">
                      Ananthagiri Hill Greenery
                    </strong>
                    <span className="text-[11px] text-slate-600">
                      Pure air, elevated cooler climate & lush surroundings.
                    </span>
                  </div>
                </div>
              </div>

              {/* Executive Navigation Pill Button */}
              <div className="mt-8">
                <Link
                  href="/about"
                  className="group inline-flex items-center gap-3 rounded-full bg-slate-900 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-md transition-all duration-300 hover:bg-[#0284c7] hover:shadow-lg hover:-translate-y-0.5"
                >
                  <span>Discover Our Heritage & Vision</span>
                  <span className="grid size-5 place-items-center rounded-full bg-white/20 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    <ArrowUpRight className="size-3 text-white" />
                  </span>
                </Link>
              </div>
            </div>

            {/* Visual Card with Founder Vision Snippet */}
            <div className="space-y-4">
              <div className="overflow-hidden rounded-2xl shadow-md border border-slate-200">
                <img
                  src="/assets/sai-sindhu-lifestyle.jpg"
                  alt="Avenue and landscaped residential plots"
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>

              <div className="flex items-center gap-4 rounded-2xl bg-slate-50 p-4 border border-slate-200 shadow-2xs">
                <img
                  src="/assets/sai-sindhu-founder-vision.jpg"
                  alt="Pabbathi Tharun Raju"
                  className="size-14 rounded-full object-cover border-2 border-[#d4a359]"
                />
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-[#d4a359]">
                    Founder & Managing Director
                  </div>
                  <h4 className="text-sm font-bold text-slate-900">Pabbathi Tharun Raju</h4>
                  <p className="text-xs text-slate-600 italic mt-0.5 line-clamp-1">
                    “Our pledge is total transparency, institutional engineering quality & on-time handover.”
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MASTER PLAN TEASER SECTION */}
      <section id="master-plan" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0284c7] uppercase tracking-wider">
                <LandPlot className="size-3.5" /> OFFICIAL MASTER LAYOUT PLAN
              </span>

              <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-slate-900 sm:text-5xl">
                13 Acres of Architectural Precision.
              </h2>

              <p className="mt-3 text-xs leading-relaxed text-slate-600 sm:text-sm">
                Approved under <strong className="text-slate-900 font-semibold">DTCP LP No. 0025/LO/3042/2023</strong> directly
                on the Vikarabad-Hyderabad Highway. Designed with 40' & 30' internal blacktop roads,
                manicured open parks, and 100% Vaastu alignment.
              </p>

              <div className="mt-5 space-y-2">
                {[
                  { label: "Highway Frontage", val: "Vikarabad-Hyderabad Highway (66' / 100')", color: "#0284c7" },
                  { label: "Internal Roads", val: "40' Arterial & 30' Internal Blacktop Avenues", color: "#16a34a" },
                  { label: "Total Plots", val: "143 Fully Demarcated Villa Units", color: "#d4a359" },
                ].map((spec) => (
                  <div
                    key={spec.label}
                    className="flex items-center justify-between p-3 rounded-xl bg-white border border-slate-200 text-xs shadow-2xs"
                  >
                    <span className="font-bold" style={{ color: spec.color }}>
                      {spec.label}
                    </span>
                    <span className="font-semibold text-slate-900">{spec.val}</span>
                  </div>
                ))}
              </div>

              {/* Executive Navigation Pill Button */}
              <div className="mt-7">
                <Link
                  href="/master-plan"
                  className="group inline-flex items-center gap-3 rounded-full bg-[#0284c7] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-md transition-all duration-300 hover:bg-[#0369a1] hover:shadow-lg hover:-translate-y-0.5"
                >
                  <span>View Full Master Plan & Specs</span>
                  <span className="grid size-5 place-items-center rounded-full bg-white/20 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    <ArrowUpRight className="size-3 text-white" />
                  </span>
                </Link>
              </div>
            </div>

            {/* Master Plan Map Preview */}
            <div className="overflow-hidden rounded-2xl shadow-lg border border-slate-300 bg-white p-2">
              <Link href="/master-plan" className="group relative block overflow-hidden rounded-xl">
                <img
                  src="/assets/sai-sindhu-master-plan.jpg"
                  alt="Official Master Layout Plan of Sai Sindhu Developers"
                  loading="lazy"
                  className="w-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-slate-950/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                  <span className="rounded-full bg-slate-950/85 px-4 py-2 text-xs font-bold text-white backdrop-blur-md shadow-lg">
                    Click to Open Full Layout Plan
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PLOT CONFIGURATIONS TEASER SECTION */}
      <section id="plot-types" className="py-16 sm:py-20 bg-white border-b border-slate-100 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0284c7] uppercase tracking-wider">
                <LandPlot className="size-3.5" /> PLOT CONFIGURATIONS & DIMENSIONS
              </span>
              <h2 className="mt-2 font-display text-3xl font-bold text-slate-900 sm:text-5xl">
                Choose the Canvas for Your Dream Villa.
              </h2>
            </div>

            {/* Executive Navigation Pill Button */}
            <Link
              href="/plot-types"
              className="group inline-flex items-center gap-2.5 rounded-full border border-slate-200 bg-slate-50 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-800 shadow-2xs transition-all duration-300 hover:border-[#0284c7] hover:bg-slate-900 hover:text-white hover:shadow-md hover:-translate-y-0.5 shrink-0"
            >
              <span>Explore Dimensions & Calculator</span>
              <span className="grid size-5 place-items-center rounded-full bg-[#0284c7]/15 text-[#0284c7] transition-all duration-300 group-hover:bg-[#0284c7] group-hover:text-white">
                <ArrowUpRight className="size-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </Link>
          </div>

          <p className="mt-2 max-w-2xl text-xs leading-relaxed text-slate-600 sm:text-sm">
            Tailored configurations with 100% Vaastu compliance, optimal cardinal orientation, and immediate spot registration.
          </p>

          {/* 3 Clean Plot Cards */}
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {plotSummaries.map((plot) => (
              <div
                key={plot.type}
                className="flex flex-col justify-between p-6 rounded-2xl bg-white border-t-4 border border-slate-200/80 shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
                style={{ borderTopColor: plot.color }}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span
                      className="rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-2xs"
                      style={{ backgroundColor: plot.color }}
                    >
                      {plot.badge}
                    </span>
                    <span className="text-xs font-bold text-slate-400">{plot.facing}</span>
                  </div>

                  <h3 className="mt-4 font-display text-xl font-bold text-slate-900">
                    {plot.type}
                  </h3>

                  <div className="mt-3 rounded-xl bg-slate-50 p-3.5 border border-slate-100">
                    <div className="flex items-baseline justify-between border-b border-slate-200/60 pb-2">
                      <span className="text-xs font-bold text-slate-500">Area:</span>
                      <strong className="text-sm font-bold" style={{ color: plot.color }}>
                        {plot.size}
                      </strong>
                    </div>
                    <div className="flex items-baseline justify-between pt-2">
                      <span className="text-xs font-bold text-slate-500">Built Footprint:</span>
                      <strong className="text-xs font-bold text-slate-800">{plot.sqFt}</strong>
                    </div>
                  </div>

                  <p className="mt-3 text-xs font-semibold text-slate-600">{plot.highlight}</p>
                </div>

                <div className="mt-6 pt-2">
                  <Link
                    href="/plot-types"
                    className="group inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-slate-900 text-xs font-bold uppercase tracking-wider text-white transition-all duration-300 hover:bg-[#0284c7] shadow-xs"
                  >
                    <span>View Specifications & Layouts</span>
                    <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. GATED LIFESTYLE & AMENITIES TEASER SECTION */}
      <section id="amenities" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#16a34a] uppercase tracking-wider">
                <Sparkles className="size-3.5" /> GATED COMMUNITY INFRASTRUCTURE
              </span>
              <h2 className="mt-2 font-display text-3xl font-bold text-slate-900 sm:text-5xl">
                Essential Infrastructure & Lifestyle Comforts.
              </h2>
            </div>

            {/* Executive Navigation Pill Button */}
            <Link
              href="/amenities"
              className="group inline-flex items-center gap-2.5 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-800 shadow-2xs transition-all duration-300 hover:border-[#16a34a] hover:bg-slate-900 hover:text-white hover:shadow-md hover:-translate-y-0.5 shrink-0"
            >
              <span>Explore All 12+ Amenities</span>
              <span className="grid size-5 place-items-center rounded-full bg-[#16a34a]/15 text-[#16a34a] transition-all duration-300 group-hover:bg-[#16a34a] group-hover:text-white">
                <ArrowUpRight className="size-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </Link>
          </div>

          {/* 6 Curated Amenities Grid */}
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {coreAmenities.map(({ icon: Icon, title, desc, color }) => (
              <div
                key={title}
                className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-200/80 shadow-2xs hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
              >
                <div
                  className="grid size-12 shrink-0 place-items-center rounded-xl shadow-2xs"
                  style={{ backgroundColor: `${color}15`, color }}
                >
                  <Icon className="size-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">{title}</h4>
                  <p className="text-xs text-slate-600 mt-0.5">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Clubhouse Spotlight Strip */}
          <div className="mt-8 rounded-2xl bg-white p-6 sm:p-8 border border-slate-200 shadow-xs flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="overflow-hidden rounded-xl max-w-md w-full shrink-0 shadow-sm">
              <img
                src="/assets/sai-sindhu-amenities-life.jpg"
                alt="Clubhouse Recreation"
                className="aspect-[16/10] w-full object-cover"
              />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#0284c7]">
                Active Family Living
              </span>
              <h3 className="mt-1 font-display text-2xl font-bold text-slate-900">
                Multi-Level Clubhouse & Recreation Parks
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
                Featuring fitness gym, indoor games, community hall, landscaped parks, children play zones,
                and jogging avenues.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {["Fitness Gym", "Jogging Track", "Cricket Net", "Yoga Lawn", "Children Zone"].map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1 rounded-full bg-slate-50 border border-slate-200 px-3 py-1 text-[11px] font-semibold text-slate-800"
                  >
                    <Check className="size-3 text-[#16a34a]" /> {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. STRATEGIC HIGHWAY CONNECTIVITY TEASER SECTION */}
      <section id="nearby" className="py-16 sm:py-20 bg-white border-b border-slate-100 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0284c7] uppercase tracking-wider">
              <MapPin className="size-3.5" /> STRATEGIC HIGHWAY CONNECTIVITY
            </span>
            <h2 className="mt-2 font-display text-3xl font-bold leading-tight text-slate-900 sm:text-5xl">
              Connected to Everywhere from Vikarabad.
            </h2>
            <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
              Situated directly on the Vikarabad-Hyderabad Highway corridor with signal-free transit
              to major IT hubs, regional expressways, and tourism landmarks.
            </p>
          </div>

          {/* 6 Grid Transit Cards */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {transitHighlights.map((item) => (
              <div
                key={item.name}
                className="flex items-center justify-between p-4.5 rounded-2xl bg-slate-50 border border-slate-200 shadow-2xs hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
              >
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900">{item.name}</h4>
                  <span className="text-[11px] font-semibold text-slate-500">{item.distance} Direct</span>
                </div>
                <span
                  className="rounded-full px-3 py-1 text-xs font-bold text-white shadow-2xs"
                  style={{ backgroundColor: item.color }}
                >
                  {item.time}
                </span>
              </div>
            ))}
          </div>

          {/* Executive Navigation Pill Button */}
          <div className="mt-8 text-center">
            <Link
              href="/nearby"
              className="group inline-flex items-center gap-3 rounded-full bg-slate-900 px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-md transition-all duration-300 hover:bg-[#0284c7] hover:shadow-lg hover:-translate-y-0.5"
            >
              <span>Open 360° Regional Connectivity Map</span>
              <span className="grid size-5 place-items-center rounded-full bg-white/20 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <ArrowUpRight className="size-3 text-white" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* 7. VIP SITE VISIT & CONTACT STRIP */}
      <section id="contact" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200 scroll-mt-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0284c7] uppercase tracking-wider">
              <Phone className="size-3.5" /> SCHEDULE A SITE VISIT
            </span>

            <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-slate-900 sm:text-5xl">
              Experience the 13-Acre Sanctuary in Person.
            </h2>

            <p className="mt-3 text-xs leading-relaxed text-slate-600 sm:text-sm">
              Join our complimentary weekend guided site tours with AC cab pickup from Hyderabad.
              Inspect plot demarcations, road widths, and spot registration options.
            </p>

            <div className="mt-6 space-y-3.5">
              <a
                href="tel:+918747994499"
                className="flex items-center gap-3.5 rounded-2xl border-l-4 border-[#0284c7] bg-white p-4 text-base font-bold text-slate-900 shadow-2xs hover:bg-sky-50 transition-colors border border-slate-200"
              >
                <div className="grid size-11 place-items-center rounded-full bg-[#0284c7] text-white">
                  <Phone className="size-5" />
                </div>
                <div>
                  <span className="block text-[10px] font-bold uppercase text-slate-500">
                    Direct Sales Helpline
                  </span>
                  <span className="text-[#0284c7] font-bold text-lg">+91 87479 94499</span>
                </div>
              </a>

              <div className="rounded-2xl border-l-4 border-[#16a34a] bg-white p-4 text-xs shadow-2xs border border-slate-200">
                <strong className="block text-slate-900 font-bold text-sm">
                  Complimentary Weekend Cab Pickup:
                </strong>
                <p className="mt-1 text-slate-600 leading-relaxed">
                  Available from Jubilee Hills, Gachibowli, Kukatpally & Madhapur every Saturday & Sunday.
                </p>
              </div>
            </div>

            <div className="mt-6">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2.5 rounded-full border border-slate-300 bg-white px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-800 shadow-2xs hover:border-[#0284c7] hover:bg-slate-900 hover:text-white transition-all duration-300"
              >
                <span>Dedicated Contact & Office Details</span>
                <ChevronRight className="size-3.5 text-slate-500 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>

          {/* Quick Inquiry Form */}
          <form
            className="grid gap-3.5 rounded-2xl bg-white border border-slate-200 p-6 text-slate-900 sm:grid-cols-2 sm:p-8 shadow-sm"
            onSubmit={handleQuickSubmit}
          >
            <div className="sm:col-span-2">
              <h3 className="font-display text-2xl font-bold text-slate-900">
                Request Price Sheet & Site Visit
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Direct response from authorized Sai Sindhu Developers specialists.
              </p>
            </div>

            {/* Notification Alert Banner */}
            {submitStatus === "success" && (
              <div className="sm:col-span-2 flex items-start gap-2.5 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-xs font-semibold text-emerald-900 animate-in fade-in">
                <Check className="size-5 shrink-0 text-emerald-600 mt-0.5" />
                <div>
                  <strong className="block font-bold">Request Sent Successfully!</strong>
                  <span>{statusMessage}</span>
                </div>
              </div>
            )}

            {submitStatus === "error" && (
              <div className="sm:col-span-2 flex items-start gap-2.5 rounded-xl border border-rose-200 bg-rose-50 p-4 text-xs font-semibold text-rose-900 animate-in fade-in">
                <AlertCircle className="size-5 shrink-0 text-rose-600 mt-0.5" />
                <div>
                  <strong className="block font-bold">Submission Notice:</strong>
                  <span>{statusMessage}</span>
                </div>
              </div>
            )}

            <label className="text-xs font-bold text-slate-800">
              Full Name *
              <input
                required
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="mt-1.5 h-11 w-full rounded-xl border border-slate-300 bg-slate-50/50 px-3.5 text-xs text-slate-900 outline-none focus:border-[#0284c7] focus:bg-white focus:ring-2 focus:ring-[#0284c7]/20"
                placeholder="e.g. Ramesh Kumar"
              />
            </label>

            <label className="text-xs font-bold text-slate-800">
              Phone Number (WhatsApp) *
              <input
                required
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="mt-1.5 h-11 w-full rounded-xl border border-slate-300 bg-slate-50/50 px-3.5 text-xs text-slate-900 outline-none focus:border-[#0284c7] focus:bg-white focus:ring-2 focus:ring-[#0284c7]/20"
                placeholder="+91 98765 43210"
              />
            </label>

            <label className="text-xs font-bold text-slate-800">
              Interested Plot Size
              <select
                value={form.plotSize}
                onChange={(e) => setForm({ ...form, plotSize: e.target.value })}
                className="mt-1.5 h-11 w-full rounded-xl border border-slate-300 bg-slate-50/50 px-3.5 text-xs text-slate-900 outline-none focus:border-[#0284c7] focus:bg-white focus:ring-2 focus:ring-[#0284c7]/20"
              >
                <option value="150 – 200 Sq. Yds (Standard)">150 – 200 Sq. Yds (Standard)</option>
                <option value="250 – 350 Sq. Yds (Executive)">250 – 350 Sq. Yds (Executive)</option>
                <option value="400 – 650 Sq. Yds (Signature)">400 – 650 Sq. Yds (Signature)</option>
              </select>
            </label>

            <label className="text-xs font-bold text-slate-800">
              Preferred Visit Date
              <input
                type="text"
                value={form.visitDate}
                onChange={(e) => setForm({ ...form, visitDate: e.target.value })}
                placeholder="e.g. This Saturday"
                className="mt-1.5 h-11 w-full rounded-xl border border-slate-300 bg-slate-50/50 px-3.5 text-xs text-slate-900 outline-none focus:border-[#0284c7] focus:bg-white focus:ring-2 focus:ring-[#0284c7]/20"
              />
            </label>

            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#0284c7] px-8 text-xs font-bold uppercase tracking-wider text-white sm:col-span-2 transition-all duration-300 hover:bg-[#0369a1] shadow-md hover:shadow-lg cursor-pointer hover:-translate-y-0.5 mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="size-4 animate-spin" /> Submitting Request...
                </>
              ) : submitStatus === "success" ? (
                <>
                  Visit Request Received! We Will Call You <Check className="size-4" />
                </>
              ) : (
                <>
                  Schedule Free Weekend Site Tour <ArrowUpRight className="size-4" />
                </>
              )}
            </button>
          </form>
        </div>
      </section>

      {/* Official Confirmation / Error Alert Modal */}
      <SubmissionModal
        isOpen={modalOpen}
        onClose={() => {
          setModalOpen(false);
          setSubmitStatus("idle");
          setForm({
            name: "",
            phone: "",
            plotSize: "150 – 200 Sq. Yds (Standard)",
            visitDate: "",
          });
        }}
        type={modalType}
        message={statusMessage}
        leadDetails={
          submittedLead
            ? {
                name: submittedLead.name,
                phone: submittedLead.phone,
                plotSize: submittedLead.plotSize,
                refId: submittedLead.refId,
              }
            : undefined
        }
      />
    </main>
  );
}
