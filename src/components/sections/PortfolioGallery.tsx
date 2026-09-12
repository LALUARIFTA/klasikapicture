"use client";

import React, { useState, useEffect } from "react";
import { PORTFOLIO_DATA, PortfolioItem } from "@/data/studioData";
import { Camera, X, Calendar, Layers, ZoomIn } from "lucide-react";

export const PortfolioGallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedPhoto, setSelectedPhoto] = useState<PortfolioItem | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedPhoto(null);
      }
    };
    if (selectedPhoto) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedPhoto]);

  const categories = [
    { id: "all", label: "Semua Karya" },
    { id: "wedding", label: "Wedding & Couple" },
    { id: "portrait", label: "Personal Portrait" },
    { id: "wisuda", label: "Wisuda / Graduate" },
    { id: "family", label: "Family & Maternity" },
    { id: "commercial", label: "Commercial" },
  ];

  const filteredItems =
    activeCategory === "all"
      ? PORTFOLIO_DATA
      : PORTFOLIO_DATA.filter((item) => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 bg-[#0B0C10] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-medium text-red-400 mb-3">
            <Camera className="w-3.5 h-3.5" />
            <span>Katalog Galeri</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-white tracking-tight">
            Galeri Portofolio <span className="text-red-500 italic">Klasikapicture</span>
          </h2>
          <p className="mt-4 text-neutral-400 text-sm md:text-base">
            Klik pada foto untuk melihat detail resolusi penuh dan narasi konsep di balik setiap sesi pemotretan.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                activeCategory === cat.id
                  ? "bg-red-500 text-white shadow-lg shadow-red-500/25 scale-105"
                  : "bg-neutral-900 text-neutral-400 hover:text-white hover:bg-neutral-800 border border-neutral-800"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedPhoto(item)}
              className="group relative rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800 aspect-[3/4] cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
              
              {/* Zoom icon hint */}
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="w-4 h-4" />
              </div>

              {/* Bottom text */}
              <div className="absolute bottom-0 left-0 right-0 p-5 transform group-hover:-translate-y-1 transition-transform">
                <span className="text-[11px] font-semibold text-red-400 uppercase tracking-wider block mb-1">
                  {item.categoryLabel}
                </span>
                <h4 className="text-base sm:text-lg font-serif font-bold text-white line-clamp-2">
                  {item.title}
                </h4>
                <div className="flex items-center gap-3 text-[11px] text-neutral-400 mt-2">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {item.date}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-neutral-900 border border-neutral-700 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/70 text-white hover:bg-red-500 transition-colors border border-white/15 cursor-pointer"
              aria-label="Tutup pratinjau"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image */}
            <div className="md:w-3/5 bg-black flex items-center justify-center overflow-hidden">
              <img
                src={selectedPhoto.imageUrl}
                alt={selectedPhoto.title}
                className="w-full h-full max-h-[60vh] md:max-h-[80vh] object-cover"
              />
            </div>

            {/* Modal Description */}
            <div className="md:w-2/5 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
              <div>
                <span className="px-3 py-1 rounded-full bg-red-500/20 text-red-400 text-xs font-semibold border border-red-500/30 uppercase tracking-wider">
                  {selectedPhoto.categoryLabel}
                </span>
                <h3 className="text-2xl font-serif font-bold text-white mt-3">
                  {selectedPhoto.title}
                </h3>
                <div className="flex items-center gap-2 text-xs text-neutral-400 mt-2 mb-4">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Sesi Tanggal: {selectedPhoto.date}</span>
                </div>
                <p className="text-sm text-neutral-300 leading-relaxed">
                  {selectedPhoto.description}
                </p>
                
                <div className="mt-6 p-4 rounded-xl bg-neutral-800/60 border border-neutral-700/60 space-y-2">
                  <div className="text-xs font-semibold text-neutral-200 flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-red-400" />
                    <span>Studio Details:</span>
                  </div>
                  <div className="text-xs text-neutral-400">
                    • Lighting: Dual Softbox 120cm + Rim Hair Light<br />
                    • Color Curve: Signature Vintage Warmth<br />
                    • Format: Medium-Format Ultra High Definition
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-neutral-800 flex items-center justify-between">
                <a
                  href="#booking"
                  onClick={() => setSelectedPhoto(null)}
                  className="w-full text-center px-4 py-3 rounded-xl bg-red-500 hover:bg-red-600 text-white text-sm font-semibold transition-colors"
                >
                  Mau Konsep Foto Seperti Ini?
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
