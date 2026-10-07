"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustedBrands from "@/components/TrustedBrands";
import WhoWeAre from "@/components/WhoWeAre";
import Capabilities from "@/components/Capabilities";
import PurposeSection from "@/components/PurposeSection";
import Industries from "@/components/Industries";
import EventsSection from "@/components/EventsSection";
import InsightsSection from "@/components/InsightsSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import ProjectModal from "@/components/ProjectModal";
import VideoModal from "@/components/VideoModal";
import SearchModal from "@/components/SearchModal";

export default function Home() {
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white text-[#111318] flex flex-col font-sans">
      {/* Persistent / Sticky Floating Navigation */}
      <Navbar
        onOpenProjectModal={() => setIsProjectModalOpen(true)}
        onOpenSearchModal={() => setIsSearchModalOpen(true)}
      />

      {/* Hero Section */}
      <HeroSection
        onOpenProjectModal={() => setIsProjectModalOpen(true)}
        onOpenVideoModal={() => setIsVideoModalOpen(true)}
      />

      {/* Trusted By Brands Marquee Ticker */}
      <TrustedBrands />

      {/* Who We Are - Growth Partner Section */}
      <WhoWeAre onOpenProjectModal={() => setIsProjectModalOpen(true)} />

      {/* Capabilities - Four Capabilities. One Growth Partner. */}
      <Capabilities onOpenProjectModal={() => setIsProjectModalOpen(true)} />

      {/* Purpose Section - Where Marketing Meets Technology */}
      <PurposeSection onOpenProjectModal={() => setIsProjectModalOpen(true)} />

      {/* Industries - Built Around Your Industry */}
      <Industries onOpenProjectModal={() => setIsProjectModalOpen(true)} />

      {/* XhibitIQ Events Section */}
      <EventsSection onOpenProjectModal={() => setIsProjectModalOpen(true)} />

      {/* Insights - Ideas Worth Sharing */}
      <InsightsSection onOpenProjectModal={() => setIsProjectModalOpen(true)} />

      {/* Final Call to Action Section */}
      <FinalCTA onOpenProjectModal={() => setIsProjectModalOpen(true)} />

      {/* Footer */}
      <Footer onOpenProjectModal={() => setIsProjectModalOpen(true)} />

      {/* Interactive Modals */}
      <ProjectModal
        isOpen={isProjectModalOpen}
        onClose={() => setIsProjectModalOpen(false)}
      />

      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
      />

      <SearchModal
        isOpen={isSearchModalOpen}
        onClose={() => setIsSearchModalOpen(false)}
        onSelectService={(service) => {
          setIsSearchModalOpen(false);
          setIsProjectModalOpen(true);
        }}
      />
    </main>
  );
}
