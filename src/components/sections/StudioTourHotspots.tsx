"use client";

import React, { useState } from "react";
import { Camera, Sparkles, Eye, Lightbulb, Coffee, Scissors, CheckCircle2 } from "lucide-react";

export const StudioTourHotspots: React.FC = () => {
  const [activeSpot, setActiveSpot] = useState(0);

  const hotspots = [
    {
      id: "spot-1",
      title: "Profoto Strobe & Parabolic Lighting",
      category: "Lighting Gear",
      desc: "Sistem pencahayaan profesional high-end asal Swedia dengan modifier parabolic 150cm dan rim light presisi untuk membentuk kontur wajah sinematik.",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1000&auto=format&fit=crop",
      x: "35%",
      y: "40%",
    },
    {
      id: "spot-2",
      title: "Private Dressing & Makeup Lounge",
      category: "Wardrobe & MUA",
      desc: "Ruang ganti dan rias eksklusif ber-AC lengkap dengan cermin berlampu artis, rak kostum desainer, dan hair-styling station.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop",
      x: "65%",
      y: "60%",
    },
    {
      id: "spot-3",
      title: "Client Review & Coffee Bar",
      category: "Lounge & Preview",
      desc: "Area santai untuk klien menikmati kopi seduh segar sambil mereview hasil foto mentah langsung di monitor kalibrasi warna profesional.",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1000&auto=format&fit=crop",
      x: "50%",
      y: "30%",
    },
  ];

  const current = hotspots[activeSpot];

  return (
    <section id="studio-tour" className="py-24 bg-[#07080B] relative overflow-hidden border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-medium text-red-400 mb-3">
            <Eye className="w-3.5 h-3.5" />
            <span>Virtual Studio Hotspot Tour</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-white tracking-tight">
            Fasilitas & Perlengkapan <span className="text-red-500 italic">Kelas Dunia</span>
          </h2>
          <p className="mt-4 text-neutral-400 text-sm md:text-base">
            Jelajahi titik-titik keunggulan interior studio kami yang dirancang untuk kenyamanan dan kualitas hasil akhir maksimal.
          </p>
        </div>

        {/* Tour Interactive Viewer Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Visual Interactive Map */}
          <div className="lg:col-span-8 relative rounded-3xl overflow-hidden aspect-[16/10] border border-neutral-800 shadow-2xl bg-black">
            <img
              src={current.image}
              alt={current.title}
              className="w-full h-full object-cover transition-all duration-700 opacity-85"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

            {/* Hotspot Pulsing Buttons */}
            {hotspots.map((spot, idx) => (
              <button
                key={spot.id}
                onClick={() => setActiveSpot(idx)}
                className={`absolute w-10 h-10 rounded-full flex items-center justify-center transition-all cursor-pointer -translate-x-1/2 -translate-y-1/2 ${
                  activeSpot === idx
                    ? "bg-red-500 text-white shadow-[0_0_25px_rgba(239,68,68,0.8)] scale-110 z-20 border-2 border-white"
                    : "bg-black/70 text-neutral-300 hover:bg-neutral-800 border border-white/20 z-10"
                }`}
                style={{ left: spot.x, top: spot.y }}
              >
                <span className="text-xs font-bold">{idx + 1}</span>
                {activeSpot === idx && (
                  <span className="absolute inset-0 rounded-full bg-red-500 animate-ping opacity-75 pointer-events-none" />
                )}
              </button>
            ))}

            <div className="absolute bottom-4 left-4 px-4 py-1.5 rounded-full bg-black/70 backdrop-blur-md text-xs text-neutral-200 border border-white/10">
              Hotspot {activeSpot + 1} dari {hotspots.length} • Klik titik untuk melihat detail
            </div>
          </div>

          {/* Hotspot Description Sidebar */}
          <div className="lg:col-span-4 p-8 rounded-3xl bg-neutral-900/90 border border-neutral-800 backdrop-blur-xl space-y-6">
            <div>
              <span className="text-xs font-semibold text-red-400 uppercase tracking-wider block mb-1">
                {current.category}
              </span>
              <h3 className="text-2xl font-serif font-bold text-white">
                {current.title}
              </h3>
              <p className="text-sm text-neutral-300 mt-3 leading-relaxed">
                {current.desc}
              </p>
            </div>

            <div className="space-y-3 pt-4 border-t border-neutral-800">
              {hotspots.map((spot, idx) => (
                <button
                  key={spot.id}
                  onClick={() => setActiveSpot(idx)}
                  className={`w-full text-left p-3.5 rounded-2xl border transition-all flex items-center justify-between cursor-pointer ${
                    activeSpot === idx
                      ? "bg-red-500/15 border-red-500 text-white"
                      : "bg-neutral-950/60 border-neutral-800 text-neutral-400 hover:text-white"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${activeSpot === idx ? "bg-red-500 text-white" : "bg-neutral-800 text-neutral-400"}`}>
                      {idx + 1}
                    </span>
                    <span className="text-xs font-semibold">{spot.title}</span>
                  </div>
                  <CheckCircle2 className={`w-4 h-4 ${activeSpot === idx ? "text-red-400" : "text-neutral-700"}`} />
                </button>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
