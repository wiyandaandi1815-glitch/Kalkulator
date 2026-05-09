import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kalkulator Zakat - BAZNAS Kota Lubuk Linggau",
  description:
    "Kalkulator Zakat lengkap dari BAZNAS Kota Lubuk Linggau. Hitung zakat penghasilan, tabungan, perdagangan, emas, pertanian, perusahaan, saham, barang tambang, hasil laut, investasi, dan profesi.",
  keywords: [
    "kalkulator zakat",
    "BAZNAS",
    "Lubuk Linggau",
    "zakat penghasilan",
    "zakat emas",
    "zakat pertanian",
    "zakat profesi",
    "hitung zakat",
  ],
  authors: [{ name: "BAZNAS Kota Lubuk Linggau" }],
  icons: {
    icon: "https://kotalubuklinggau.baznas.go.id/favicon.ico",
  },
  openGraph: {
    title: "Kalkulator Zakat - BAZNAS Kota Lubuk Linggau",
    description:
      "Hitung zakat Anda dengan mudah dan akurat sesuai syariat Islam",
    url: "https://kotalubuklinggau.baznas.go.id",
    siteName: "BAZNAS Kota Lubuk Linggau",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
