"use client";

import React from "react";
import { Mail } from "lucide-react";

interface FooterProps {
  onOpenProjectModal: () => void;
}

export default function Footer({ onOpenProjectModal }: FooterProps) {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 sm:pt-20 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-6 pb-14 border-b border-gray-100">
          {/* Brand Column (Cols 1 to 3) */}
          <div className="lg:col-span-3 space-y-6">
            <a href="#" className="flex items-center gap-3 group">
              <div className="grid grid-cols-2 gap-1 w-6 h-6 p-0.5 rounded-lg">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FFB21A]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF7A00]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF7A00]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#F43B24]" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black text-[#111318] tracking-tight leading-none">
                  Xhibit<span className="text-[#111318]">IQ</span>
                </span>
                <span className="text-[8px] font-bold text-[#62666D] tracking-widest uppercase mt-0.5">
                  CONNECT • COLLABORATE • INNOVATE
                </span>
              </div>
            </a>

            {/* Social Icons (Black outline rounded boxes matching reference) */}
            <div className="flex items-center space-x-3 pt-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg border border-gray-800 text-gray-800 flex items-center justify-center hover:bg-black hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg border border-gray-800 text-gray-800 flex items-center justify-center hover:bg-black hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg border border-gray-800 text-gray-800 flex items-center justify-center hover:bg-black hover:text-white transition-colors"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Col 1: EXPLORE (Cols 4 to 5) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-black text-[#FF7A00] tracking-wider">
              Explore
            </h4>
            <ul className="space-y-2 text-xs font-semibold text-[#62666D]">
              <li><a href="#" className="hover:text-[#111318] transition-colors">Home</a></li>
              <li><a href="#who-we-are" className="hover:text-[#111318] transition-colors">About</a></li>
              <li><a href="#capabilities" className="hover:text-[#111318] transition-colors">Services</a></li>
              <li><a href="#capabilities" className="hover:text-[#111318] transition-colors">Work</a></li>
              <li><a href="#industries" className="hover:text-[#111318] transition-colors">Industries</a></li>
              <li><a href="#insights" className="hover:text-[#111318] transition-colors">Insights</a></li>
              <li><a href="#events" className="hover:text-[#111318] transition-colors">Events</a></li>
              <li><button onClick={onOpenProjectModal} className="hover:text-[#111318] transition-colors text-left cursor-pointer">Contact</button></li>
            </ul>
          </div>

          {/* Col 2: SERVICES (Cols 6 to 8) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-black text-[#FF7A00] tracking-wider">
              Services
            </h4>
            <ul className="space-y-2 text-xs font-semibold text-[#62666D]">
              <li><a href="#capabilities" className="hover:text-[#111318] transition-colors">Marketing & Growth</a></li>
              <li><a href="#capabilities" className="hover:text-[#111318] transition-colors">Creative & Brand</a></li>
              <li><a href="#events" className="hover:text-[#111318] transition-colors">Experiences & Events</a></li>
              <li><a href="#capabilities" className="hover:text-[#111318] transition-colors">Technology Consulting</a></li>
            </ul>
          </div>

          {/* Col 3: CONNECT (Cols 9 to 10) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-black text-[#FF7A00] tracking-wider">
              Connect
            </h4>
            <ul className="space-y-2.5 text-xs font-semibold text-[#62666D]">
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-[#111318] transition-colors">
                  <span className="w-5 h-5 rounded-full bg-orange-100 text-[#FF7A00] flex items-center justify-center">
                    <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
                  </span>
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-[#111318] transition-colors">
                  <span className="w-5 h-5 rounded-full bg-orange-100 text-[#FF7A00] flex items-center justify-center">
                    <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                  </span>
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a href="https://youtube.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-[#111318] transition-colors">
                  <span className="w-5 h-5 rounded-full bg-orange-100 text-[#FF7A00] flex items-center justify-center">
                    <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                  </span>
                  <span>YouTube</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@xhibitiq.com" className="flex items-center gap-2 hover:text-[#111318] transition-colors">
                  <span className="w-5 h-5 rounded-full bg-orange-100 text-[#FF7A00] flex items-center justify-center">
                    <Mail size={11} />
                  </span>
                  <span>info@xhibitiq.com</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 5: WORLD MAP & TAGLINE (Cols 10 to 12) */}
          <div className="lg:col-span-3 flex items-start gap-4">
            <div className="w-3/5">
              <img
                src="/assets/footer_map_clean.png"
                alt="Global Reach World Map"
                className="w-full h-auto object-contain select-none opacity-80"
              />
            </div>
            <div className="w-2/5 text-[11px] font-semibold text-[#62666D] leading-tight space-y-1">
              <div>Building brands.</div>
              <div>Creating experiences.</div>
              <div>Enabling growth.</div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-gray-500">
          <p>© 2026 XhibitIQ. All Rights Reserved.</p>

          <div className="flex items-center space-x-6">
            <a href="#" className="hover:text-gray-900 transition-colors">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-gray-900 transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
