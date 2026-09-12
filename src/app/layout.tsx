import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Klasikapicture | Fine Art & Editorial Photo Studio",
  description:
    "Studio fotografi profesional dan berkonsep editorial: Wedding, Pre-wedding, Personal Portrait, Family, Wisuda, dan Commercial Photography.",
  keywords: [
    "klasikapicture",
    "studio foto",
    "photo studio",
    "wedding photography",
    "prewedding studio",
    "portrait photography",
    "editorial photo",
  ],
  authors: [{ name: "Klasika Picture" }],
  openGraph: {
    title: "Klasikapicture - Editorial & Fine Art Photography",
    description: "Mengabadikan setiap momen berharga dengan estetika visual klasik dan sentuhan editorial modern.",
    type: "website",
    locale: "id_ID",
    siteName: "Klasikapicture",
  },
  twitter: {
    card: "summary_large_image",
    title: "Klasikapicture - Editorial & Fine Art Photography",
    description: "Mengabadikan setiap momen berharga dengan estetika visual klasik dan sentuhan editorial modern.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Klasikapicture",
  image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1000",
  "@id": "https://klasikapicture.com",
  url: "https://klasikapicture.com",
  telephone: "+6281234567890",
  priceRange: "Rp 650.000 - Rp 1.850.000",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Jl. Ranggamalela No. 18, Dago",
    addressLocality: "Bandung",
    addressRegion: "Jawa Barat",
    postalCode: "40116",
    addressCountry: "ID",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "09:00",
    closes: "21:00",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${plusJakartaSans.variable} ${playfairDisplay.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-background text-foreground font-sans antialiased selection:bg-red-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
