'use client';

import React, { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Wallet, PiggyBank, Store, Coins, Wheat, Building2, TrendingUp,
  Mountain, Fish, KeyRound, Briefcase, Landmark, ChevronRight,
  Calculator, RotateCcw, AlertCircle, CheckCircle2, XCircle,
  Info, ExternalLink, Mail, MapPin, Globe, Heart, Phone,
  ArrowRight, Sparkles, BookOpen, HandHeart, Copy, Check,
  ChevronDown
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useToast } from '@/hooks/use-toast';

// ============================================
// TYPES & DATA
// ============================================

interface ZakatType {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  tarif: string;
  nisab: string;
  formula: string;
  color: string;
}

const ZAKAT_TYPES: ZakatType[] = [
  {
    id: 'penghasilan',
    name: 'Zakat Penghasilan',
    description: 'Zakat dari gaji dan pendapatan rutin',
    icon: <Wallet className="h-6 w-6" />,
    tarif: '2.5%',
    nisab: 'Setara 85 gram emas/tahun',
    formula: '(Penghasilan Utama + Penghasilan Lain - Hutang) × 2.5%',
    color: 'emerald',
  },
  {
    id: 'tabungan',
    name: 'Zakat Tabungan',
    description: 'Zakat dari simpanan di bank/deposito',
    icon: <PiggyBank className="h-6 w-6" />,
    tarif: '2.5%',
    nisab: 'Setara 85 gram emas',
    formula: '(Saldo Akhir - Bunga Bank) × 2.5%',
    color: 'teal',
  },
  {
    id: 'perdagangan',
    name: 'Zakat Perdagangan',
    description: 'Zakat dari harta dagangan/usaha niaga',
    icon: <Store className="h-6 w-6" />,
    tarif: '2.5%',
    nisab: 'Setara 85 gram emas',
    formula: '(Modal + Keuntungan + Piutang - Hutang) × 2.5%',
    color: 'cyan',
  },
  {
    id: 'emas-perak',
    name: 'Zakat Emas, Perak & Logam Mulia',
    description: 'Zakat dari kepemilikan emas, perak, dan logam mulia',
    icon: <Coins className="h-6 w-6" />,
    tarif: '2.5%',
    nisab: 'Emas: 85 gram | Perak: 595 gram',
    formula: 'Jumlah(gram) × Harga per Gram × 2.5%',
    color: 'amber',
  },
  {
    id: 'pertanian',
    name: 'Zakat Pertanian',
    description: 'Zakat dari hasil panen pertanian',
    icon: <Wheat className="h-6 w-6" />,
    tarif: '5% / 10%',
    nisab: '653 kg gabah (5 wasaq)',
    formula: 'Hasil Panen × Tarif (5% irigasi / 10% non-irigasi)',
    color: 'lime',
  },
  {
    id: 'perusahaan',
    name: 'Zakat Perusahaan',
    description: 'Zakat dari harta perusahaan/bisnis',
    icon: <Building2 className="h-6 w-6" />,
    tarif: '2.5%',
    nisab: 'Setara 85 gram emas',
    formula: '(Aktiva Lancar - Kewajiban Jangka Pendek) × 2.5%',
    color: 'sky',
  },
  {
    id: 'saham',
    name: 'Zakat Saham',
    description: 'Zakat dari kepemilikan saham/investasi pasar modal',
    icon: <TrendingUp className="h-6 w-6" />,
    tarif: '2.5%',
    nisab: 'Setara 85 gram emas',
    formula: '(Book Value Saham + Dividen) × 2.5%',
    color: 'violet',
  },
  {
    id: 'barang-tambang',
    name: "Zakat Barang Tambang (Ma'din)",
    description: 'Zakat dari hasil tambang mineral dan logam',
    icon: <Mountain className="h-6 w-6" />,
    tarif: '2.5%',
    nisab: 'Emas: 85 gram | Perak: 595 gram',
    formula: 'Berat Barang Tambang × Harga per Gram × 2.5%',
    color: 'stone',
  },
  {
    id: 'hasil-laut',
    name: 'Zakat Hasil Laut/Perikanan',
    description: 'Zakat dari hasil laut dan perikanan',
    icon: <Fish className="h-6 w-6" />,
    tarif: '2.5%',
    nisab: 'Setara 85 gram emas',
    formula: 'Nilai Hasil Laut × 2.5%',
    color: 'blue',
  },
  {
    id: 'investasi-penyewaan',
    name: 'Zakat Investasi Penyewaan Aset',
    description: 'Zakat dari pendapatan sewa/leasing aset',
    icon: <KeyRound className="h-6 w-6" />,
    tarif: '2.5%',
    nisab: 'Setara 85 gram emas',
    formula: '(Pendapatan Sewa - Biaya Operasional) × 2.5%',
    color: 'rose',
  },
  {
    id: 'profesi',
    name: 'Zakat Profesi',
    description: 'Zakat dari penghasilan profesi/karier',
    icon: <Briefcase className="h-6 w-6" />,
    tarif: '2.5%',
    nisab: 'Setara 85 gram emas/tahun',
    formula: '(Penghasilan Profesi - Biaya Operasional) × 2.5%',
    color: 'indigo',
  },
];

// ============================================
// CURRENCY INPUT HELPER
// ============================================

function formatRupiahInput(value: string): string {
  const num = value.replace(/\D/g, '');
  if (!num) return '';
  return Number(num).toLocaleString('id-ID');
}

function parseRupiahInput(value: string): number {
  return Number(value.replace(/\D/g, '')) || 0;
}

// ============================================
// CURRENCY INPUT COMPONENT
// ============================================

function CurrencyInput({
  label,
  value,
  onChange,
  placeholder = '0',
  hint,
  id,
}: {
  label: string;
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
  hint?: string;
  id?: string;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id} className="text-sm font-medium text-foreground">
        {label}
      </Label>
      <div className="relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm font-semibold text-muted-foreground">
          Rp
        </span>
        <Input
          id={id}
          type="text"
          inputMode="numeric"
          value={value}
          onChange={(e) => onChange(formatRupiahInput(e.target.value))}
          placeholder={placeholder}
          className="pl-10 text-right font-mono"
        />
      </div>
      {hint && <p className="text-xs text-muted-foreground">{hint}</p>}
    </div>
  );
}

// ============================================
// CALCULATOR FORMS
// ============================================

