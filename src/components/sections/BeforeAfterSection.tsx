"use client";

import React, { useState, useRef, useCallback } from "react";
import { BEFORE_AFTER_ITEMS } from "@/data/studioData";
import { Sparkles, SlidersHorizontal, CheckCircle2, Wand2 } from "lucide-react";

export const BeforeAfterSection: React.FC = () => {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const activeItem = BEFORE_AFTER_ITEMS[selectedIdx];

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPos(percent);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging.current) {
      handleMove(e.clientX);
    }
  };

  return (
    <section id="retouch-showcase" className="py-24 bg-[#07080B] relative overflow-hidden border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-medium text-red-400 mb-3">
            <Wand2 className="w-3.5 h-3.5" />
            <span>Signature Color Grading & Retouch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-white tracking-tight">
            Sentuhan Artistik <span className="text-red-500 italic">Klasika</span>
          </h2>
          <p className="mt-4 text-neutral-400 text-sm md:text-base">
            Geser pemisah pada gambar untuk membandingkan foto kamera RAW mentah dengan hasil Color Grading & Fine Art Retouching studio kami.
          </p>
        </div>

        {/* Preset Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {BEFORE_AFTER_ITEMS.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => {
                setSelectedIdx(idx);
                setSliderPos(50);
              }}
              className={`px-4 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                selectedIdx === idx
                  ? "bg-red-500 text-white shadow-lg shadow-red-500/25 scale-105"
                  : "bg-neutral-900 text-neutral-400 hover:text-white hover:bg-neutral-800 border border-neutral-800"
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>

        {/* Comparison Showcase Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Interactive Slider Box */}
          <div className="lg:col-span-8">
            <div
              ref={containerRef}
              onMouseDown={() => (isDragging.current = true)}
              onMouseUp={() => (isDragging.current = false)}
              onMouseLeave={() => (isDragging.current = false)}
              onMouseMove={handleMouseMove}
              onTouchMove={handleTouchMove}
              className="relative w-full aspect-[4/3] sm:aspect-[16/10] rounded-3xl overflow-hidden select-none cursor-ew-resize border border-neutral-800 shadow-2xl bg-black"
            >
              {/* After (Full color graded) Image */}
              <img
                src={activeItem.afterImage}
                alt="Signature Color Graded Klasika"
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              />

              {/* Before (RAW Flat) Image with Clip */}
              <div
                className="absolute inset-0 overflow-hidden pointer-events-none"
                style={{ width: `${sliderPos}%` }}
              >
                <img
                  src={activeItem.beforeImage}
                  alt="RAW Camera Capture"
                  className="absolute inset-0 w-full h-full object-cover pointer-events-none max-w-none"
                  style={{
                    width: containerRef.current ? `${containerRef.current.clientWidth}px` : "100%",
                    height: "100%",
                  }}
                />
              </div>

              {/* Slider Handle Divider Line */}
              <div
                className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_12px_rgba(255,255,255,0.8)] pointer-events-none"
                style={{ left: `${sliderPos}%` }}
              >
                {/* Center knob */}
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-white text-black flex items-center justify-center shadow-2xl border-2 border-red-500 pointer-events-none">
                  <SlidersHorizontal className="w-4 h-4 text-red-600" />
                </div>
              </div>

              {/* Labels */}
              <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-[11px] font-semibold text-neutral-300 border border-white/10 uppercase tracking-wider pointer-events-none">
                RAW (Sebelum)
              </div>
              <div className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full bg-red-500/80 backdrop-blur-md text-[11px] font-semibold text-white border border-red-400/30 uppercase tracking-wider pointer-events-none">
                Signature Klasika (Sesudah)
              </div>

              {/* Bottom Hint */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-[11px] text-neutral-400 border border-white/10 pointer-events-none hidden sm:block">
                Geser ke kiri / kanan untuk melihat detail
              </div>
            </div>
          </div>

          {/* Details & Specs info */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-neutral-900/70 border border-neutral-800 backdrop-blur-xl space-y-5">
              <div>
                <span className="text-xs font-semibold text-red-400 uppercase tracking-widest block mb-1">
                  {activeItem.category}
                </span>
                <h3 className="text-2xl font-serif font-bold text-white">
                  {activeItem.title}
                </h3>
                <p className="text-xs text-neutral-400 mt-1">
                  {activeItem.subtitle}
                </p>
              </div>

              <div className="space-y-3 pt-4 border-t border-neutral-800">
                <h4 className="text-xs font-bold text-neutral-300 uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-red-500" />
                  <span>Teknik Retouching & Grading:</span>
                </h4>
                <ul className="space-y-2.5">
                  {activeItem.details.map((detail, i) => (
                    <li key={i} className="flex items-center gap-2.5 text-xs text-neutral-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-red-500 flex-shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-neutral-800">
                <a
                  href="#booking"
                  className="w-full inline-flex items-center justify-center px-5 py-3 rounded-xl bg-red-500 hover:bg-red-600 text-white text-xs font-bold transition-all shadow-lg shadow-red-500/20"
                >
                  Pesan Sesi dengan Style Ini
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
