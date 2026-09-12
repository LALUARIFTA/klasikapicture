"use client";

import React, { useState } from "react";
import { FAQ_LIST } from "@/data/studioData";
import { HelpCircle, ChevronDown, Search } from "lucide-react";

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const filteredFaqs = FAQ_LIST.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="faq" className="py-24 bg-[#0B0C10] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-medium text-red-400 mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Pertanyaan Umum</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-white tracking-tight">
            Tanya Jawab <span className="text-red-500 italic">Studio</span>
          </h2>
          <p className="mt-4 text-neutral-400 text-sm md:text-base">
            Informasi penting seputar prosedur pemotretan, alur penyerahan foto, dan ketentuan di Klasika Picture.
          </p>
        </div>

        {/* Live Search Input */}
        <div className="relative max-w-lg mx-auto mb-10">
          <Search className="w-4 h-4 text-neutral-500 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Cari pertanyaan (misal: 'booking', 'MUA', 'reschedule')..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-3 rounded-2xl bg-neutral-900/90 border border-neutral-800 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-red-500 transition-colors shadow-inner"
          />
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-12 text-neutral-500 text-sm">
              Tidak ditemukan jawaban untuk "{searchQuery}". Silakan hubungi admin WhatsApp kami untuk konsultasi langsung.
            </div>
          ) : (
            filteredFaqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-neutral-900/60 border border-neutral-800 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                  >
                    <span className="text-sm sm:text-base font-semibold text-white">
                      {faq.question}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-400 transition-transform duration-200 flex-shrink-0 ${
                        isOpen ? "rotate-180 text-red-400 bg-red-500/10" : ""
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 text-xs sm:text-sm text-neutral-300 leading-relaxed border-t border-neutral-800/60 pt-4 animate-in fade-in duration-200">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

      </div>
    </section>
  );
};
