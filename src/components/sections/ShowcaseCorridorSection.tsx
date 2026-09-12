"use client";

import React from "react";
import ImageStreamHero from "@/components/hero/ImageStreamHero";
import { CORRIDOR_STREAM_IMAGES } from "@/data/studioData";
import { Sparkles, Eye } from "lucide-react";

export const ShowcaseCorridorSection: React.FC = () => {
  return (
    <section id="showcase-stream" className="relative py-20 bg-[#07080B] overflow-hidden border-t border-b border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-medium text-red-400 mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Visual Depth Experience</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-white tracking-tight">
          Lorong Karya <span className="italic font-normal text-red-400">Klasika</span>
        </h2>
        <p className="mt-3 text-neutral-400 max-w-xl mx-auto text-sm md:text-base">
          Setiap bingkai foto bergerak maju secara tak terbatas, menangkap dinamika emosi, gestur, dan pencahayaan studio bernilai seni tinggi.
        </p>
      </div>

      {/* 3D Corridor Canvas Container */}
      <div className="relative w-full h-[380px] sm:h-[460px] md:h-[540px] bg-gradient-to-b from-[#07080B] via-[#0D0E15] to-[#07080B] flex items-center justify-center">
        <ImageStreamHero
          images={CORRIDOR_STREAM_IMAGES}
          cards={9}
          speed={18}
          axis={50}
          className="w-full h-full"
        >
          {/* Central Overlay Badge */}
          <div className="relative z-20 flex flex-col items-center pointer-events-none select-none text-center px-4">
            <div className="px-4 py-2 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-xs text-neutral-300 font-sans tracking-wider uppercase flex items-center gap-2 shadow-2xl">
              <Eye className="w-3.5 h-3.5 text-red-500 animate-pulse" />
              <span>3D Gallery Stream • 30° Perspective</span>
            </div>
          </div>
        </ImageStreamHero>
      </div>
    </section>
  );
};
