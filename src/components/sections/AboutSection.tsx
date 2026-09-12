"use client";

import React from "react";
import { motion } from "framer-motion";
import { Camera, Award, Clock, HeartHandshake, Sparkles, CheckCircle2 } from "lucide-react";

export const AboutSection: React.FC = () => {
  const stats = [
    { label: "Sesi Foto Terselesaikan", value: "1,200+", icon: Camera },
    { label: "Klien & Pasangan Puas", value: "950+", icon: HeartHandshake },
    { label: "Tahun Pengalaman Studio", value: "7+", icon: Clock },
    { label: "Rating Kepuasan Ulasan", value: "4.9 / 5.0", icon: Award },
  ];

  const highlights = [
    "Pencahayaan Studio Standar Internasional (Profoto & Godox High-Sync)",
    "Color Grading Editorial bernuansa hangat, timeless, dan natural",
    "Ruang ganti & vanity makeup luas dengan pendingin udara",
    "Directing pose oleh fotografer bersertifikasi dan komunikatif",
  ];

  return (
    <section id="about" className="py-24 bg-[#0B0C10] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Imagery & Visual Badge */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main portrait image */}
              <div className="relative rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl aspect-[4/5] bg-neutral-900">
                <img
                  src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=1000&auto=format&fit=crop"
                  alt="Klasika Studio Experience"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-xs uppercase tracking-widest text-red-400 font-semibold">
                    The Atmosphere
                  </span>
                  <h4 className="text-xl font-serif font-bold text-white mt-1">
                    Klasikapicture Creative Space
                  </h4>
                  <p className="text-xs text-neutral-300 mt-1">
                    Dago Creative District, Bandung
                  </p>
                </div>
              </div>

              {/* Floating aesthetic stat badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="absolute -bottom-6 -right-6 bg-neutral-900/90 border border-neutral-700 p-5 rounded-2xl backdrop-blur-xl shadow-2xl max-w-[200px] hidden sm:block"
              >
                <div className="flex items-center gap-2 text-amber-400 mb-1">
                  <Sparkles className="w-4 h-4 fill-amber-400" />
                  <span className="text-xs font-bold uppercase tracking-wider">Aesthetic</span>
                </div>
                <div className="text-sm font-semibold text-white">
                  Fine Art & High Fashion Touch
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Column: Story & Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-medium text-red-400">
              <Camera className="w-3.5 h-3.5" />
              <span>Tentang Klasika Picture</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-white tracking-tight leading-tight">
              Mengabadikan Cerita Anda Lewat Estetika Visual <span className="text-red-500 italic">Abadi</span>.
            </h2>

            <p className="text-neutral-300 leading-relaxed text-base md:text-lg">
              Klasikapicture lahir dari keyakinan bahwa foto studio bukan sekadar pose kaku di depan kain polos. Kami memadukan arahan artistik editorial mode, presisi pencahayaan modern, dan kenyamanan personal agar setiap kepribadian terpancar secara otentik.
            </p>

            <p className="text-neutral-400 leading-relaxed text-sm md:text-base">
              Dari kehangatan janji suci pernikahan, perayaan kelulusan wisuda yang membanggakan, hingga sesi personal branding eksekutif—kami merancang setiap komposisi dengan filosofi *&quot;less but better&quot;*, menciptakan karya visual yang tetap memukau saat dipandang puluhan tahun mendatang.
            </p>

            {/* Value checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-red-400 flex-shrink-0 mt-1" />
                  <span className="text-xs sm:text-sm text-neutral-300">{item}</span>
                </div>
              ))}
            </div>

            {/* Numbers Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-neutral-800/80">
              {stats.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <div key={idx} className="p-3.5 rounded-xl bg-neutral-900/50 border border-neutral-800">
                    <Icon className="w-4 h-4 text-red-400 mb-2" />
                    <div className="text-xl sm:text-2xl font-bold text-white font-serif">{stat.value}</div>
                    <div className="text-[11px] text-neutral-400 mt-0.5 leading-tight">{stat.label}</div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