function ZakatPenghasilanForm({ onCalculate }: { onCalculate: (data: Record<string, string | number>) => void }) {
  const [penghasilanUtama, setPenghasilanUtama] = useState('');
  const [penghasilanLain, setPenghasilanLain] = useState('');
  const [hutang, setHutang] = useState('');
  const [periode, setPeriode] = useState('bulanan');

  const handleCalculate = () => {
    onCalculate({
      type: 'penghasilan',
      penghasilanUtama: parseRupiahInput(penghasilanUtama),
      penghasilanLain: parseRupiahInput(penghasilanLain),
      hutang: parseRupiahInput(hutang),
      periode,
    });
  };

  const handleReset = () => {
    setPenghasilanUtama('');
    setPenghasilanLain('');
    setHutang('');
    setPeriode('bulanan');
  };

  return (
    <div className="space-y-5">
      <Alert className="border-emerald-200 bg-emerald-50">
        <Info className="h-4 w-4 text-emerald-600" />
        <AlertTitle className="text-emerald-800 font-semibold">Formula</AlertTitle>
        <AlertDescription className="text-emerald-700 text-sm">
          (Penghasilan Utama + Penghasilan Lain - Hutang) × 2.5%
          <br />
          <span className="text-xs">Nisab: {nisabLoading ? '...' : nisabData ? `Rp ${nisabData.nisabBulanan.toLocaleString('id-ID')}` : 'Rp 7.640.144'}/bulan atau Rp 91.681.728/tahun (Sesuai SK BAZNAS)</span>
        </AlertDescription>
      </Alert>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <CurrencyInput
          id="penghasilan-utama"
          label="Penghasilan Utama"
          value={penghasilanUtama}
          onChange={setPenghasilanUtama}
          hint="Gaji atau pendapatan tetap per bulan"
        />
        <CurrencyInput
          id="penghasilan-lain"
          label="Penghasilan Lainnya"
          value={penghasilanLain}
          onChange={setPenghasilanLain}
          hint="Bonus, komisi, atau pendapatan tambahan"
        />
      </div>

      <CurrencyInput
        id="hutang-penghasilan"
        label="Hutang yang Jatuh Tempo"
        value={hutang}
        onChange={setHutang}
        hint="Hutang yang harus dibayar dalam periode ini (opsional)"
      />

      <div className="space-y-2">
        <Label className="text-sm font-medium">Periode Penghasilan</Label>
        <RadioGroup value={periode} onValueChange={setPeriode} className="flex gap-4">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="bulanan" id="bulanan" />
            <Label htmlFor="bulanan">Per Bulan</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="tahunan" id="tahunan" />
            <Label htmlFor="tahunan">Per Tahun</Label>
          </div>
        </RadioGroup>
      </div>

      <div className="flex gap-3 pt-2">
        <Button onClick={handleCalculate} className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white">
          <Calculator className="h-4 w-4 mr-2" /> Hitung Zakat
        </Button>
        <Button onClick={handleReset} variant="outline" className="border-emerald-300 text-emerald-700 hover:bg-emerald-50">
          <RotateCcw className="h-4 w-4 mr-2" /> Reset
        </Button>
      </div>
    </div>
  );
}

function ZakatTabunganForm({ onCalculate }: { onCalculate: (data: Record<string, string | number>) => void }) {
  const [saldoAkhir, setSaldoAkhir] = useState('');
  const [bungaBank, setBungaBank] = useState('');

  const handleCalculate = () => {
    onCalculate({
      type: 'tabungan',
      saldoAkhir: parseRupiahInput(saldoAkhir),
      bungaBank: parseRupiahInput(bungaBank),
    });
  };

  const handleReset = () => { setSaldoAkhir(''); setBungaBank(''); };

  return (
    <div className="space-y-5">
      <Alert className="border-teal-200 bg-teal-50">
        <Info className="h-4 w-4 text-teal-600" />
        <AlertTitle className="text-teal-800 font-semibold">Formula</AlertTitle>
        <AlertDescription className="text-teal-700 text-sm">
          (Saldo Akhir - Bunga Bank) × 2.5%
          <br />
          <span className="text-xs">Nisab: Setara 85 gram emas ({nisabLoading ? '...' : nisabData ? `Rp ${nisabData.nisabEmasRupiah.toLocaleString('id-ID')}` : 'Rp 148.750.000'})</span>
        </AlertDescription>
      </Alert>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <CurrencyInput
          id="saldo-akhir"
          label="Saldo Akhir Tabungan"
          value={saldoAkhir}
          onChange={setSaldoAkhir}
          hint="Total saldo tabungan/deposito Anda"
        />
        <CurrencyInput
          id="bunga-bank"
          label="Bunga Bank"
          value={bungaBank}
          onChange={setBungaBank}
          hint="Bunga yang diterima dari bank (dikurangi)"
        />
      </div>

      <div className="flex gap-3 pt-2">
        <Button onClick={handleCalculate} className="flex-1 bg-teal-600 hover:bg-teal-700 text-white">
          <Calculator className="h-4 w-4 mr-2" /> Hitung Zakat
        </Button>
        <Button onClick={handleReset} variant="outline" className="border-teal-300 text-teal-700 hover:bg-teal-50">
          <RotateCcw className="h-4 w-4 mr-2" /> Reset
        </Button>
      </div>
    </div>
  );
}

function ZakatPerdaganganForm({ onCalculate }: { onCalculate: (data: Record<string, string | number>) => void }) {
  const [modal, setModal] = useState('');
  const [keuntungan, setKeuntungan] = useState('');
  const [piutang, setPiutang] = useState('');
  const [hutang, setHutang] = useState('');

  const handleCalculate = () => {
    onCalculate({
      type: 'perdagangan',
      modal: parseRupiahInput(modal),
      keuntungan: parseRupiahInput(keuntungan),
      piutang: parseRupiahInput(piutang),
      hutang: parseRupiahInput(hutang),
    });
  };

  const handleReset = () => { setModal(''); setKeuntungan(''); setPiutang(''); setHutang(''); };

  return (
    <div className="space-y-5">
      <Alert className="border-cyan-200 bg-cyan-50">
        <Info className="h-4 w-4 text-cyan-600" />
        <AlertTitle className="text-cyan-800 font-semibold">Formula</AlertTitle>
        <AlertDescription className="text-cyan-700 text-sm">
          (Modal + Keuntungan + Piutang - Hutang) × 2.5%
          <br />
          <span className="text-xs">Nisab: Setara 85 gram emas ({nisabLoading ? '...' : nisabData ? `Rp ${nisabData.nisabEmasRupiah.toLocaleString('id-ID')}` : 'Rp 148.750.000'})</span>
        </AlertDescription>
      </Alert>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <CurrencyInput id="modal-dagang" label="Modal Dagang" value={modal} onChange={setModal} hint="Nilai modal yang dikeluarkan" />
        <CurrencyInput id="keuntungan" label="Keuntungan" value={keuntungan} onChange={setKeuntungan} hint="Laba/keuntungan usaha" />
        <CurrencyInput id="piutang-dagang" label="Piutang" value={piutang} onChange={setPiutang} hint="Piutang yang dapat dicairkan" />
        <CurrencyInput id="hutang-dagang" label="Hutang Jatuh Tempo" value={hutang} onChange={setHutang} hint="Hutang yang harus dibayar" />
      </div>

      <div className="flex gap-3 pt-2">
        <Button onClick={handleCalculate} className="flex-1 bg-cyan-600 hover:bg-cyan-700 text-white">
          <Calculator className="h-4 w-4 mr-2" /> Hitung Zakat
        </Button>
        <Button onClick={handleReset} variant="outline" className="border-cyan-300 text-cyan-700 hover:bg-cyan-50">
          <RotateCcw className="h-4 w-4 mr-2" /> Reset
        </Button>
      </div>
    </div>
  );
}

