"use client";

import React, { useState } from "react";
import { X, ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ isOpen, onClose }: ProjectModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    budget: "$25k - $50k",
  });

  if (!isOpen) return null;

  const servicesList = [
    "Marketing & Growth",
    "Creative & Brand Strategy",
    "Experiences & Executive Events",
    "Technology & AI Consulting",
  ];

  const toggleService = (service: string) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter((s) => s !== service));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          services: selectedServices,
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong.");
      }

      setSubmitted(true);
    } catch (err: unknown) {
      setErrorMsg(err instanceof Error ? err.message : "Failed to send. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 max-h-[90vh] flex flex-col">
        {/* Header bar */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100 bg-white sticky top-0 z-10">
          <div className="flex items-center gap-2">
            <div className="grid grid-cols-2 gap-1 w-5 h-5">
              <span className="w-2 h-2 rounded-full bg-[#FFB21A]"></span>
              <span className="w-2 h-2 rounded-full bg-[#FF7A00]"></span>
              <span className="w-2 h-2 rounded-full bg-[#FF7A00]"></span>
              <span className="w-2 h-2 rounded-full bg-[#F43B24]"></span>
            </div>
            <span className="font-bold text-gray-900 tracking-tight text-lg">
              Xhibit<span className="text-[#FF7A00]">IQ</span>
            </span>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 flex items-center justify-center transition-colors"
            aria-label="Close modal"
          >
            <X size={18} />
          </button>
        </div>

        {/* Content area */}
        <div className="p-6 sm:p-8 overflow-y-auto">
          {submitted ? (
            <div className="py-12 text-center flex flex-col items-center justify-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-orange-50 text-[#FF7A00] flex items-center justify-center">
                <CheckCircle2 size={36} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                Message Received!
              </h3>
              <p className="text-gray-600 max-w-md text-base">
                Thank you for reaching out to XhibitIQ. Our strategic team will review your inquiry and connect with you within 24 hours.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="mt-6 px-8 py-3 rounded-full bg-gradient-to-r from-[#FF7A00] to-[#F43B24] text-white font-medium shadow-brand-glow hover:opacity-95 transition-all"
              >
                Back to Website
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Sparkles size={14} className="text-[#FF7A00]" />
                  <span className="text-xs font-bold uppercase tracking-widest text-[#FF7A00]">
                    LET'S BUILD WHAT'S NEXT
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
                  Start a Strategic Project
                </h2>
                <p className="text-gray-500 text-sm mt-1">
                  Tell us about your objectives and let's craft an integrated solution together.
                </p>
              </div>

              {/* Service Selection */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                  Capabilities Required
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {servicesList.map((service) => {
                    const isSelected = selectedServices.includes(service);
                    return (
                      <button
                        type="button"
                        key={service}
                        onClick={() => toggleService(service)}
                        className={`px-4 py-3 rounded-2xl text-left text-sm font-medium transition-all flex items-center justify-between border ${
                          isSelected
                            ? "bg-orange-50/80 border-[#FF7A00] text-[#FF7A00] shadow-sm"
                            : "bg-gray-50/70 border-gray-200 text-gray-700 hover:border-gray-300"
                        }`}
                      >
                        <span>{service}</span>
                        {isSelected && <CheckCircle2 size={16} className="text-[#FF7A00] shrink-0" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Input Fields Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Jane Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FF7A00]/50 focus:border-[#FF7A00] text-sm text-gray-900 bg-gray-50/50"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="jane@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FF7A00]/50 focus:border-[#FF7A00] text-sm text-gray-900 bg-gray-50/50"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                    Company Name
                  </label>
                  <input
                    type="text"
                    placeholder="Acme Corp"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FF7A00]/50 focus:border-[#FF7A00] text-sm text-gray-900 bg-gray-50/50"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                    Estimated Budget
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FF7A00]/50 focus:border-[#FF7A00] text-sm text-gray-900 bg-gray-50/50"
                  >
                    <option>$25k - $50k</option>
                    <option>$50k - $100k</option>
                    <option>$100k - $250k</option>
                    <option>$250k+</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                  Project Details / Challenge
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us about your brand goals, target market, or technology needs..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FF7A00]/50 focus:border-[#FF7A00] text-sm text-gray-900 bg-gray-50/50 resize-none"
                ></textarea>
              </div>

              <div className="pt-2">
                {errorMsg && (
                  <p className="text-red-500 text-sm mb-3 text-center font-medium">{errorMsg}</p>
                )}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#FF7A00] via-[#FF7A00] to-[#F43B24] text-white font-semibold text-sm shadow-brand-glow hover:shadow-brand-glow-lg transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                      </svg>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Inquiry</span>
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
