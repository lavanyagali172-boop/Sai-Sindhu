import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import Link from "next/link";
import { Phone, BadgeCheck } from "lucide-react";
import Navbar from "@/components/Navbar";
import PagePreloader from "@/components/PagePreloader";
import { navLinks } from "@/data/navigation";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://saisindhudevelopers.com"),
  title: "Sai Sindhu Developers | Premium Gated Villa Plots at Vikarabad, Hyderabad",
  description:
    "Discover 143 luxury DTCP (LP No. 0025/LO/3042/2023) & TG RERA (P02100005950) approved villa plots across 13 scenic acres in Kothrepally, Vikarabad by Sai Sindhu Developers. Master-planned with clubhouse, 40' roads, 24/7 security & spot registration.",
  keywords: [
    "Sai Sindhu Developers",
    "Vikarabad Villa Plots",
    "Gated Community Hyderabad",
    "DTCP Approved Plots Vikarabad",
    "TG RERA Plots",
    "Kothrepally Highway Plots",
    "Ananthagiri Hills Property",
  ],
  authors: [{ name: "Sai Sindhu Developers" }],
  openGraph: {
    title: "Sai Sindhu Developers | Luxury Gated Villa Plots at Vikarabad",
    description:
      "13-Acre premium residential plotted community in Kothrepally, Vikarabad by Sai Sindhu Developers. DTCP LP No: 0025/LO/3042/2023 · TG RERA Reg. No: P02100005950.",
    url: "https://saisindhudevelopers.com",
    siteName: "Sai Sindhu Developers",
    images: [
      {
        url: "/assets/sai-sindhu-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Sai Sindhu Developers Vikarabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/assets/sai_sindhu_developers.png", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#0284c7",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${inter.variable}`}
      data-scroll-behavior="smooth"
    >
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" sizes="any" />
        <link rel="icon" href="/assets/sai_sindhu_developers.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
      </head>
      <body className="bg-white text-slate-900 font-sans antialiased selection:bg-[#0284c7] selection:text-white flex flex-col min-h-screen">
        {/* Animated Brand Preloader on initial page open */}
        <PagePreloader />

        {/* Dynamic Global Sticky Navigation Bar with Loading Indicator */}
        <Navbar />

        {/* Main Content Area */}
        <div className="flex-1">{children}</div>

        {/* Global Footer */}
        <footer className="bg-white text-slate-900 border-t border-slate-200 shadow-xs mt-auto">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-8 md:grid-cols-4">
            <div className="md:col-span-1">
              <img
                src="/assets/sai_sindhu_developers.png"
                alt="Sai Sindhu Developers Logo"
                className="h-24 sm:h-28 w-auto max-w-[280px] object-contain"
              />
              <p className="mt-4 text-xs leading-relaxed text-slate-600">
                <strong className="text-slate-900 font-bold">Sai Sindhu Developers</strong> — Founded
                by <strong className="text-slate-900 font-semibold">Pabbathi Tharun Raju</strong>.
                Transforming pristine land into enduring family sanctuaries with complete legal clarity.
              </p>
              <div className="mt-3.5 inline-flex items-center gap-1.5 rounded-full border border-[#0284c7]/30 bg-[#0284c7]/5 px-3 py-1 text-xs font-bold text-[#0284c7]">
                <BadgeCheck className="size-3.5" /> TG RERA: P02100005950
              </div>
            </div>

            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-2">
                Quick Pages
              </h3>
              <ul className="mt-3 space-y-2 text-xs">
                {navLinks.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      prefetch={true}
                      className="text-slate-600 hover:text-[#0284c7] transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-2">
                Corporate Office
              </h3>
              <p className="mt-3 text-xs leading-relaxed text-slate-600">
                3rd & 4th Floor, Apurupa One, Plot No. 108, Road Number 10, Jawahar Colony, Jubilee
                Hills, Hyderabad, Telangana – 500033
              </p>
              <p className="mt-2 text-[11px] font-medium text-slate-500">
                Mon – Sat: 9:30 AM – 6:30 PM
              </p>
            </div>

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
            © 2026 Sai Sindhu Developers. All rights reserved. Founder: Pabbathi Tharun Raju · TG RERA
            Reg. No: P02100005950.
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
      </body>
    </html>
  );
}
