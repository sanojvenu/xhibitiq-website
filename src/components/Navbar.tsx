"use client";

import React, { useState, useEffect } from "react";
import {
  ChevronDown,
  Search,
  Menu,
  X,
  ArrowRight,
  TrendingUp,
  Palette,
  Sparkles,
  Cpu,
} from "lucide-react";

interface NavbarProps {
  onOpenProjectModal: () => void;
  onOpenSearchModal: () => void;
}

export default function Navbar({
  onOpenProjectModal,
  onOpenSearchModal,
}: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const capabilities = [
    {
      title: "Marketing & Growth",
      desc: "Digital marketing, demand gen & ABM campaigns",
      icon: TrendingUp,
      color: "#FF7A00",
      href: "#capabilities",
    },
    {
      title: "Creative & Brand",
      desc: "Brand strategy, creative direction & digital UI",
      icon: Palette,
      color: "#F43B24",
      href: "#capabilities",
    },
    {
      title: "Experiences & Events",
      desc: "Conferences, executive summits & trade showcases",
      icon: Sparkles,
      color: "#FFB21A",
      href: "#events",
    },
    {
      title: "Technology Consulting",
      desc: "AI automation, digital transformation & platforms",
      icon: Cpu,
      color: "#FF7A00",
      href: "#capabilities",
    },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md py-3 shadow-xs border-b border-gray-100"
          : "bg-white py-4 sm:py-5 border-b border-gray-100/80"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo - Exact match to reference image */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="grid grid-cols-2 gap-1 w-6 h-6 p-0.5 rounded-lg group-hover:scale-105 transition-transform duration-300">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FFB21A]"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF7A00]"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF7A00]"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#F43B24]"></span>
            </div>

            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-black text-[#111318] tracking-tight leading-none">
                Xhibit<span className="text-[#111318]">IQ</span>
              </span>
              <span className="text-[8px] font-bold text-[#62666D] tracking-widest uppercase mt-0.5">
                CONNECT • COLLABORATE • INNOVATE
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            <a
              href="#"
              className="px-3.5 py-1.5 text-xs font-bold text-[#F43B24] border-b-2 border-[#F43B24]"
            >
              Home
            </a>
            <a
              href="#who-we-are"
              className="px-3.5 py-1.5 text-xs font-semibold text-[#62666D] hover:text-[#111318] transition-colors"
            >
              About
            </a>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button
                className="px-3.5 py-1.5 text-xs font-semibold text-[#62666D] hover:text-[#111318] transition-colors flex items-center gap-1"
                aria-expanded={servicesDropdownOpen}
              >
                <span>Services</span>
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${
                    servicesDropdownOpen ? "rotate-180 text-[#FF7A00]" : ""
                  }`}
                />
              </button>

              {/* Mega Dropdown Menu */}
              {servicesDropdownOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[500px] bg-white rounded-2xl shadow-xl border border-gray-100 p-4 mt-1 grid grid-cols-1 gap-2 animate-fadeIn z-50">
                  <div className="px-3 py-2 border-b border-gray-100 mb-1">
                    <span className="text-xs font-bold uppercase tracking-widest text-[#FF7A00]">
                      INTEGRATED CAPABILITIES
                    </span>
                    <p className="text-xs text-gray-500 mt-0.5">
                      Four core disciplines driving singular business growth.
                    </p>
                  </div>
                  {capabilities.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <a
                        key={idx}
                        href={item.href}
                        onClick={() => setServicesDropdownOpen(false)}
                        className="flex items-start gap-3 p-3 rounded-xl hover:bg-orange-50/60 transition-colors group"
                      >
                        <div
                          className="p-2 rounded-lg text-white shrink-0 group-hover:scale-110 transition-transform"
                          style={{ backgroundColor: item.color }}
                        >
                          <Icon size={16} />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-gray-900 group-hover:text-[#FF7A00] transition-colors">
                            {item.title}
                          </div>
                          <div className="text-[11px] text-gray-500">
                            {item.desc}
                          </div>
                        </div>
                      </a>
                    );
                  })}
                </div>
              )}
            </div>

            <a
              href="#capabilities"
              className="px-3.5 py-1.5 text-xs font-semibold text-[#62666D] hover:text-[#111318] transition-colors"
            >
              Work
            </a>
            <a
              href="#industries"
              className="px-3.5 py-1.5 text-xs font-semibold text-[#62666D] hover:text-[#111318] transition-colors"
            >
              Industries
            </a>
            <a
              href="#insights"
              className="px-3.5 py-1.5 text-xs font-semibold text-[#62666D] hover:text-[#111318] transition-colors"
            >
              Insights
            </a>
            <a
              href="#events"
              className="px-3.5 py-1.5 text-xs font-semibold text-[#62666D] hover:text-[#111318] transition-colors"
            >
              Events
            </a>
          </nav>

          {/* Right Action CTA & Search - Dark Near-Black Pill CTA (Matches Reference Image) */}
          <div className="hidden lg:flex items-center space-x-3">
            <button
              onClick={onOpenSearchModal}
              className="w-9 h-9 rounded-full bg-gray-50 hover:bg-gray-100 text-gray-700 flex items-center justify-center transition-colors border border-gray-200/60"
              aria-label="Search site"
            >
              <Search size={16} />
            </button>

            <button
              onClick={onOpenProjectModal}
              className="px-5 py-2.5 rounded-full bg-[#111318] hover:bg-black text-white font-bold text-xs shadow-md hover:scale-[1.02] active:scale-95 transition-all duration-300 flex items-center gap-2 group"
            >
              <span>Start a Project</span>
              <ArrowRight
                size={14}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </div>

          {/* Mobile Menu Controls */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              onClick={onOpenSearchModal}
              className="w-9 h-9 rounded-full bg-gray-100 text-gray-700 flex items-center justify-center"
              aria-label="Search"
            >
              <Search size={16} />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-9 h-9 rounded-full bg-[#111318] text-white flex items-center justify-center shadow-md"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[60px] bg-white z-50 flex flex-col justify-between p-6 overflow-y-auto animate-fadeIn lg:hidden">
          <div className="space-y-6">
            <div className="text-xs font-bold uppercase tracking-widest text-[#FF7A00]">
              NAVIGATION
            </div>
            <div className="flex flex-col space-y-4 text-lg font-bold text-gray-900">
              <a
                href="#"
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#F43B24]"
              >
                Home
              </a>
              <a
                href="#who-we-are"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#FF7A00] transition-colors"
              >
                About XhibitIQ
              </a>
              <a
                href="#capabilities"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#FF7A00] transition-colors flex items-center justify-between"
              >
                <span>Services & Capabilities</span>
                <span className="text-xs font-normal text-gray-400">4 Disciplines</span>
              </a>
              <a
                href="#industries"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#FF7A00] transition-colors"
              >
                Industries
              </a>
              <a
                href="#events"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#FF7A00] transition-colors"
              >
                XhibitIQ Events
              </a>
              <a
                href="#insights"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#FF7A00] transition-colors"
              >
                Insights
              </a>
            </div>
          </div>

          <div className="pt-6 border-t border-gray-100">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenProjectModal();
              }}
              className="w-full py-3.5 rounded-full bg-[#111318] text-white font-bold text-sm shadow-md text-center flex items-center justify-center gap-2"
            >
              <span>Start a Project</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