function ZakatEmasPerakForm({ onCalculate }: { onCalculate: (data: Record<string, string | number>) => void }) {
  const [jenisLogam, setJenisLogam] = useState('emas');
  const [berat, setBerat] = useState('');
  const [hargaPerGram, setHargaPerGram] = useState('');

  const handleCalculate = () => {
    onCalculate({
      type: 'emas-perak',
      jenisLogam,
      berat: Number(berat) || 0,
      hargaPerGram: parseRupiahInput(hargaPerGram) || 1750000,
    });
  };

  const handleReset = () => { setJenisLogam('emas'); setBerat(''); setHargaPerGram(''); };

  return (
    <div className="space-y-5">
      <Alert className="border-amber-200 bg-amber-50">
        <Info className="h-4 w-4 text-amber-600" />
        <AlertTitle className="text-amber-800 font-semibold">Formula</AlertTitle>
        <AlertDescription className="text-amber-700 text-sm">
          Jumlah (gram) × Harga per Gram × 2.5%
          <br />
          <span className="text-xs">Nisab: Emas 85 gram | Perak 595 gram</span>
        </AlertDescription>
      </Alert>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="jenis-logam" className="text-sm font-medium">Jenis Logam Mulia</Label>
          <Select value={jenisLogam} onValueChange={setJenisLogam}>
            <SelectTrigger id="jenis-logam">
              <SelectValue placeholder="Pilih jenis logam" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="emas">Emas</SelectItem>
              <SelectItem value="perak">Perak</SelectItem>
              <SelectItem value="lainnya">Logam Mulia Lainnya</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="berat-logam" className="text-sm font-medium">Berat ({jenisLogam === 'emas' ? 'Emas' : jenisLogam === 'perak' ? 'Perak' : 'Logam'})</Label>
          <div className="relative">
            <Input
              id="berat-logam"
              type="number"
              inputMode="decimal"
              value={berat}
              onChange={(e) => setBerat(e.target.value)}
              placeholder="0"
              className="pr-14"
              min="0"
              step="0.01"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">gram</span>
          </div>
          <p className="text-xs text-muted-foreground">Total kepemilikan selama 1 tahun</p>
        </div>
      </div>

      <CurrencyInput
        id="harga-emas"
        label={`Harga ${jenisLogam === 'emas' ? 'Emas' : jenisLogam === 'perak' ? 'Perak' : 'Logam'} per Gram`}
        value={hargaPerGram}
        onChange={setHargaPerGram}
        hint="Kosongkan untuk menggunakan harga referensi (Rp 1.750.000/gram emas)"
      />

      <div className="flex gap-3 pt-2">
        <Button onClick={handleCalculate} className="flex-1 bg-amber-600 hover:bg-amber-700 text-white">
          <Calculator className="h-4 w-4 mr-2" /> Hitung Zakat
        </Button>
        <Button onClick={handleReset} variant="outline" className="border-amber-300 text-amber-700 hover:bg-amber-50">
          <RotateCcw className="h-4 w-4 mr-2" /> Reset
        </Button>
      </div>
    </div>
  );
}

function ZakatPertanianForm({ onCalculate }: { onCalculate: (data: Record<string, string | number>) => void }) {
  const [jenisKomoditas, setJenisKomoditas] = useState('padi');
  const [jumlahPanen, setJumlahPanen] = useState('');
  const [jenisIrigasi, setJenisIrigasi] = useState('irigasi');
  const [hargaPerKg, setHargaPerKg] = useState('');

  const handleCalculate = () => {
    onCalculate({
      type: 'pertanian',
      jenisKomoditas,
      jumlahPanen: Number(jumlahPanen) || 0,
      jenisIrigasi,
      hargaPerKg: parseRupiahInput(hargaPerKg),
    });
  };

  const handleReset = () => { setJenisKomoditas('padi'); setJumlahPanen(''); setJenisIrigasi('irigasi'); setHargaPerKg(''); };

  return (
    <div className="space-y-5">
      <Alert className="border-lime-200 bg-lime-50">
        <Info className="h-4 w-4 text-lime-600" />
        <AlertTitle className="text-lime-800 font-semibold">Formula</AlertTitle>
        <AlertDescription className="text-lime-700 text-sm">
          Hasil Panen × Tarif (5% irigasi / 10% non-irigasi)
          <br />
          <span className="text-xs">Nisab: 653 kg gabah (5 wasaq)</span>
        </AlertDescription>
      </Alert>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="jenis-komoditas" className="text-sm font-medium">Jenis Komoditas</Label>
          <Select value={jenisKomoditas} onValueChange={setJenisKomoditas}>
            <SelectTrigger id="jenis-komoditas">
              <SelectValue placeholder="Pilih komoditas" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="padi">Padi Gagang</SelectItem>
              <SelectItem value="gabah">Gabah</SelectItem>
              <SelectItem value="beras">Beras</SelectItem>
              <SelectItem value="jagung">Jagung</SelectItem>
              <SelectItem value="gandum">Gandum</SelectItem>
              <SelectItem value="kacang_hijau">Kacang Hijau</SelectItem>
              <SelectItem value="lainnya">Lainnya</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="jumlah-panen" className="text-sm font-medium">Jumlah Hasil Panen</Label>
          <div className="relative">
            <Input
              id="jumlah-panen"
              type="number"
              inputMode="numeric"
              value={jumlahPanen}
              onChange={(e) => setJumlahPanen(e.target.value)}
              placeholder="0"
              className="pr-8"
              min="0"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">kg</span>
          </div>
        </div>
      </div>

      <CurrencyInput
        id="harga-per-kg"
        label="Harga per Kilogram"
        value={hargaPerKg}
        onChange={setHargaPerKg}
        hint="Harga pasar komoditas per kg saat ini"
      />

      <div className="space-y-2">
        <Label className="text-sm font-medium">Jenis Pengairan</Label>
        <RadioGroup value={jenisIrigasi} onValueChange={setJenisIrigasi} className="flex gap-4">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="irigasi" id="irigasi-ya" />
            <Label htmlFor="irigasi-ya">Irigasi / Tadah Hujan (5%)</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="non-irigasi" id="irigasi-tidak" />
            <Label htmlFor="irigasi-tidak">Non-Irigasi / Berbayar (10%)</Label>
          </div>
        </RadioGroup>
      </div>

      <div className="flex gap-3 pt-2">
        <Button onClick={handleCalculate} className="flex-1 bg-lime-600 hover:bg-lime-700 text-white">
          <Calculator className="h-4 w-4 mr-2" /> Hitung Zakat
        </Button>
        <Button onClick={handleReset} variant="outline" className="border-lime-300 text-lime-700 hover:bg-lime-50">
          <RotateCcw className="h-4 w-4 mr-2" /> Reset
        </Button>
      </div>
    </div>
  );
}

