"use client";

import React from "react";
import { STUDIO_PACKAGES } from "@/data/studioData";
import { Check, Sparkles, Clock, HardDrive, ArrowRight } from "lucide-react";

export const PricingSection: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-[#0E1017] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-medium text-red-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Investasi & Paket</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-white tracking-tight">
            Pilihan Paket Studio <span className="text-red-500 italic">Klasikapicture</span>
          </h2>
          <p className="mt-4 text-neutral-400 text-sm md:text-base">
            Transparan tanpa biaya tersembunyi. Termasuk fasilitas ruang ganti nyaman, retouching berstandar tinggi, dan backup file digital.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {STUDIO_PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                pkg.highlighted
                  ? "bg-gradient-to-b from-neutral-900 via-neutral-900 to-[#161313] border-2 border-red-500/80 shadow-2xl shadow-red-500/10 lg:-translate-y-2"
                  : "bg-neutral-900/60 border border-neutral-800 hover:border-neutral-700 shadow-xl"
              }`}
            >
              {/* Highlight Ribbon */}
              {pkg.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-red-500 text-white text-xs font-bold uppercase tracking-widest shadow-lg">
                  Paling Direkomendasikan
                </div>
              )}

              <div>
                <span className="text-xs font-bold text-red-400 uppercase tracking-wider block">
                  {pkg.category}
                </span>
                <h3 className="text-2xl font-serif font-bold text-white mt-1">
                  {pkg.title}
                </h3>
                <p className="mt-3 text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  {pkg.description}
                </p>

                {/* Price */}
                <div className="mt-6 pb-6 border-b border-neutral-800">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl sm:text-4xl font-bold text-white font-serif">
                      {pkg.price}
                    </span>
                    <span className="text-xs text-neutral-400">/ sesi</span>
                  </div>
                </div>

                {/* Key specs */}
                <div className="py-4 space-y-2 text-xs text-neutral-300 border-b border-neutral-800/60">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-red-400" />
                    <span>{pkg.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <HardDrive className="w-4 h-4 text-red-400" />
                    <span>{pkg.output}</span>
                  </div>
                </div>

                {/* Features List */}
                <div className="mt-6 space-y-3">
                  <span className="text-xs font-semibold text-neutral-300 uppercase tracking-wider block mb-2">
                    Fasilitas Termasuk:
                  </span>
                  {pkg.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <span className="text-xs sm:text-sm text-neutral-300">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-8 pt-6">
                <a
                  href={`#booking?package=${encodeURIComponent(pkg.title)}`}
                  className={`w-full py-3.5 px-4 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-all duration-200 ${
                    pkg.highlighted
                      ? "bg-red-500 hover:bg-red-600 text-white shadow-lg shadow-red-500/25"
                      : "bg-neutral-800 hover:bg-neutral-700 text-white"
                  }`}
                >
                  <span>Pilih Paket Ini</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Custom inquiry note */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-neutral-900/40 border border-neutral-800 max-w-2xl mx-auto">
          <p className="text-xs sm:text-sm text-neutral-400">
            Butuh sesi khusus skala komersial, luar ruangan (outdoor), atau sewa studio per jam?{" "}
            <a href="#booking" className="text-red-400 font-semibold underline underline-offset-4 hover:text-red-300">
              Hubungi Tim Konsultasi Kami
            </a>
          </p>
        </div>

      </div>
    </section>
  );
};
