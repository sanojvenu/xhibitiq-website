"use client";

import React from "react";

export default function TrustedBrands() {
  return (
    <section className="py-8 sm:py-10 bg-white border-y border-gray-100/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eyebrow Label */}
        <div className="flex items-center gap-2 mb-6 justify-start">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF7A00]" />
          <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#62666D]">
            TRUSTED BY INNOVATIVE BRANDS
          </span>
        </div>

        {/* Exact 8 Brand Logos: QKS Group, Heph, Dview Technologies, Ambit, DIAL NEXA, WRITER, Devnagri, BOMBAY DC */}
        <div className="w-full flex items-center justify-between py-2 overflow-x-auto no-scrollbar">
          <img
            src="/assets/brands_exact_strip.png"
            alt="Trusted by QKS Group, Heph, Dview Technologies, Ambit, DIAL NEXA, WRITER, Devnagri, BOMBAY DC"
            className="w-full max-w-5xl h-auto object-contain select-none opacity-85 hover:opacity-100 transition-opacity duration-300"
          />
        </div>
      </div>
    </section>
  );
}
