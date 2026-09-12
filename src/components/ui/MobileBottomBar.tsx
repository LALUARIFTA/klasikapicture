"use client";

import React, { useState, useEffect } from "react";
import { Calendar, MessageCircle, Tag } from "lucide-react";
import { STUDIO_INFO } from "@/data/studioData";

export const MobileBottomBar: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show bottom bar after user scrolls past hero section
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#0B0C10]/95 backdrop-blur-xl border-t border-neutral-800/90 px-4 py-3 shadow-[0_-10px_25px_rgba(0,0,0,0.8)] animate-in slide-in-from-bottom-5 duration-300">
      <div className="flex items-center gap-2">
        <a
          href="#pricing"
          className="flex-1 py-2.5 px-3 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-300 text-xs font-semibold flex items-center justify-center gap-1.5 active:scale-95 transition-transform"
        >
          <Tag className="w-3.5 h-3.5 text-neutral-400" />
          <span>Paket</span>
        </a>

        <a
          href={STUDIO_INFO.whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="flex-1 py-2.5 px-3 rounded-xl bg-neutral-900 border border-neutral-800 text-emerald-400 text-xs font-semibold flex items-center justify-center gap-1.5 active:scale-95 transition-transform"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          <span>WhatsApp</span>
        </a>

        <a
          href="#booking"
          className="flex-[1.8] py-2.5 px-3 rounded-xl bg-red-500 text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-lg shadow-red-500/30 active:scale-95 transition-transform"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Reservasi Sesi</span>
        </a>
      </div>
    </div>
  );
};
