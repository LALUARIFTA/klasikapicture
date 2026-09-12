"use client";

import React from "react";
import { AnimatedMarqueeHero } from "@/components/hero/AnimatedMarqueeHero";
import { AboutSection } from "@/components/sections/AboutSection";
import { StudioSetsSection } from "@/components/sections/StudioSetsSection";
import { BeforeAfterSection } from "@/components/sections/BeforeAfterSection";
import { PortfolioGallery } from "@/components/sections/PortfolioGallery";
import { PricingSection } from "@/components/sections/PricingSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { BookingSection } from "@/components/sections/BookingSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { AmbientAudioPlayer } from "@/components/layout/AmbientAudioPlayer";
import { ThemeAccentSwitcher } from "@/components/layout/ThemeAccentSwitcher";
import { ScrollProgressBar } from "@/components/ui/ScrollProgressBar";
import { BackToTop } from "@/components/ui/BackToTop";
import { MobileBottomBar } from "@/components/ui/MobileBottomBar";
import { MARQUEE_HERO_IMAGES } from "@/data/studioData";

export default function Home() {
  return (
    <div className="overflow-hidden relative bg-[#07080B] text-foreground">
      {/* 35mm Analog Film Grain Texture Overlay */}
      <div className="film-grain" />

      {/* Global Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* Modern Desktop & Mobile Navigation */}
      <Navbar />

      {/* Hero Section */}
      <AnimatedMarqueeHero 
        tagline="Artistry in Every Pixel | Wedding, Portrait, Editorial"
        title={<>Fine Art Photography Studio</>}
        description="Mengabadikan momen tak terlupakan dengan estetika visual klasik dan sentuhan editorial modern. Temukan keindahan dalam setiap detail."
        ctaText="Lihat Portofolio Kami"
        images={MARQUEE_HERO_IMAGES}
        onCtaClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
      />

      {/* Core Studio Philosophy & Features */}
      <AboutSection />

      {/* Studio Interior & Sets */}
      <StudioSetsSection />

      {/* Color Grading & Retouching Comparison */}
      <BeforeAfterSection />

      {/* Complete Portfolio Showcase */}
      <PortfolioGallery />

      {/* Pricing & Interactive Add-on Calculator */}
      <PricingSection />

      {/* Client Reviews */}
      <TestimonialsSection />

      {/* Booking with Live Slot Picker & Instant Invoice */}
      <BookingSection />

      {/* FAQ with Live Search Filter */}
      <FaqSection />

      {/* Footer with Map & Contact */}
      <Footer />

      {/* Floating Auxiliary UX Elements */}
      <AmbientAudioPlayer />
      <ThemeAccentSwitcher />
      <BackToTop />
      <MobileBottomBar />
    </div>
  );
}
