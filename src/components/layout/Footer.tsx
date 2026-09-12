"use client";

import React, { useState, useEffect } from "react";
import { Camera, MapPin, Mail, MessageCircle, ExternalLink, Navigation } from "lucide-react";
import { STUDIO_INFO } from "@/data/studioData";

export const Footer: React.FC = () => {
  const [year, setYear] = useState(2025);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

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
            <div className="pt-2">
              <a
                href={STUDIO_INFO.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-neutral-900 border border-neutral-800 text-xs font-semibold text-neutral-300 hover:text-white hover:border-red-500 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Chat Admin WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-white mb-6">Navigasi Studio</h4>
            <ul className="space-y-3 text-sm text-neutral-400">
              {["Koleksi 3D", "Portofolio", "Paket Harga", "Studio Sets", "Before & After", "Video Reels", "Reservasi"].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}`} className="hover:text-red-400 transition-colors">
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

          {/* Location Map Preview */}
          <div>
            <h4 className="text-sm font-bold text-white mb-6">Peta Lokasi Studio</h4>
            <div className="rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900 relative aspect-video flex flex-col justify-between p-4 shadow-lg group">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2">
                  <Navigation className="w-4 h-4 text-red-500" />
                  <span className="text-xs font-semibold text-white">Dago, Kota Bandung</span>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded-md bg-red-500/20 text-red-400 font-mono">
                  Buka Setiap Hari
                </span>
              </div>
              <p className="text-[11px] text-neutral-400 line-clamp-2">
                Jl. Ranggamalela No. 18, Dago. Parkir mobil luas & ruang tunggu ber-AC.
              </p>
              <a
                href="https://maps.google.com/?q=Dago+Bandung"
                target="_blank"
                rel="noreferrer"
                className="mt-2 w-full py-2 rounded-xl bg-neutral-800 group-hover:bg-red-500 text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
              >
                <span>Buka di Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-neutral-900 text-center text-xs text-neutral-600">
          &copy; {year} Klasikapicture. Seluruh hak cipta dilindungi. Estetika oleh Klasika Studio.
        </div>
      </div>
    </footer>
  );
};
