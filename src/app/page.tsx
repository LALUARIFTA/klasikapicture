"use client";

import React from "react";
import { AnimatedMarqueeHero } from "@/components/hero/AnimatedMarqueeHero";
import { ShowcaseCorridorSection } from "@/components/sections/ShowcaseCorridorSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { StudioSetsSection } from "@/components/sections/StudioSetsSection";
import { StudioTourHotspots } from "@/components/sections/StudioTourHotspots";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { BeforeAfterSection } from "@/components/sections/BeforeAfterSection";
import { PortfolioGallery } from "@/components/sections/PortfolioGallery";
import { VideoReelsSection } from "@/components/sections/VideoReelsSection";
import { ClientStoriesSection } from "@/components/sections/ClientStoriesSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { StyleFinderQuiz } from "@/components/sections/StyleFinderQuiz";
import { AvailabilityCalendarSection } from "@/components/sections/AvailabilityCalendarSection";
import { BookingSection } from "@/components/sections/BookingSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { AmbientAudioPlayer } from "@/components/layout/AmbientAudioPlayer";
import { ThemeAccentSwitcher } from "@/components/layout/ThemeAccentSwitcher";
import { ScrollProgressBar } from "@/components/ui/ScrollProgressBar";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { BackToTop } from "@/components/ui/BackToTop";
import { MobileBottomBar } from "@/components/ui/MobileBottomBar";
import { MARQUEE_HERO_IMAGES } from "@/data/studioData";

export default function Home() {
  return (
    <div className="overflow-hidden relative">
      {/* 35mm Analog Film Grain Texture */}
      <div className="film-grain" />

      {/* Global Scroll Progress */}
      <ScrollProgressBar />

      {/* Interactive Cursor Follower (Desktop) */}
      <CustomCursor />

      {/* Navigation */}
      <Navbar />

      {/* Hero */}
      <AnimatedMarqueeHero 
        tagline="Artistry in Every Pixel | Wedding, Portrait, Editorial"
        title={<>Fine Art Photography Studio</>}
        description="Mengabadikan momen tak terlupakan dengan estetika visual klasik dan sentuhan editorial modern. Temukan keindahan dalam setiap detail."
        ctaText="Lihat Portofolio Kami"
        images={MARQUEE_HERO_IMAGES}
        onCtaClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
      />

      {/* Sections Flow */}
      <ShowcaseCorridorSection />
      <AboutSection />
      <StudioSetsSection />
      <StudioTourHotspots />
      <ServicesSection />
      <BeforeAfterSection />
      <PortfolioGallery />
      <VideoReelsSection />
      <ClientStoriesSection />
      <StyleFinderQuiz />
      <AvailabilityCalendarSection />
      <PricingSection />
      <TestimonialsSection />
      <BookingSection />
      <FaqSection />
      <Footer />

      {/* Floating UX Widgets */}
      <AmbientAudioPlayer />
      <ThemeAccentSwitcher />
      <BackToTop />
      <MobileBottomBar />
    </div>
  );
}