function ZakatPerusahaanForm({ onCalculate }: { onCalculate: (data: Record<string, string | number>) => void }) {
  const [aktivaLancar, setAktivaLancar] = useState('');
  const [kewajibanPendek, setKewajibanPendek] = useState('');

  const handleCalculate = () => {
    onCalculate({
      type: 'perusahaan',
      aktivaLancar: parseRupiahInput(aktivaLancar),
      kewajibanPendek: parseRupiahInput(kewajibanPendek),
    });
  };

  const handleReset = () => { setAktivaLancar(''); setKewajibanPendek(''); };

  return (
    <div className="space-y-5">
      <Alert className="border-sky-200 bg-sky-50">
        <Info className="h-4 w-4 text-sky-600" />
        <AlertTitle className="text-sky-800 font-semibold">Formula</AlertTitle>
        <AlertDescription className="text-sky-700 text-sm">
          (Aktiva Lancar - Kewajiban Jangka Pendek) × 2.5%
          <br />
          <span className="text-xs">Nisab: Setara 85 gram emas ({nisabLoading ? '...' : nisabData ? `Rp ${nisabData.nisabEmasRupiah.toLocaleString('id-ID')}` : 'Rp 148.750.000'})</span>
        </AlertDescription>
      </Alert>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <CurrencyInput id="aktiva-lancar" label="Aktiva Lancar" value={aktivaLancar} onChange={setAktivaLancar} hint="Kas, piutang, persediaan, dll" />
        <CurrencyInput id="kewajiban-pendek" label="Kewajiban Jangka Pendek" value={kewajibanPendek} onChange={setKewajibanPendek} hint="Hutang jatuh tempo dalam 1 tahun" />
      </div>

      <div className="flex gap-3 pt-2">
        <Button onClick={handleCalculate} className="flex-1 bg-sky-600 hover:bg-sky-700 text-white">
          <Calculator className="h-4 w-4 mr-2" /> Hitung Zakat
        </Button>
        <Button onClick={handleReset} variant="outline" className="border-sky-300 text-sky-700 hover:bg-sky-50">
          <RotateCcw className="h-4 w-4 mr-2" /> Reset
        </Button>
      </div>
    </div>
  );
}

function ZakatSahamForm({ onCalculate }: { onCalculate: (data: Record<string, string | number>) => void }) {
  const [bookValue, setBookValue] = useState('');
  const [dividen, setDividen] = useState('');

  const handleCalculate = () => {
    onCalculate({
      type: 'saham',
      bookValue: parseRupiahInput(bookValue),
      dividen: parseRupiahInput(dividen),
    });
  };

  const handleReset = () => { setBookValue(''); setDividen(''); };

  return (
    <div className="space-y-5">
      <Alert className="border-violet-200 bg-violet-50">
        <Info className="h-4 w-4 text-violet-600" />
        <AlertTitle className="text-violet-800 font-semibold">Formula</AlertTitle>
        <AlertDescription className="text-violet-700 text-sm">
          (Book Value Saham + Dividen) × 2.5%
          <br />
          <span className="text-xs">Nisab: Setara 85 gram emas ({nisabLoading ? '...' : nisabData ? `Rp ${nisabData.nisabEmasRupiah.toLocaleString('id-ID')}` : 'Rp 148.750.000'})</span>
        </AlertDescription>
      </Alert>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <CurrencyInput id="book-value" label="Book Value Saham" value={bookValue} onChange={setBookValue} hint="Nilai buku saham yang dimiliki" />
        <CurrencyInput id="dividen" label="Dividen yang Diterima" value={dividen} onChange={setDividen} hint="Total dividen yang diterima" />
      </div>

      <div className="flex gap-3 pt-2">
        <Button onClick={handleCalculate} className="flex-1 bg-violet-600 hover:bg-violet-700 text-white">
          <Calculator className="h-4 w-4 mr-2" /> Hitung Zakat
        </Button>
        <Button onClick={handleReset} variant="outline" className="border-violet-300 text-violet-700 hover:bg-violet-50">
          <RotateCcw className="h-4 w-4 mr-2" /> Reset
        </Button>
      </div>
    </div>
  );
}

function ZakatBarangTambangForm({ onCalculate }: { onCalculate: (data: Record<string, string | number>) => void }) {
  const [jenisTambang, setJenisTambang] = useState('emas');
  const [berat, setBerat] = useState('');
  const [hargaPerGram, setHargaPerGram] = useState('');

  const handleCalculate = () => {
    onCalculate({
      type: 'barang-tambang',
      jenisTambang,
      berat: Number(berat) || 0,
      hargaPerGram: parseRupiahInput(hargaPerGram) || 1750000,
    });
  };

  const handleReset = () => { setJenisTambang('emas'); setBerat(''); setHargaPerGram(''); };

  return (
    <div className="space-y-5">
      <Alert className="border-stone-200 bg-stone-50">
        <Info className="h-4 w-4 text-stone-600" />
        <AlertTitle className="text-stone-800 font-semibold">Formula</AlertTitle>
        <AlertDescription className="text-stone-700 text-sm">
          Berat Barang Tambang × Harga per Gram × 2.5%
          <br />
          <span className="text-xs">Nisab: Emas 85 gram | Perak 595 gram | Waktu: Setelah dikeluarkan</span>
        </AlertDescription>
      </Alert>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="jenis-tambang" className="text-sm font-medium">Jenis Barang Tambang</Label>
          <Select value={jenisTambang} onValueChange={setJenisTambang}>
            <SelectTrigger id="jenis-tambang">
              <SelectValue placeholder="Pilih jenis" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="emas">Emas</SelectItem>
              <SelectItem value="perak">Perak</SelectItem>
              <SelectItem value="minyak">Minyak Bumi</SelectItem>
              <SelectItem value="gas">Gas Alam</SelectItem>
              <SelectItem value="batubara">Batubara</SelectItem>
              <SelectItem value="lainnya">Mineral Lainnya</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="berat-tambang" className="text-sm font-medium">Berat Barang Tambang</Label>
          <div className="relative">
            <Input
              id="berat-tambang"
              type="number"
              inputMode="decimal"
              value={berat}
              onChange={(e) => setBerat(e.target.value)}
              placeholder="0"
              className="pr-14"
              min="0"
              step="0.01"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">gram</span>
          </div>
        </div>
      </div>

      <CurrencyInput
        id="harga-tambang"
        label={`Harga ${jenisTambang === 'emas' ? 'Emas' : jenisTambang === 'perak' ? 'Perak' : jenisTambang} per Gram`}
        value={hargaPerGram}
        onChange={setHargaPerGram}
        hint="Kosongkan untuk menggunakan harga referensi"
      />

      <div className="flex gap-3 pt-2">
        <Button onClick={handleCalculate} className="flex-1 bg-stone-600 hover:bg-stone-700 text-white">
          <Calculator className="h-4 w-4 mr-2" /> Hitung Zakat
        </Button>
        <Button onClick={handleReset} variant="outline" className="border-stone-300 text-stone-700 hover:bg-stone-50">
          <RotateCcw className="h-4 w-4 mr-2" /> Reset
        </Button>
      </div>
    </div>
  );
}

