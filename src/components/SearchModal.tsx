"use client";

import React, { useState } from "react";
import { Search, X, ArrowRight, Sparkles } from "lucide-react";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectService: (service: string) => void;
}

export default function SearchModal({
  isOpen,
  onClose,
  onSelectService,
}: SearchModalProps) {
  const [query, setQuery] = useState("");

  if (!isOpen) return null;

  const quickLinks = [
    { title: "B2B Demand Generation", category: "Marketing & Growth", hash: "#capabilities" },
    { title: "Brand Strategy & Identity", category: "Creative & Brand", hash: "#capabilities" },
    { title: "Executive Summits & Conferences", category: "Experiences & Events", hash: "#events" },
    { title: "AI & Digital Transformation", category: "Technology Consulting", hash: "#capabilities" },
    { title: "BFSI & Fintech Case Studies", category: "Industries", hash: "#industries" },
    { title: "How AI Is Reshaping BFSI Operations", category: "Insights", hash: "#insights" },
  ];

  const filteredLinks = query
    ? quickLinks.filter(
        (link) =>
          link.title.toLowerCase().includes(query.toLowerCase()) ||
          link.category.toLowerCase().includes(query.toLowerCase())
      )
    : quickLinks;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/60 backdrop-blur-md animate-fadeIn">
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col">
        {/* Input Header */}
        <div className="flex items-center px-6 py-4 border-b border-gray-100 bg-white">
          <Search size={22} className="text-[#FF7A00] shrink-0 mr-3" />
          <input
            type="text"
            autoFocus
            placeholder="Search XhibitIQ services, insights, industries..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full text-base font-medium text-gray-900 placeholder-gray-400 focus:outline-none bg-transparent"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="text-xs font-semibold text-gray-400 hover:text-gray-600 mr-2"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 flex items-center justify-center shrink-0 transition-colors"
          >
            <X size={16} />
          </button>
        </div>

        {/* Results Body */}
        <div className="p-6 max-h-[60vh] overflow-y-auto space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-widest text-[#FF7A00]">
              {query ? "SEARCH RESULTS" : "POPULAR SUGGESTIONS"}
            </span>
            <span className="text-xs text-gray-400">{filteredLinks.length} topics found</span>
          </div>

          <div className="space-y-2">
            {filteredLinks.length > 0 ? (
              filteredLinks.map((item, idx) => (
                <a
                  key={idx}
                  href={item.hash}
                  onClick={onClose}
                  className="p-3.5 rounded-2xl bg-gray-50/80 hover:bg-orange-50/70 border border-transparent hover:border-orange-200/60 transition-all flex items-center justify-between group"
                >
                  <div>
                    <span className="text-xs font-semibold text-[#FF7A00] block">
                      {item.category}
                    </span>
                    <span className="text-sm font-bold text-gray-900 group-hover:text-[#111318]">
                      {item.title}
                    </span>
                  </div>
                  <ArrowRight
                    size={16}
                    className="text-gray-400 group-hover:text-[#FF7A00] group-hover:translate-x-1 transition-all"
                  />
                </a>
              ))
            ) : (
              <div className="text-center py-8 text-gray-500">
                <p>No exact match found for "{query}".</p>
                <p className="text-xs text-gray-400 mt-1">
                  Try searching for "Marketing", "Brand", "AI", or "Events".
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
