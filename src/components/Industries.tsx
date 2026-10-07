"use client";

import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface IndustriesProps {
  onOpenProjectModal: () => void;
}

export default function Industries({ onOpenProjectModal }: IndustriesProps) {
  const industries = [
    {
      name: "BFSI & Fintech",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
          <defs>
            <linearGradient id="bfsiGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFB21A" />
              <stop offset="100%" stopColor="#F43B24" />
            </linearGradient>
          </defs>
          <path d="M4 10L16 4L28 10V12H4V10Z" fill="url(#bfsiGrad)" />
          <rect x="7" y="14" width="3" height="11" rx="1" fill="url(#bfsiGrad)" />
          <rect x="14.5" y="14" width="3" height="11" rx="1" fill="url(#bfsiGrad)" />
          <rect x="22" y="14" width="3" height="11" rx="1" fill="url(#bfsiGrad)" />
          <rect x="4" y="27" width="24" height="2.5" rx="1" fill="url(#bfsiGrad)" />
        </svg>
      ),
    },
    {
      name: "Technology & SaaS",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
          <defs>
            <linearGradient id="techGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFB21A" />
              <stop offset="100%" stopColor="#F43B24" />
            </linearGradient>
          </defs>
          <path
            d="M9 22C6.2 22 4 19.8 4 17C4 14.5 5.8 12.4 8.2 12.1C8.9 8.6 11.9 6 15.5 6C19.4 6 22.6 8.9 23 12.8C25.3 13.3 27 15.3 27 17.8C27 20.6 24.8 22.8 22 22.8L9 22Z"
            stroke="url(#techGrad)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      name: "AI & Deep Tech",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
          <defs>
            <linearGradient id="aiGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFB21A" />
              <stop offset="100%" stopColor="#F43B24" />
            </linearGradient>
          </defs>
          <rect x="8" y="8" width="16" height="16" rx="4" stroke="url(#aiGrad)" strokeWidth="2.5" />
          <rect x="13" y="13" width="6" height="6" rx="1.5" fill="url(#aiGrad)" />
          <path
            d="M16 4V7M16 25V28M4 16H7M25 16H28M11 4V7M11 25V28M21 4V7M21 25V28M4 11H7M25 11H28M4 21H7M25 21H28"
            stroke="url(#aiGrad)"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      name: "Cybersecurity",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
          <defs>
            <linearGradient id="cyberGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFB21A" />
              <stop offset="100%" stopColor="#F43B24" />
            </linearGradient>
          </defs>
          <path
            d="M16 4L6 8V15C6 22 10.5 26.5 16 28C21.5 26.5 26 22 26 15V8L16 4Z"
            stroke="url(#cyberGrad)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 16L15 19L20 13"
            stroke="url(#cyberGrad)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      name: "Telecom",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
          <defs>
            <linearGradient id="teleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFB21A" />
              <stop offset="100%" stopColor="#F43B24" />
            </linearGradient>
          </defs>
          <circle cx="16" cy="11" r="3" fill="url(#teleGrad)" />
          <path
            d="M11 7C8.2 9.8 8.2 14.2 11 17M21 7C23.8 9.8 23.8 14.2 21 17M8 4C3.6 8.4 3.6 15.6 8 20M24 4C28.4 8.4 28.4 15.6 24 20M16 14V27M12 27H20"
            stroke="url(#teleGrad)"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      name: "Healthcare",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
          <defs>
            <linearGradient id="healthGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFB21A" />
              <stop offset="100%" stopColor="#F43B24" />
            </linearGradient>
          </defs>
          <path
            d="M16 26.5L6.5 17C3.5 14 3.5 9 6.5 6C9.5 3 14 3.5 16 7C18 3.5 22.5 3 25.5 6C28.5 9 28.5 14 25.5 17L16 26.5Z"
            stroke="url(#healthGrad)"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10 14H13L15 11L17 17L19 14H22"
            stroke="url(#healthGrad)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ];

  return (
    <section id="industries" className="py-16 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-xl">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF7A00]" />
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#FF7A00]">
                INDUSTRIES
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-black text-[#111318] tracking-tight leading-[1.08]">
              Built Around <br />
              Your Industry.
            </h2>
          </div>

          <div className="flex items-center space-x-2">
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

        {/* 6 Clean Minimal Category Icons Strip matching reference */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-4 items-center justify-between">
          {industries.map((ind, i) => (
            <div
              key={i}
              onClick={onOpenProjectModal}
              className="flex flex-col items-center justify-center text-center group cursor-pointer hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#FFF9F5] border border-orange-100 flex items-center justify-center group-hover:scale-110 group-hover:bg-white group-hover:shadow-md transition-all mb-3.5">
                {ind.icon}
              </div>
              <h4 className="text-xs sm:text-sm font-extrabold text-[#111318] group-hover:text-[#FF7A00] transition-colors leading-tight max-w-[120px]">
                {ind.name}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