function ZakatHasilLautForm({ onCalculate }: { onCalculate: (data: Record<string, string | number>) => void }) {
  const [jenisHasilLaut, setJenisHasilLaut] = useState('ikan');
  const [jumlahHasil, setJumlahHasil] = useState('');
  const [hargaPerKg, setHargaPerKg] = useState('');

  const handleCalculate = () => {
    onCalculate({
      type: 'hasil-laut',
      jenisHasilLaut,
      jumlahHasil: Number(jumlahHasil) || 0,
      hargaPerKg: parseRupiahInput(hargaPerKg),
    });
  };

  const handleReset = () => { setJenisHasilLaut('ikan'); setJumlahHasil(''); setHargaPerKg(''); };

  return (
    <div className="space-y-5">
      <Alert className="border-blue-200 bg-blue-50">
        <Info className="h-4 w-4 text-blue-600" />
        <AlertTitle className="text-blue-800 font-semibold">Formula</AlertTitle>
        <AlertDescription className="text-blue-700 text-sm">
          Nilai Hasil Laut × 2.5%
          <br />
          <span className="text-xs">Nisab: Setara 85 gram emas | Waktu: Setelah hasil diperoleh</span>
        </AlertDescription>
      </Alert>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="jenis-hasil-laut" className="text-sm font-medium">Jenis Hasil Laut</Label>
          <Select value={jenisHasilLaut} onValueChange={setJenisHasilLaut}>
            <SelectTrigger id="jenis-hasil-laut">
              <SelectValue placeholder="Pilih jenis" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ikan">Ikan</SelectItem>
              <SelectItem value="udang">Udang</SelectItem>
              <SelectItem value="kepiting">Kepiting</SelectItem>
              <SelectItem value="mutiara">Mutiara</SelectItem>
              <SelectItem value="rumput_laut">Rumput Laut</SelectItem>
              <SelectItem value="lainnya">Lainnya</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="jumlah-hasil-laut" className="text-sm font-medium">Jumlah Hasil</Label>
          <div className="relative">
            <Input
              id="jumlah-hasil-laut"
              type="number"
              inputMode="numeric"
              value={jumlahHasil}
              onChange={(e) => setJumlahHasil(e.target.value)}
              placeholder="0"
              className="pr-8"
              min="0"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">kg</span>
          </div>
        </div>
      </div>

      <CurrencyInput
        id="harga-hasil-laut"
        label="Harga per Kilogram"
        value={hargaPerKg}
        onChange={setHargaPerKg}
        hint="Harga pasar hasil laut per kg"
      />

      <div className="flex gap-3 pt-2">
        <Button onClick={handleCalculate} className="flex-1 bg-blue-600 hover:bg-blue-700 text-white">
          <Calculator className="h-4 w-4 mr-2" /> Hitung Zakat
        </Button>
        <Button onClick={handleReset} variant="outline" className="border-blue-300 text-blue-700 hover:bg-blue-50">
          <RotateCcw className="h-4 w-4 mr-2" /> Reset
        </Button>
      </div>
    </div>
  );
}

function ZakatInvestasiPenyewaanForm({ onCalculate }: { onCalculate: (data: Record<string, string | number>) => void }) {
  const [pendapatanSewa, setPendapatanSewa] = useState('');
  const [biayaOperasional, setBiayaOperasional] = useState('');

  const handleCalculate = () => {
    onCalculate({
      type: 'investasi-penyewaan',
      pendapatanSewa: parseRupiahInput(pendapatanSewa),
      biayaOperasional: parseRupiahInput(biayaOperasional),
    });
  };

  const handleReset = () => { setPendapatanSewa(''); setBiayaOperasional(''); };

  return (
    <div className="space-y-5">
      <Alert className="border-rose-200 bg-rose-50">
        <Info className="h-4 w-4 text-rose-600" />
        <AlertTitle className="text-rose-800 font-semibold">Formula</AlertTitle>
        <AlertDescription className="text-rose-700 text-sm">
          (Pendapatan Sewa - Biaya Operasional) × 2.5%
          <br />
          <span className="text-xs">Nisab: Setara 85 gram emas ({nisabLoading ? '...' : nisabData ? `Rp ${nisabData.nisabEmasRupiah.toLocaleString('id-ID')}` : 'Rp 148.750.000'})</span>
        </AlertDescription>
      </Alert>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <CurrencyInput id="pendapatan-sewa" label="Pendapatan Sewa" value={pendapatanSewa} onChange={setPendapatanSewa} hint="Total pendapatan dari penyewaan aset" />
        <CurrencyInput id="biaya-operasional-sewa" label="Biaya Operasional" value={biayaOperasional} onChange={setBiayaOperasional} hint="Biaya pemeliharaan & operasional aset" />
      </div>

      <div className="flex gap-3 pt-2">
        <Button onClick={handleCalculate} className="flex-1 bg-rose-600 hover:bg-rose-700 text-white">
          <Calculator className="h-4 w-4 mr-2" /> Hitung Zakat
        </Button>
        <Button onClick={handleReset} variant="outline" className="border-rose-300 text-rose-700 hover:bg-rose-50">
          <RotateCcw className="h-4 w-4 mr-2" /> Reset
        </Button>
      </div>
    </div>
  );
}

