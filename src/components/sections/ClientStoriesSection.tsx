"use client";

import React, { useState } from "react";
import { CLIENT_STORIES } from "@/data/studioData";
import { BookOpen, Quote, Calendar, ArrowRight, X } from "lucide-react";

export const ClientStoriesSection: React.FC = () => {
  const [activeStory, setActiveStory] = useState<typeof CLIENT_STORIES[0] | null>(null);

  return (
    <section id="client-stories" className="py-24 bg-[#0B0C10] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-medium text-red-400 mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Kisah & Dokumen Foto Klien</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-white tracking-tight">
            Cerita Di Balik <span className="text-red-500 italic">Lensa</span>
          </h2>
          <p className="mt-4 text-neutral-400 text-sm md:text-base">
            Setiap pemotretan bukan sekadar sesi foto biasa, melainkan lembaran sejarah personal yang kami bingkai dengan estetika tinggi.
          </p>
        </div>

        {/* Story Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CLIENT_STORIES.map((story) => (
            <div
              key={story.id}
              className="bg-neutral-900/80 border border-neutral-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row group hover:border-neutral-700 transition-all"
            >
              {/* Cover Image */}
              <div className="md:w-1/2 relative h-64 md:h-auto bg-black overflow-hidden">
                <img
                  src={story.cover}
                  alt={story.couple}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-xs text-red-400 font-semibold">
                  {story.category}
                </div>
              </div>

              {/* Story Content */}
              <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs text-neutral-400 mb-2">
                    <Calendar className="w-3.5 h-3.5 text-red-400" />
                    <span>{story.date}</span>
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-white mb-3">
                    {story.couple}
                  </h3>
                  <div className="relative pl-6 text-xs sm:text-sm text-neutral-300 italic leading-relaxed border-l-2 border-red-500/80 my-4">
                    <Quote className="w-4 h-4 text-red-500/30 absolute -top-1 -left-2 rotate-180" />
                    "{story.quote}"
                  </div>
                </div>

                <button
                  onClick={() => setActiveStory(story)}
                  className="mt-6 inline-flex items-center gap-2 text-xs font-bold text-red-400 hover:text-red-300 transition-colors cursor-pointer"
                >
                  <span>Lihat Galeri Foto Lengkap ({story.gallery.length} Foto)</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Story Multi-Photo Modal */}
      {activeStory && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setActiveStory(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-neutral-900 border border-neutral-700 rounded-3xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveStory(null)}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/70 text-white hover:bg-red-500 transition-colors border border-white/15 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-xs font-semibold text-red-400 uppercase tracking-widest block mb-1">
              {activeStory.category} • {activeStory.date}
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-6">
              Koleksi Foto Sesi: {activeStory.couple}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              {activeStory.gallery.map((img, i) => (
                <div key={i} className="rounded-xl overflow-hidden aspect-[3/4] border border-neutral-800">
                  <img src={img} alt={`Gallery ${i}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>

            <p className="text-xs sm:text-sm text-neutral-300 italic border-l-2 border-red-500 pl-4 py-1">
              "{activeStory.quote}"
            </p>
          </div>
        </div>
      )}
    </section>
  );
};
