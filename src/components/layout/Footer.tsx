"use client";

import React from "react";
import { Camera, MapPin, Mail, MessageCircle } from "lucide-react";
import { STUDIO_INFO } from "@/data/studioData";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#07080B] pt-20 pb-10 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Studio Description */}
          <div className="space-y-4">
            <a href="#" className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-red-500 to-rose-700 flex items-center justify-center text-white">
                <Camera className="w-5 h-5" />
              </div>
              <span className="font-serif text-xl font-bold tracking-tight text-white">
                klasika<span className="text-red-500">picture</span>
              </span>
            </a>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Fine Art & Editorial Studio Fotografi yang menangkap keindahan emosi dengan sentuhan artistik klasik.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-white mb-6">Navigasi Studio</h4>
            <ul className="space-y-3 text-sm text-neutral-400">
              {["Koleksi 3D", "Portofolio", "Paket Harga", "Ulasan", "Reservasi"].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(" ", "-")}`} className="hover:text-red-400 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold text-white mb-6">Kontak & Lokasi</h4>
            <ul className="space-y-4 text-sm text-neutral-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-red-500 flex-shrink-0" />
                <span>{STUDIO_INFO.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-red-500 flex-shrink-0" />
                <a href={`mailto:${STUDIO_INFO.email}`} className="hover:text-red-400">{STUDIO_INFO.email}</a>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                <a href={STUDIO_INFO.whatsappUrl} className="hover:text-red-400">{STUDIO_INFO.whatsapp}</a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-bold text-white mb-6">Ikuti Kami</h4>
            <a
              href={STUDIO_INFO.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-red-500 transition-colors group"
            >
              <svg className="w-5 h-5 text-red-500 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
              <span className="text-sm text-neutral-300 group-hover:text-white">Instagram {STUDIO_INFO.instagram}</span>
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-neutral-900 text-center text-xs text-neutral-600">
          &copy; {new Date().getFullYear()} Klasikapicture. Seluruh hak cipta dilindungi. Estetika oleh Klasika Studio.
        </div>
      </div>
    </footer>
  );
};
