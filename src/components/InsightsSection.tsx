"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight, X, ArrowRight } from "lucide-react";

interface InsightsSectionProps {
  onOpenProjectModal: () => void;
}

export default function InsightsSection({ onOpenProjectModal }: InsightsSectionProps) {
  const [activeArticle, setActiveArticle] = useState<number | null>(null);

  const articles = [
    {
      id: 1,
      title: "How AI is Reshaping BFSI Operations",
      img: "/assets/insight_ai_hd.jpg",
      category: "AI & TECHNOLOGY",
      content: `Artificial Intelligence is no longer just an experimental line item in financial services budgets; it has become the core operational backbone for competitive BFSI institutions in 2026. 

By unifying internal data silos, deploying real-time LLM agents for customer intelligence, and automating risk assessments, pioneering banks are cutting operational friction by up to 40% while raising customer retention.`,
    },
    {
      id: 2,
      title: "B2B Demand Generation Strategies for 2026",
      img: "/assets/insight_skyline_hd.jpg",
      category: "MARKETING",
      content: `The B2B buying journey in 2026 involves up to 12 distinct decision-makers before a single sales call occurs. Cold email blasts and static whitepapers fail to capture executive attention.

Modern enterprise growth requires an integrated demand engine that aligns digital brand building with high-touch executive experiences and predictive ABM analytics.`,
    },
    {
      id: 3,
      title: "Why Brand Strategy Still Matters in the Age of AI",
      img: "/assets/insight_bulb_hd.jpg",
      category: "CREATIVE",
      content: `As generative tools democratize basic visual creation, commodities become cheaper while true brand positioning becomes priceless. In 2026, audience trust belongs to companies with distinct editorial voices, clear philosophy, and art-directed design systems.`,
    },
  ];

  return (
    <section id="insights" className="py-16 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 gap-6">
          <div className="space-y-3 max-w-xl">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF7A00]" />
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#FF7A00]">
                INSIGHTS
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl xl:text-6xl font-black text-[#111318] tracking-tight leading-[1.08]">
              Ideas <br />
              Worth Sharing.
            </h2>
          </div>

          <div className="flex items-center space-x-6">
            <button
              onClick={onOpenProjectModal}
              className="inline-flex items-center gap-2 text-sm font-bold text-[#FF7A00] hover:text-[#F43B24] transition-colors cursor-pointer"
            >
              <span>Explore Insights</span>
              <ArrowRight size={16} />
            </button>

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
        </div>

        {/* 3 Exact Cards Grid with HD Photos & Crisp Typography */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {articles.map((art) => (
            <div
              key={art.id}
              onClick={() => setActiveArticle(art.id)}
              className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              {/* Card Image */}
              <div className="h-52 w-full overflow-hidden bg-gray-100">
                <img
                  src={art.img}
                  alt={art.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Card Body */}
              <div className="p-6 flex items-end justify-between flex-1">
                <div className="space-y-2">
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#FF7A00]">
                    {art.category}
                  </span>
                  <h3 className="text-base sm:text-lg font-black text-[#111318] leading-snug group-hover:text-[#FF7A00] transition-colors">
                    {art.title}
                  </h3>
                </div>

                <div className="w-9 h-9 rounded-full border border-orange-200 group-hover:border-[#FF7A00] group-hover:bg-[#FF7A00] flex items-center justify-center text-[#FF7A00] group-hover:text-white transition-all shadow-xs shrink-0 ml-4">
                  <ArrowRight size={16} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Reader Modal */}
      {activeArticle !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fadeIn">
          {(() => {
            const article = articles.find((a) => a.id === activeArticle)!;
            return (
              <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 max-h-[90vh] flex flex-col">
                <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-white">
                  <span className="text-xs font-black text-[#FF7A00] uppercase tracking-wider">
                    {article.category}
                  </span>
                  <button
                    onClick={() => setActiveArticle(null)}
                    className="w-8 h-8 rounded-full bg-gray-100 text-gray-600 hover:text-black flex items-center justify-center cursor-pointer transition-colors"
                  >
                    <X size={16} />
                  </button>
                </div>

                <div className="p-6 sm:p-8 overflow-y-auto space-y-4">
                  <h3 className="text-2xl font-black text-gray-900">{article.title}</h3>
                  <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">
                    {article.content}
                  </p>
                </div>
              </div>
            );
          })()}
        </div>
      )}
    </section>
  );
}
