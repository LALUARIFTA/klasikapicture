"use client";

import React from "react";
import { AnimatedMarqueeHero } from "@/components/hero/AnimatedMarqueeHero";
import { ShowcaseCorridorSection } from "@/components/sections/ShowcaseCorridorSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { StudioSetsSection } from "@/components/sections/StudioSetsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { BeforeAfterSection } from "@/components/sections/BeforeAfterSection";
import { PortfolioGallery } from "@/components/sections/PortfolioGallery";
import { VideoReelsSection } from "@/components/sections/VideoReelsSection";
import { ClientStoriesSection } from "@/components/sections/ClientStoriesSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { BookingSection } from "@/components/sections/BookingSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { AmbientAudioPlayer } from "@/components/layout/AmbientAudioPlayer";
import { MARQUEE_HERO_IMAGES } from "@/data/studioData";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <AnimatedMarqueeHero 
        tagline="Artistry in Every Pixel | Wedding, Portrait, Editorial"
        title={<>Fine Art Photography Studio</>}
        description="Mengabadikan momen tak terlupakan dengan estetika visual klasik dan sentuhan editorial modern. Temukan keindahan dalam setiap detail."
        ctaText="Lihat Portofolio Kami"
        images={MARQUEE_HERO_IMAGES}
        onCtaClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
      />
      <ShowcaseCorridorSection />
      <AboutSection />
      <StudioSetsSection />
      <ServicesSection />
      <BeforeAfterSection />
      <PortfolioGallery />
      <VideoReelsSection />
      <ClientStoriesSection />
      <PricingSection />
      <TestimonialsSection />
      <BookingSection />
      <FaqSection />
      <Footer />
      <AmbientAudioPlayer />
    </div>
  );
}
