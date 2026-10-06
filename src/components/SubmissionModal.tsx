"use client";

import { useEffect, useState } from "react";
import { CheckCircle2, AlertTriangle, X, Phone, MessageSquare, ShieldCheck, RefreshCw } from "lucide-react";

export interface SubmissionModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: "success" | "error";
  title?: string;
  message?: string;
  autoCloseSeconds?: number;
  leadDetails?: {
    name: string;
    phone: string;
    plotSize: string;
    refId?: string;
  };
}

export default function SubmissionModal({
  isOpen,
  onClose,
  type,
  title,
  message,
  autoCloseSeconds = 5,
  leadDetails,
}: SubmissionModalProps) {
  const [countdown, setCountdown] = useState(autoCloseSeconds);

  useEffect(() => {
    if (!isOpen || type !== "success") {
      setCountdown(autoCloseSeconds);
      return;
    }

    setCountdown(autoCloseSeconds);

    // Visual countdown ticker
    const intervalId = setInterval(() => {
      setCountdown((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    // Auto-close after autoCloseSeconds cleanly outside of React render phase
    const timeoutId = setTimeout(() => {
      onClose();
    }, autoCloseSeconds * 1000);

    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  }, [isOpen, type, autoCloseSeconds, onClose]);

  if (!isOpen) return null;

  const isSuccess = type === "success";
  const refCode = leadDetails?.refId || `SSD-${Math.floor(100000 + Math.random() * 900000)}`;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[10000] flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div
        className="relative w-full max-w-lg overflow-hidden rounded-3xl bg-white shadow-2xl border border-slate-200 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Decorative Color Bar */}
        <div
          className={`h-2 w-full ${
            isSuccess
              ? "bg-gradient-to-r from-[#0284c7] via-[#38bdf8] to-[#16a34a]"
              : "bg-gradient-to-r from-rose-500 to-amber-500"
          }`}
        />

        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 grid size-8 place-items-center rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-800 transition-colors"
          aria-label="Close modal and reset form"
        >
          <X className="size-4" />
        </button>

        <div className="p-6 sm:p-8">
          {/* Header Icon & Branding */}
          <div className="flex items-center gap-3.5">
            <div
              className={`grid size-12 shrink-0 place-items-center rounded-2xl shadow-sm ${
                isSuccess
                  ? "bg-emerald-50 text-[#16a34a] border border-emerald-200"
                  : "bg-rose-50 text-rose-600 border border-rose-200"
              }`}
            >
              {isSuccess ? (
                <CheckCircle2 className="size-6 text-[#16a34a]" />
              ) : (
                <AlertTriangle className="size-6 text-rose-600" />
              )}
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#0284c7]">
                  Sai Sindhu Developers
                </span>
                <span className="text-slate-300">·</span>
                <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                  <ShieldCheck className="size-3" /> TG RERA: P02100005950
                </span>
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 leading-tight">
                {title || (isSuccess ? "Inquiry Confirmed & Registered" : "Submission Notice")}
              </h3>
            </div>
          </div>

          {/* Body Content */}
          <div className="mt-5 text-xs sm:text-sm leading-relaxed text-slate-600">
            {message ||
              (isSuccess
                ? "Thank you for reaching out to Sai Sindhu Developers. Your site visit request and price sheet inquiry have been successfully logged in our official booking system."
                : "We experienced a temporary network issue connecting to the database. Please contact our direct sales desk immediately.")}
          </div>

          {/* Official Lead Summary Card (On Success) */}
          {isSuccess && leadDetails && (
            <div className="mt-5 rounded-2xl bg-slate-50 p-4 border border-slate-200/80 shadow-2xs space-y-2">
              <div className="flex items-center justify-between border-b border-slate-200/70 pb-2">
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                  Official Booking Reference
                </span>
                <span className="font-mono text-xs font-bold text-[#0284c7] bg-sky-50 border border-sky-200 px-2.5 py-0.5 rounded-md">
                  {refCode}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs pt-1">
                <div>
                  <span className="block text-[11px] text-slate-500">Applicant:</span>
                  <strong className="font-bold text-slate-900">{leadDetails.name}</strong>
                </div>
                <div>
                  <span className="block text-[11px] text-slate-500">Registered Mobile:</span>
                  <strong className="font-bold text-slate-900">{leadDetails.phone}</strong>
                </div>
                <div className="col-span-2">
                  <span className="block text-[11px] text-slate-500">Plot Category:</span>
                  <strong className="font-bold text-[#0284c7]">{leadDetails.plotSize}</strong>
                </div>
              </div>
            </div>
          )}

          {/* Next Steps Advisory */}
          <div className="mt-4 rounded-xl bg-sky-50/70 p-3 text-[11px] leading-relaxed text-sky-900 border border-sky-100 flex items-start gap-2">
            <span className="text-base leading-none">⏱️</span>
            <div>
              <strong className="font-bold block">Assigned Executive Response:</strong>
              <span>
                Our authorized Vikarabad plotted development executive will connect with you
                within 30 minutes with the DTCP LP Layout Map and current plot availability sheet.
              </span>
            </div>
          </div>

          {/* Official Action Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row items-center gap-3">
            <a
              href="https://api.whatsapp.com/send?phone=918747994499&text=Hi%20Sai%20Sindhu%20Developers!%20I%20have%20just%20submitted%20a%20site%20visit%20request%20for%20Vikarabad%20Villa%20Plots.%20Please%20share%20the%20official%20price%20sheet."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-[#16a34a] hover:bg-[#15803d] px-4 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-sm transition-all"
            >
              <MessageSquare className="size-4" />
              <span>WhatsApp Priority Desk</span>
            </a>

            <a
              href="tel:+918747994499"
              className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 hover:bg-[#0284c7] px-4 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-sm transition-all"
            >
              <Phone className="size-4 text-[#38bdf8]" />
              <span>+91 87479 94499</span>
            </a>
          </div>

          {/* Form Auto-Reset Countdown Bar */}
          {isSuccess && (
            <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3 text-[11px] text-slate-500">
              <span className="inline-flex items-center gap-1 text-slate-600 font-medium">
                <RefreshCw className="size-3 animate-spin text-[#0284c7]" />
                Auto-resetting form in <strong className="text-slate-900">{countdown}s</strong>
              </span>
              <button
                type="button"
                onClick={onClose}
                className="font-bold text-[#0284c7] hover:underline cursor-pointer"
              >
                Close & Reset Form
              </button>
            </div>
          )}

          {!isSuccess && (
            <button
              type="button"
              onClick={onClose}
              className="mt-3 w-full text-center text-xs font-semibold text-slate-500 hover:text-slate-800 py-1 transition-colors cursor-pointer"
            >
              Close & Return to Form
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
