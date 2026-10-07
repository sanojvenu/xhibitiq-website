"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight, X, Check, ArrowRight } from "lucide-react";

interface CapabilitiesProps {
  onOpenProjectModal: () => void;
}

export default function Capabilities({ onOpenProjectModal }: CapabilitiesProps) {
  const [activeModalCapability, setActiveModalCapability] = useState<number | null>(null);

  const capabilities = [
    {
      id: 1,
      title: "Marketing",
      subtitle: "& Growth",
      icon: (
        <svg className="w-8 h-8 text-[#FF7A00]" viewBox="0 0 32 32" fill="none">
          <rect x="4" y="16" width="5" height="12" rx="2" fill="url(#grad1)" />
          <rect x="13.5" y="10" width="5" height="18" rx="2" fill="url(#grad1)" />
          <rect x="23" y="4" width="5" height="24" rx="2" fill="url(#grad1)" />
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFB21A" />
              <stop offset="100%" stopColor="#F43B24" />
            </linearGradient>
          </defs>
        </svg>
      ),
      art: "/assets/cap_fluid_hd.jpg",
      desc: "Data-backed demand generation and account-based marketing engineered to fill enterprise pipelines and accelerate revenue growth.",
      details: [
        "Account-Based Marketing (ABM) Strategy",
        "Performance Marketing & Paid Search",
        "Multi-Touch Pipeline Attribution",
        "Conversion Rate Optimization (CRO)",
      ],
    },
    {
      id: 2,
      title: "Creative",
      subtitle: "& Brand",
      icon: (
        <svg className="w-8 h-8 text-[#FF7A00]" viewBox="0 0 32 32" fill="none">
          <path
            d="M6 26L12 24L26 10C27.1 8.9 27.1 7.1 26 6C24.9 4.9 23.1 4.9 22 6L8 20L6 26Z"
            stroke="url(#grad2)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M19 9L23 13" stroke="url(#grad2)" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="6" cy="26" r="1.5" fill="#FF7A00" />
          <defs>
            <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFB21A" />
              <stop offset="100%" stopColor="#F43B24" />
            </linearGradient>
          </defs>
        </svg>
      ),
      art: "/assets/cap_silk_hd.jpg",
      desc: "Editorial brand identity, visual storytelling, and high-impact digital experiences that captivate executive audiences.",
      details: [
        "Corporate Brand Identity & Positioning",
        "UI/UX Design Systems & Web Apps",
        "Omnichannel Campaign Art Direction",
        "Motion Graphics & Video Storytelling",
      ],
    },
    {
      id: 3,
      title: "Experiences",
      subtitle: "& Events",
      icon: (
        <svg className="w-8 h-8 text-[#FF7A00]" viewBox="0 0 32 32" fill="none">
          <circle cx="16" cy="9" r="4.5" stroke="url(#grad3)" strokeWidth="2.5" />
          <path
            d="M7 25C7 20.5 11 17.5 16 17.5C21 17.5 25 20.5 25 25"
            stroke="url(#grad3)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <circle cx="26" cy="11" r="3" stroke="url(#grad3)" strokeWidth="2" />
          <circle cx="6" cy="11" r="3" stroke="url(#grad3)" strokeWidth="2" />
          <defs>
            <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFB21A" />
              <stop offset="100%" stopColor="#F43B24" />
            </linearGradient>
          </defs>
        </svg>
      ),
      art: "/assets/cap_arch_hd.jpg",
      desc: "World-class flagship conferences, roundtables, and VIP summits that connect senior decision-makers and build industry authority.",
      details: [
        "Flagship B2B Conference Production",
        "Executive CXO Summits & Roundtables",
        "Immersive Stage & Spatial Design",
        "Delegate Acquisition & VIP Management",
      ],
    },
    {
      id: 4,
      title: "Technology",
      subtitle: "Consulting",
      icon: (
        <svg className="w-8 h-8 text-[#FF7A00]" viewBox="0 0 32 32" fill="none">
          <circle cx="16" cy="16" r="6" stroke="url(#grad4)" strokeWidth="2.5" />
          <path
            d="M16 4V8M16 24V28M4 16H8M24 16H28M7.5 7.5L10.5 10.5M21.5 21.5L24.5 24.5M7.5 24.5L10.5 21.5M21.5 10.5L24.5 7.5"
            stroke="url(#grad4)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="grad4" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFB21A" />
              <stop offset="100%" stopColor="#F43B24" />
            </linearGradient>
          </defs>
        </svg>
      ),
      art: "/assets/cap_glass_hd.jpg",
      desc: "Next-gen AI solutions, custom software platforms, and cloud automation that modernize legacy operations for 2026.",
      details: [
        "Enterprise AI & LLM Integration",
        "Digital Transformation Roadmaps",
        "Cloud Architecture & Microservices",
        "Workflow & Process Automation",
      ],
    },
  ];

  return (
    <section id="capabilities" className="py-16 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF7A00]" />
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#FF7A00]">
                OUR CAPABILITIES
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl xl:text-6xl font-black text-[#111318] tracking-tight leading-[1.08]">
              Four Capabilities. <br />
              One{" "}
              <span className="bg-gradient-to-r from-[#FFB21A] via-[#FF7A00] to-[#F43B24] bg-clip-text text-transparent">
                Growth Partner.
              </span>
            </h2>
          </div>

          <div className="flex items-center gap-6">
            <p className="text-xs sm:text-sm text-[#62666D] max-w-sm hidden md:block leading-relaxed">
              Integrated expertise to build brands, create demand, engage audiences and enable transformation.
            </p>

            <div className="flex items-center space-x-2 shrink-0">
              <button
                className="w-10 h-10 rounded-full bg-white border border-gray-200 text-gray-700 hover:border-[#FF7A00] hover:text-[#FF7A00] flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Previous"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                className="w-10 h-10 rounded-full bg-white border border-gray-200 text-gray-700 hover:border-[#FF7A00] hover:text-[#FF7A00] flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Next"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* 4 Crisp Cards Grid - 4 Columns on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((cap) => (
            <div
              key={cap.id}
              onClick={() => setActiveModalCapability(cap.id)}
              className="group bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 p-7 flex flex-col justify-between h-[360px] relative overflow-hidden cursor-pointer"
            >
              {/* Top: Icon + Title */}
              <div className="space-y-4 relative z-10">
                <div>{cap.icon}</div>
                <h3 className="text-xl sm:text-2xl font-black text-[#111318] tracking-tight leading-snug group-hover:text-[#FF7A00] transition-colors">
                  {cap.title} <br />
                  {cap.subtitle}
                </h3>
              </div>

              {/* Bottom: Action Arrow */}
              <div className="relative z-10 pt-4">
                <div className="w-10 h-10 rounded-full border border-orange-200 group-hover:border-[#FF7A00] group-hover:bg-[#FF7A00] flex items-center justify-center text-[#FF7A00] group-hover:text-white transition-all shadow-xs">
                  <ArrowRight size={16} />
                </div>
              </div>

              {/* Bottom-Right Corner Artwork */}
              <div className="absolute -bottom-2 -right-2 w-36 h-36 rounded-tl-3xl overflow-hidden pointer-events-none select-none opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500">
                <img
                  src={cap.art}
                  alt={`${cap.title} ${cap.subtitle}`}
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      {activeModalCapability !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fadeIn">
          {(() => {
            const cap = capabilities.find((c) => c.id === activeModalCapability)!;
            return (
              <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 max-h-[90vh] flex flex-col">
                <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-white">
                  <span className="text-xs font-black text-[#FF7A00] uppercase tracking-wider">
                    CAPABILITY 0{cap.id}
                  </span>
                  <button
                    onClick={() => setActiveModalCapability(null)}
                    className="w-8 h-8 rounded-full bg-gray-100 text-gray-600 hover:text-black flex items-center justify-center cursor-pointer transition-colors"
                  >
                    <X size={16} />
                  </button>
                </div>

                <div className="p-6 sm:p-8 space-y-5 overflow-y-auto">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-2xl bg-orange-50">{cap.icon}</div>
                    <h3 className="text-2xl font-black text-gray-900">
                      {cap.title} {cap.subtitle}
                    </h3>
                  </div>

                  <p className="text-sm text-gray-700 leading-relaxed">{cap.desc}</p>

                  <div className="space-y-2 pt-2">
                    {cap.details.map((d, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 text-xs font-semibold text-gray-800"
                      >
                        <Check size={14} className="text-[#FF7A00] shrink-0" />
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => {
                      setActiveModalCapability(null);
                      onOpenProjectModal();
                    }}
                    className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#FF7A00] to-[#F43B24] text-white font-bold text-xs shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer transition-all"
                  >
                    <span>Consult on {cap.title} {cap.subtitle}</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            );
          })()}
        </div>
      )}
    </section>
  );
}
