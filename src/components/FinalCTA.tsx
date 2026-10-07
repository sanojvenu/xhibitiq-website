"use client";

import React from "react";
import { ArrowRight, Mail } from "lucide-react";

interface FinalCTAProps {
  onOpenProjectModal: () => void;
}

export default function FinalCTA({ onOpenProjectModal }: FinalCTAProps) {
  return (
    <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Sweeping fluid orange wave shape in the bottom-right corner (Exact Match to Reference Image) */}
      <div className="absolute bottom-0 right-0 w-[380px] sm:w-[460px] lg:w-[560px] h-[220px] sm:h-[280px] lg:h-[340px] bg-gradient-to-tl from-[#FF7A00] via-[#F43B24] to-transparent opacity-95 rounded-tl-[240px] pointer-events-none select-none z-0 translate-x-12 translate-y-10" />

      {/* 3D Glossy Sphere floating at the fluid wave */}
      <div className="absolute -bottom-6 right-20 sm:right-32 lg:right-44 w-[160px] sm:w-[200px] lg:w-[240px] pointer-events-none select-none z-10">
        <img
          src="/assets/cta_sphere_hd.jpg"
          alt="Fluid 3D Sphere Graphic"
          className="w-full h-auto object-contain mix-blend-multiply"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-center">
          {/* Left Column (Cols 1 to 7) */}
          <div className="md:col-span-7 space-y-5 sm:space-y-6">
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-6 bg-[#FF7A00] rounded-full" />
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#FF7A00]">
                LET'S BUILD TOGETHER
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#111318] tracking-tight leading-[1.08]">
              Have a Challenge <br />
              Worth Solving?
            </h2>

            <p className="text-sm sm:text-base lg:text-lg text-[#62666D] font-normal leading-relaxed max-w-lg">
              Whether you're launching a brand, entering a new market, generating demand or exploring what's possible with technology — let's build it together.
            </p>
          </div>

          {/* Right Column (Cols 8 to 12) - CTA Button & Email */}
          <div className="md:col-span-5 flex flex-col items-start md:items-center space-y-4 pr-0 md:pr-16 lg:pr-32">
            <button
              onClick={onOpenProjectModal}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-[#FF7A00] via-[#FF7A00] to-[#F43B24] text-white font-bold text-sm sm:text-base shadow-brand-glow hover:shadow-brand-glow-lg hover:scale-[1.02] active:scale-95 transition-all duration-300 flex items-center gap-3 group cursor-pointer"
            >
              <span>Start a Conversation</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="mailto:hello@xhibitiq.com"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#62666D] hover:text-[#FF7A00] transition-colors"
            >
              <Mail size={16} className="text-[#FF7A00]" />
              <span>hello@xhibitiq.com</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
