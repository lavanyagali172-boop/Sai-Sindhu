import type { Metadata } from "next";
import Link from "next/link";
import { Leaf, BadgeCheck, Trees, Building2, Users, Quote, Sparkles, ChevronRight, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us & Leadership | Sai Sindhu Developers",
  description:
    "Learn about Sai Sindhu Developers, founded by Pabbathi Tharun Raju. Delivering 100% legally clear, DTCP & TG RERA approved villa plots in Vikarabad.",
};

const whySaiSindhu = [
  {
    icon: BadgeCheck,
    number: "01",
    title: "100% TG RERA Transparency & Vaastu",
    text: "Every plot is precision-aligned according to Vaastu principles with DTCP LP No. 0025/LO/3042/2023 and TG RERA Registration P02100005950.",
    highlight: "RERA Approved (P02100005950)",
    color: "#0284c7",
  },
  {
    icon: Trees,
    number: "02",
    title: "Nature-Led Living near Ananthagiri",
    text: "Clean air and peaceful environment surrounded by the greenery and cooler climate of Vikarabad, connected via expressways.",
    highlight: "Pure Air & Greenery",
    color: "#16a34a",
  },
  {
    icon: Building2,
    number: "03",
    title: "Underground Utilities & Security",
    text: "40' & 30' internal blacktop roads, underground power grid, individual water lines, solar fencing, and 24/7 CCTV.",
    highlight: "Ready Infrastructure",
    color: "#0284c7",
  },
  {
    icon: Leaf,
    number: "04",
    title: "Western Hyderabad Growth Corridor",
    text: "Convenient access to Gachibowli, Shankarpally, Mokila, and the Regional Ring Road corridor.",
    highlight: "High Appreciation Zone",
    color: "#d4a359",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-white py-10 sm:py-16 text-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-8" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-[#0284c7] transition-colors">Home</Link>
          <ChevronRight className="size-3 text-slate-400" />
          <span className="text-slate-900 font-bold">About Us & Leadership</span>
        </nav>

        {/* Top Story */}
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#16a34a] uppercase tracking-wider">
              <Leaf className="size-3.5 text-[#16a34a]" /> ABOUT SAI SINDHU DEVELOPERS
            </div>

            <h1 className="mt-3 font-display text-3xl font-bold leading-tight text-slate-900 sm:text-5xl">
              Crafting Peaceful Sanctuaries for Generations to Come.
            </h1>

            <p className="mt-4 text-sm leading-relaxed text-slate-700 sm:text-base">
              Welcome to <strong className="font-bold text-slate-900">Sai Sindhu Developers</strong>. Founded
              by <strong className="font-bold text-slate-900">Pabbathi Tharun Raju</strong>, we
              are committed to creating legally secure, future-ready plotted gated communities
              where families build their dream holiday homes and enduring generational wealth.
            </p>

            <div className="mt-6 space-y-3">
              <div className="flex items-start gap-3.5 border-l-4 border-[#0284c7] bg-slate-50 p-4 rounded-r">
                <BadgeCheck className="size-5 shrink-0 text-[#0284c7] mt-0.5" />
                <p className="text-xs leading-relaxed text-slate-700">
                  <strong className="font-bold text-[#0284c7]">
                    DTCP Approved & TG RERA Registered:
                  </strong>{" "}
                  100% clear marketable freehold title under{" "}
                  <strong className="text-slate-900">DTCP LP No. 0025/LO/3042/2023</strong> and{" "}
                  <strong className="text-slate-900">TG RERA Reg. No: P02100005950</strong>, ready
                  for spot registration.
                </p>
              </div>

              <div className="flex items-start gap-3.5 border-l-4 border-[#16a34a] bg-slate-50 p-4 rounded-r">
                <Trees className="size-5 shrink-0 text-[#16a34a]" />
                <p className="text-xs leading-relaxed text-slate-700">
                  <strong className="font-bold text-[#16a34a]">
                    Serene Ananthagiri Hill Climate:
                  </strong>{" "}
                  Natural greenery and unpolluted air along the Vikarabad-Hyderabad Highway corridor.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="overflow-hidden rounded-2xl shadow-sm border border-slate-100">
              <img
                src="/assets/sai-sindhu-lifestyle.jpg"
                alt="Avenue and landscaped residential plots"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Founder & Managing Director Profile */}
        <div className="mt-16 pt-12 border-t border-slate-200">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div className="overflow-hidden rounded-2xl shadow-sm border border-slate-100">
              <img
                src="/assets/sai-sindhu-founder-vision.jpg"
                alt="Pabbathi Tharun Raju - Founder & Managing Director, Sai Sindhu Developers"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>

            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#d4a359] uppercase tracking-wider">
                <Users className="size-3.5 text-[#d4a359]" /> FOUNDER & MANAGING DIRECTOR
              </div>

              <h2 className="mt-2 font-display text-2xl font-bold text-slate-900 sm:text-4xl">
                Pabbathi Tharun Raju
              </h2>
              <p className="text-xs font-semibold text-slate-600 uppercase tracking-wider">
                Sai Sindhu Developers
              </p>

              <p className="mt-3 text-xs leading-relaxed text-slate-700 sm:text-sm">
                Under the leadership of <strong className="text-slate-900 font-semibold">Pabbathi Tharun Raju</strong>,
                Sai Sindhu Developers was established with a clear mission — to bring complete
                legal clarity, institutional transparency, and high-standard civil engineering to
                Telangana's premier plotted growth corridors.
              </p>

              <div className="mt-4 flex items-start gap-3 border-l-4 border-[#d4a359] bg-amber-50/70 p-3.5 rounded-r">
                <Quote className="size-5 shrink-0 text-[#d4a359]" />
                <p className="text-xs italic text-slate-800 sm:text-sm leading-relaxed">
                  “Our pledge at Sai Sindhu Developers is total transparency, uncompromised
                  infrastructure quality, and timely handover for every plot owner.”
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Sai Sindhu Developers */}
        <div className="mt-16 pt-12 border-t border-slate-200">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0284c7] uppercase tracking-wider">
              <Sparkles className="size-3.5" /> WHY SAI SINDHU DEVELOPERS
            </span>
            <h2 className="mt-2 font-display text-3xl font-semibold text-slate-900 sm:text-4xl">
              Rooted in Integrity, Delivered with Excellence.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {whySaiSindhu.map(({ icon: Icon, number, title, text, highlight, color }) => (
              <div
                key={title}
                className="flex flex-col justify-between p-6 rounded-xl bg-slate-50 border-t-4 hover:shadow-md transition-shadow border border-slate-200/70"
                style={{ borderTopColor: color }}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div
                      className="grid size-12 place-items-center rounded-full bg-white shadow-xs"
                      style={{ color }}
                    >
                      <Icon className="size-6" />
                    </div>
                    <span className="font-display text-2xl font-bold text-slate-300">{number}</span>
                  </div>

                  <span
                    className="mt-4 inline-block text-[10px] font-bold uppercase tracking-wider"
                    style={{ color }}
                  >
                    {highlight}
                  </span>

                  <h3 className="mt-2 text-base font-bold text-slate-900">{title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cross Navigation Strip */}
        <div className="mt-16 pt-10 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-50 p-6 rounded-2xl border border-slate-200">
          <div>
            <h3 className="text-sm font-bold text-slate-900">Explore Further Details</h3>
            <p className="text-xs text-slate-600 mt-0.5">Discover the 13-Acre Master Plan or see all plot dimension configurations.</p>
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
              href="/plot-types"
              className="group inline-flex items-center gap-2 rounded-full bg-[#0284c7] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#0369a1] transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              <span>Plot Sizes</span>
              <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
