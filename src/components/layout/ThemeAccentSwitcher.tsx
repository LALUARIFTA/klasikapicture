"use client";

import React, { useState, useEffect } from "react";
import { Palette } from "lucide-react";

export const ThemeAccentSwitcher: React.FC = () => {
  const [activeTheme, setActiveTheme] = useState("crimson");
  const [isOpen, setIsOpen] = useState(false);

  const themes = [
    { id: "crimson", name: "Classic Crimson", color: "#EF4444", bgClass: "bg-red-500" },
    { id: "gold", name: "Champagne Gold", color: "#EAB308", bgClass: "bg-amber-500" },
    { id: "noir", name: "Graphite Noir", color: "#9CA3AF", bgClass: "bg-neutral-400" },
  ];

  return (
    <div className="fixed top-24 right-6 z-40">
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-10 h-10 rounded-full bg-neutral-900/90 border border-neutral-800 backdrop-blur-md text-white flex items-center justify-center shadow-xl hover:scale-105 transition-all cursor-pointer"
          aria-label="Theme selector"
        >
          <Palette className="w-4 h-4 text-red-400" />
        </button>

        {isOpen && (
          <div className="absolute top-12 right-0 bg-neutral-900/95 border border-neutral-800 backdrop-blur-xl p-3 rounded-2xl shadow-2xl space-y-2 w-44 animate-in fade-in slide-in-from-top-2 duration-200">
            <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 block px-2 mb-1">
              Tema Estetika
            </span>
            {themes.map((t) => (
              <button
                key={t.id}
                onClick={() => {
                  setActiveTheme(t.id);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center gap-2.5 px-2.5 py-2 rounded-xl text-xs font-semibold transition-colors cursor-pointer ${
                  activeTheme === t.id
                    ? "bg-neutral-800 text-white"
                    : "text-neutral-400 hover:text-white hover:bg-neutral-800/50"
                }`}
              >
                <span className={`w-3 h-3 rounded-full ${t.bgClass}`} />
                <span>{t.name}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
