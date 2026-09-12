"use client";

import React, { useState } from "react";
import { STUDIO_PACKAGES, STUDIO_INFO } from "@/data/studioData";
import { Calendar, Clock, User, Phone, Mail, FileText, Send, CheckCircle, Receipt, X, ShieldCheck } from "lucide-react";

export const BookingSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    package: STUDIO_PACKAGES[1].title,
    date: "",
    time: "10:00",
    notes: "",
  });

  const [showInvoiceModal, setShowInvoiceModal] = useState(false);
  const [bookingCode, setBookingCode] = useState("");

  const timeSlots = [
    { time: "09:00", label: "09.00 - 10.30 WIB", period: "Pagi", available: true },
    { time: "11:00", label: "11.00 - 12.30 WIB", period: "Siang", available: true },
    { time: "13:30", label: "13.30 - 15.00 WIB", period: "Sore", available: true },
    { time: "15:30", label: "15.30 - 17.00 WIB", period: "Sore", available: true },
    { time: "18:30", label: "18.30 - 20.00 WIB", period: "Malam", available: true },
  ];

  const selectedPkgObj = STUDIO_PACKAGES.find((p) => p.title === formData.package) || STUDIO_PACKAGES[1];
  const pkgPriceNum = parseInt(selectedPkgObj.price.replace(/[^0-9]/g, ""), 10) || 0;
  const dpAmount = Math.round(pkgPriceNum * 0.3);
  const remainingAmount = pkgPriceNum - dpAmount;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleOpenInvoice = (e: React.FormEvent) => {
    e.preventDefault();
    const code = `KLK-${Math.floor(1000 + Math.random() * 9000)}`;
    setBookingCode(code);
    setShowInvoiceModal(true);
  };

  const handleConfirmWhatsApp = () => {
    const text = `Halo Admin Klasikapicture,%0A%0ASaya ingin konfirmasi reservasi sesi foto dengan rincian invoice:%0A- *Kode Booking*: *${bookingCode}*%0A- *Nama Lengkap*: *${formData.name}*%0A- *No. WhatsApp*: *${formData.phone}*%0A- *Email*: *${formData.email || "-"}*%0A- *Paket*: *${formData.package}* (${selectedPkgObj.price})%0A- *Jadwal*: *${formData.date}* jam *${formData.time} WIB*%0A- *Estimasi DP (30%)*: *Rp ${dpAmount.toLocaleString("id-ID")}*%0A- *Sisa Pelunasan (70%)*: *Rp ${remainingAmount.toLocaleString("id-ID")}*%0A- *Catatan/Tema*: *${formData.notes || "-"}*%0A%0AMohon nomor rekening/QRIS untuk pembayaran DP dan konfirmasi jadwal. Terima kasih!`;

    const waUrl = `${STUDIO_INFO.whatsappUrl}?text=${text}`;
    window.open(waUrl, "_blank");
    setShowInvoiceModal(false);
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
            Pilih tanggal dan slot jam yang diinginkan. Dapatkan rincian invoice instan sebelum terhubung dengan WhatsApp Admin.
          </p>
        </div>

        {/* Form Box */}
        <div className="bg-neutral-900/80 border border-neutral-800 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-xl">
          <form onSubmit={handleOpenInvoice} className="space-y-6">
            
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
                </select>
              </div>
            </div>

            {/* Date Picker */}
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

            {/* Visual Time Slot Selector */}
            <div>
              <label className="block text-xs font-medium text-neutral-300 mb-2.5 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-red-400" />
                <span>Pilih Slot Waktu Sesi Studio *</span>
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
                {timeSlots.map((slot) => {
                  const isSelected = formData.time === slot.time;
                  return (
                    <button
                      key={slot.time}
                      type="button"
                      onClick={() => setFormData((p) => ({ ...p, time: slot.time }))}
                      className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                        isSelected
                          ? "bg-red-500 border-red-500 text-white shadow-lg shadow-red-500/30 scale-105"
                          : "bg-neutral-950 border-neutral-800 text-neutral-300 hover:border-neutral-700"
                      }`}
                    >
                      <span className="block text-xs font-bold">{slot.time} WIB</span>
                      <span className={`block text-[10px] mt-0.5 ${isSelected ? "text-red-100" : "text-neutral-500"}`}>
                        {slot.period}
                      </span>
                    </button>
                  );
                })}
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
                placeholder="cth. Kami berdua ingin tema monochrome dengan 1 outfit formal ganti."
                className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-red-500 transition-colors resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-red-500 hover:bg-red-600 text-white font-bold text-sm sm:text-base shadow-lg shadow-red-500/30 flex items-center justify-center gap-2 transition-all hover:scale-[1.01] cursor-pointer"
            >
              <Receipt className="w-4 h-4" />
              <span>Review Ringkasan Invoice & Reservasi</span>
            </button>

          </form>
        </div>

      </div>

      {/* Invoice Modal Preview */}
      {showInvoiceModal && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setShowInvoiceModal(false)}
        >
          <div
            className="relative max-w-lg w-full bg-neutral-900 border border-neutral-700 rounded-3xl p-6 sm:p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowInvoiceModal(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white hover:bg-red-500 transition-colors border border-white/10 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-red-500/20 text-red-400 flex items-center justify-center border border-red-500/30">
                <Receipt className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-bold text-red-400 tracking-widest uppercase">
                  Ringkasan Pemesanan
                </span>
                <h3 className="text-xl font-serif font-bold text-white">
                  Invoice Reservasi Sesi
                </h3>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-neutral-950 border border-neutral-800 space-y-3 text-xs mb-6">
              <div className="flex justify-between text-neutral-400">
                <span>Kode Booking:</span>
                <span className="font-mono font-bold text-white">{bookingCode}</span>
              </div>
              <div className="flex justify-between text-neutral-400">
                <span>Nama Pemesan:</span>
                <span className="text-white font-medium">{formData.name}</span>
              </div>
              <div className="flex justify-between text-neutral-400">
                <span>Paket Studio:</span>
                <span className="text-white font-medium">{formData.package}</span>
              </div>
              <div className="flex justify-between text-neutral-400">
                <span>Jadwal Sesi:</span>
                <span className="text-white font-medium">{formData.date} • {formData.time} WIB</span>
              </div>
              <div className="pt-2 border-t border-neutral-800 flex justify-between text-neutral-400">
                <span>Total Biaya Paket:</span>
                <span className="text-white font-bold">{selectedPkgObj.price}</span>
              </div>
              <div className="flex justify-between text-red-400 font-semibold">
                <span>DP 30% untuk Lock Jadwal:</span>
                <span>Rp {dpAmount.toLocaleString("id-ID")}</span>
              </div>
              <div className="flex justify-between text-neutral-400">
                <span>Sisa Pelunasan di Studio:</span>
                <span>Rp {remainingAmount.toLocaleString("id-ID")}</span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-[11px] text-neutral-400 mb-6">
              <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>Jadwal terkunci aman setelah pembayaran DP dikonfirmasi admin.</span>
            </div>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setShowInvoiceModal(false)}
                className="w-1/3 py-3 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-300 text-xs font-semibold"
              >
                Ubah Data
              </button>
              <button
                type="button"
                onClick={handleConfirmWhatsApp}
                className="w-2/3 py-3 rounded-xl bg-red-500 hover:bg-red-600 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-lg shadow-red-500/25 cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Kirim & Konfirmasi ke WA</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
