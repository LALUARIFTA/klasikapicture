"use client";

import React, { useState } from "react";
import { STUDIO_PACKAGES, STUDIO_INFO } from "@/data/studioData";
import { Calendar, Clock, User, Phone, Mail, FileText, Send, CheckCircle } from "lucide-react";

export const BookingSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    package: STUDIO_PACKAGES[1].title, // default signature
    date: "",
    time: "10:00",
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    // Build WhatsApp message format
    const text = `Halo Admin Klasikapicture,%0A%0ASaya ingin melakukan reservasi sesi foto dengan detail berikut:%0A- Nama: *${formData.name}*%0A- No. WhatsApp: *${formData.phone}*%0A- Email: *${formData.email || "-"}*%0A- Paket Dipilih: *${formData.package}*%0A- Tanggal Sesi: *${formData.date}*%0A- Waktu: *${formData.time} WIB*%0A- Catatan/Kostum: *${formData.notes || "-"}*%0A%0AMohon konfirmasi ketersediaan jadwalnya. Terima kasih!`;

    const waUrl = `${STUDIO_INFO.whatsappUrl}?text=${text}`;

    // Open WhatsApp after brief delay
    setTimeout(() => {
      window.open(waUrl, "_blank");
    }, 800);
  };

  return (
    <section id="booking" className="py-24 bg-[#07080B] relative overflow-hidden border-t border-neutral-900">
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/10 blur-[140px] pointer-events-none rounded-full" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-medium text-red-400 mb-3">
            <Calendar className="w-3.5 h-3.5" />
            <span>Reservasi Online</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-white tracking-tight">
            Pesan Jadwal Sesi <span className="text-red-500 italic">Anda</span>
          </h2>
          <p className="mt-4 text-neutral-400 text-sm md:text-base">
            Isi formulir di bawah ini. Sistem akan otomatis menyusun pesan format pemesanan untuk dikirimkan langsung ke WhatsApp Admin Klasikapicture.
          </p>
        </div>

        {/* Form Box */}
        <div className="bg-neutral-900/80 border border-neutral-800 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-xl">
          {submitted ? (
            <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
              <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/30">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-white">Reservasi Sedang Diproses!</h3>
              <p className="text-sm text-neutral-300 max-w-md mx-auto">
                Anda akan segera diarahkan ke aplikasi WhatsApp untuk mengirimkan detail pesanan kepada Admin Klasikapicture.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 px-6 py-2.5 rounded-xl bg-neutral-800 text-xs font-semibold text-white hover:bg-neutral-700 transition-colors"
              >
                Isi Formulir Kembali
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-2 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-red-400" />
                    <span>Nama Lengkap *</span>
                  </label>
                  <input
                    type="text"
                    required
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="cth. Rian & Kirana"
                    className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-red-500 transition-colors"
                  />
                </div>

                {/* Phone WhatsApp */}
                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-2 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-red-400" />
                    <span>Nomor WhatsApp (Aktif) *</span>
                  </label>
                  <input
                    type="tel"
                    required
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="cth. 081234567890"
                    className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-red-500 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Email */}
                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-2 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-red-400" />
                    <span>Alamat Email (Opsional)</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="cth. name@domain.com"
                    className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-red-500 transition-colors"
                  />
                </div>

                {/* Package select */}
                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-2 flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5 text-red-400" />
                    <span>Pilihan Paket Studio *</span>
                  </label>
                  <select
                    name="package"
                    value={formData.package}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-white text-sm focus:outline-none focus:border-red-500 transition-colors"
                  >
                    {STUDIO_PACKAGES.map((pkg) => (
                      <option key={pkg.id} value={pkg.title}>
                        {pkg.title} ({pkg.price})
                      </option>
                    ))}
                    <option value="Custom Commercial / Outdoor Session">Custom Commercial / Outdoor Session</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Date */}
                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-2 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-red-400" />
                    <span>Tanggal Rencana Sesi *</span>
                  </label>
                  <input
                    type="date"
                    required
                    name="date"
                    min={new Date().toISOString().split("T")[0]}
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-white text-sm focus:outline-none focus:border-red-500 transition-colors"
                  />
                </div>

                {/* Time slot */}
                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-2 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-red-400" />
                    <span>Waktu Sesi Pilihan *</span>
                  </label>
                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-white text-sm focus:outline-none focus:border-red-500 transition-colors"
                  >
                    <option value="09:00">09.00 - 10.30 WIB (Pagi)</option>
                    <option value="11:00">11.00 - 12.30 WIB (Siang)</option>
                    <option value="13:30">13.30 - 15.00 WIB (Sore)</option>
                    <option value="15:30">15.30 - 17.00 WIB (Sore)</option>
                    <option value="18:30">18.30 - 20.00 WIB (Malam)</option>
                  </select>
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-2">
                  Catatan Tambahan (Tema kostum, jumlah orang, request khusus)
                </label>
                <textarea
                  rows={3}
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="cth. Kami berempat menggunakan tema baju putih polos dengan aksen denim."
                  className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-red-500 transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-red-500 hover:bg-red-600 text-white font-bold text-sm sm:text-base shadow-lg shadow-red-500/30 flex items-center justify-center gap-2 transition-all hover:scale-[1.01] cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Kirim Pesanan ke WhatsApp Admin</span>
              </button>

            </form>
          )}
        </div>

      </div>
    </section>
  );
};
