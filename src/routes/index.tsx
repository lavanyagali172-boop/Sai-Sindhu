import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  BadgeCheck,
  Building2,
  Check,
  ChevronRight,
  ChevronDown,
  LandPlot,
  Leaf,
  Menu,
  Phone,
  Route as RouteIcon,
  ShieldCheck,
  Sparkles,
  Sprout,
  Trees,
  Waypoints,
  Waves,
  X,
  MapPin,
  Calculator,
  HelpCircle,
  FileText,
  Zap,
  Droplets,
  Users,
  Quote,
} from "lucide-react";

import heroImage from "../assets/sai-sindhu-hero.jpg";
import lifestyleImage from "../assets/sai-sindhu-lifestyle.jpg";
import masterPlanOfficialImage from "../assets/sai-sindhu-master-plan.jpg";
import ananthagiriImage from "../assets/sai-sindhu-ananthagiri.jpg";
import vikarabadImage from "../assets/sai-sindhu-vikarabad.jpg";
import founderVisionImage from "../assets/sai-sindhu-founder-vision.jpg";
import moinabadImage from "../assets/sai-sindhu-moinabad.jpg";
import hyderabadConnectivityImage from "../assets/sai-sindhu-hyderabad-connectivity.jpg";
import shankarpallyImage from "../assets/sai-sindhu-shankarpally.jpg";
import amenitiesLifeImage from "../assets/sai-sindhu-amenities-life.jpg";
import airportImage from "../assets/sai-sindhu-airport.jpg";
import boulevardImage from "../assets/sai-sindhu-boulevard.jpg";
import familyParkImage from "../assets/sai-sindhu-family-park.jpg";
import logoImg from "../assets/sai-sindhu-developers.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sai Sindhu Developers | Premium Gated Villa Plots at Vikarabad, Hyderabad" },
      { name: "description", content: "Discover 143 luxury DTCP (LP No. 0025/LO/3042/2023) & TG RERA (P02100005950) approved villa plots across 13 scenic acres in Kothrepally, Vikarabad by Sai Sindhu Developers. Master-planned with clubhouse, 40' roads, 24/7 security & spot registration." },
      { property: "og:title", content: "Sai Sindhu Developers | Luxury Gated Villa Plots at Vikarabad" },
      { property: "og:description", content: "13-Acre premium residential plotted community in Kothrepally, Vikarabad by Sai Sindhu Developers. DTCP LP No: 0025/LO/3042/2023 · TG RERA Reg. No: P02100005950." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

// Navigation: About, Why Us, Master Plan, Plot Sizes, Amenities, Nearby, Contact
const navItems = [
  ["About", "#about"],
  ["Why Us", "#why-us"],
  ["Master Plan", "#master-plan"],
  ["Plot Sizes", "#plot-types"],
  ["Amenities", "#amenities"],
  ["Nearby", "#nearby"],
  ["Contact", "#contact"],
];

const plotCategories = [
  {
    type: "Standard Villa Plot",
    sizeRange: "150 – 200 Sq. Yds",
    sqFt: "1,350 – 1,800 Sq. Ft",
    dimensions: "33' × 41' or 36' × 50'",
    facing: "East & North Facing",
    highlight: "Ideal for Weekend Cottages & Investments",
    description: "Carefully planned plots for tranquil 2-3 BHK holiday cottages and reliable capital growth in Vikarabad.",
    tags: ["100% Vaastu Compliant", "30' Wide Road Access", "Immediate Registration Ready", "Clear Demarcation"],
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
    description: "Generous plots designed for 3-4 BHK luxury duplex villas, covered parking, and private gardens.",
    tags: ["Corner Road Options", "40' Main Avenue Facing", "Solar Fencing Perimeter", "Underground Utilities"],
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
    description: "Exclusive grand plots fronting scenic boulevards for custom architectural residences.",
    tags: ["Park Facing Frontage", "Dual 40' Road Access", "Dedicated Water & Power Line", "VIP Enclave Position"],
    badge: "Limited Inventory",
    color: "#d4a359",
  },
];

const amenities = [
  { icon: Building2, title: "Grand Entrance Gateway", text: "Architectural entrance archway with 24/7 security personnel, boom barriers, and landscaped surrounds.", color: "#0284c7" },
  { icon: ShieldCheck, title: "24×7 Security & CCTV", text: "Compound wall with solar fencing, HD CC camera coverage across all junctions, and round-the-clock guards.", color: "#16a34a" },
  { icon: RouteIcon, title: "40' & 30' Wide BT Roads", text: "Blacktop internal avenues with concrete kerb stones, avenue lighting, and pedestrian footpaths.", color: "#d4a359" },
  { icon: Waves, title: "Direct Water Supply", text: "Individual pressurized water line to each plot, overhead reservoir, underground sumps, and rainwater recharge pits.", color: "#0284c7" },
  { icon: Leaf, title: "Tree-Lined Avenues", text: "Indigenous shade-giving and flowering trees planted along avenues with automated drip irrigation.", color: "#16a34a" },
  { icon: Zap, title: "Underground Power Grid", text: "Underground armored electrical cabling, dedicated transformer, and concealed storm-water drainage.", color: "#d4a359" },
];

const whySaiSindhu = [
  { icon: BadgeCheck, number: "01", title: "100% TG RERA Transparency & Vaastu", text: "Every plot is precision-aligned according to Vaastu principles with DTCP LP No. 0025/LO/3042/2023 and TG RERA Registration P02100005950.", highlight: "RERA Approved (P02100005950)", color: "#0284c7" },
  { icon: Sprout, number: "02", title: "Nature-Led Living near Ananthagiri", text: "Clean air and peaceful environment surrounded by the greenery and cooler climate of Vikarabad, connected via expressways.", highlight: "Pure Air & Greenery", color: "#16a34a" },
  { icon: ShieldCheck, number: "03", title: "Underground Utilities & Security", text: "40' & 30' internal blacktop roads, underground power grid, individual water lines, solar fencing, and 24/7 CCTV.", highlight: "Ready Infrastructure", color: "#0284c7" },
  { icon: Waypoints, number: "04", title: "Western Hyderabad Growth Corridor", text: "Convenient access to Gachibowli, Shankarpally, Mokila, and the Regional Ring Road corridor.", highlight: "High Appreciation Zone", color: "#d4a359" },
];

// Circular Nearby Locations Around Sai Sindhu Developers Center Hub
const locVikarabad = {
  distance: "5 KM",
  time: "7 MINS",
  title: "VIKARABAD TOWN & RAILWAY",
  image: vikarabadImage,
  borderColor: "#0284c7",
};

const locAnanthagiri = {
  distance: "12 KM",
  time: "15 MINS",
  title: "ANANTHAGIRI HILLS & FOREST",
  image: ananthagiriImage,
  borderColor: "#0ea5e9",
};

const locShankarpally = {
  distance: "22 KM",
  time: "20 MINS",
  title: "SHANKARPALLY URBAN CORRIDOR",
  image: shankarpallyImage,
  borderColor: "#16a34a",
};

const locMoinabad = {
  distance: "30 KM",
  time: "28 MINS",
  title: "MOINABAD RESORT BELT",
  image: moinabadImage,
  borderColor: "#84cc16",
};

const locGachibowli = {
  distance: "42 KM",
  time: "45 MINS",
  title: "GACHIBOWLI FINANCIAL DIST",
  image: hyderabadConnectivityImage,
  borderColor: "#d4a359",
};

const locAirport = {
  distance: "55 KM",
  time: "50 MINS",
  title: "RGIA AIRPORT & HITEC CITY",
  image: airportImage,
  borderColor: "#ea580c",
};

const faqs = [
  {
    q: "What is the legal approval and RERA status of Sai Sindhu Developers' project?",
    a: "Our residential plotted community in Kothrepally, Vikarabad is 100% legally approved under DTCP (LP No. 0025/LO/3042/2023) and registered under TG RERA (Registration No: P02100005950) with clear freehold titles ready for immediate spot registration.",
  },
  {
    q: "Are bank loans available for purchasing residential plots?",
    a: "Yes. Clear title documentation supports seamless bank loan approvals from leading national and private financial institutions for both plot purchase and villa construction.",
  },
  {
    q: "What plot sizes are available?",
    a: "We offer plots ranging from 150 Sq. Yds up to 650 Sq. Yds (1,350 to 5,850 Sq. Ft) with East-facing, North-facing, and corner options.",
  },
  {
    q: "What on-ground infrastructure is provided in the gated community?",
    a: "The project includes 40' and 30' wide blacktop internal roads, underground electrical cabling with street lighting, overhead water storage tank with individual plot pipelines, underground drainage, perimeter wall with solar fencing, 24/7 CCTV surveillance, grand entrance arch, and clubhouse amenities.",
  },
  {
    q: "How far is the project from Hyderabad and how do I schedule a site visit?",
    a: "The project is located directly on Kothrepally Highway in Vikarabad, approximately 45 minutes from Gachibowli. Complimentary weekend cab pickups are arranged from Hyderabad for site visits.",
  },
];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [customPlotSize, setCustomPlotSize] = useState(200);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const calculatedSqFt = customPlotSize * 9;

  return (
    <main className="overflow-hidden bg-white text-slate-900">
      {/* Header / Navbar - Clean White Header with Logo Colors */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-md">
        <div className="w-full max-w-7xl mx-auto flex h-20 items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          
          {/* Official Brand Logo */}
          <a
            href="#home"
            aria-label="Sai Sindhu Developers home"
            className="flex shrink-0 items-center pl-0"
          >
            <img
              src={logoImg}
              alt="Sai Sindhu Developers Logo"
              className="h-14 sm:h-16 w-auto max-w-[170px] sm:max-w-[210px] object-contain"
            />
          </a>

          {/* Desktop Single-Line Navigation Links */}
          <nav className="hidden items-center gap-6 xl:gap-8 lg:flex" aria-label="Primary navigation">
            {navItems.map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="whitespace-nowrap text-xs sm:text-sm font-semibold text-slate-700 hover:text-[#0284c7] transition-colors"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Desktop Right Actions: Phone + Get a Quote */}
          <div className="hidden shrink-0 items-center gap-4 lg:flex">
            <a
              href="tel:+918747994499"
              className="flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-800 hover:text-[#0284c7] transition-colors"
            >
              <Phone className="size-3.5 text-[#0284c7]" /> +91 87479 94499
            </a>
            <a
              href="#contact"
              className="inline-flex h-9 items-center gap-1.5 rounded bg-[#0284c7] hover:bg-[#0369a1] px-4 text-xs sm:text-sm font-bold text-white shadow-xs transition-colors"
            >
              Get a quote <ArrowUpRight className="size-3.5" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="grid size-10 shrink-0 place-items-center rounded text-slate-800 hover:bg-slate-100 lg:hidden"
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? <X className="size-6 text-slate-800" /> : <Menu className="size-6 text-slate-800" />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        {menuOpen && (
          <nav className="max-h-[85vh] overflow-y-auto border-t border-slate-200 bg-white px-5 py-5 shadow-lg lg:hidden text-slate-900">
            <div className="mb-4 flex items-center justify-between rounded border border-slate-200 bg-slate-50 p-3.5">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#0284c7]">Direct Sales Desk</span>
                <a href="tel:+918747994499" className="mt-0.5 flex items-center gap-2 text-sm font-bold text-slate-900">
                  <Phone className="size-4 text-[#0284c7]" /> +91 87479 94499
                </a>
              </div>
              <span className="rounded bg-emerald-100 px-2 py-1 text-[10px] font-bold text-emerald-800">TG RERA Approved</span>
            </div>

            <div className="divide-y divide-slate-100">
              {navItems.map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-3 text-xs font-bold uppercase tracking-wider text-slate-800 hover:text-[#0284c7] transition-colors"
                >
                  {label}
                </a>
              ))}
            </div>

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-5 flex h-11 w-full items-center justify-center gap-2 rounded bg-[#0284c7] text-xs font-bold uppercase tracking-wider text-white shadow-sm"
            >
              Get a Quote <ArrowUpRight className="size-4" />
            </a>
          </nav>
        )}
      </header>

      {/* Hero Section - Open, Seamless, Non-Boxed Fluid Layout with Logo Palette */}
      <section id="home" className="relative min-h-[86svh] bg-slate-950 text-white flex items-center overflow-hidden">
        <img
          src={heroImage}
          alt="Sai Sindhu Developers - Premium Villa Plots at Vikarabad"
          width={1920}
          height={1088}
          fetchPriority="high"
          className="absolute inset-0 size-full object-cover object-center opacity-85"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-950/60" />

        {/* Fluid, Open Hero Content */}
        <div className="relative mx-auto w-full max-w-7xl px-4 pt-24 pb-14 sm:px-8">
          <div className="max-w-3xl">
            
            {/* Logo Colors Top Ribbon */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#0284c7]/40 bg-[#0284c7]/20 px-3.5 py-1 text-xs font-semibold text-sky-200">
                <BadgeCheck className="size-3.5 text-[#0284c7]" /> DTCP LP NO: 0025/LO/3042/2023
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#16a34a]/40 bg-[#16a34a]/20 px-3.5 py-1 text-xs font-semibold text-emerald-300">
                <ShieldCheck className="size-3.5 text-[#16a34a]" /> TG RERA: P02100005950
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="mt-5 font-display text-4xl sm:text-6xl lg:text-7xl font-normal leading-[1.08] tracking-tight text-white">
              A lifetime of{" "}
              <span className="italic text-[#d4a359]">
                pleasant living.
              </span>
            </h1>

            {/* Seamless Subtitle */}
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-200 max-w-2xl">
              By <strong className="text-white font-semibold">Sai Sindhu Developers</strong>. A 13-acre master-planned residential plotted sanctuary with 143 luxury villa plots situated directly on Kothrepally Highway, Vikarabad.
            </p>

            {/* 3 Core Highlights Strip with Logo Colors */}
            <div className="mt-6 grid grid-cols-3 gap-4 border-y border-white/15 py-4 max-w-xl text-left">
              <div>
                <strong className="block text-lg sm:text-2xl font-bold text-[#0284c7]">143</strong>
                <span className="text-[11px] text-slate-300 uppercase tracking-wider">Villa Plots</span>
              </div>
              <div className="border-l border-white/15 pl-4">
                <strong className="block text-lg sm:text-2xl font-bold text-[#16a34a]">13 Acres</strong>
                <span className="text-[11px] text-slate-300 uppercase tracking-wider">Gated Community</span>
              </div>
              <div className="border-l border-white/15 pl-4">
                <strong className="block text-lg sm:text-2xl font-bold text-[#d4a359]">150–650</strong>
                <span className="text-[11px] text-slate-300 uppercase tracking-wider">Sq. Yd. Plots</span>
              </div>
            </div>

            {/* Direct Fluid Actions */}
            <div className="mt-7 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex h-12 items-center gap-2 rounded bg-[#0284c7] hover:bg-[#0369a1] px-7 text-xs sm:text-sm font-bold uppercase tracking-wider text-white shadow-md transition-colors"
              >
                Schedule Site Visit <ArrowUpRight className="size-4" />
              </a>
              <a
                href="#master-plan"
                className="inline-flex h-12 items-center gap-2 rounded border border-white/30 bg-white/10 px-6 text-xs sm:text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-white/20"
              >
                Explore Master Plan <ArrowDown className="size-4" />
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 1: ABOUT US & FOUNDER (Pabbathi Tharun Raju) - Open Fluid Layout */}
      <section id="about" className="relative bg-white py-16 sm:py-24 overflow-hidden border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          
          {/* Top Part: About Sai Sindhu Developers */}
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            
            {/* Text Side */}
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#16a34a] uppercase tracking-wider">
                <Leaf className="size-3.5 text-[#16a34a]" /> ABOUT SAI SINDHU DEVELOPERS
              </div>

              <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-slate-900 sm:text-5xl">
                Crafting Peaceful Sanctuaries for Generations to Come.
              </h2>

              <p className="mt-4 text-sm leading-relaxed text-slate-700 sm:text-base">
                Welcome to <strong className="font-bold text-slate-900">Sai Sindhu Developers</strong>. Founded by <strong className="font-bold text-slate-900">Pabbathi Tharun Raju</strong>, we are committed to creating legally secure, future-ready plotted gated communities where families build their dream holiday homes and enduring generational wealth.
              </p>

              <div className="mt-6 space-y-3">
                <div className="flex items-start gap-3.5 border-l-4 border-[#0284c7] bg-slate-50 p-4 rounded-r">
                  <BadgeCheck className="size-5 shrink-0 text-[#0284c7] mt-0.5" />
                  <p className="text-xs leading-relaxed text-slate-700">
                    <strong className="font-bold text-[#0284c7]">DTCP Approved & TG RERA Registered:</strong> 100% clear marketable freehold title under <strong className="text-slate-900">DTCP LP No. 0025/LO/3042/2023</strong> and <strong className="text-slate-900">TG RERA Reg. No: P02100005950</strong>, ready for spot registration.
                  </p>
                </div>

                <div className="flex items-start gap-3.5 border-l-4 border-[#16a34a] bg-slate-50 p-4 rounded-r">
                  <Trees className="size-5 shrink-0 text-[#16a34a] mt-0.5" />
                  <p className="text-xs leading-relaxed text-slate-700">
                    <strong className="font-bold text-[#16a34a]">Serene Ananthagiri Hill Climate:</strong> Natural greenery and unpolluted air along the Vikarabad-Hyderabad Highway corridor.
                  </p>
                </div>

                <div className="flex items-start gap-3.5 border-l-4 border-[#d4a359] bg-slate-50 p-4 rounded-r">
                  <Building2 className="size-5 shrink-0 text-[#d4a359] mt-0.5" />
                  <p className="text-xs leading-relaxed text-slate-700">
                    <strong className="font-bold text-[#d4a359]">Turnkey Civil Infrastructure:</strong> 40' and 30' internal blacktop avenues, underground power grid, water lines to each plot, solar fencing, and 24/7 CCTV surveillance.
                  </p>
                </div>
              </div>
            </div>

            {/* Clean Image Showcase */}
            <div className="space-y-4">
              <div className="overflow-hidden rounded-lg shadow-sm">
                <img
                  src={lifestyleImage}
                  alt="Avenue and landscaped residential plots"
                  loading="lazy"
                  width={1200}
                  height={1600}
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="overflow-hidden rounded-lg shadow-xs">
                  <img src={boulevardImage} alt="Boulevard street lights" className="aspect-[16/10] w-full object-cover" />
                </div>
                <div className="overflow-hidden rounded-lg shadow-xs">
                  <img src={familyParkImage} alt="Family theme park" className="aspect-[16/10] w-full object-cover" />
                </div>
              </div>
            </div>

          </div>

          {/* Founder & Leadership Profile (Pabbathi Tharun Raju) - Open Fluid Section */}
          <div className="mt-16 pt-12 border-t border-slate-200">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              
              {/* Clean Founder Photo */}
              <div className="overflow-hidden rounded-lg shadow-sm">
                <img
                  src={founderVisionImage}
                  alt="Pabbathi Tharun Raju - Founder & Managing Director, Sai Sindhu Developers"
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>

              {/* Founder Writeup & Vision */}
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-bold text-[#d4a359] uppercase tracking-wider">
                  <Users className="size-3.5 text-[#d4a359]" /> FOUNDER & MANAGING DIRECTOR
                </div>
                
                <h3 className="mt-2 font-display text-2xl font-bold text-slate-900 sm:text-4xl">
                  Pabbathi Tharun Raju
                </h3>
                <p className="text-xs font-semibold text-slate-600 uppercase tracking-wider">
                  Sai Sindhu Developers
                </p>

                <p className="mt-3 text-xs leading-relaxed text-slate-700 sm:text-sm">
                  Under the leadership of <strong className="text-slate-900 font-semibold">Pabbathi Tharun Raju</strong>, Sai Sindhu Developers was established with a clear mission — to bring complete legal clarity, institutional transparency, and high-standard civil engineering to Telangana's premier plotted growth corridors.
                </p>

                <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
                  Pabbathi Tharun Raju oversees project development to ensure 100% adherence to <strong className="text-slate-900 font-semibold">DTCP (LP No. 0025/LO/3042/2023)</strong> and <strong className="text-slate-900 font-semibold">TG RERA (P02100005950)</strong> guidelines.
                </p>

                <div className="mt-4 flex items-start gap-3 border-l-4 border-[#d4a359] bg-amber-50/70 p-3.5 rounded-r">
                  <Quote className="size-5 shrink-0 text-[#d4a359]" />
                  <p className="text-xs italic text-slate-800 sm:text-sm leading-relaxed">
                    “Our pledge at Sai Sindhu Developers is total transparency, uncompromised infrastructure quality, and timely handover for every plot owner.”
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 2: WHY US - Clean Open Grid with Logo Colors */}
      <section id="why-us" className="relative overflow-hidden bg-white py-16 sm:py-20 text-slate-900 border-b border-slate-100">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-8">
          
          <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0284c7] uppercase tracking-wider">
                <Sparkles className="size-3.5" /> WHY SAI SINDHU DEVELOPERS
              </span>
              <h2 className="mt-2 font-display text-3xl font-semibold leading-tight text-slate-900 sm:text-5xl">
                Rooted in Integrity, Delivered with Excellence.
              </h2>
            </div>
            <p className="max-w-2xl text-xs leading-relaxed text-slate-600 sm:text-sm lg:justify-self-end">
              Sai Sindhu Developers is dedicated to delivering clear-title, fully developed gated communities where families can construct their dream villas with complete peace of mind.
            </p>
          </div>

          {/* 4 Cards Grid */}
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {whySaiSindhu.map(({ icon: Icon, number, title, text, highlight, color }) => (
              <div
                key={title}
                className="flex flex-col justify-between p-6 rounded-lg bg-slate-50 border-t-4 hover:shadow-md transition-shadow"
                style={{ borderTopColor: color }}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="grid size-12 place-items-center rounded-full bg-white shadow-xs" style={{ color }}>
                      <Icon className="size-6" />
                    </div>
                    <span className="font-display text-2xl font-bold text-slate-300">{number}</span>
                  </div>

                  <span className="mt-4 inline-block text-[10px] font-bold uppercase tracking-wider" style={{ color }}>
                    {highlight}
                  </span>

                  <h3 className="mt-2 text-base font-bold text-slate-900">
                    {title}
                  </h3>

                  <p className="mt-2 text-xs leading-relaxed text-slate-600">
                    {text}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 4: MASTER LAYOUT PLAN - Open Fluid Layout */}
      <section id="master-plan" className="bg-white py-16 sm:py-20 border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
            
            {/* Left Metrics & Details */}
            <div>
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0284c7] uppercase tracking-wider">
                <LandPlot className="size-3.5" /> OFFICIAL MASTER LAYOUT PLAN
              </span>
              
              <h2 className="mt-2 font-display text-3xl font-semibold leading-tight text-slate-900 sm:text-5xl">
                13 Acres of Architectural Precision.
              </h2>
              
              <p className="mt-3 text-xs leading-relaxed text-slate-600 sm:text-sm">
                Official DTCP approved layout plan situated directly on the Vikarabad-Hyderabad Highway corridor. Engineered with wide internal blacktop roads, designated open parks, and commercial utility zones.
              </p>

              {/* Official Badges */}
              <div className="mt-4 flex flex-wrap items-center gap-3">
                <div className="inline-flex items-center gap-1.5 rounded-full border border-[#d4a359]/40 bg-[#d4a359]/10 px-3 py-1 text-xs font-bold text-amber-900">
                  <BadgeCheck className="size-4 text-[#d4a359]" /> DTCP LP No: 0025/LO/3042/2023
                </div>
                <div className="inline-flex items-center gap-1.5 rounded-full border border-[#16a34a]/40 bg-[#16a34a]/10 px-3 py-1 text-xs font-bold text-emerald-900">
                  <ShieldCheck className="size-4 text-[#16a34a]" /> TG RERA No: P02100005950
                </div>
              </div>

              {/* Master Plan Key Specifications */}
              <div className="mt-6 space-y-2">
                {[
                  { label: "Highway Frontage", val: "Vikarabad-Hyderabad Highway (66' / 100' Wide)", color: "#0284c7" },
                  { label: "Total Plotted Units", val: "143 Villa Plots (150 to 650 Sq. Yds)", color: "#16a34a" },
                  { label: "Internal Road Network", val: "40' Main & 30' Wide BT Roads", color: "#d4a359" },
                  { label: "Greenery & Parks", val: "Dedicated Landscaped Parks & Open Spaces", color: "#16a34a" },
                  { label: "Statutory Approval", val: "100% DTCP Compliant with Clear Freehold Title", color: "#0284c7" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between p-3 rounded bg-slate-50 text-xs">
                    <span className="font-bold" style={{ color: item.color }}>{item.label}</span>
                    <span className="font-semibold text-slate-900">{item.val}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href="/sai-sindhu-master-plan.jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 items-center gap-2 rounded bg-[#0284c7] px-5 text-xs font-bold uppercase text-white shadow hover:bg-[#0369a1] transition-colors"
                >
                  View Full Resolution Map <ArrowUpRight className="size-4" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex h-11 items-center gap-2 rounded border border-slate-200 bg-white px-4 text-xs font-bold uppercase text-slate-800 shadow-xs hover:bg-slate-50 transition-colors"
                >
                  Request Plot Availability <ChevronRight className="size-4" />
                </a>
              </div>
            </div>

            {/* Clean Master Plan Image */}
            <div className="overflow-hidden rounded-lg shadow-md border border-slate-100">
              <img
                src={masterPlanOfficialImage}
                alt="Official Master Layout Plan of Sai Sindhu Developers"
                loading="lazy"
                width={1600}
                height={1100}
                className="w-full object-contain"
              />
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 2 (ORDER: 4): PLOT SIZES & CONFIGURATION EXPLORER */}
      <section id="plot-types" className="relative bg-slate-50/50 py-16 sm:py-20 border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          
          <div className="text-center">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0284c7] uppercase tracking-wider">
              <LandPlot className="size-3.5" /> PLOT CONFIGURATIONS & DIMENSIONS
            </span>
            <h2 className="mt-2 font-display text-3xl font-semibold text-slate-900 sm:text-5xl">
              Choose the Canvas for Your Dream Villa.
            </h2>
            <p className="mx-auto mt-2 max-w-2xl text-xs leading-relaxed text-slate-600 sm:text-sm">
              From compact weekend getaways to signature luxury estates, choose from tailored plot dimensions configured for optimal sunlight and authentic Vaastu alignment.
            </p>
          </div>

          {/* Plot Category Cards */}
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {plotCategories.map((plot, index) => (
              <div
                key={plot.type}
                className="flex flex-col justify-between p-6 rounded-lg bg-white border-t-4 shadow-sm hover:shadow-md transition-shadow"
                style={{ borderTopColor: plot.color }}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="rounded px-2.5 py-1 text-[10px] font-bold uppercase text-white" style={{ backgroundColor: plot.color }}>
                      {plot.badge}
                    </span>
                    <span className="font-display text-xl font-bold text-slate-400">0{index + 1}</span>
                  </div>

                  <h3 className="mt-4 font-display text-2xl font-bold text-slate-900">{plot.type}</h3>

                  <div className="mt-3 rounded bg-slate-50 p-3">
                    <div className="flex items-baseline justify-between border-b border-slate-200/60 pb-2">
                      <span className="text-xs font-bold text-slate-500">Area:</span>
                      <strong className="text-sm font-bold" style={{ color: plot.color }}>{plot.sizeRange}</strong>
                    </div>
                    <div className="flex items-baseline justify-between pt-2">
                      <span className="text-xs font-bold text-slate-500">Total Built Footprint:</span>
                      <strong className="text-xs font-bold text-slate-800">{plot.sqFt}</strong>
                    </div>
                  </div>

                  <p className="mt-4 text-xs font-semibold" style={{ color: plot.color }}>{plot.highlight}</p>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600">{plot.description}</p>

                  <div className="mt-4 space-y-1.5 border-t border-slate-100 pt-4">
                    <span className="block text-[10px] font-bold uppercase text-slate-500">Key Specifications:</span>
                    {plot.tags.map((tag) => (
                      <div key={tag} className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                        <Check className="size-3.5 text-[#16a34a]" /> {tag}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-2">
                  <a
                    href="#contact"
                    className="inline-flex h-10 w-full items-center justify-center gap-2 rounded bg-slate-900 text-xs font-bold uppercase text-white transition-colors hover:bg-[#0284c7]"
                  >
                    Inquire Plot Pricing <ArrowUpRight className="size-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Plot Area Estimator */}
          <div className="mt-10 rounded-lg bg-white p-6 sm:p-8 shadow-xs border border-slate-100">
            <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-center">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase text-[#d4a359]">
                  <Calculator className="size-4 text-[#d4a359]" /> Interactive Plot Estimator
                </div>
                <h3 className="mt-2 font-display text-2xl font-bold text-slate-900">
                  Calculate Your Plot Area in Sq. Yards & Sq. Feet
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">
                  Select your desired plot size to see approximate dimensions and total area.
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {[150, 180, 200, 267, 300, 400, 500, 650].map((size) => (
                    <button
                      key={size}
                      onClick={() => setCustomPlotSize(size)}
                      className={`rounded px-3 py-1.5 text-xs font-bold transition-colors ${
                        customPlotSize === size
                          ? "bg-[#0284c7] text-white shadow-xs"
                          : "border border-slate-200 bg-slate-50 text-slate-800 hover:bg-[#0284c7]/10"
                      }`}
                    >
                      {size} Sq. Yd
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 rounded bg-slate-50 p-4 text-center sm:grid-cols-3">
                <div className="rounded bg-white p-3 shadow-2xs">
                  <span className="block text-[10px] font-bold uppercase text-slate-500">Plot Size</span>
                  <strong className="font-display text-2xl font-bold text-[#0284c7]">{customPlotSize}</strong>
                  <span className="block text-[10px] text-slate-500">Sq. Yards</span>
                </div>

                <div className="rounded bg-white p-3 shadow-2xs">
                  <span className="block text-[10px] font-bold uppercase text-slate-500">Total Area</span>
                  <strong className="font-display text-2xl font-bold text-[#16a34a]">{calculatedSqFt}</strong>
                  <span className="block text-[10px] text-slate-500">Sq. Feet</span>
                </div>

                <div className="col-span-2 rounded bg-white p-3 shadow-2xs sm:col-span-1">
                  <span className="block text-[10px] font-bold uppercase text-slate-500">Configuration</span>
                  <strong className="text-xs font-bold text-[#d4a359]">
                    {customPlotSize <= 200 ? "2-3 BHK Cottage" : customPlotSize <= 350 ? "3-4 BHK Duplex" : "Luxury Villa"}
                  </strong>
                  <span className="block text-[10px] text-slate-500">With Garden</span>
                </div>

                <div className="col-span-2 sm:col-span-3">
                  <a
                    href="#contact"
                    className="inline-flex h-9 w-full items-center justify-center gap-2 rounded bg-slate-900 text-xs font-bold text-white hover:bg-[#0284c7] transition-colors"
                  >
                    Check Availability for {customPlotSize} Sq. Yd Plot <ArrowUpRight className="size-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 3 (ORDER: 5): AMENITIES & CLUBHOUSE */}
      <section id="amenities" className="bg-white py-16 sm:py-20 border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          
          <div className="text-center">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#16a34a] uppercase tracking-wider">
              <Sparkles className="size-3.5" /> PLANNED IN EVERY DETAIL
            </span>
            <h2 className="mt-2 font-display text-3xl font-semibold text-slate-900 sm:text-5xl">
              Essential Infrastructure & Lifestyle Comforts.
            </h2>
            <p className="mx-auto mt-2 max-w-2xl text-xs text-slate-600 sm:text-sm">
              Every utility, road surface, drainage channel, and power connection is pre-built before hand-over.
            </p>
          </div>

          {/* Key Infrastructure Badges Grid */}
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {amenities.map(({ icon: Icon, title, text, color }, i) => (
              <div
                key={title}
                className="p-6 rounded-lg bg-slate-50 border-l-4 hover:shadow-xs transition-shadow"
                style={{ borderLeftColor: color }}
              >
                <div className="flex items-start justify-between">
                  <div className="grid size-12 place-items-center rounded-full bg-white shadow-2xs" style={{ color }}>
                    <Icon className="size-6" />
                  </div>
                  <span className="font-display text-2xl font-bold text-slate-300">0{i + 1}</span>
                </div>
                <h3 className="mt-4 text-base font-bold text-slate-900">{title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">{text}</p>
              </div>
            ))}
          </div>

          {/* Clubhouse Showcase */}
          <div className="mt-14 rounded-lg bg-slate-50 p-6 sm:p-8">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
              <div className="overflow-hidden rounded-lg shadow-sm">
                <img
                  src={amenitiesLifeImage}
                  alt="Clubhouse and sports recreation center"
                  className="aspect-[16/11] w-full object-cover"
                />
              </div>

              <div>
                <span className="text-xs font-bold uppercase text-[#0284c7]">Active Lifestyle & Recreation</span>
                <h3 className="mt-2 font-display text-2xl font-bold text-slate-900 sm:text-3xl">
                  Recreation for Every Family Member.
                </h3>
                <p className="mt-3 text-xs leading-relaxed text-slate-600 sm:text-sm">
                  The clubhouse and outdoor recreation spaces provide amenities to stay active, relax, and socialize.
                </p>

                <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-3">
                  {[
                    "Multi-Level Clubhouse", "Fitness Gym", "Community Hall",
                    "Indoor Games", "Children Play Zone", "Jogging Track",
                    "Cricket Net", "Manicured Parks", "Yoga Lawn"
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 rounded bg-white p-2.5 text-[11px] font-semibold text-slate-800 shadow-2xs"
                    >
                      <Check className="size-3 shrink-0 text-[#16a34a]" />
                      <span className="truncate">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 5 (ORDER: 6): NEARBY LOCATIONS UI - CENTER SAI SINDHU DEVELOPERS + AROUND CIRCULAR IMAGES WITH TEXT ON IMAGES */}
      <section id="nearby" className="bg-white py-16 sm:py-24 text-slate-900 border-b border-slate-100 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0284c7] uppercase tracking-wider">
              <MapPin className="size-3.5" /> STRATEGIC HIGHWAY CONNECTIVITY
            </span>
            <h2 className="mt-2 font-display text-3xl font-semibold leading-tight text-slate-900 sm:text-5xl">
              Connected to Everywhere from Vikarabad.
            </h2>
            <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
              Enjoy peaceful living with seamless signal-free transit to Vikarabad town, scenic hill retreats, and Hyderabad's IT corridor.
            </p>
          </div>

          {/* Central Radial Layout: Center Brand Hub + Surrounding Circular Image Bubbles with Text on Images */}
          <div className="relative mx-auto flex flex-col items-center justify-center">
            
            <div className="w-full max-w-5xl">
              
              {/* Upper Section: Top-Left Circle, Center Brand Hub, Top-Right Circle */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-center text-center">
                
                {/* 1. Top-Left Circle Image (5 KM - Vikarabad Town & Railway) */}
                <div className="flex flex-col items-center justify-center">
                  <div
                    className="relative flex size-44 sm:size-52 flex-col items-center justify-center rounded-full overflow-hidden shadow-xl border-4 sm:border-[6px] group transition-transform duration-300 hover:scale-105"
                    style={{ borderColor: locVikarabad.borderColor }}
                  >
                    {/* Background Location Photo */}
                    <img
                      src={locVikarabad.image}
                      alt={locVikarabad.title}
                      className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Dark Glass Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/70 to-slate-950/50" />
                    
                    {/* Directional Triangle Pointer */}
                    <div
                      className="hidden lg:block absolute -right-[1px] top-1/2 -translate-y-1/2 size-0 border-y-[12px] border-y-transparent border-l-[16px] pointer-events-none z-20"
                      style={{ borderLeftColor: locVikarabad.borderColor }}
                    />
                    
                    {/* On-Image Text Overlays */}
                    <span className="relative z-10 font-sans text-3xl sm:text-4xl font-black text-white leading-none tracking-tight">
                      {locVikarabad.distance}
                    </span>
                    <span className="relative z-10 mt-1 text-[10px] sm:text-[11px] font-extrabold uppercase tracking-tight text-[#d4a359] leading-tight max-w-[130px] px-2">
                      {locVikarabad.title}
                    </span>
                    <span className="relative z-10 mt-0.5 text-[9px] font-semibold text-slate-200">
                      {locVikarabad.time}
                    </span>
                  </div>
                </div>

                {/* Central Brand Hub - Sai Sindhu Developers Centerpiece */}
                <div className="flex flex-col items-center justify-center py-4">
                  <div className="flex size-48 sm:size-56 flex-col items-center justify-center rounded-full bg-white border-4 border-slate-200 shadow-xl p-4 text-center">
                    <span className="text-[10px] sm:text-xs font-extrabold text-slate-500 uppercase tracking-wider">
                      Unleash Your Imagination with
                    </span>
                    <div className="mt-2 flex items-center justify-center">
                      <img
                        src={logoImg}
                        alt="Sai Sindhu Developers"
                        className="h-12 sm:h-14 w-auto max-w-[170px] object-contain"
                      />
                    </div>
                    <span className="mt-1.5 rounded-full bg-[#16a34a]/10 px-2.5 py-0.5 text-[9px] font-bold text-[#16a34a]">
                      Kothrepally · Vikarabad
                    </span>
                  </div>
                </div>

                {/* 6. Top-Right Circle Image (55 KM - RGIA Airport & Hitec City) */}
                <div className="flex flex-col items-center justify-center">
                  <div
                    className="relative flex size-44 sm:size-52 flex-col items-center justify-center rounded-full overflow-hidden shadow-xl border-4 sm:border-[6px] group transition-transform duration-300 hover:scale-105"
                    style={{ borderColor: locAirport.borderColor }}
                  >
                    {/* Background Location Photo */}
                    <img
                      src={locAirport.image}
                      alt={locAirport.title}
                      className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Dark Glass Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/70 to-slate-950/50" />
                    
                    {/* Directional Triangle Pointer */}
                    <div
                      className="hidden lg:block absolute -left-[1px] top-1/2 -translate-y-1/2 size-0 border-y-[12px] border-y-transparent border-r-[16px] pointer-events-none z-20"
                      style={{ borderRightColor: locAirport.borderColor }}
                    />
                    
                    {/* On-Image Text Overlays */}
                    <span className="relative z-10 font-sans text-3xl sm:text-4xl font-black text-white leading-none tracking-tight">
                      {locAirport.distance}
                    </span>
                    <span className="relative z-10 mt-1 text-[10px] sm:text-[11px] font-extrabold uppercase tracking-tight text-[#d4a359] leading-tight max-w-[130px] px-2">
                      {locAirport.title}
                    </span>
                    <span className="relative z-10 mt-0.5 text-[9px] font-semibold text-slate-200">
                      {locAirport.time}
                    </span>
                  </div>
                </div>

              </div>

              {/* Lower Arching Row: 4 Surrounding Circular Image Bubbles with Text on Images */}
              <div className="mt-6 sm:mt-10 grid grid-cols-2 md:grid-cols-4 gap-5 sm:gap-6 items-center text-center">
                
                {/* 2. Mid-Left Circle Image (12 KM - Ananthagiri Hills) */}
                <div className="flex flex-col items-center justify-center">
                  <div
                    className="relative flex size-36 sm:size-44 flex-col items-center justify-center rounded-full overflow-hidden shadow-lg border-4 sm:border-[5px] group transition-transform duration-300 hover:scale-105"
                    style={{ borderColor: locAnanthagiri.borderColor }}
                  >
                    <img
                      src={locAnanthagiri.image}
                      alt={locAnanthagiri.title}
                      className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/70 to-slate-950/50" />
                    
                    <span className="relative z-10 font-sans text-2xl sm:text-3xl font-black text-white leading-none">
                      {locAnanthagiri.distance}
                    </span>
                    <span className="relative z-10 mt-1 text-[9px] sm:text-[10px] font-extrabold uppercase tracking-tight text-[#d4a359] leading-tight max-w-[115px] px-2">
                      {locAnanthagiri.title}
                    </span>
                    <span className="relative z-10 text-[8px] font-semibold text-slate-200">
                      {locAnanthagiri.time}
                    </span>
                  </div>
                </div>

                {/* 3. Bottom-Left Circle Image (22 KM - Shankarpally) */}
                <div className="flex flex-col items-center justify-center">
                  <div
                    className="relative flex size-36 sm:size-44 flex-col items-center justify-center rounded-full overflow-hidden shadow-lg border-4 sm:border-[5px] group transition-transform duration-300 hover:scale-105"
                    style={{ borderColor: locShankarpally.borderColor }}
                  >
                    <img
                      src={locShankarpally.image}
                      alt={locShankarpally.title}
                      className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/70 to-slate-950/50" />
                    
                    <span className="relative z-10 font-sans text-2xl sm:text-3xl font-black text-white leading-none">
                      {locShankarpally.distance}
                    </span>
                    <span className="relative z-10 mt-1 text-[9px] sm:text-[10px] font-extrabold uppercase tracking-tight text-[#d4a359] leading-tight max-w-[115px] px-2">
                      {locShankarpally.title}
                    </span>
                    <span className="relative z-10 text-[8px] font-semibold text-slate-200">
                      {locShankarpally.time}
                    </span>
                  </div>
                </div>

                {/* 4. Bottom-Right Circle Image (30 KM - Moinabad) */}
                <div className="flex flex-col items-center justify-center">
                  <div
                    className="relative flex size-36 sm:size-44 flex-col items-center justify-center rounded-full overflow-hidden shadow-lg border-4 sm:border-[5px] group transition-transform duration-300 hover:scale-105"
                    style={{ borderColor: locMoinabad.borderColor }}
                  >
                    <img
                      src={locMoinabad.image}
                      alt={locMoinabad.title}
                      className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/70 to-slate-950/50" />
                    
                    <span className="relative z-10 font-sans text-2xl sm:text-3xl font-black text-white leading-none">
                      {locMoinabad.distance}
                    </span>
                    <span className="relative z-10 mt-1 text-[9px] sm:text-[10px] font-extrabold uppercase tracking-tight text-[#d4a359] leading-tight max-w-[115px] px-2">
                      {locMoinabad.title}
                    </span>
                    <span className="relative z-10 text-[8px] font-semibold text-slate-200">
                      {locMoinabad.time}
                    </span>
                  </div>
                </div>

                {/* 5. Mid-Right Circle Image (42 KM - Gachibowli) */}
                <div className="flex flex-col items-center justify-center">
                  <div
                    className="relative flex size-36 sm:size-44 flex-col items-center justify-center rounded-full overflow-hidden shadow-lg border-4 sm:border-[5px] group transition-transform duration-300 hover:scale-105"
                    style={{ borderColor: locGachibowli.borderColor }}
                  >
                    <img
                      src={locGachibowli.image}
                      alt={locGachibowli.title}
                      className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/70 to-slate-950/50" />
                    
                    <span className="relative z-10 font-sans text-2xl sm:text-3xl font-black text-white leading-none">
                      {locGachibowli.distance}
                    </span>
                    <span className="relative z-10 mt-1 text-[9px] sm:text-[10px] font-extrabold uppercase tracking-tight text-[#d4a359] leading-tight max-w-[115px] px-2">
                      {locGachibowli.title}
                    </span>
                    <span className="relative z-10 text-[8px] font-semibold text-slate-200">
                      {locGachibowli.time}
                    </span>
                  </div>
                </div>

              </div>

            </div>

            {/* Bottom Get a Quote Button */}
            <div className="mt-12 sm:mt-14 text-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-md bg-[#d4a359] hover:bg-[#b8873f] px-10 py-3.5 text-sm font-bold uppercase tracking-wider text-white shadow-md transition-colors"
              >
                Get a Quote <ArrowUpRight className="size-4 ml-1.5" />
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 7 (ORDER: 7): SPECIFICATIONS */}
      <section id="specifications" className="bg-white py-16 sm:py-20 border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <div className="text-center">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0284c7] uppercase tracking-wider">
              <FileText className="size-3.5" /> PROJECT SPECIFICATIONS
            </span>
            <h2 className="mt-2 font-display text-3xl font-semibold text-slate-900 sm:text-5xl">
              Engineered for Lifetime Reliability.
            </h2>
            <p className="mx-auto mt-2 max-w-2xl text-xs text-slate-600 sm:text-sm">
              Every utility, pathway, water conduit, and perimeter barrier is built strictly in accordance with statutory guidelines.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Roads & Walkways", icon: RouteIcon, desc: "40' Main Arterial & 30' Internal BT roads with concrete kerb stones and paved pedestrian walkways.", color: "#0284c7" },
              { title: "Power & Underground Cabling", icon: Zap, desc: "Dedicated transformer, underground armored electrical cabling to each plot, and designer LED streetlights.", color: "#16a34a" },
              { title: "Water Supply Network", icon: Droplets, desc: "Centrally positioned overhead storage tank with dedicated supply conduits to every individual plot.", color: "#d4a359" },
              { title: "7-Foot Gated Security", icon: ShieldCheck, desc: "7-foot high perimeter compound wall reinforced with live solar fencing and 24/7 CC camera surveillance.", color: "#0284c7" },
              { title: "Avenue Landscaping", icon: Trees, desc: "Indigenous shade-giving and flowering trees with automated drip-irrigation networks.", color: "#16a34a" },
              { title: "Storm Water Drainage", icon: Waves, desc: "Concealed RCC underground drainage network designed for zero waterlogging during heavy monsoon rains.", color: "#d4a359" },
            ].map((spec) => (
              <div key={spec.title} className="p-5 rounded-lg bg-slate-50 border-t-2" style={{ borderTopColor: spec.color }}>
                <div className="flex items-center gap-3">
                  <div className="grid size-10 place-items-center rounded-full bg-white shadow-2xs" style={{ color: spec.color }}>
                    <spec.icon className="size-5" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900">{spec.title}</h3>
                </div>
                <p className="mt-3 text-xs leading-relaxed text-slate-600">{spec.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8 (ORDER: 8): FREQUENTLY ASKED QUESTIONS */}
      <section id="faq" className="bg-slate-50/50 py-16 sm:py-20 border-b border-slate-100">
        <div className="mx-auto max-w-4xl px-4 sm:px-8">
          
          <div className="text-center">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0284c7] uppercase tracking-wider">
              <HelpCircle className="size-3.5" /> BUYER QUERIES
            </span>
            <h2 className="mt-2 font-display text-3xl font-semibold text-slate-900 sm:text-5xl">
              Frequently Asked Questions.
            </h2>
            <p className="mx-auto mt-2 max-w-xl text-xs text-slate-600 sm:text-sm">
              Transparent answers to common questions asked by plot buyers and investors.
            </p>
          </div>

          <div className="mt-8 space-y-3">
            {faqs.map((faq, idx) => (
              <div
                key={faq.q}
                className="overflow-hidden rounded-lg bg-white shadow-2xs border border-slate-100"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="flex w-full items-center justify-between p-4 text-left text-xs font-bold text-slate-900 sm:text-sm"
                >
                  <span className="flex items-center gap-2">
                    <span className="text-[#0284c7] font-display text-base">Q{idx + 1}.</span> {faq.q}
                  </span>
                  <ChevronDown
                    className={`size-4 shrink-0 text-[#0284c7] transition-transform duration-200 ${
                      activeFaq === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {activeFaq === idx && (
                  <div className="border-t border-slate-100 bg-slate-50/50 p-4 text-xs leading-relaxed text-slate-600 sm:text-sm">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 9 (ORDER: 9): CONTACT & SITE VISIT BOOKING - Seamless Open Layout */}
      <section id="contact" className="relative bg-white py-16 sm:py-24 text-slate-900">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-8 lg:grid-cols-[0.85fr_1.15fr]">
          
          <div>
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0284c7] uppercase tracking-wider">
              <Phone className="size-3.5" /> GET IN TOUCH
            </span>
            <h2 className="mt-2 font-display text-4xl font-semibold leading-tight text-slate-900 sm:text-6xl">
              Your Ideal Plot is Waiting.
            </h2>
            <p className="mt-3 text-xs leading-relaxed text-slate-600 sm:text-sm">
              Connect with our dedicated Sai Sindhu Developers plot advisors for exact plot availability, layout blueprints, spot registration pricing, and complimentary weekend site visits.
            </p>

            <div className="mt-6 space-y-4">
              <a
                href="tel:+918747994499"
                className="flex items-center gap-3 rounded-lg border-l-4 border-[#0284c7] bg-slate-50 p-4 text-base font-bold text-slate-900 hover:bg-slate-100 transition-colors"
              >
                <div className="grid size-10 place-items-center rounded-full bg-[#0284c7] text-white">
                  <Phone className="size-5" />
                </div>
                <div>
                  <span className="block text-[10px] font-bold uppercase text-slate-500">Direct Sales Helpline</span>
                  <span className="text-[#0284c7] font-bold">+91 87479 94499</span>
                </div>
              </a>

              <div className="rounded-lg border-l-4 border-[#16a34a] bg-slate-50 p-4 text-xs">
                <strong className="block text-slate-900 font-bold">Complimentary Weekend Site Tour:</strong>
                <p className="mt-1 text-slate-600">
                  Complimentary cab pickups available from Hyderabad (Jubilee Hills, Gachibowli, Kukatpally, Madhapur) every Saturday and Sunday.
                </p>
              </div>
            </div>
          </div>

          {/* Clean Fluid Form */}
          <form
            className="grid gap-4 rounded-lg bg-slate-50 p-6 text-slate-900 sm:grid-cols-2 sm:p-8"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            <div className="sm:col-span-2">
              <h3 className="font-display text-2xl font-bold text-slate-900">Schedule a Free Site Visit</h3>
              <p className="text-xs text-slate-500">Receive price sheet, layout blueprint & brochure.</p>
            </div>

            <label className="text-xs font-bold text-slate-800">
              Full Name *
              <input
                required
                className="mt-1.5 h-11 w-full rounded border border-slate-300 bg-white px-3.5 text-xs text-slate-900 outline-none focus:ring-2 focus:ring-[#0284c7]"
                placeholder="e.g. Ramesh Kumar"
              />
            </label>

            <label className="text-xs font-bold text-slate-800">
              Phone Number (WhatsApp) *
              <input
                required
                type="tel"
                className="mt-1.5 h-11 w-full rounded border border-slate-300 bg-white px-3.5 text-xs text-slate-900 outline-none focus:ring-2 focus:ring-[#0284c7]"
                placeholder="+91 98765 43210"
              />
            </label>

            <label className="text-xs font-bold text-slate-800">
              Email Address
              <input
                type="email"
                className="mt-1.5 h-11 w-full rounded border border-slate-300 bg-white px-3.5 text-xs text-slate-900 outline-none focus:ring-2 focus:ring-[#0284c7]"
                placeholder="you@example.com"
              />
            </label>

            <label className="text-xs font-bold text-slate-800">
              Interested Plot Size
              <select className="mt-1.5 h-11 w-full rounded border border-slate-300 bg-white px-3.5 text-xs text-slate-900 outline-none focus:ring-2 focus:ring-[#0284c7]">
                <option>150 – 200 Sq. Yds (Standard Villa)</option>
                <option>250 – 350 Sq. Yds (Executive Villa)</option>
                <option>400 – 650 Sq. Yds (Signature Estate)</option>
              </select>
            </label>

            <label className="text-xs font-bold text-slate-800 sm:col-span-2">
              Message or Specific Requirement
              <textarea
                className="mt-1.5 min-h-20 w-full resize-none rounded border border-slate-300 bg-white p-3 text-xs text-slate-900 outline-none focus:ring-2 focus:ring-[#0284c7]"
                placeholder="Preferred facing (East/North), site visit dates..."
              />
            </label>

            <p className="text-[10px] leading-tight text-slate-500 sm:col-span-2">
              🔒 Your privacy is fully respected. Authorized Sai Sindhu Developers executives will contact you.
            </p>

            <button
              type="submit"
              className="inline-flex h-11 items-center justify-center gap-2 rounded bg-[#0284c7] px-6 text-xs font-bold uppercase tracking-wider text-white sm:col-span-2 transition-colors hover:bg-[#0369a1] shadow-sm"
            >
              {sent ? (
                <>
                  Site Visit Request Received! We Will Call You <Check className="size-4" />
                </>
              ) : (
                <>
                  Request Instant Callback & Price Sheet <ChevronRight className="size-4" />
                </>
              )}
            </button>
          </form>

        </div>
      </section>

      {/* Footer - White Background with Black / Dark Slate Text & Logo Colors */}
      <footer className="bg-white text-slate-900 border-t border-slate-200 shadow-xs">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-8 md:grid-cols-4">
          
          {/* Col 1: Brand & Founder */}
          <div className="md:col-span-1">
            <img
              src={logoImg}
              alt="Sai Sindhu Developers Logo"
              className="h-16 sm:h-20 w-auto max-w-[200px] object-contain"
            />
            <p className="mt-4 text-xs leading-relaxed text-slate-600">
              <strong className="text-slate-900 font-bold">Sai Sindhu Developers</strong> — Founded by <strong className="text-slate-900 font-semibold">Pabbathi Tharun Raju</strong>. Transforming pristine land into enduring family sanctuaries with complete legal clarity.
            </p>
            <div className="mt-3.5 inline-flex items-center gap-1.5 rounded-full border border-[#0284c7]/30 bg-[#0284c7]/5 px-3 py-1 text-xs font-bold text-[#0284c7]">
              <BadgeCheck className="size-3.5" /> TG RERA: P02100005950
            </div>
          </div>

          {/* Col 2: Leadership & Heritage */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-2">
              Leadership
            </h3>
            <p className="mt-3 text-xs font-bold text-slate-800">
              Pabbathi Tharun Raju
            </p>
            <span className="text-[11px] font-semibold text-[#0284c7]">Founder & Managing Director</span>
            <p className="mt-2 text-xs leading-relaxed text-slate-600">
              Pioneering 100% legally approved, Vaastu-compliant gated villa plot communities in Telangana.
            </p>
          </div>

          {/* Col 3: Corporate Office */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-2">
              Corporate Office
            </h3>
            <p className="mt-3 text-xs leading-relaxed text-slate-600">
              3rd & 4th Floor, Apurupa One, Plot No. 108, Road Number 10, Jawahar Colony, Jubilee Hills, Hyderabad, Telangana – 500033
            </p>
            <p className="mt-2 text-[11px] font-medium text-slate-500">
              Mon – Sat: 9:30 AM – 6:30 PM
            </p>
          </div>

          {/* Col 4: Project Site & Sales */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-2">
              Project Site & Visits
            </h3>
            <p className="mt-3 text-xs leading-relaxed text-slate-600">
              Sai Sindhu Developers, Kothrepally Highway, Vikarabad, Telangana – 501101
            </p>
            <a
              href="tel:+918747994499"
              className="mt-3 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1.5 text-xs font-bold text-slate-900 hover:bg-slate-100 hover:text-[#0284c7] transition-colors"
            >
              <Phone className="size-3.5 text-[#0284c7]" /> +91 87479 94499
            </a>
          </div>

        </div>

        <div className="border-t border-slate-200 py-4 text-center text-xs text-slate-500">
          © 2026 Sai Sindhu Developers. All rights reserved. Founder: Pabbathi Tharun Raju · TG RERA Reg. No: P02100005950.
        </div>
      </footer>

      {/* Floating WhatsApp Quick Action Button */}
      <a
        href="https://api.whatsapp.com/send?phone=918747994499&text=Hi%20Sai%20Sindhu%20Developers!%20I%20am%20interested%20in%20your%20residential%20plots%20in%20Kothrepally,%20Vikarabad.%20Please%20share%20price%20sheet%20and%20plot%20availability."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-[#16a34a] px-4 py-3 text-xs font-bold text-white shadow-lg transition-transform hover:scale-105"
      >
        <Phone className="size-4" />
        <span className="hidden sm:inline">WhatsApp Us</span>
      </a>
    </main>
  );
}
