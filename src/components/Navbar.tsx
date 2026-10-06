"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, ArrowUpRight, Menu, X, BadgeCheck } from "lucide-react";
import { navLinks } from "@/data/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);

  // Reset loading bar and close mobile menu on route change
  useEffect(() => {
    setIsNavigating(false);
    setMobileMenuOpen(false);
  }, [pathname]);

  const handleLinkClick = (href: string) => {
    if (pathname !== href) {
      setIsNavigating(true);
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top Loading Progress Bar */}
      {isNavigating && (
        <div className="fixed top-0 left-0 right-0 z-[100] h-1 bg-gradient-to-r from-[#0284c7] via-[#38bdf8] to-[#16a34a] animate-pulse shadow-sm shadow-[#0284c7]/50" />
      )}

      {/* Global Sticky Navigation Header */}
      <header className="sticky top-0 z-50 border-b border-slate-200/90 bg-white/95 backdrop-blur-xl shadow-xs transition-all">
        <div className="w-full max-w-7xl mx-auto flex items-center justify-between gap-4 px-4 sm:px-6 lg:px-8 py-2 sm:py-2.5">
          {/* Brand Logo */}
          <Link
            href="/"
            onClick={() => handleLinkClick("/")}
            prefetch={true}
            aria-label="Sai Sindhu Developers Home"
            className="flex shrink-0 items-center gap-3 transition-transform hover:scale-[1.02]"
          >
            <img
              src="/assets/sai_sindhu_developers.png"
              alt="Sai Sindhu Developers Logo"
              className="h-16 sm:h-20 lg:h-22 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden items-center gap-1 md:flex" aria-label="Primary navigation">
            {navLinks.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  prefetch={true}
                  onClick={() => handleLinkClick(item.href)}
                  className={`relative px-3.5 py-2 text-xs lg:text-sm font-bold tracking-tight rounded-lg transition-all duration-200 ${
                    isActive
                      ? "text-[#0284c7] bg-sky-50 shadow-2xs font-extrabold"
                      : "text-slate-700 hover:text-[#0284c7] hover:bg-slate-50"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#0284c7] rounded-full animate-in fade-in" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Helpline & CTA Buttons */}
          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <a
              href="tel:+918747994499"
              className="hidden sm:flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-2 text-xs font-bold text-slate-800 transition-all hover:border-[#0284c7]/50 hover:bg-sky-50 hover:text-[#0284c7]"
            >
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
              </span>
              <Phone className="size-3.5 text-[#0284c7]" />
              <span>+91 87479 94499</span>
            </a>

            <Link
              href="/contact"
              prefetch={true}
              onClick={() => handleLinkClick("/contact")}
              className="inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-[#0284c7] to-[#0369a1] hover:from-[#0369a1] hover:to-[#0284c7] px-4 py-2 sm:px-4.5 sm:py-2.5 text-xs sm:text-sm font-bold text-white shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5"
            >
              <span>Book Visit</span>
              <ArrowUpRight className="size-3.5" />
            </Link>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden grid size-10 place-items-center rounded-lg border border-slate-200 bg-slate-50 text-slate-700 hover:text-[#0284c7] hover:bg-sky-50 transition-colors"
              aria-label={mobileMenuOpen ? "Close Navigation Menu" : "Open Navigation Menu"}
            >
              {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Horizontal Quick Tab Strip */}
        <div className="flex md:hidden overflow-x-auto px-4 py-1.5 gap-2 text-xs border-t border-slate-100 bg-slate-50/70 scrollbar-none">
          {navLinks.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                prefetch={true}
                onClick={() => handleLinkClick(item.href)}
                className={`whitespace-nowrap px-3 py-1 rounded-md font-bold transition-all ${
                  isActive
                    ? "bg-[#0284c7] text-white shadow-xs"
                    : "text-slate-700 hover:text-[#0284c7] bg-white border border-slate-200/80"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* Mobile Fullscreen Animated Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden fixed inset-x-0 top-[76px] bottom-0 z-50 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-white border-b border-slate-200 shadow-xl max-h-[85vh] overflow-y-auto p-5 space-y-4 animate-in slide-in-from-top-4 duration-200">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Navigation Menu
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#0284c7] bg-sky-50 px-2.5 py-0.5 rounded-full">
                  <BadgeCheck className="size-3" /> TG RERA Approved
                </span>
              </div>

              <div className="grid gap-1">
                {navLinks.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      prefetch={true}
                      onClick={() => handleLinkClick(item.href)}
                      className={`flex items-center justify-between px-4 py-3 rounded-xl font-bold text-sm transition-colors ${
                        isActive
                          ? "bg-sky-50 text-[#0284c7] border-l-4 border-[#0284c7]"
                          : "text-slate-800 hover:bg-slate-50 hover:text-[#0284c7]"
                      }`}
                    >
                      <span>{item.label}</span>
                      <ArrowUpRight className="size-4 opacity-60" />
                    </Link>
                  );
                })}
              </div>

              <div className="border-t border-slate-100 pt-4 space-y-2.5">
                <a
                  href="tel:+918747994499"
                  className="flex items-center justify-center gap-2 rounded-xl bg-slate-100 py-3 text-xs font-bold text-slate-800"
                >
                  <Phone className="size-4 text-[#0284c7]" />
                  <span>Call Us: +91 87479 94499</span>
                </a>
                <Link
                  href="/contact"
                  prefetch={true}
                  onClick={() => handleLinkClick("/contact")}
                  className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#0284c7] to-[#0369a1] py-3 text-xs font-bold text-white shadow-sm"
                >
                  <span>Schedule Site Visit</span>
                  <ArrowUpRight className="size-4" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
