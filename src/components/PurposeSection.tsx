"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

interface PurposeSectionProps {
  onOpenProjectModal: () => void;
}

export default function PurposeSection({ onOpenProjectModal }: PurposeSectionProps) {
  return (
    <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
          {/* Left Column (Cols 1 to 6) - Mountain Summit Visual with Organic Curved Edge */}
          <div className="md:col-span-6 relative flex justify-start">
            <div className="relative w-full max-w-[560px] h-[320px] sm:h-[380px] overflow-hidden rounded-l-3xl rounded-tr-3xl shadow-xl border border-gray-100">
              <img
                src="/assets/mountain_leader_hd.jpg"
                alt="Where Marketing Meets Technology - Visionary Leader on Mountain Peak"
                className="w-full h-full object-cover object-center select-none transition-transform duration-700 hover:scale-[1.02]"
              />
              {/* Organic curved light edge on right */}
              <div className="absolute top-0 right-0 bottom-0 w-24 bg-gradient-to-l from-white via-white/40 to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Right Column (Cols 7 to 12) - Purpose Copy & Approach */}
          <div className="md:col-span-6 space-y-5 sm:space-y-6 pl-0 md:pl-4">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F43B24]" />
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#F43B24]">
                OUR PURPOSE
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#111318] tracking-tight leading-[1.08]">
              Where Marketing <br />
              Meets{" "}
              <span className="bg-gradient-to-r from-[#FFB21A] via-[#FF7A00] to-[#F43B24] bg-clip-text text-transparent">
                Technology.
              </span>
            </h2>

            <p className="text-sm sm:text-base lg:text-lg text-[#62666D] font-normal leading-relaxed max-w-md">
              Strategy. Creativity. Technology. Experiences. Different disciplines. One shared objective — business growth.
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenProjectModal}
                className="inline-flex items-center gap-2 text-base font-bold text-[#F43B24] hover:text-[#FF7A00] transition-colors group cursor-pointer"
              >
                <span>Our Approach</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
