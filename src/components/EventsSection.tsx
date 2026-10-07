"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

interface EventsSectionProps {
  onOpenProjectModal: () => void;
}

export default function EventsSection({ onOpenProjectModal }: EventsSectionProps) {
  return (
    <section id="events" className="py-16 lg:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-center">
          {/* Left Column (Cols 1 to 5) */}
          <div className="md:col-span-5 space-y-5 sm:space-y-6">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF7A00]" />
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#FF7A00]">
                XHIBITIQ EVENTS
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#111318] tracking-tight leading-[1.08]">
              Experiences <br />
              That{" "}
              <span className="bg-gradient-to-r from-[#FFB21A] via-[#FF7A00] to-[#F43B24] bg-clip-text text-transparent">
                Create
              </span>{" "}
              <br />
              <span className="bg-gradient-to-r from-[#FFB21A] via-[#FF7A00] to-[#F43B24] bg-clip-text text-transparent">
                Business.
              </span>
            </h2>

            <p className="text-sm sm:text-base lg:text-lg text-[#62666D] font-normal leading-relaxed max-w-sm">
              We create conferences, summits and executive experiences that bring brands and decision-makers together.
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenProjectModal}
                className="inline-flex items-center gap-2 text-base font-bold text-[#FF7A00] hover:text-[#F43B24] transition-colors group cursor-pointer"
              >
                <span>Explore Events</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Column (Cols 6 to 12) - Sleek Capsule Conference + Dark Stats Panel */}
          <div className="md:col-span-7 relative flex justify-center md:justify-end">
            <div
              onClick={onOpenProjectModal}
              className="relative w-full max-w-[680px] rounded-[36px] overflow-hidden shadow-2xl bg-[#0E1015] border border-gray-800 grid grid-cols-1 sm:grid-cols-12 cursor-pointer group"
            >
              {/* Conference Stage Visual (sm:col-span-8) */}
              <div className="sm:col-span-8 relative h-[280px] sm:h-[340px] overflow-hidden">
                <img
                  src="/assets/conference_keynote_hd.jpg"
                  alt="XhibitIQ Events - Ideas People Industries Forward Keynote Stage"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#0E1015]/90 hidden sm:block" />
              </div>

              {/* Stats Dark Panel (sm:col-span-4) */}
              <div className="sm:col-span-4 bg-[#0E1015] p-6 sm:p-7 flex flex-col justify-center space-y-6 sm:space-y-7 border-t sm:border-t-0 sm:border-l border-gray-800/80">
                <div className="space-y-1">
                  <div className="text-3xl sm:text-4xl font-extrabold text-[#FFB21A] tracking-tight">
                    50+
                  </div>
                  <div className="text-xs text-gray-400 font-medium">Events Organized</div>
                </div>

                <div className="space-y-1">
                  <div className="text-3xl sm:text-4xl font-extrabold text-[#FFB21A] tracking-tight">
                    10,000+
                  </div>
                  <div className="text-xs text-gray-400 font-medium">Executive Delegates</div>
                </div>

                <div className="space-y-1">
                  <div className="text-3xl sm:text-4xl font-extrabold text-[#FFB21A] tracking-tight">
                    25+
                  </div>
                  <div className="text-xs text-gray-400 font-medium">Global Industries</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
