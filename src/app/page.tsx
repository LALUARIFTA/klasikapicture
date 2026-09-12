"use client";

import React from "react";
import { AnimatedMarqueeHero } from "@/components/hero/AnimatedMarqueeHero";
import { ShowcaseCorridorSection } from "@/components/sections/ShowcaseCorridorSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { PortfolioGallery } from "@/components/sections/PortfolioGallery";
import { PricingSection } from "@/components/sections/PricingSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { BookingSection } from "@/components/sections/BookingSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
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
      <ServicesSection />
      <PortfolioGallery />
      <PricingSection />
      <TestimonialsSection />
      <BookingSection />
      <FaqSection />
      <Footer />
    </div>
  );
}
