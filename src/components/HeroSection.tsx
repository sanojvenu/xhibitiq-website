"use client";

import React from "react";
import { ArrowRight, Play } from "lucide-react";

interface HeroSectionProps {
  onOpenProjectModal: () => void;
  onOpenVideoModal: () => void;
}

export default function HeroSection({
  onOpenProjectModal,
  onOpenVideoModal,
}: HeroSectionProps) {
  return (
    <section className="relative pt-24 sm:pt-32 pb-12 sm:pb-20 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-6 items-center">
          {/* Left Hero Content Column (Cols 1 to 6) */}
          <div className="md:col-span-6 space-y-5 sm:space-y-6 z-10">
            {/* Small uppercase label */}
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF7A00]" />
              <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-widest text-[#62666D]">
                MARKETING • CREATIVE • EXPERIENCES • TECHNOLOGY
              </span>
            </div>

            {/* Main Headline - Exact matching reference typography */}
            <h1 className="text-4xl sm:text-6xl lg:text-[76px] font-extrabold text-[#111318] tracking-tight leading-[1.05]">
              Build <br />
              What's{" "}
              <span className="bg-gradient-to-r from-[#FFB21A] via-[#FF7A00] to-[#F43B24] bg-clip-text text-transparent">
                Next.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-sm sm:text-base lg:text-lg text-[#62666D] font-normal leading-relaxed max-w-md">
              We connect ideas, people and technology to create brands, experiences and growth that matter.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2">
              <button
                onClick={onOpenProjectModal}
                className="px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-gradient-to-r from-[#FF7A00] via-[#FF7A00] to-[#F43B24] text-white font-bold text-xs sm:text-sm shadow-brand-glow hover:shadow-brand-glow-lg hover:scale-[1.02] active:scale-95 transition-all duration-300 flex items-center gap-2.5 group cursor-pointer"
              >
                <span>Start a Project</span>
                <ArrowRight
                  size={15}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>

              <button
                onClick={onOpenVideoModal}
                className="inline-flex items-center gap-3 px-3 py-2 text-xs sm:text-sm font-semibold text-[#111318] hover:text-[#FF7A00] group transition-colors cursor-pointer"
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-gray-200 group-hover:border-[#FF7A00]/50 flex items-center justify-center text-[#111318] group-hover:scale-105 transition-all shadow-xs">
                  <Play size={12} className="ml-0.5 fill-[#111318]" />
                </div>
                <span>Watch Our Story</span>
              </button>
            </div>
          </div>

          {/* Right Hero Visual Column (Cols 7 to 12) - High Res Artwork + Crisp Typographic 01/02/03 Steps */}
          <div className="md:col-span-6 relative flex items-center justify-center md:justify-end">
            <div className="relative flex items-center gap-4 sm:gap-6 max-w-full">
              {/* Organic Art Composition */}
              <div className="relative w-[340px] sm:w-[420px] lg:w-[480px]">
                <img
                  src="/assets/hero_organic_hd.jpg"
                  alt="XhibitIQ - Marketing, Creative, Experiences and Technology"
                  className="w-full h-auto object-contain select-none transition-transform duration-700 hover:scale-[1.02]"
                />
              </div>

              {/* Exact 01, 02, 03 Crisp Typographic Steps from Reference Image */}
              <div className="flex flex-col space-y-6 sm:space-y-8 pl-1 sm:pl-2 shrink-0">
                {/* 01 CONNECT Ideas */}
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-black text-[#FF7A00] tracking-wider">01</span>
                    <div className="w-3.5 h-[1.5px] bg-[#FF7A00]" />
                  </div>
                  <h4 className="text-xs font-black tracking-wider text-[#111318] uppercase">
                    CONNECT
                  </h4>
                  <p className="text-[11px] text-[#62666D] font-medium">Ideas</p>
                </div>

                {/* 02 COLLABORATE People */}
                <div className="space-y-0.5">
                  <span className="text-[11px] font-black text-gray-400 tracking-wider">02</span>
                  <h4 className="text-xs font-black tracking-wider text-[#111318] uppercase">
                    COLLABORATE
                  </h4>
                  <p className="text-[11px] text-[#62666D] font-medium">People</p>
                </div>

                {/* 03 INNOVATE Opportunities */}
                <div className="space-y-0.5">
                  <span className="text-[11px] font-black text-gray-400 tracking-wider">03</span>
                  <h4 className="text-xs font-black tracking-wider text-[#111318] uppercase">
                    INNOVATE
                  </h4>
                  <p className="text-[11px] text-[#62666D] font-medium">Opportunities</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
