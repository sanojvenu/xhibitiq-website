"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

interface WhoWeAreProps {
  onOpenProjectModal: () => void;
}

export default function WhoWeAre({ onOpenProjectModal }: WhoWeAreProps) {
  return (
    <section id="who-we-are" className="py-16 lg:py-24 bg-white relative overflow-hidden">
      {/* Sweeping organic radiant orange gradient wave in the far top-right corner (Exact Match to Reference Image) */}
      <div className="absolute top-0 right-0 w-[440px] sm:w-[540px] lg:w-[680px] h-[260px] sm:h-[320px] lg:h-[380px] bg-gradient-to-bl from-[#FF7A00] via-[#F43B24] to-transparent opacity-95 rounded-bl-[280px] pointer-events-none z-0 translate-x-16 -translate-y-8" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column (Cols 1 to 5) - Typography & Copy */}
          <div className="lg:col-span-5 space-y-5 sm:space-y-6">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF7A00]" />
              <span className="text-[11px] font-black uppercase tracking-widest text-[#FF7A00]">
                WHO WE ARE
              </span>
            </div>

            <div className="space-y-0.5">
              <h2 className="text-4xl sm:text-5xl xl:text-6xl font-black text-[#111318] tracking-tight leading-[1.08]">
                More Than <br />
                an Agency.
              </h2>
              <h2 className="text-4xl sm:text-5xl xl:text-6xl font-black text-[#111318] tracking-tight leading-[1.08]">
                A{" "}
                <span className="bg-gradient-to-r from-[#FFB21A] via-[#FF7A00] to-[#F43B24] bg-clip-text text-transparent">
                  Growth Partner.
                </span>
              </h2>
            </div>

            <p className="text-sm sm:text-base lg:text-lg text-[#62666D] font-normal leading-relaxed max-w-md">
              We bring marketing, creativity, experiences and technology together to help businesses create meaningful impact.
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenProjectModal}
                className="inline-flex items-center gap-2 text-base font-bold text-[#FF7A00] hover:text-[#F43B24] transition-colors group cursor-pointer"
              >
                <span>Discover XhibitIQ</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Column (Cols 6 to 12) - Exact Photographic Window with Sunset Skyline & Wave Typography */}
          <div className="lg:col-span-7 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[660px]">
              <img
                src="/assets/whoweare_clean.png"
                alt="More Than an Agency. A Growth Partner - Brand, Engage, Connect, Grow"
                className="w-full h-auto object-contain select-none transition-transform duration-700 hover:scale-[1.01]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
