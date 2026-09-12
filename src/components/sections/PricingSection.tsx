"use client";

import React, { useState } from "react";
import { STUDIO_PACKAGES, ADDON_OPTIONS } from "@/data/studioData";
import { Check, Sparkles, Clock, HardDrive, ArrowRight, Calculator, Plus } from "lucide-react";

export const PricingSection: React.FC = () => {
  const [calcPackage, setCalcPackage] = useState(STUDIO_PACKAGES[1]);
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);

  // Parse numeric price from format like "Rp 1.850.000"
  const parsePrice = (priceStr: string) => {
    return parseInt(priceStr.replace(/[^0-9]/g, ""), 10) || 0;
  };

  const basePrice = parsePrice(calcPackage.price);
  const addonsTotal = selectedAddons.reduce((acc, addonId) => {
    const item = ADDON_OPTIONS.find((a) => a.id === addonId);
    return acc + (item ? item.price : 0);
  }, 0);
  const grandTotal = basePrice + addonsTotal;

  const toggleAddon = (addonId: string) => {
    setSelectedAddons((prev) =>
      prev.includes(addonId) ? prev.filter((id) => id !== addonId) : [...prev, addonId]
    );
  };

  const formatRupiah = (val: number) => {
    return "Rp " + val.toLocaleString("id-ID");
  };

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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-16">
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
                  href="#booking"
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

        {/* Interactive Add-on Calculator Box */}
        <div className="bg-neutral-900/90 border border-neutral-800 rounded-3xl p-8 sm:p-10 shadow-2xl backdrop-blur-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-neutral-800 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-red-500/20 text-red-400 flex items-center justify-center border border-red-500/30">
                <Calculator className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold text-white">
                  Kalkulator Estimasi & Custom Add-On
                </h3>
                <p className="text-xs text-neutral-400 mt-0.5">
                  Sesuaikan paket utama dengan opsi tambahan layanan yang Anda butuhkan
                </p>
              </div>
            </div>

            {/* Package selector dropdown in calculator */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-neutral-400">Paket Dasar:</span>
              <select
                value={calcPackage.id}
                onChange={(e) => {
                  const found = STUDIO_PACKAGES.find((p) => p.id === e.target.value);
                  if (found) setCalcPackage(found);
                }}
                className="px-3 py-2 rounded-xl bg-neutral-950 border border-neutral-800 text-white text-xs font-semibold focus:outline-none focus:border-red-500"
              >
                {STUDIO_PACKAGES.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.title} ({p.price})
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Addons Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {ADDON_OPTIONS.map((addon) => {
              const isChecked = selectedAddons.includes(addon.id);
              return (
                <div
                  key={addon.id}
                  onClick={() => toggleAddon(addon.id)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer select-none flex items-start gap-3 ${
                    isChecked
                      ? "bg-red-500/10 border-red-500/60 shadow-lg shadow-red-500/10"
                      : "bg-neutral-950/60 border-neutral-800/80 hover:border-neutral-700"
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5 border ${
                      isChecked
                        ? "bg-red-500 border-red-500 text-white"
                        : "border-neutral-700 bg-neutral-900"
                    }`}
                  >
                    {isChecked ? <Check className="w-3.5 h-3.5 stroke-[3]" /> : <Plus className="w-3 h-3 text-neutral-500" />}
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-white">
                      {addon.name}
                    </h4>
                    <p className="text-[11px] text-neutral-400 mt-0.5">
                      {addon.desc}
                    </p>
                    <span className="inline-block mt-2 text-xs font-bold text-red-400">
                      +{formatRupiah(addon.price)}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Calculator Bottom Summary */}
          <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs text-neutral-400 block">Total Perkiraan Biaya:</span>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl sm:text-3xl font-bold font-serif text-white">
                  {formatRupiah(grandTotal)}
                </span>
                <span className="text-xs text-neutral-400">
                  ({calcPackage.title} + {selectedAddons.length} Add-on)
                </span>
              </div>
            </div>

            <a
              href="#booking"
              className="px-6 py-3 rounded-xl bg-red-500 hover:bg-red-600 text-white text-xs sm:text-sm font-bold shadow-lg shadow-red-500/20 text-center transition-all"
            >
              Lanjutkan ke Form Reservasi
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
