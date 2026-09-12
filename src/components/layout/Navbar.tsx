"use client";

import React, { useState, useEffect } from "react";
import { Camera, Menu, X, ArrowUpRight, Sparkles } from "lucide-react";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("#");

  const navLinks = [
    { name: "Beranda", href: "#" },
    { name: "Portofolio", href: "#portfolio" },
    { name: "Set Studio", href: "#studio-sets" },
    { name: "Paket & Harga", href: "#pricing" },
    { name: "Ulasan", href: "#reviews" },
    { name: "FAQ", href: "#faq" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      // Track active section
      const sections = navLinks
        .map((l) => l.href.replace("#", ""))
        .filter(Boolean);

      const scrollPos = window.scrollY + 200;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveHash(`#${sectionId}`);
            break;
          }
        }
      }
      if (window.scrollY < 150) {
        setActiveHash("#");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 pointer-events-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-5">
        
        {/* Floating Desktop Pill Bar */}
        <div
          className={`pointer-events-auto mx-auto flex items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all duration-300 ${
            isScrolled
              ? "bg-[#0B0C10]/80 backdrop-blur-xl border border-neutral-800/80 shadow-[0_8px_30px_rgba(0,0,0,0.8)]"
              : "bg-[#0B0C10]/40 backdrop-blur-md border border-white/10 shadow-lg"
          }`}
        >
          {/* Studio Brand Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-500 to-rose-700 flex items-center justify-center text-white shadow-md shadow-red-500/30 group-hover:scale-105 transition-transform">
              <Camera className="w-4 h-4" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-base sm:text-lg font-bold tracking-tight text-white group-hover:text-red-400 transition-colors leading-none">
                klasika<span className="text-red-500">picture</span>
              </span>
              <span className="text-[9px] tracking-widest uppercase text-neutral-400 font-sans mt-0.5">
                Fine Art Studio
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-1 bg-neutral-900/60 p-1 rounded-full border border-neutral-800/70">
            {navLinks.map((link) => {
              const isActive = activeHash === link.href;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? "text-white bg-neutral-800 shadow-sm"
                      : "text-neutral-400 hover:text-white hover:bg-neutral-800/40"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-red-500 rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#booking"
              className="flex items-center gap-1.5 px-5 py-2 rounded-full text-xs font-bold bg-red-500 hover:bg-red-600 text-white shadow-lg shadow-red-500/25 transition-all hover:scale-105 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-red-100" />
              <span>Reservasi Sesi</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="pointer-events-auto md:hidden mx-4 mt-2 bg-[#0B0C10]/95 backdrop-blur-2xl border border-neutral-800 rounded-2xl p-5 space-y-3 shadow-2xl animate-in fade-in slide-in-from-top-3 duration-200">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm font-medium text-neutral-300 hover:text-red-400 py-2.5 px-3 rounded-xl hover:bg-neutral-900/80 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-neutral-800/80">
            <a
              href="#booking"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-red-500 text-white text-xs font-bold shadow-lg shadow-red-500/25"
            >
              <span>Reservasi Sesi Sekarang</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
