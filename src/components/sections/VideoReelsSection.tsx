"use client";

import React, { useState } from "react";
import { VIDEO_REELS } from "@/data/studioData";
import { Play, Film, X, Clock, User } from "lucide-react";

export const VideoReelsSection: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<typeof VIDEO_REELS[0] | null>(null);

  return (
    <section id="video-reels" className="py-24 bg-[#07080B] relative border-t border-neutral-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-medium text-red-400 mb-3">
            <Film className="w-3.5 h-3.5" />
            <span>Behind The Scenes & Reels</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-white tracking-tight">
            Kilas Balik Sesi <span className="text-red-500 italic">Sinematik</span>
          </h2>
          <p className="mt-4 text-neutral-400 text-sm md:text-base">
            Saksikan bagaimana suasana hangat, pencahayaan presisi, dan arahan profesional tercipta di balik layar pemotretan Klasika.
          </p>
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {VIDEO_REELS.map((reel) => (
            <div
              key={reel.id}
              onClick={() => setActiveVideo(reel)}
              className="group relative rounded-3xl overflow-hidden bg-neutral-900 border border-neutral-800 aspect-[9/16] sm:aspect-[4/5] cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <img
                src={reel.poster}
                alt={reel.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/20" />

              {/* Play Button Icon Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-red-500/90 text-white flex items-center justify-center shadow-2xl shadow-red-500/40 group-hover:scale-110 transition-transform">
                  <Play className="w-6 h-6 fill-current ml-1" />
                </div>
              </div>

              {/* Top Tag */}
              <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[11px] font-semibold text-red-400 border border-white/10 uppercase">
                {reel.tag}
              </div>
              <div className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[11px] font-medium text-neutral-300 flex items-center gap-1">
                <Clock className="w-3 h-3 text-red-400" />
                <span>{reel.duration}</span>
              </div>

              {/* Bottom Info */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                <span className="text-xs text-neutral-400 flex items-center gap-1.5 mb-1">
                  <User className="w-3 h-3 text-red-400" />
                  {reel.client}
                </span>
                <h3 className="text-lg font-serif font-bold text-white leading-snug">
                  {reel.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Video Modal Player */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative max-w-xl w-full bg-neutral-900 border border-neutral-700 rounded-3xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/70 text-white hover:bg-red-500 transition-colors border border-white/15 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Video Element */}
            <div className="relative aspect-[9/16] max-h-[75vh] bg-black flex items-center justify-center">
              <video
                src={activeVideo.videoUrl}
                poster={activeVideo.poster}
                controls
                autoPlay
                playsInline
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6 bg-neutral-900 border-t border-neutral-800">
              <span className="text-xs font-semibold text-red-400 uppercase tracking-wider block mb-1">
                {activeVideo.tag} • {activeVideo.client}
              </span>
              <h3 className="text-xl font-serif font-bold text-white">
                {activeVideo.title}
              </h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
