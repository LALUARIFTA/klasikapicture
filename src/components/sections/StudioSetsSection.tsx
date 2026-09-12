"use client";

import React, { useState } from "react";
import { STUDIO_SETS } from "@/data/studioData";
import { LayoutGrid, Users, Lightbulb, Sparkles, ArrowRight } from "lucide-react";

export const StudioSetsSection: React.FC = () => {
  const [activeSetId, setActiveSetId] = useState(STUDIO_SETS[0].id);
  const activeSet = STUDIO_SETS.find((s) => s.id === activeSetId) || STUDIO_SETS[0];

  return (
    <section id="studio-sets" className="py-24 bg-[#0B0C10] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-medium text-red-400 mb-3">
            <LayoutGrid className="w-3.5 h-3.5" />
            <span>Studio Environment & Ambience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-white tracking-tight">
            Eksplorasi Set Studio <span className="text-red-500 italic">Klasika</span>
          </h2>
          <p className="mt-4 text-neutral-400 text-sm md:text-base">
            Setiap sudut ruangan dirancang dengan akustik visual, pencahayaan berstandar komersial, dan properti estetik untuk menghidupkan karakter foto Anda.
          </p>
        </div>

        {/* Set Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {STUDIO_SETS.map((set) => {
            const isActive = set.id === activeSetId;
            return (
              <button
                key={set.id}
                onClick={() => setActiveSetId(set.id)}
                className={`p-6 rounded-2xl text-left transition-all duration-300 border cursor-pointer relative overflow-hidden ${
                  isActive
                    ? "bg-neutral-900 border-red-500/80 shadow-2xl shadow-red-500/10"
                    : "bg-neutral-950/60 border-neutral-800 hover:border-neutral-700 hover:bg-neutral-900/40"
                }`}
              >
                {isActive && (
                  <div className="absolute top-0 right-0 w-16 h-16 bg-red-500/10 blur-xl pointer-events-none" />
                )}
                <span className="text-[11px] font-semibold text-red-400 uppercase tracking-wider block mb-1">
                  {set.theme}
                </span>
                <h3 className="text-lg font-serif font-bold text-white mb-2">
                  {set.name}
                </h3>
                <p className="text-xs text-neutral-400 line-clamp-2">
                  {set.description}
                </p>
              </button>
            );
          })}
        </div>

        {/* Selected Set Deep Dive Card */}
        <div className="bg-neutral-900/90 border border-neutral-800 rounded-3xl overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">
          
          {/* Image */}
          <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-full min-h-[380px] bg-black">
            <img
              src={activeSet.image}
              alt={activeSet.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-neutral-900" />
            <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-xs text-neutral-200">
              Set Showcase
            </div>
          </div>

          {/* Content info */}
          <div className="lg:col-span-5 p-8 sm:p-10 space-y-6">
            <div>
              <div className="flex flex-wrap gap-2 mb-3">
                {activeSet.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-0.5 rounded-md bg-red-500/10 border border-red-500/20 text-red-400 text-[11px] font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                {activeSet.name}
              </h3>
              <p className="text-sm text-neutral-300 mt-3 leading-relaxed">
                {activeSet.description}
              </p>
            </div>

            <div className="space-y-3 pt-4 border-t border-neutral-800 text-xs">
              <div className="flex items-start gap-2.5 text-neutral-300">
                <Lightbulb className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                <span>{activeSet.specs}</span>
              </div>
              <div className="flex items-start gap-2.5 text-neutral-300">
                <Sparkles className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                <span>Termasuk properti vintage, kursi klasik, kain tekstil, & aksesoris pose.</span>
              </div>
            </div>

            <div className="pt-4 border-t border-neutral-800">
              <a
                href="#booking"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-red-500 hover:bg-red-600 text-white text-xs sm:text-sm font-semibold transition-all shadow-lg shadow-red-500/25"
              >
                <span>Reservasi Sesi di {activeSet.name}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
