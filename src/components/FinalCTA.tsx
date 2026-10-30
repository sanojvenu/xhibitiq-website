"use client";

import React from "react";
import { ArrowRight, Mail } from "lucide-react";

interface FinalCTAProps {
  onOpenProjectModal: () => void;
}

export default function FinalCTA({ onOpenProjectModal }: FinalCTAProps) {
  return (
    <section className="py-20 lg:py-28 bg-[#FAF9F7] relative overflow-hidden">

      {/* ── ORGANIC WAVE GRAPHIC – right side (matches reference image 2) ── */}
      <div
        className="absolute right-0 top-0 bottom-0 w-[320px] sm:w-[400px] lg:w-[480px] pointer-events-none select-none z-0"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 480 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="xMaxYMid slice"
        >
          <defs>
            {/* Back wave gradient – more red/dark */}
            <linearGradient id="ctaWaveBack" x1="480" y1="0" x2="80" y2="400" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#F43B24" />
              <stop offset="55%" stopColor="#FF7A00" />
              <stop offset="100%" stopColor="#FFB21A" stopOpacity="0.1" />
            </linearGradient>
            {/* Front wave gradient – more orange/bright */}
            <linearGradient id="ctaWaveFront" x1="480" y1="40" x2="180" y2="400" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FF7A00" />
              <stop offset="50%" stopColor="#F43B24" />
              <stop offset="100%" stopColor="#F43B24" stopOpacity="0" />
            </linearGradient>
            {/* Circle gradient */}
            <linearGradient id="ctaCircle" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#FFB21A" />
              <stop offset="50%" stopColor="#FF7A00" />
              <stop offset="100%" stopColor="#F43B24" />
            </linearGradient>
          </defs>

          {/* Back organic wave – wide, flows from right edge */}
          <path
            d="M480,0 L480,400 L160,400
               C140,400 60,340 100,240
               C135,148 40,80 150,18
               C210,-14 340,8 480,0Z"
            fill="url(#ctaWaveBack)"
          />

          {/* Front organic wave – narrower, layered on top for depth */}
          <path
            d="M480,0 L480,400 L260,400
               C245,400 175,345 210,255
               C242,170 185,100 258,38
               C305,4 390,2 480,0Z"
            fill="url(#ctaWaveFront)"
          />

          {/* Floating circle – top-right area */}
          <circle cx="420" cy="52" r="36" fill="url(#ctaCircle)" />
        </svg>
      </div>

      {/* ── CONTENT ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-center">

          {/* Left Column */}
          <div className="md:col-span-7 space-y-5 sm:space-y-6">
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-6 bg-[#FF7A00] rounded-full" />
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#FF7A00]">
                LET&apos;S BUILD TOGETHER
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#111318] tracking-tight leading-[1.08]">
              Have a Challenge <br />
              Worth Solving?
            </h2>

            <p className="text-sm sm:text-base lg:text-lg text-[#62666D] font-normal leading-relaxed max-w-lg">
              Whether you&apos;re launching a brand, entering a new market, generating demand or exploring what&apos;s possible with technology — let&apos;s build it together.
            </p>
          </div>

          {/* Right Column – CTA sits in front of wave */}
          <div className="md:col-span-5 flex flex-col items-start md:items-start space-y-4 md:pl-4 lg:pl-6 relative z-10">
            <button
              onClick={onOpenProjectModal}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-[#FFB21A] via-[#FF7A00] to-[#F43B24] text-white font-bold text-sm sm:text-base hover:opacity-90 hover:scale-[1.02] active:scale-95 transition-all duration-300 flex items-center gap-3 group cursor-pointer whitespace-nowrap shadow-lg"
            >
              <span>Start a Conversation</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="mailto:info@xhibitiq.com"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#62666D] hover:text-[#FF7A00] transition-colors"
            >
              <Mail size={16} className="text-[#FF7A00]" />
              <span>info@xhibitiq.com</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