function ZakatProfesiForm({ onCalculate }: { onCalculate: (data: Record<string, string | number>) => void }) {
  const [penghasilanProfesi, setPenghasilanProfesi] = useState('');
  const [biayaOperasional, setBiayaOperasional] = useState('');
  const [periode, setPeriode] = useState('bulanan');

  const handleCalculate = () => {
    onCalculate({
      type: 'profesi',
      penghasilanProfesi: parseRupiahInput(penghasilanProfesi),
      biayaOperasional: parseRupiahInput(biayaOperasional),
      periode,
    });
  };

  const handleReset = () => { setPenghasilanProfesi(''); setBiayaOperasional(''); setPeriode('bulanan'); };

  return (
    <div className="space-y-5">
      <Alert className="border-indigo-200 bg-indigo-50">
        <Info className="h-4 w-4 text-indigo-600" />
        <AlertTitle className="text-indigo-800 font-semibold">Formula</AlertTitle>
        <AlertDescription className="text-indigo-700 text-sm">
          (Penghasilan Profesi - Biaya Operasional) × 2.5%
          <br />
          <span className="text-xs">Nisab: {nisabLoading ? '...' : nisabData ? `Rp ${nisabData.nisabBulanan.toLocaleString('id-ID')}` : 'Rp 7.640.144'}/bulan atau Rp 91.681.728/tahun (Sesuai SK BAZNAS)</span>
        </AlertDescription>
      </Alert>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <CurrencyInput id="penghasilan-profesi" label="Penghasilan Profesi" value={penghasilanProfesi} onChange={setPenghasilanProfesi} hint="Pendapatan dari profesi/karier Anda" />
        <CurrencyInput id="biaya-operasional-profesi" label="Biaya Operasional" value={biayaOperasional} onChange={setBiayaOperasional} hint="Biaya yang dikeluarkan untuk profesi" />
      </div>

      <div className="space-y-2">
        <Label className="text-sm font-medium">Periode Penghasilan</Label>
        <RadioGroup value={periode} onValueChange={setPeriode} className="flex gap-4">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="bulanan" id="profesi-bulanan" />
            <Label htmlFor="profesi-bulanan">Per Bulan</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="tahunan" id="profesi-tahunan" />
            <Label htmlFor="profesi-tahunan">Per Tahun</Label>
          </div>
        </RadioGroup>
      </div>

      <div className="flex gap-3 pt-2">
        <Button onClick={handleCalculate} className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white">
          <Calculator className="h-4 w-4 mr-2" /> Hitung Zakat
        </Button>
        <Button onClick={handleReset} variant="outline" className="border-indigo-300 text-indigo-700 hover:bg-indigo-50">
          <RotateCcw className="h-4 w-4 mr-2" /> Reset
        </Button>
      </div>
    </div>
  );
}

// ============================================
// RESULT COMPONENT
// ============================================

