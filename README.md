# 🕌 Kalkulator Zakat - BAZNAS Kota Lubuk Linggau

Aplikasi web Kalkulator Zakat lengkap dari **BAZNAS Kota Lubuk Linggau** dengan 11 jenis zakat sesuai syariat Islam dan standar BAZNAS.

---

## 📋 Yang Perlu Di-Install (Hanya 1 Software!)

| Software | Versi | Link Download |
|----------|-------|---------------|
| **Node.js** | 18+ (disarankan 20+ LTS) | https://nodejs.org/ |

> 💡 Pilih versi **LTS** (Long Term Support) saat download. npm sudah termasuk di dalam Node.js.

### Cara Cek Node.js Sudah Terinstall

Buka **Terminal** / **Command Prompt** / **PowerShell**:

```bash
node --version
# Harus muncul: v20.x.x atau lebih baru

npm --version
# Harus muncul: 10.x.x atau lebih baru
```

---

## 🚀 Cara Menjalankan (3 Langkah Saja)

### Langkah 1: Install Dependencies

Buka terminal di folder proyek ini, lalu jalankan:

```bash
npm install
```

> ⏳ Tunggu hingga selesai (biasanya 1-3 menit tergantung koneksi internet)

### Langkah 2: Setup Database

```bash
npx prisma db push
```

> Ini akan membuat database SQLite lokal secara otomatis.

### Langkah 3: Jalankan Aplikasi

```bash
npm run dev
```

Buka browser dan akses: **http://localhost:3000**

✅ Selesai! Aplikasi sudah berjalan di localhost Anda.

---

## 🛑 Cara Menghentikan Server

Tekan **Ctrl + C** di terminal.

---

## 🕌 11 Jenis Zakat yang Tersedia

| No | Jenis Zakat | Tarif | Nisab |
|----|-------------|-------|-------|
| 1 | Zakat Penghasilan | 2.5% | Setara 85 gram emas/tahun |
| 2 | Zakat Tabungan | 2.5% | Setara 85 gram emas |
| 3 | Zakat Perdagangan | 2.5% | Setara 85 gram emas |
| 4 | Zakat Emas, Perak & Logam Mulia | 2.5% | Emas: 85 gr / Perak: 595 gr |
| 5 | Zakat Pertanian | 5% / 10% | 653 kg gabah (5 wasaq) |
| 6 | Zakat Perusahaan | 2.5% | Setara 85 gram emas |
| 7 | Zakat Saham | 2.5% | Setara 85 gram emas |
| 8 | Zakat Barang Tambang (Ma'din) | 2.5% | Emas: 85 gr / Perak: 595 gr |
| 9 | Zakat Hasil Laut/Perikanan | 2.5% | Setara 85 gram emas |
| 10 | Zakat Investasi Penyewaan Aset | 2.5% | Setara 85 gram emas |
| 11 | Zakat Profesi | 2.5% | Setara 85 gram emas/tahun |

---

## 📁 Struktur Proyek

```
kalkulator-zakat-standalone/
├── prisma/
│   └── schema.prisma           # Skema database
├── public/
│   ├── hero-zakat.png          # Gambar hero
│   ├── logo.svg                # Logo aplikasi
│   └── robots.txt              # SEO
├── src/
│   ├── app/
│   │   ├── api/zakat/
│   │   │   └── route.ts        # API kalkulasi zakat
│   │   ├── globals.css         # Styling global
│   │   ├── layout.tsx          # Layout utama
│   │   └── page.tsx            # Halaman kalkulator
│   ├── components/ui/          # Komponen UI (shadcn/ui)
│   ├── hooks/                  # Custom hooks
│   └── lib/                    # Utility & database
├── package.json                # Dependencies
├── tsconfig.json               # Konfigurasi TypeScript
├── tailwind.config.ts          # Konfigurasi Tailwind CSS
├── next.config.ts              # Konfigurasi Next.js
├── postcss.config.mjs          # Konfigurasi PostCSS
└── components.json             # Konfigurasi shadcn/ui
```

---

## 🔌 API Endpoint

### Hitung Zakat (POST /api/zakat)

```bash
curl -X POST http://localhost:3000/api/zakat \
  -H "Content-Type: application/json" \
  -d '{
    "type": "penghasilan",
    "penghasilanUtama": 10000000,
    "penghasilanLain": 2000000,
    "hutang": 1000000,
    "periode": "bulanan"
  }'
```

### Info Zakat (GET /api/zakat)

```bash
curl http://localhost:3000/api/zakat
```

---

## 🏛 Informasi BAZNAS Kota Lubuk Linggau

| Informasi | Detail |
|-----------|--------|
| **Website** | https://kotalubuklinggau.baznas.go.id/ |
| **Email** | baznas@lubuklinggau.go.id |
| **Media Partner** | https://suarasilampari.com/ |
| **Alamat** | Jl. Letkol Sukirno Kompleks Ex. Pemda Kelurahan Air Kuti Kec. Lubuk Linggau Timur I Kota Lubuklinggau Prov. Sumatera Selatan 31625 |

### Rekening Penyaluran Zakat

| Bank | Jenis | Nomor Rekening |
|------|-------|----------------|
| Bank Sumselbabel Syariah | Zakat | 8030100247 |
| Bank Sumselbabel Syariah | Infaq | 8030103251 |
| Bank Syariah Indonesia (BSI) | Zakat | 7123456789 |

> a.n. **BAZNAS Kota Lubuk Linggau**

---

## ❓ Troubleshooting

### Error: `npm install` gagal
```bash
# Hapus cache dan coba lagi
npm cache clean --force
npm install
```

### Error: Port 3000 sudah dipakai
```bash
# Gunakan port lain
npx next dev -p 3001
```

### Error: `prisma` tidak ditemukan
```bash
# Install prisma sebagai dev dependency
npm install -D prisma
npx prisma db push
```

### Error: `Module not found`
```bash
# Install ulang dependencies
rm -rf node_modules package-lock.json
npm install
```

---

## 🏗 Build untuk Production

```bash
# Build
npm run build

# Jalankan production
npm run start
```

---

## 📦 Dependencies yang Digunakan

Versi standalone ini hanya menggunakan **dependencies yang diperlukan**:

| Dependency | Fungsi |
|------------|--------|
| next | Framework React full-stack |
| react, react-dom | Library UI |
| framer-motion | Animasi halus |
| lucide-react | Ikon SVG |
| @radix-ui/* | Komponen UI dasar (accordion, select, tabs, dll) |
| class-variance-authority, clsx, tailwind-merge | Styling utility |
| @prisma/client, prisma | Database ORM |
| tailwindcss | CSS framework |
| sharp | Optimisasi gambar |

> Total: ~20 dependencies (vs 50+ di versi asli) — lebih ringan dan cepat install!

---

© 2025 BAZNAS Kota Lubuk Linggau
