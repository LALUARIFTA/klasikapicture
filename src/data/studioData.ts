export interface PortfolioItem {
  id: string;
  title: string;
  category: "wedding" | "portrait" | "wisuda" | "family" | "commercial";
  categoryLabel: string;
  imageUrl: string;
  date: string;
  description: string;
  aspect?: string;
}

export interface ServicePackage {
  id: string;
  title: string;
  category: string;
  description: string;
  price: string;
  highlighted?: boolean;
  features: string[];
  duration: string;
  output: string;
}

export interface Review {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  comment: string;
  sessionType: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

// Curated high quality photography images for Klasika Picture
export const MARQUEE_HERO_IMAGES = [
  "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop", // Wedding romantic
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop", // Elegant female portrait
  "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=800&auto=format&fit=crop", // Wedding veil
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop", // Male editorial portrait
  "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=800&auto=format&fit=crop", // Couple intimate
  "https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?q=80&w=800&auto=format&fit=crop", // Fashion editorial
  "https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=800&auto=format&fit=crop", // Graduation / warm smile
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop", // Studio beauty portrait
];

export const CORRIDOR_STREAM_IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop",
    alt: "Klasika Wedding Moments",
  },
  {
    src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
    alt: "Klasika Fine Art Portrait",
  },
  {
    src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=800&auto=format&fit=crop",
    alt: "Klasika Prewedding Chemistry",
  },
  {
    src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=800&auto=format&fit=crop",
    alt: "Klasika Bridal Glow",
  },
  {
    src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop",
    alt: "Klasika Executive Look",
  },
  {
    src: "https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?q=80&w=800&auto=format&fit=crop",
    alt: "Klasika Editorial Style",
  },
  {
    src: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=800&auto=format&fit=crop",
    alt: "Klasika Graduation Memory",
  },
  {
    src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop",
    alt: "Klasika Natural Studio Light",
  },
  {
    src: "https://images.unsplash.com/photo-1609151162377-794fa68b02f6?q=80&w=800&auto=format&fit=crop",
    alt: "Klasika Warm Family Heritage",
  },
];

export const PORTFOLIO_DATA: PortfolioItem[] = [
  {
    id: "port-1",
    title: "Eternal Vows in Monochrome & Gold",
    category: "wedding",
    categoryLabel: "Wedding & Prewedding",
    imageUrl: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1000&auto=format&fit=crop",
    date: "Agustus 2024",
    description: "Kombinasi pencahayaan dramatis dan emosi otentik pada sesi prewedding tema timeless vintage.",
  },
  {
    id: "port-2",
    title: "Minimalist High-Fashion Portrait",
    category: "portrait",
    categoryLabel: "Personal Portrait",
    imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop",
    date: "Juli 2024",
    description: "Eksplorasi garis wajah, bayangan lembut, dan tone kulit natural dengan standar majalah editorial.",
  },
  {
    id: "port-3",
    title: "The Golden Graduate Milestone",
    category: "wisuda",
    categoryLabel: "Wisuda & Graduation",
    imageUrl: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=1000&auto=format&fit=crop",
    date: "Juni 2024",
    description: "Merayakan kelulusan prestisius bersama keluarga dengan set studio backdrop bertekstur arsitektural.",
  },
  {
    id: "port-4",
    title: "Timeless Generations Family",
    category: "family",
    categoryLabel: "Family & Maternity",
    imageUrl: "https://images.unsplash.com/photo-1609151162377-794fa68b02f6?q=80&w=1000&auto=format&fit=crop",
    date: "Mei 2024",
    description: "Kehangatan keluarga tiga generasi dalam balutan busana bertema earth-tone dan komposisi simetris.",
  },
  {
    id: "port-5",
    title: "Haute Couture & Brand Campaign",
    category: "commercial",
    categoryLabel: "Commercial / Lookbook",
    imageUrl: "https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?q=80&w=1000&auto=format&fit=crop",
    date: "April 2024",
    description: "Kampanye lookbook busana desainer lokal dengan penataan lampu studio dramatik kontras tinggi.",
  },
  {
    id: "port-6",
    title: "The Subtle Gaze Studio Session",
    category: "portrait",
    categoryLabel: "Personal Portrait",
    imageUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1000&auto=format&fit=crop",
    date: "Maret 2024",
    description: "Sesi profil eksekutif & personal branding dengan palet warna neutral graphite yang berwibawa.",
  },
  {
    id: "port-7",
    title: "Romantic Velvet Evening",
    category: "wedding",
    categoryLabel: "Wedding & Prewedding",
    imageUrl: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1000&auto=format&fit=crop",
    date: "Februari 2024",
    description: "Suasana intim pasangan di studio berlatar tirai beludru dan cahaya lilin sinematik.",
  },
  {
    id: "port-8",
    title: "Elegance of Matrimony Veil",
    category: "wedding",
    categoryLabel: "Wedding & Prewedding",
    imageUrl: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1000&auto=format&fit=crop",
    date: "Januari 2024",
    description: "Detail keanggunan gaun pengantin dan tekstur kain renda dalam komposisi fine art studio.",
  },
];