function ZakatResult({ result }: { result: Record<string, unknown> | null }) {
  if (!result) return null;

  const isWajib = result.isWajib as boolean;
  const zakat = result.zakat as string;
  const message = result.message as string;
  const details = result.details as Record<string, string | number | boolean>;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="mt-6"
    >
      <Card className={`border-2 ${isWajib ? 'border-emerald-300 bg-emerald-50/50' : 'border-amber-300 bg-amber-50/50'}`}>
        <CardHeader className="pb-3">
          <div className="flex items-center gap-2">
            {isWajib ? (
              <CheckCircle2 className="h-6 w-6 text-emerald-600" />
            ) : (
              <XCircle className="h-6 w-6 text-amber-600" />
            )}
            <CardTitle className={isWajib ? 'text-emerald-800' : 'text-amber-800'}>
              {isWajib ? 'Anda Wajib Membayar Zakat' : 'Belum Mencapai Nisab'}
            </CardTitle>
          </div>
          <CardDescription className={isWajib ? 'text-emerald-600' : 'text-amber-600'}>
            {message}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {isWajib && (
            <div className="text-center py-4 bg-white rounded-xl border border-emerald-200 shadow-sm">
              <p className="text-sm text-emerald-600 mb-1">Zakat yang Harus Dibayarkan</p>
              <p className="text-3xl sm:text-4xl font-bold text-emerald-700 gold-shimmer">
                {zakat}
              </p>
            </div>
          )}

          <div className="space-y-2">
            <h4 className="font-semibold text-sm text-foreground">Rincian Perhitungan</h4>
            <div className="grid grid-cols-1 gap-1.5">
              {Object.entries(details).map(([key, value]) => (
                <div key={key} className="flex justify-between items-center py-1.5 px-3 bg-white/70 rounded-lg text-sm">
                  <span className="text-muted-foreground capitalize">
                    {key.replace(/([A-Z])/g, ' $1').replace(/_/g, ' ')}
                  </span>
                  <span className="font-medium text-foreground">{String(value)}</span>
                </div>
              ))}
            </div>
          </div>

          {!isWajib && (
            <Alert className="border-amber-200 bg-amber-50">
              <Heart className="h-4 w-4 text-amber-600" />
              <AlertTitle className="text-amber-800 text-sm">Anda Masih Bersedekah</AlertTitle>
              <AlertDescription className="text-amber-700 text-xs">
                Meskipun belum mencapai nisab, Anda tetap dapat mengeluarkan sebagian harta sebagai sedekah atau infak. Sedekah dapat membersihkan harta dan mendatangkan keberkahan.
              </AlertDescription>
            </Alert>
          )}

          <div className="pt-3 border-t border-emerald-200/50">
            <p className="text-xs text-center text-muted-foreground">
              Salurkan zakat Anda melalui BAZNAS Kota Lubuk Linggau
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
              <div className="bg-white/80 rounded-lg p-3 text-xs">
                <p className="font-semibold text-emerald-800">Bank Sumselbabel Syariah</p>
                <p>Zakat: <span className="font-mono">8030100247</span></p>
                <p>Infaq: <span className="font-mono">8030103251</span></p>
                <p className="text-muted-foreground">a.n. BAZNAS Kota Lubuk Linggau</p>
              </div>
              <div className="bg-white/80 rounded-lg p-3 text-xs">
                <p className="font-semibold text-emerald-800">Bank Syariah Indonesia</p>
                <p>Zakat: <span className="font-mono">7020637794</span></p>
                <p>Infaq: <span className="font-mono">7020629597</span></p>
                <p className="text-muted-foreground">a.n. BAZNAS Kota Lubuk Linggau</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

// ============================================
// MAIN PAGE COMPONENT
// ============================================

export default function HomePage() {
  const [selectedType, setSelectedType] = useState<string | null>(null);
// State harga emas real-time
  const [nisabData, setNisabData] = useState<{
    hargaPerGram: number;
    nisabEmasRupiah: number;
    nisabBulanan: number;
  } | null>(null);
  const [nisabLoading, setNisabLoading] = useState(true);

  useEffect(() => {
    fetch('/api/gold-price')
      .then(r => r.json())
      .then(d => {
        if (d.success && d.hargaPerGram > 0) setNisabData(d.nisab);
      })
      .catch(() => {})
      .finally(() => setNisabLoading(false));
  }, []);

  const handleCalculate = useCallback(async (data: Record<string, string | number>) => {
    setIsCalculating(true);
    setResult(null);

    try {
      const response = await fetch('/api/zakat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Gagal menghitung zakat');
      }

      const resultData = await response.json();
      setResult(resultData);
    } catch {
      toast({
        title: 'Error',
        description: 'Terjadi kesalahan dalam perhitungan zakat. Silakan coba lagi.',
        variant: 'destructive',
      });
    } finally {
      setIsCalculating(false);
    }
  }, [toast]);

  const handleBackToSelector = () => {
    setSelectedType(null);
    setResult(null);
  };

  const selectedZakat = ZAKAT_TYPES.find(z => z.id === selectedType);

  const renderCalculatorForm = () => {
    if (!selectedType) return null;

    const props = { onCalculate: handleCalculate };

    switch (selectedType) {
      case 'penghasilan': return <ZakatPenghasilanForm {...props} />;
      case 'tabungan': return <ZakatTabunganForm {...props} />;
      case 'perdagangan': return <ZakatPerdaganganForm {...props} />;
      case 'emas-perak': return <ZakatEmasPerakForm {...props} />;
      case 'pertanian': return <ZakatPertanianForm {...props} />;
      case 'perusahaan': return <ZakatPerusahaanForm {...props} />;
      case 'saham': return <ZakatSahamForm {...props} />;
      case 'barang-tambang': return <ZakatBarangTambangForm {...props} />;
      case 'hasil-laut': return <ZakatHasilLautForm {...props} />;
      case 'investasi-penyewaan': return <ZakatInvestasiPenyewaanForm {...props} />;
      case 'profesi': return <ZakatProfesiForm {...props} />;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background islamic-pattern">
      {/* Header */}
      <header className="bg-gradient-to-r from-emerald-800 via-emerald-700 to-emerald-900 text-white shadow-lg relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,0.1) 35px, rgba(255,255,255,0.1) 70px)`,
          }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                <Landmark className="h-7 w-7 text-amber-300" />
              </div>
              <div>
                <h1 className="text-lg sm:text-xl font-bold tracking-tight">BAZNAS Kota Lubuk Linggau</h1>
                <p className="text-emerald-200 text-xs sm:text-sm">Badan Amil Zakat Nasional</p>
              </div>
            </div>
            <a
              href="https://kotalubuklinggau.baznas.go.id/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 text-sm text-emerald-200 hover:text-white transition-colors"
            >
              <Globe className="h-4 w-4" />
              Website Resmi
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-emerald-700 via-emerald-800 to-emerald-950 text-white overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/hero-zakat.png"
              alt="Zakat Calculator Background"
              className="w-full h-full object-cover opacity-20 mix-blend-overlay"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-emerald-950/80" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="text-center max-w-3xl mx-auto"
            >
              <Badge className="mb-4 bg-amber-500/20 text-amber-300 border-amber-400/30 hover:bg-amber-500/30">
                <Sparkles className="h-3 w-3 mr-1" />
                Kalkulator Zakat Lengkap
              </Badge>
              <h2 className="text-3xl sm:text-5xl font-bold mb-4 leading-tight">
                Hitung Zakat Anda
                <br />
                <span className="gold-shimmer">dengan Mudah & Akurat</span>
              </h2>
              <p className="text-emerald-100 text-base sm:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                Kalkulator zakat lengkap sesuai syariat Islam berdasarkan fatwa MUI dan pedoman BAZNAS.
                Sucikan harta Anda dengan zakat yang benar.
              </p>

              {/* Nisab Info Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl mx-auto">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                  <div className="text-2xl mb-1">⚖️</div>
                  <div className="text-xs text-emerald-200 mb-1">Nisab Emas</div>
                  <div className="font-bold text-lg">85 Gram</div>
                  <div className="text-xs text-emerald-300">{nisabLoading ? '...' : nisabData ? `Rp ${nisabData.nisabEmasRupiah.toLocaleString('id-ID')}` : '{nisabLoading ? '...' : nisabData ? `Rp ${nisabData.nisabEmasRupiah.toLocaleString('id-ID')}` : 'Rp 148.750.000'}'}</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                  <div className="text-2xl mb-1">📅</div>
                  <div className="text-xs text-emerald-200 mb-1">Nisab Bulanan</div>
                  <div className="font-bold text-lg">{nisabLoading ? '...' : nisabData ? `Rp ${nisabData.nisabBulanan.toLocaleString('id-ID')}` : 'Rp 7.640.144'}</div>
                  <div className="text-xs text-emerald-300">Per Bulan</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                  <div className="text-2xl mb-1">💰</div>
                  <div className="text-xs text-emerald-200 mb-1">Tarif Zakat</div>
                  <div className="font-bold text-lg">2.5%</div>
                  <div className="text-xs text-emerald-300">Dari Harta</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Calculator Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <AnimatePresence mode="wait">
            {!selectedType ? (
              <motion.div
                key="selector"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-center mb-8">
                  <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
                    Pilih Jenis Zakat
                  </h3>
                  <p className="text-muted-foreground">
                    Pilih jenis zakat yang ingin Anda hitung
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {ZAKAT_TYPES.map((zakatType, index) => (
                    <motion.div
                      key={zakatType.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                      <Card
                        className="cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group border-border/50 hover:border-emerald-300 bg-card/80 backdrop-blur-sm"
                        onClick={() => setSelectedType(zakatType.id)}
                      >
                        <CardContent className="p-5">
                          <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                              {zakatType.icon}
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="font-semibold text-foreground text-sm leading-tight mb-1">
                                {zakatType.name}
                              </h4>
                              <p className="text-xs text-muted-foreground line-clamp-2 mb-2">
                                {zakatType.description}
                              </p>
                              <div className="flex items-center gap-2">
                                <Badge variant="outline" className="text-[10px] px-1.5 py-0 bg-emerald-50 text-emerald-700 border-emerald-200">
                                  {zakatType.tarif}
                                </Badge>
                              </div>
                            </div>
                            <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-emerald-600 transition-colors flex-shrink-0 mt-1" />
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>

                {/* Info Section */}
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <Card className="text-center bg-card/80 backdrop-blur-sm border-border/50">
                    <CardContent className="p-6">
                      <BookOpen className="h-10 w-10 text-emerald-600 mx-auto mb-3" />
                      <h4 className="font-semibold text-foreground mb-1">Ketentuan Zakat</h4>
                      <p className="text-sm text-muted-foreground">Nisab: 85 gram emas | Haul: 1 tahun | Tarif: 2.5%</p>
                    </CardContent>
                  </Card>
                  <Card className="text-center bg-card/80 backdrop-blur-sm border-border/50">
                    <CardContent className="p-6">
                      <HandHeart className="h-10 w-10 text-emerald-600 mx-auto mb-3" />
                      <h4 className="font-semibold text-foreground mb-1">Manfaat Zakat</h4>
                      <p className="text-sm text-muted-foreground">Zakat menyucikan harta dan membantu sesama</p>
                    </CardContent>
                  </Card>
                  <Card className="text-center bg-card/80 backdrop-blur-sm border-border/50">
                    <CardContent className="p-6">
                      <Phone className="h-10 w-10 text-emerald-600 mx-auto mb-3" />
                      <h4 className="font-semibold text-foreground mb-1">Konsultasi</h4>
                      <p className="text-sm text-muted-foreground">Hubungi BAZNAS untuk konsultasi lebih lanjut</p>
                    </CardContent>
                  </Card>
                </div>

                {/* FAQ Section */}
                <div className="mt-12">
                  <h3 className="text-xl font-bold text-center text-foreground mb-6">Pertanyaan Umum tentang Zakat</h3>
                  <Accordion type="single" collapsible className="max-w-3xl mx-auto">
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="text-sm font-medium">Apa itu Nisab?</AccordionTrigger>
                      <AccordionContent className="text-sm text-muted-foreground">
                        Nisab adalah batas minimum harta yang wajib dikeluarkan zakatnya. Nisab emas adalah 85 gram emas, nisab perak adalah 595 gram perak, dan nisab pertanian adalah 653 kg gabah.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger className="text-sm font-medium">Apa itu Haul?</AccordionTrigger>
                      <AccordionContent className="text-sm text-muted-foreground">
                        Haul adalah jangka waktu kepemilikan harta selama satu tahun Hijriyah (354 hari). Sebagian zakat seperti penghasilan dan profesi tidak mensyaratkan haul, cukup mencapai nisab.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger className="text-sm font-medium">Apa perbedaan Zakat Penghasilan dan Zakat Profesi?</AccordionTrigger>
                      <AccordionContent className="text-sm text-muted-foreground">
                        Zakat Penghasilan dikeluarkan dari gaji/pendapatan rutin tanpa memperhitungkan biaya operasional. Zakat Profesi dikeluarkan dari sisa penghasilan setelah dikurangi biaya operasional profesi.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                      <AccordionTrigger className="text-sm font-medium">Kapan waktu yang tepat mengeluarkan zakat?</AccordionTrigger>
                      <AccordionContent className="text-sm text-muted-foreground">
                        Zakat penghasilan/profesi dikeluarkan setiap bulan saat menerima penghasilan. Zakat tabungan/perdagangan/emas dikeluarkan setelah haul (1 tahun). Zakat pertanian dikeluarkan saat panen.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="calculator"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.3 }}
              >
                {/* Back Button & Title */}
                <div className="flex items-center gap-3 mb-6">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleBackToSelector}
                    className="border-emerald-300 text-emerald-700 hover:bg-emerald-50"
                  >
                    ← Kembali
                  </Button>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center">
                        {selectedZakat?.icon}
                      </div>
                      <h3 className="text-xl font-bold text-foreground">
                        {selectedZakat?.name}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Calculator Card */}
                <Card className="border-2 border-emerald-200 bg-card/90 backdrop-blur-sm shadow-lg">
                  <CardContent className="p-6">
                    {isCalculating ? (
                      <div className="flex items-center justify-center py-12">
                        <div className="animate-spin rounded-full h-12 w-12 border-4 border-emerald-200 border-t-emerald-600" />
                      </div>
                    ) : (
                      renderCalculatorForm()
                    )}
                    <ZakatResult result={result} />
                  </CardContent>
                </Card>

                {/* Disclaimer */}
                <div className="mt-6 bg-amber-50 border border-amber-200 rounded-xl p-4">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h5 className="font-semibold text-amber-800 text-sm mb-1">Disclaimer Penting</h5>
                      <p className="text-xs text-amber-700 leading-relaxed">
                        Perhitungan ini menggunakan Fatwa MUI No. 3 Tahun 2003 tentang Zakat Penghasilan,
                        Keputusan Majma&apos; Fiqh Islami (OKI) tentang Zakat Kontemporer, dan pendapat
                        mayoritas ulama kontemporer. Untuk kasus khusus atau keputusan final, silakan
                        konsultasi dengan BAZNAS Kota Lubuk Linggau atau ustadz yang kompeten.{' '}
                        <em>Wallahu a&apos;lam bishawab.</em>
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-emerald-900 via-emerald-800 to-emerald-900 text-white mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Logo & Description */}
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                  <Landmark className="h-6 w-6 text-amber-300" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">BAZNAS</h4>
                  <p className="text-emerald-300 text-xs">Kota Lubuk Linggau</p>
                </div>
              </div>
              <p className="text-emerald-200 text-sm leading-relaxed">
                Badan Amil Zakat Nasional Kota Lubuk Linggau, melayani masyarakat dalam pengelolaan zakat, infak, dan sedekah sesuai syariat Islam.
              </p>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold mb-3 text-amber-300">Kontak</h4>
              <div className="space-y-2.5 text-sm text-emerald-200">
                <div className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5 text-emerald-400" />
                  <span>
                    Jl. Letkol Sukirno Kompleks Ex. Pemda, Kel. Air Kuti,
                    Kec. Lubuk Linggau Timur I, Kota Lubuklinggau,
                    Sumatera Selatan 31625
                  </span>
                </div>
                <a href="mailto:baznas@lubuklinggau.go.id" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Mail className="h-4 w-4 text-emerald-400" />
                  baznas@lubuklinggau.go.id
                </a>
                <a href="https://kotalubuklinggau.baznas.go.id/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Globe className="h-4 w-4 text-emerald-400" />
                  kotalubuklinggau.baznas.go.id
                </a>
              </div>
            </div>

            {/* Bank Accounts */}
            <div>
              <h4 className="font-semibold mb-3 text-amber-300">Rekening Zakat</h4>
              <div className="space-y-3 text-sm text-emerald-200">
                <div className="bg-white/10 rounded-lg p-3">
                  <p className="font-medium text-white">Bank Sumselbabel Syariah</p>
                  <p>Zakat: <span className="font-mono font-semibold">8030100247</span></p>
                  <p>Infaq: <span className="font-mono font-semibold">8030103251</span></p>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <p className="font-medium text-white">Bank Syariah Indonesia</p>
                  <p>Zakat: <span className="font-mono font-semibold">7020637794</span></p>
                  <p>Infaq: <span className="font-mono font-semibold">7020629597</span></p>
                </div>
              </div>
            </div>

            {/* Media Partner */}
            <div>
              <h4 className="font-semibold mb-3 text-amber-300">Media Partner</h4>
              <a
                href="https://suarasilampari.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-emerald-200 hover:text-white transition-colors group"
              >
                <ExternalLink className="h-4 w-4 text-emerald-400 group-hover:text-amber-300 transition-colors" />
                <div>
                  <p className="font-medium">Suara Silampari</p>
                  <p className="text-xs text-emerald-300">suarasilampari.com</p>
                </div>
              </a>
            </div>
          </div>

          <Separator className="my-6 bg-emerald-700/50" />

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-emerald-300">
            <p>&copy; {new Date().getFullYear()} BAZNAS Kota Lubuk Linggau. Hak Cipta Dilindungi.Andi Wiyanda.</p>
            <p className="text-xs">
              Fatwa MUI No. 3/2003 &bull; SK BAZNAS RI &bull; Pendapat Ulama Kontemporer
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
