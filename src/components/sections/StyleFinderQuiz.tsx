"use client";

import React, { useState } from "react";
import { Sparkles, Compass, CheckCircle, ArrowRight, RotateCcw, Palette, Layers, Camera } from "lucide-react";

export const StyleFinderQuiz: React.FC = () => {
  const [step, setStep] = useState(1);
  const [selections, setSelections] = useState({
    sessionType: "",
    vibe: "",
    palette: "",
  });

  const sessionOptions = [
    { id: "wedding", label: "Wedding & Prewedding", icon: "💍", desc: "Momen romantis abadi bersama pasangan" },
    { id: "portrait", label: "Personal Portrait & Model", icon: "✨", desc: "Portofolio visual, profil eksekutif, atau wisuda" },
    { id: "family", label: "Family & Maternity", icon: "👨‍👩‍👧", desc: "Kehangatan generasi keluarga besar" },
    { id: "commercial", label: "Brand & Commercial", icon: "📸", desc: "Lookbook busana, katalog, atau kampanye produk" },
  ];

  const vibeOptions = [
    { id: "vintage", label: "Timeless Vintage & Intimate", desc: "Pencahayaan dramatis, tirai beludru, sentuhan klasik Eropa", set: "The Velvet Salon" },
    { id: "minimalist", label: "Minimalist High-Key & Modern", desc: "Latar putih seamless, pencahayaan lembut natural, clean", set: "The Monolith White Space" },
    { id: "cinematic", label: "Contemporary Architectural Shadows", desc: "Permainan bayangan kisi-kisi, modern & tegas", set: "The Architectural Shadow Lounge" },
  ];

  const paletteOptions = [
    { id: "earth", label: "Warm Earth Tone", colors: ["#C48B71", "#785848", "#E6D7C3", "#3B2E2A"], desc: "Cokelat hangat, beige, terracotta, cream" },
    { id: "monochrome", label: "Noir & Graphite Monochrome", colors: ["#1A1A1A", "#4A4A4A", "#9E9E9E", "#FAFAFA"], desc: "Hitam elegan, abu-abu arang, putih bersih" },
    { id: "pastel", label: "Soft Pastel & Romantic Rose", colors: ["#E8B4B8", "#EED6D3", "#A49393", "#67595E"], desc: "Dusty rose, blush pink, soft mauve, beige" },
  ];

  const handleSelect = (field: string, val: string) => {
    setSelections((prev) => ({ ...prev, [field]: val }));
    if (step < 3) {
      setStep((prev) => prev + 1);
    }
  };

  const handleReset = () => {
    setStep(1);
    setSelections({ sessionType: "", vibe: "", palette: "" });
  };

  const selectedVibeObj = vibeOptions.find((v) => v.id === selections.vibe);
  const selectedPaletteObj = paletteOptions.find((p) => p.id === selections.palette);
  const selectedSessionObj = sessionOptions.find((s) => s.id === selections.sessionType);

  return (
    <section id="style-finder" className="py-24 bg-[#07080B] relative overflow-hidden border-t border-neutral-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-medium text-red-400 mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Interactive Moodboard Assistant</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-white tracking-tight">
            Temukan Konsep Visual <span className="text-red-500 italic">Ideal Anda</span>
          </h2>
          <p className="mt-4 text-neutral-400 text-sm md:text-base">
            Ikuti 3 langkah cepat untuk mencocokkan karakter, set studio, dan rekomendasi palet busana terbaik untuk sesi foto Anda.
          </p>
        </div>

        {/* Wizard Card Container */}
        <div className="bg-neutral-900/90 border border-neutral-800 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-xl">
          
          {/* Progress Bar */}
          <div className="flex items-center justify-between mb-8 pb-6 border-b border-neutral-800">
            <div className="flex items-center gap-3">
              {[1, 2, 3].map((num) => (
                <div key={num} className="flex items-center gap-2">
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                      step === num
                        ? "bg-red-500 text-white shadow-lg shadow-red-500/30"
                        : step > num
                        ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                        : "bg-neutral-800 text-neutral-500"
                    }`}
                  >
                    {step > num ? "✓" : num}
                  </div>
                  <span className="text-xs text-neutral-400 hidden sm:inline">
                    {num === 1 ? "Jenis Sesi" : num === 2 ? "Mood & Suasana" : "Palet Busana"}
                  </span>
                  {num < 3 && <div className="w-6 sm:w-12 h-0.5 bg-neutral-800" />}
                </div>
              ))}
            </div>

            {step > 1 && (
              <button
                onClick={handleReset}
                className="text-xs text-neutral-400 hover:text-red-400 flex items-center gap-1 transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Ulangi Kuis</span>
              </button>
            )}
          </div>

          {/* STEP 1: Session Type */}
          {step === 1 && (
            <div className="space-y-4 animate-in fade-in duration-300">
              <h3 className="text-xl font-serif font-bold text-white mb-6">
                Langkah 1: Apa momen utama yang ingin Anda abadikan?
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {sessionOptions.map((opt) => (
                  <div
                    key={opt.id}
                    onClick={() => handleSelect("sessionType", opt.id)}
                    className="p-5 rounded-2xl bg-neutral-950 border border-neutral-800 hover:border-red-500 hover:bg-neutral-900/60 transition-all cursor-pointer group flex items-start gap-4"
                  >
                    <span className="text-3xl">{opt.icon}</span>
                    <div>
                      <h4 className="text-base font-serif font-bold text-white group-hover:text-red-400 transition-colors">
                        {opt.label}
                      </h4>
                      <p className="text-xs text-neutral-400 mt-1">{opt.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* STEP 2: Vibe & Atmosphere */}
          {step === 2 && (
            <div className="space-y-4 animate-in fade-in duration-300">
              <h3 className="text-xl font-serif font-bold text-white mb-6">
                Langkah 2: Suasana visual apa yang paling mewakili estetika Anda?
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {vibeOptions.map((vibe) => (
                  <div
                    key={vibe.id}
                    onClick={() => handleSelect("vibe", vibe.id)}
                    className="p-5 rounded-2xl bg-neutral-950 border border-neutral-800 hover:border-red-500 hover:bg-neutral-900/60 transition-all cursor-pointer group flex items-center justify-between"
                  >
                    <div>
                      <span className="text-[11px] font-semibold text-red-400 uppercase tracking-widest block mb-1">
                        Rekomendasi Set: {vibe.set}
                      </span>
                      <h4 className="text-base font-serif font-bold text-white group-hover:text-red-400 transition-colors">
                        {vibe.label}
                      </h4>
                      <p className="text-xs text-neutral-400 mt-1">{vibe.desc}</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-neutral-600 group-hover:text-red-400 transition-colors flex-shrink-0" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* STEP 3: Color Palette */}
          {step === 3 && (
            <div className="space-y-4 animate-in fade-in duration-300">
              <h3 className="text-xl font-serif font-bold text-white mb-6">
                Langkah 3: Pilih palet warna busana / outfit yang Anda rencanakan:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {paletteOptions.map((pal) => (
                  <div
                    key={pal.id}
                    onClick={() => handleSelect("palette", pal.id)}
                    className="p-5 rounded-2xl bg-neutral-950 border border-neutral-800 hover:border-red-500 hover:bg-neutral-900/60 transition-all cursor-pointer group flex flex-col justify-between"
                  >
                    <div>
                      <h4 className="text-sm font-serif font-bold text-white group-hover:text-red-400 transition-colors">
                        {pal.label}
                      </h4>
                      <p className="text-[11px] text-neutral-400 mt-1 mb-4">{pal.desc}</p>
                    </div>

                    {/* Color swatches */}
                    <div className="flex gap-2 pt-2 border-t border-neutral-800">
                      {pal.colors.map((c, i) => (
                        <div
                          key={i}
                          className="w-6 h-6 rounded-full border border-white/20 shadow-sm"
                          style={{ backgroundColor: c }}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* RESULTS CARD (When all steps finished) */}
          {selections.sessionType && selections.vibe && selections.palette && (
            <div className="mt-8 pt-8 border-t border-neutral-800 animate-in fade-in slide-in-from-bottom-3 duration-300">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-neutral-950 via-neutral-900 to-[#1b1414] border border-red-500/40">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                  <div>
                    <span className="px-3 py-1 rounded-full bg-red-500/20 text-red-400 text-xs font-bold border border-red-500/30 uppercase tracking-widest">
                      Hasil Rekomendasi Moodboard
                    </span>
                    <h4 className="text-2xl font-serif font-bold text-white mt-2">
                      Konsep {selectedVibeObj?.label}
                    </h4>
                  </div>

                  <button
                    onClick={handleReset}
                    className="self-start sm:self-auto px-4 py-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-xs text-neutral-300 transition-colors"
                  >
                    Atur Ulang
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-neutral-300 mb-6">
                  <div className="p-3.5 rounded-xl bg-neutral-900/80 border border-neutral-800">
                    <span className="text-neutral-500 block mb-1">Set Studio Pilihan:</span>
                    <span className="font-bold text-white">{selectedVibeObj?.set}</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-neutral-900/80 border border-neutral-800">
                    <span className="text-neutral-500 block mb-1">Kategori Sesi:</span>
                    <span className="font-bold text-white">{selectedSessionObj?.label}</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-neutral-900/80 border border-neutral-800">
                    <span className="text-neutral-500 block mb-1">Rekomendasi Wardrobe:</span>
                    <span className="font-bold text-white">{selectedPaletteObj?.label}</span>
                  </div>
                </div>

                <a
                  href="#booking"
                  className="w-full py-3.5 rounded-xl bg-red-500 hover:bg-red-600 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-red-500/25 transition-all"
                >
                  <Camera className="w-4 h-4" />
                  <span>Kunci Konsep Ini & Lanjut Reservasi Jadwal</span>
                </a>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
