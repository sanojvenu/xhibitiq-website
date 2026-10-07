"use client";

import React from "react";
import { X, Play, Volume2, Sparkles, CheckCircle2 } from "lucide-react";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function VideoModal({ isOpen, onClose }: VideoModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-lg animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-gray-900 rounded-3xl shadow-2xl overflow-hidden border border-gray-800 flex flex-col">
        {/* Header bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-800 bg-gray-950/80">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF7A00] animate-pulse"></span>
            <span className="text-xs font-bold uppercase tracking-widest text-gray-300">
              XHIBITIQ BRAND STORY — BUILD WHAT'S NEXT
            </span>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-300 flex items-center justify-center transition-colors"
            aria-label="Close video"
          >
            <X size={16} />
          </button>
        </div>

        {/* Video simulation container */}
        <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden group">
          {/* Background image preview */}
          <img
            src="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1400&auto=format&fit=crop"
            alt="XhibitIQ Story Video Preview"
            className="w-full h-full object-cover opacity-60"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent" />

          {/* Video overlay content */}
          <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-white text-xs font-semibold uppercase tracking-widest border border-white/20">
                02:45 • Integrated Agency Showcase
              </span>
              <div className="flex items-center gap-2 text-white/80 text-xs">
                <Volume2 size={16} />
                <span>HD 4K</span>
              </div>
            </div>

            <div className="text-center max-w-xl mx-auto space-y-4">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-[#FF7A00] to-[#F43B24] text-white flex items-center justify-center mx-auto shadow-brand-glow-lg cursor-pointer hover:scale-110 transition-transform group-hover:shadow-brand-glow">
                <Play size={32} className="ml-1 fill-white" />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  Where Marketing, Creative & Tech Converge
                </h3>
                <p className="text-gray-300 text-sm mt-1">
                  Discover how XhibitIQ transforms ambitious global brands through strategic creativity, high-impact experiences, and intelligent technology.
                </p>
              </div>
            </div>

            {/* Bottom bar stats */}
            <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-4 text-center">
              <div>
                <span className="block text-white font-bold text-lg">Marketing</span>
                <span className="text-gray-400 text-xs uppercase tracking-wider">Demand & ABM</span>
              </div>
              <div>
                <span className="block text-white font-bold text-lg">Creative</span>
                <span className="text-gray-400 text-xs uppercase tracking-wider">Brand & Design</span>
              </div>
              <div>
                <span className="block text-white font-bold text-lg">Technology</span>
                <span className="text-gray-400 text-xs uppercase tracking-wider">AI & Platforms</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
