"use client";

import React from "react";
import { Heart, User, GraduationCap, Users, Shirt, Sparkles, ArrowRight } from "lucide-react";

export const ServicesSection: React.FC = () => {
  const services = [
    {
      title: "Wedding & Pre-Wedding",
      category: "Romantic & Timeless",
      description: "Sesi romantis bertema editorial, gaun elegan, dan pencahayaan sinematik yang menangkap chemistry sejati calon pengantin.",
      icon: Heart,
      badge: "Favorite",
      img: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Personal & Executive Portrait",
      category: "Branding & Identity",
      description: "Foto profil profesional untuk LinkedIn, resume eksekutif, majalah, atau portofolio model dengan pose berkarakter kuat.",
      icon: User,
      badge: "Popular",
      img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Wisuda & Graduation",
      category: "Milestone Celebration",
      description: "Rayakan kelulusan berharga bersama toga kebanggaan, sahabat terdekat, dan orang tua dalam setting studio elegan.",
      icon: GraduationCap,
      badge: "Trending",
      img: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Family & Maternity Heritage",
      category: "Generations & Warmth",
      description: "Abadikan momen kehamilan dan kehangatan lintas generasi keluarga besar dengan komposisi terarah yang nyaman.",
      icon: Users,
      badge: "Cherished",
      img: "https://images.unsplash.com/photo-1609151162377-794fa68b02f6?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Commercial & Fashion Lookbook",
      category: "Brand Campaign",
      description: "Layanan visual untuk brand pakaian, produk kosmetik, dan katalog e-commerce berstandar high-fashion.",
      icon: Shirt,
      badge: "Business",
      img: "https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Thematic Fine Art Concept",
      category: "Creative Vision",
      description: "Eksplorasi artistik tanpa batas dengan set dekorasi custom, efek dramatis, dan storytelling visual mendalam.",
      icon: Sparkles,
      badge: "Exclusive",
      img: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=800&auto=format&fit=crop",
    },
  ];

  return (
    <section id="services" className="py-24 bg-[#0E1017] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-medium text-red-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Kategori Layanan</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-white tracking-tight">
            Layanan Fotografi Eksklusif <span className="text-red-500 italic">Klasika</span>
          </h2>
          <p className="mt-4 text-neutral-400 text-sm md:text-base">
            Pilih konsep pemotretan yang sesuai dengan kebutuhan Anda. Seluruh sesi didukung oleh arahan fotografer profesional dan peralatan studio tercanggih.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((srv, idx) => {
            const Icon = srv.icon;
            return (
              <div
                key={idx}
                className="group relative rounded-2xl overflow-hidden bg-neutral-900/70 border border-neutral-800 hover:border-red-500/50 transition-all duration-300 flex flex-col hover:-translate-y-1.5 shadow-xl"
              >
                {/* Image Cover */}
                <div className="relative h-56 w-full overflow-hidden bg-neutral-950">
                  <img
                    src={srv.img}
                    alt={srv.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/40 to-transparent" />
                  
                  {/* Badge */}
                  <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[11px] font-medium text-neutral-200 uppercase tracking-wider">
                    {srv.badge}
                  </span>

                  {/* Icon Circle */}
                  <div className="absolute bottom-4 left-5 w-11 h-11 rounded-xl bg-red-500/90 text-white flex items-center justify-center shadow-lg shadow-red-500/30">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-semibold text-red-400 tracking-wider uppercase font-sans">
                      {srv.category}
                    </span>
                    <h3 className="text-xl font-bold font-serif text-white mt-1 group-hover:text-red-400 transition-colors">
                      {srv.title}
                    </h3>
                    <p className="mt-3 text-xs sm:text-sm text-neutral-400 leading-relaxed">
                      {srv.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-neutral-800/80 flex items-center justify-between">
                    <a
                      href="#pricing"
                      className="text-xs font-semibold text-neutral-300 group-hover:text-white flex items-center gap-1.5"
                    >
                      <span>Lihat Paket & Fasilitas</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
