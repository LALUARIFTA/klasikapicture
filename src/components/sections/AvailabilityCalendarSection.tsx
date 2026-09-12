"use client";

import React, { useState } from "react";
import { Calendar as CalendarIcon, Clock, Check, AlertCircle, ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";

export const AvailabilityCalendarSection: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState<number | null>(18);

  const daysInMonth = 30; // Current cycle
  const currentMonthName = "Oktober 2024";

  // Simulate slot status for days
  const getDayStatus = (day: number) => {
    if ([5, 12, 19, 26].includes(day)) return "booked"; // Weekend full
    if ([6, 13, 20, 27].includes(day)) return "limited"; // Weekend limited
    if (day < 14) return "past";
    return "available";
  };

  const statusMap = {
    available: { label: "Tersedia", color: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30" },
    limited: { label: "Slot Terbatas", color: "bg-amber-500/20 text-amber-400 border-amber-500/30" },
    booked: { label: "Penuh", color: "bg-neutral-800 text-neutral-500 border-neutral-700" },
    past: { label: "Lewat", color: "text-neutral-600 cursor-not-allowed" },
  };

  return (
    <section id="calendar" className="py-24 bg-[#0B0C10] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-medium text-red-400 mb-3">
            <CalendarIcon className="w-3.5 h-3.5" />
            <span>Real-time Studio Schedule</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-white tracking-tight">
            Ketersediaan Jadwal <span className="text-red-500 italic">Bulan Ini</span>
          </h2>
          <p className="mt-4 text-neutral-400 text-sm md:text-base">
            Pantau status ketersediaan sesi pemotretan secara langsung. Klik tanggal untuk melihat ketersediaan slot jam.
          </p>
        </div>

        {/* Calendar Container */}
        <div className="bg-neutral-900/90 border border-neutral-800 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Calendar Grid */}
          <div className="lg:col-span-8">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-neutral-800">
              <h3 className="text-xl font-serif font-bold text-white">
                {currentMonthName}
              </h3>

              {/* Status Legend */}
              <div className="flex flex-wrap items-center gap-3 text-[11px]">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  <span className="text-neutral-400">Tersedia</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <span className="text-neutral-400">Slot Terbatas</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-neutral-600" />
                  <span className="text-neutral-400">Penuh</span>
                </div>
              </div>
            </div>

            {/* Days header */}
            <div className="grid grid-cols-7 gap-2 text-center text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-3">
              {["Sen", "Sel", "Rab", "Kam", "Jum", "Sab", "Min"].map((d) => (
                <div key={d}>{d}</div>
              ))}
            </div>

            {/* Dates Grid */}
            <div className="grid grid-cols-7 gap-2">
              {Array.from({ length: daysInMonth }).map((_, i) => {
                const day = i + 1;
                const status = getDayStatus(day);
                const isSelected = selectedDay === day;

                return (
                  <button
                    key={day}
                    disabled={status === "past" || status === "booked"}
                    onClick={() => setSelectedDay(day)}
                    className={`h-12 sm:h-14 rounded-xl flex flex-col items-center justify-center relative transition-all cursor-pointer border ${
                      isSelected
                        ? "bg-red-500 border-red-500 text-white font-bold shadow-lg shadow-red-500/30 scale-105 z-10"
                        : status === "available"
                        ? "bg-neutral-950 border-neutral-800/90 text-white hover:border-emerald-500/60"
                        : status === "limited"
                        ? "bg-neutral-950 border-amber-500/30 text-white hover:border-amber-500"
                        : status === "booked"
                        ? "bg-neutral-950/40 border-neutral-900 text-neutral-600 cursor-not-allowed opacity-50"
                        : "border-transparent text-neutral-700 cursor-not-allowed"
                    }`}
                  >
                    <span className="text-xs sm:text-sm">{day}</span>
                    {status === "available" && !isSelected && (
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1" />
                    )}
                    {status === "limited" && !isSelected && (
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Day Detail Sidebar */}
          <div className="lg:col-span-4 p-6 rounded-2xl bg-neutral-950 border border-neutral-800 space-y-5">
            <div>
              <span className="text-xs font-semibold text-red-400 uppercase tracking-widest block mb-1">
                Detail Tanggal Terpilih
              </span>
              <h4 className="text-2xl font-serif font-bold text-white">
                {selectedDay ? `${selectedDay} ${currentMonthName}` : "Pilih Tanggal"}
              </h4>
              <p className="text-xs text-neutral-400 mt-1">
                Studio buka pukul 09.00 - 21.00 WIB.
              </p>
            </div>

            <div className="space-y-2.5 pt-4 border-t border-neutral-800">
              <span className="text-xs font-semibold text-neutral-300 block mb-2">
                Status Slot Waktu:
              </span>
              {[
                { time: "09.00 - 10.30 WIB", status: "Tersedia", ok: true },
                { time: "11.00 - 12.30 WIB", status: "Terpesan", ok: false },
                { time: "13.30 - 15.00 WIB", status: "Tersedia", ok: true },
                { time: "15.30 - 17.00 WIB", status: "Tersedia", ok: true },
                { time: "18.30 - 20.00 WIB", status: "Tersedia", ok: true },
              ].map((slot, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-2.5 rounded-xl bg-neutral-900 border border-neutral-800/80 text-xs"
                >
                  <span className="text-neutral-300">{slot.time}</span>
                  <span
                    className={`px-2 py-0.5 rounded-md text-[10px] font-semibold ${
                      slot.ok ? "bg-emerald-500/20 text-emerald-400" : "bg-neutral-800 text-neutral-500"
                    }`}
                  >
                    {slot.status}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-neutral-800">
              <a
                href="#booking"
                className="w-full py-3 rounded-xl bg-red-500 hover:bg-red-600 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-red-500/20 transition-all text-center"
              >
                <span>Pesan Tanggal Ini di Form Reservasi</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
