"use client";

import React, { useState, useEffect } from "react";
import { Camera, Menu, X, PhoneCall, ArrowUpRight } from "lucide-react";
import { STUDIO_INFO } from "@/data/studioData";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Beranda", href: "#" },
    { name: "Koleksi 3D", href: "#showcase-stream" },
    { name: "Tentang Kami", href: "#about" },
    { name: "Galeri Kami", href: "#portfolio" },
    { name: "Paket & Harga", href: "#pricing" },
    { name: "Ulasan Klien", href: "#reviews" },
    { name: "Studio Sets", href: "#studio-sets" },
    { name: "Virtual Tour", href: "#studio-tour" },
    { name: "Before & After", href: "#retouch-showcase" },
    { name: "Video Reels", href: "#video-reels" },
    { name: "Cerita Klien", href: "#client-stories" },
    { name: "Mood Finder", href: "#style-finder" },
    { name: "Jadwal Studio", href: "#calendar" },
    { name: "FAQ", href: "#faq" },
  ];

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 20);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0b0c10]/85 backdrop-blur-md border-b border-neutral-800/80 py-3 shadow-xl"
          : "bg-gradient-to-b from-[#0b0c10]/90 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-500 to-rose-700 flex items-center justify-center text-white shadow-lg shadow-red-500/20 group-hover:scale-105 transition-transform">
            <Camera className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-xl font-bold tracking-tight text-white group-hover:text-red-400 transition-colors">
              klasika<span className="text-red-500">picture</span>
            </span>
            <span className="text-[10px] tracking-widest uppercase text-neutral-400 font-sans">
              Photo Studio
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-neutral-300 hover:text-white hover:text-red-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="#booking"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium bg-red-500 hover:bg-red-600 text-white shadow-lg shadow-red-500/20 transition-all hover:scale-105"
          >
            <span>Reservasi Sesi</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#0b0c10] border-b border-neutral-800 px-6 py-6 space-y-4 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-base font-medium text-neutral-300 hover:text-red-400 py-1 border-b border-neutral-900"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-2">
            <a
              href="#booking"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-red-500 text-white font-medium"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Reservasi Sesi Sekarang</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
