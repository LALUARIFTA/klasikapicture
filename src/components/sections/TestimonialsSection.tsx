"use client";

import React from "react";
import { CLIENT_REVIEWS } from "@/data/studioData";
import { Star, MessageSquareQuote, CheckCircle2 } from "lucide-react";

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-[#0B0C10] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-medium text-red-400 mb-3">
            <MessageSquareQuote className="w-3.5 h-3.5" />
            <span>Kisah Dari Klien</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-white tracking-tight">
            Apa Kata Mereka Tentang <span className="text-red-500 italic">Klasikapicture</span>
          </h2>
          <p className="mt-4 text-neutral-400 text-sm md:text-base">
            Ulasan nyata dari pasangan pengantin, wisudawan, dan klien profesional yang mempercayakan momen mereka kepada kami.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CLIENT_REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="p-8 rounded-3xl bg-neutral-900/60 border border-neutral-800 flex flex-col justify-between hover:border-neutral-700 transition-colors shadow-xl"
            >
              <div>
                {/* Rating Stars */}
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {Array.from({ length: rev.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-neutral-300 text-sm sm:text-base leading-relaxed italic">
                  &ldquo;{rev.comment}&rdquo;
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-neutral-800/80 flex items-center gap-3">
                <img
                  src={rev.avatar}
                  alt={rev.name}
                  className="w-11 h-11 rounded-full object-cover border border-neutral-700"
                />
                <div>
                  <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                    {rev.name}
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  </h4>
                  <p className="text-[11px] text-neutral-400">{rev.role}</p>
                  <span className="inline-block mt-0.5 text-[10px] text-red-400 font-medium">
                    {rev.sessionType}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
