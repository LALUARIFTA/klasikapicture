"use client";

import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export const BackToTop: React.FC = () => {
  const [show, setShow] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShow(scrollY > 400);

      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = Math.min(100, Math.max(0, (scrollY / totalHeight) * 100));
        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!show) return null;

  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <div className="fixed bottom-6 right-6 z-40 animate-in fade-in zoom-in-75 duration-200">
      <button
        onClick={scrollToTop}
        className="relative w-12 h-12 rounded-full bg-neutral-900/90 border border-neutral-800 backdrop-blur-xl text-white flex items-center justify-center shadow-2xl hover:scale-110 hover:border-red-500 transition-all cursor-pointer group"
        aria-label="Kembali ke atas"
      >
        {/* Circular Progress SVG */}
        <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none" viewBox="0 0 48 48">
          <circle
            cx="24"
            cy="24"
            r={radius}
            className="text-neutral-800"
            strokeWidth="2.5"
            stroke="currentColor"
            fill="transparent"
          />
          <circle
            cx="24"
            cy="24"
            r={radius}
            className="text-red-500 transition-all duration-75"
            strokeWidth="2.5"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            stroke="currentColor"
            fill="transparent"
          />
        </svg>

        <ArrowUp className="w-4 h-4 text-neutral-300 group-hover:text-red-400 group-hover:-translate-y-0.5 transition-all" />
      </button>
    </div>
  );
};
