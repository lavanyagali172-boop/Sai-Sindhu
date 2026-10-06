"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Phone,
  Check,
  ChevronRight,
  MapPin,
  BadgeCheck,
  ShieldCheck,
  Loader2,
  AlertCircle,
} from "lucide-react";
import { submitLead } from "@/services/leadService";
import SubmissionModal from "@/components/SubmissionModal";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    plotSize: "150 – 200 Sq. Yds (Standard Villa)",
    message: "",
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const currentLead = {
      name: formData.name,
      phone: formData.phone,
      plotSize: formData.plotSize,
    };

    const result = await submitLead({
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      plot_size: formData.plotSize,
      message: formData.message,
      source_page: "Contact Page",
    });

    setIsSubmitting(false);

    if (result.success) {
      setSubmitStatus("success");
      setStatusMessage(result.message || "Site Visit Request Received!");
      setSubmittedLead({
        ...currentLead,
        refId: result.refId,
      });
      setModalType("success");
      setModalOpen(true);
      setFormData({
        name: "",
        phone: "",
        email: "",
        plotSize: "150 – 200 Sq. Yds (Standard Villa)",
        message: "",
      });
    } else {
      setSubmitStatus("error");
      setStatusMessage(result.message || "Something went wrong. Please call us directly.");
      setModalType("error");
      setModalOpen(true);
    }
  };

  return (
    <main className="bg-white py-10 sm:py-16 text-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-8" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-[#0284c7] transition-colors">Home</Link>
          <ChevronRight className="size-3 text-slate-400" />
          <span className="text-slate-900 font-bold">Contact & Site Visit</span>
        </nav>

        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Left Contact Information */}
          <div>
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0284c7] uppercase tracking-wider">
              <Phone className="size-3.5" /> GET IN TOUCH
            </span>
            <h1 className="mt-2 font-display text-4xl font-bold leading-tight text-slate-900 sm:text-6xl">
              Your Ideal Plot is Waiting.
            </h1>
            <p className="mt-3 text-xs leading-relaxed text-slate-600 sm:text-sm">
              Connect with our dedicated Sai Sindhu Developers plot advisors for exact plot
              availability, layout blueprints, spot registration pricing, and complimentary weekend
              site visits.
            </p>

            <div className="mt-6 space-y-4">
              <a
                href="tel:+918747994499"
                className="flex items-center gap-3 rounded-xl border-l-4 border-[#0284c7] bg-slate-50 p-4 text-base font-bold text-slate-900 hover:bg-slate-100 transition-colors border border-slate-200"
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

              <div className="rounded-xl border-l-4 border-[#16a34a] bg-slate-50 p-4 text-xs border border-slate-200">
                <strong className="block text-slate-900 font-bold text-sm">
                  Complimentary Weekend Site Tour:
                </strong>
                <p className="mt-1 text-slate-600 leading-relaxed">
                  Complimentary cab pickups available from Hyderabad (Jubilee Hills, Gachibowli,
                  Kukatpally, Madhapur) every Saturday and Sunday with full site briefing.
                </p>
              </div>

              {/* Office & Site Address Cards */}
              <div className="grid gap-3 sm:grid-cols-2 mt-4">
                <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                    <MapPin className="size-3.5 text-[#0284c7]" /> Corporate Office
                  </div>
                  <p className="mt-1.5 text-[11px] leading-relaxed text-slate-600">
                    Apurupa One, Plot 108, Rd 10, Jubilee Hills, Hyderabad – 500033
                  </p>
                </div>

                <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                    <MapPin className="size-3.5 text-[#16a34a]" /> Project Site Location
                  </div>
                  <p className="mt-1.5 text-[11px] leading-relaxed text-slate-600">
                    Kothrepally Highway, Vikarabad, Telangana – 501101
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                <span className="inline-flex items-center gap-1 rounded-full bg-sky-50 border border-sky-200 px-3 py-1 text-[11px] font-semibold text-sky-800">
                  <BadgeCheck className="size-3 text-[#0284c7]" /> DTCP: 0025/LO/3042/2023
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-[11px] font-semibold text-emerald-800">
                  <ShieldCheck className="size-3 text-[#16a34a]" /> TG RERA: P02100005950
                </span>
              </div>
            </div>
          </div>

          {/* Right Booking Form */}
          <form
            className="grid gap-4 rounded-2xl bg-slate-50 border border-slate-200 p-6 text-slate-900 sm:grid-cols-2 sm:p-8 shadow-xs"
            onSubmit={handleSubmit}
          >
            <div className="sm:col-span-2">
              <h2 className="font-display text-2xl font-bold text-slate-900">
                Schedule a Free Site Visit
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Receive price sheet, layout blueprint & brochure instantly.
              </p>
            </div>

            {/* Notification Alert Banner */}
            {submitStatus === "success" && (
              <div className="sm:col-span-2 flex items-start gap-2.5 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-xs font-semibold text-emerald-900 animate-in fade-in">
                <Check className="size-5 shrink-0 text-emerald-600 mt-0.5" />
                <div>
                  <strong className="block font-bold">Inquiry Sent Successfully!</strong>
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
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="mt-1.5 h-11 w-full rounded-lg border border-slate-300 bg-white px-3.5 text-xs text-slate-900 outline-none focus:border-[#0284c7] focus:ring-2 focus:ring-[#0284c7]/20"
                placeholder="e.g. Ramesh Kumar"
              />
            </label>

            <label className="text-xs font-bold text-slate-800">
              Phone Number (WhatsApp) *
              <input
                required
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="mt-1.5 h-11 w-full rounded-lg border border-slate-300 bg-white px-3.5 text-xs text-slate-900 outline-none focus:border-[#0284c7] focus:ring-2 focus:ring-[#0284c7]/20"
                placeholder="+91 98765 43210"
              />
            </label>

            <label className="text-xs font-bold text-slate-800">
              Email Address
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="mt-1.5 h-11 w-full rounded-lg border border-slate-300 bg-white px-3.5 text-xs text-slate-900 outline-none focus:border-[#0284c7] focus:ring-2 focus:ring-[#0284c7]/20"
                placeholder="you@example.com"
              />
            </label>

            <label className="text-xs font-bold text-slate-800">
              Interested Plot Size
              <select
                value={formData.plotSize}
                onChange={(e) => setFormData({ ...formData, plotSize: e.target.value })}
                className="mt-1.5 h-11 w-full rounded-lg border border-slate-300 bg-white px-3.5 text-xs text-slate-900 outline-none focus:border-[#0284c7] focus:ring-2 focus:ring-[#0284c7]/20"
              >
                <option value="150 – 200 Sq. Yds (Standard Villa)">150 – 200 Sq. Yds (Standard Villa)</option>
                <option value="250 – 350 Sq. Yds (Executive Villa)">250 – 350 Sq. Yds (Executive Villa)</option>
                <option value="400 – 650 Sq. Yds (Signature Estate)">400 – 650 Sq. Yds (Signature Estate)</option>
              </select>
            </label>

            <label className="text-xs font-bold text-slate-800 sm:col-span-2">
              Message or Specific Requirement
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="mt-1.5 min-h-20 w-full resize-none rounded-lg border border-slate-300 bg-white p-3 text-xs text-slate-900 outline-none focus:border-[#0284c7] focus:ring-2 focus:ring-[#0284c7]/20"
                placeholder="Preferred facing (East/North), site visit dates..."
              />
            </label>

            <p className="text-[10px] leading-tight text-slate-500 sm:col-span-2">
              🔒 Your privacy is fully respected. Authorized Sai Sindhu Developers executives will contact you.
            </p>

            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#0284c7] px-8 text-xs font-bold uppercase tracking-wider text-white sm:col-span-2 transition-all duration-300 hover:bg-[#0369a1] shadow-md hover:shadow-lg cursor-pointer hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="size-4 animate-spin" /> Submitting Request...
                </>
              ) : submitStatus === "success" ? (
                <>
                  Request Sent! We Will Call You <Check className="size-4" />
                </>
              ) : (
                <>
                  Request Instant Callback & Price Sheet <ChevronRight className="size-4" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>

      {/* Official Confirmation / Error Alert Modal */}
      <SubmissionModal
        isOpen={modalOpen}
        onClose={() => {
          setModalOpen(false);
          setSubmitStatus("idle");
          setFormData({
            name: "",
            phone: "",
            email: "",
            plotSize: "150 – 200 Sq. Yds (Standard Villa)",
            message: "",
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