export const STUDIO_PACKAGES: ServicePackage[] = [
  {
    id: "pkg-portrait",
    title: "Studio Portrait Classic",
    category: "Personal / Wisuda / Profil",
    description: "Ideal untuk foto wisuda, portfolio model, personal branding, atau CV eksekutif bergaya majalah.",
    price: "Rp 650.000",
    highlighted: false,
    duration: "45 Menit Sesi Studio",
    output: "10 Edited Photos + All Raw Files via Google Drive",
    features: [
      "1 Pilihan Background Thematic / Seamless Paper",
      "Maksimal 2 Kostum / Outfit Ganti",
      "1 Cetak Ukuran 10RS + Frame Minimalis",
      "Color Grading Signature Klasika",
      "Arahan Pose & Directing Fotografer Berpengalaman",
    ],
  },
  {
    id: "pkg-signature",
    title: "Signature Prewedding & Couple",
    category: "Prewedding & Intimate Couple",
    description: "Paket paling diminati! Konsep visual intim, sinematik, dan abadi untuk mengawali perjalanan cinta.",
    price: "Rp 1.850.000",
    highlighted: true,
    duration: "2.5 Jam Sesi Studio Eksklusif",
    output: "25 Master Edited Photos + All Raw Files (High-Res)",
    features: [
      "Akses Penuh Seluruh Set Studio (3 Konsep Berbeda)",
      "Termasuk Makeup Artist (MUA) & Hairdo Profesional",
      "2 Cetak Ukuran 16RS Canvas Frame",
      "1 Mini Photo Album Hardcover (20 Halaman)",
      "Behind the Scenes Reel / TikTok Video Highlight",
      "Private Studio (Hanya Anda & Pasangan)",
    ],
  },
  {
    id: "pkg-family",
    title: "Heritage Family & Maternity",
    category: "Keluarga & Ibu Hamil",
    description: "Mengabadikan kehangatan generasi keluarga besar dan masa kehamilan dengan estetika hangat nan mewah.",
    price: "Rp 1.250.000",
    highlighted: false,
    duration: "90 Menit Sesi Studio",
    output: "18 Edited Photos + All Files",
    features: [
      "Kapasitas hingga 8 Anggota Keluarga (Bisa Tambah)",
      "2 Pilihan Konsep Studio (Warm Home / Classic Dark)",
      "1 Cetak Ukuran 12R + Frame Kayu Eksklusif",
      "Bantuan Wardrobe Styling & Penataan Pose Keluarga",
      "Free Sesi Solo untuk Balita / Newborn",
    ],
  },
];

export const CLIENT_REVIEWS: Review[] = [
  {
    id: "rev-1",
    name: "Aditya & Sarah Pratama",
    role: "Pengantin Baru (Sesi Prewedding)",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop",
    rating: 5,
    sessionType: "Signature Prewedding",
    comment:
      "Hasil fotonya di luar ekspektasi! Konsepnya terasa sangat mahal seperti majalah fashion luar negeri. Fotografernya sangat ramah dan sabar mengarahkan pose kita yang kaku.",
  },
  {
    id: "rev-2",
    name: "Dr. Ryan Kusuma",
    role: "Dokter Spesialis & Konsultan",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
    rating: 5,
    sessionType: "Executive Portrait",
    comment:
      "Butuh foto profil untuk website rumah sakit dan publikasi jurnal. Klasikapicture menghadirkan pencahayaan yang sangat presisi dan berwibawa. Proses editnya sangat cepat.",
  },
  {
    id: "rev-3",
    name: "Clara Vionalita, S.Ked",
    role: "Wisudawati FK",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop",
    rating: 5,
    sessionType: "Wisuda & Family Session",
    comment:
      "Studio foto paling estetik di kota ini! Tempatnya nyaman ber-AC dingin, ruang ganti luas, dan hasilnya pas dipajang di ruang tamu bikin semua tamu kagum.",
  },
];

export const FAQ_LIST: FAQItem[] = [
  {
    question: "Bagaimana cara melakukan booking jadwal foto di Klasika Picture?",
    answer:
      "Anda cukup mengisi formulir booking di website ini atau langsung menghubungi tim kami via WhatsApp. Jadwal akan dikunci setelah pembayaran Down Payment (DP) sebesar 30%.",
  },
  {
    question: "Berapa lama proses editing dan penyerahan hasil foto?",
    answer:
      "Semua file original (mentahan) dikirim H+1 setelah sesi melalui Google Drive. Proses retouch & color grading foto pilihan selesai dalam waktu 5-7 hari kerja.",
  },
  {
    question: "Apakah Klasikapicture menyediakan wardrobe dan Makeup Artist (MUA)?",
    answer:
      "Ya! Untuk paket Signature Prewedding sudah termasuk MUA & hairdo profesional. Untuk paket lainnya, MUA dan penyewaan gaun/jas dapat ditambahkan sebagai layanan add-on.",
  },
  {
    question: "Apakah boleh membawa hewan peliharaan (pet friendly)?",
    answer:
      "Tentu! Kami menyambut anabul (anjing/kucing) Anda untuk sesi keluarga atau personal. Harap konfirmasi terlebih dahulu kepada admin saat booking agar studio disiapkan.",
  },
  {
    question: "Bisa reschedule jika berhalangan hadir pada tanggal sesi?",
    answer:
      "Reschedule dapat dilakukan maksimal H-3 sebelum tanggal pemotretan tanpa potongan biaya tambahan (tergantung ketersediaan slot kosong berikutnya).",
  },
];

export const STUDIO_INFO = {
  name: "Klasikapicture",
  tagline: "Fine Art & Editorial Photography Studio",
  address: "Jl. Ranggamalela No. 18, Dago, Kota Bandung, Jawa Barat 40116",
  hours: "Setiap Hari: 09.00 - 21.00 WIB (By Appointment)",
  whatsapp: "+6281234567890",
  whatsappUrl: "https://wa.me/6281234567890",
  instagram: "@klasikapicture",
  instagramUrl: "https://instagram.com",
  email: "hello@klasikapicture.com",
  mapsUrl: "https://maps.google.com",
};
