import { NextRequest, NextResponse } from 'next/server';

const NISAB = {
  EMAS_GRAM: 85,
  PERAK_GRAM: 595,
  EMAS_HARGA_PER_GRAM: 1750000,
  PERTANIAN_KG: 653,
};

async function fetchHargaEmasRealtime(): Promise<number> {
  try {
    const goldRes = await fetch('https://api.gold-api.com/price/XAU', { cache: 'no-store' });
    if (!goldRes.ok) throw new Error('Gold API error');
    const goldData = await goldRes.json();
    const hargaPerTroyOzUSD: number = goldData.price;
    const fxRes = await fetch('https://api.frankfurter.app/latest?from=USD&to=IDR', { cache: 'no-store' });
    if (!fxRes.ok) throw new Error('FX API error');
    const fxData = await fxRes.json();
    const kursIDR: number = fxData.rates.IDR;
    return Math.round((hargaPerTroyOzUSD * kursIDR) / 31.1035);
  } catch {
    return NISAB.EMAS_HARGA_PER_GRAM;
  }
}

interface ZakatCalculationRequest {
  type: string;
  [key: string]: string | number | boolean;
}

function formatRupiah(amount: number): string {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(amount);
}

function calculateNisabEmas(hargaPerGram: number): number {
  return NISAB.EMAS_GRAM * hargaPerGram;
}

function calculateNisabBulanan(hargaPerGram: number): number {
  return Math.round(calculateNisabEmas(hargaPerGram) / 12);
}

export async function POST(request: NextRequest) {
  try {
    const body: ZakatCalculationRequest = await request.json();
    const { type } = body;
    const hargaEmasPerGram = await fetchHargaEmasRealtime();
    let zakat = 0, nisab = 0, isWajib = false;
    let details: Record<string, string | number | boolean> = {};

    switch (type) {
      case 'penghasilan': {
        const penghasilanUtama = Number(body.penghasilanUtama) || 0;
        const penghasilanLain = Number(body.penghasilanLain) || 0;
        const hutang = Number(body.hutang) || 0;
        const periode = String(body.periode) || 'bulanan';
        const totalPenghasilan = penghasilanUtama + penghasilanLain;
        const penghasilanBersih = totalPenghasilan - hutang;
        if (periode === 'bulanan') {
          nisab = calculateNisabBulanan(hargaEmasPerGram);
          isWajib = (totalPenghasilan * 12) >= calculateNisabEmas(hargaEmasPerGram);
        } else {
          nisab = calculateNisabEmas(hargaEmasPerGram);
          isWajib = totalPenghasilan >= nisab;
        }
        zakat = isWajib ? Math.round(penghasilanBersih * 0.025) : 0;
        details = { penghasilanUtama: formatRupiah(penghasilanUtama), penghasilanLain: formatRupiah(penghasilanLain), totalPenghasilan: formatRupiah(totalPenghasilan), hutang: formatRupiah(hutang), penghasilanBersih: formatRupiah(penghasilanBersih), nisab: formatRupiah(nisab), periode, tarif: '2.5%' };
        break;
      }
      case 'tabungan': {
        const saldoAkhir = Number(body.saldoAkhir) || 0;
        const bungaBank = Number(body.bungaBank) || 0;
        const hartaZakat = saldoAkhir - bungaBank;
        nisab = calculateNisabEmas(hargaEmasPerGram);
        isWajib = hartaZakat >= nisab;
        zakat = isWajib ? Math.round(hartaZakat * 0.025) : 0;
        details = { saldoAkhir: formatRupiah(saldoAkhir), bungaBank: formatRupiah(bungaBank), hartaZakat: formatRupiah(hartaZakat), nisab: formatRupiah(nisab), tarif: '2.5%' };
        break;
      }
      case 'perdagangan': {
        const modal = Number(body.modal) || 0;
        const keuntungan = Number(body.keuntungan) || 0;
        const piutang = Number(body.piutang) || 0;
        const hutang = Number(body.hutang) || 0;
        const hartaZakat = modal + keuntungan + piutang - hutang;
        nisab = calculateNisabEmas(hargaEmasPerGram);
        isWajib = hartaZakat >= nisab;
        zakat = isWajib ? Math.round(hartaZakat * 0.025) : 0;
        details = { modal: formatRupiah(modal), keuntungan: formatRupiah(keuntungan), piutang: formatRupiah(piutang), hutang: formatRupiah(hutang), hartaZakat: formatRupiah(hartaZakat), nisab: formatRupiah(nisab), tarif: '2.5%' };
        break;
      }
      case 'emas-perak': {
        const jenisLogam = String(body.jenisLogam) || 'emas';
        const beratGram = Number(body.beratGram) || 0;
        const hargaPerGramInput = Number(body.hargaPerGram) || hargaEmasPerGram;
        const nilaiLogam = beratGram * hargaPerGramInput;
        if (jenisLogam === 'emas') {
          nisab = NISAB.EMAS_GRAM * hargaPerGramInput;
          isWajib = beratGram >= NISAB.EMAS_GRAM;
        } else {
          nisab = NISAB.PERAK_GRAM * (Number(body.hargaPerGram) || 15000);
          isWajib = beratGram >= NISAB.PERAK_GRAM;
        }
        zakat = isWajib ? Math.round(nilaiLogam * 0.025) : 0;
        details = { jenisLogam, beratGram, hargaPerGram: formatRupiah(hargaPerGramInput), nilaiLogam: formatRupiah(nilaiLogam), nisab: formatRupiah(nisab), tarif: '2.5%' };
        break;
      }
      case 'pertanian': {
        const hasilPanen = Number(body.hasilPanen) || 0;
        const jenisIrigasi = String(body.jenisIrigasi) || 'hujan';
        const hargaPerKg = Number(body.hargaPerKg) || 5000;
        const nilaiPanen = hasilPanen * hargaPerKg;
        nisab = NISAB.PERTANIAN_KG * hargaPerKg;
        isWajib = hasilPanen >= NISAB.PERTANIAN_KG;
        const tarif = jenisIrigasi === 'hujan' ? 0.10 : 0.05;
        zakat = isWajib ? Math.round(nilaiPanen * tarif) : 0;
        details = { hasilPanen: hasilPanen + ' kg', jenisIrigasi, hargaPerKg: formatRupiah(hargaPerKg), nilaiPanen: formatRupiah(nilaiPanen), nisabKg: NISAB.PERTANIAN_KG + ' kg', nisab: formatRupiah(nisab), tarif: jenisIrigasi === 'hujan' ? '10%' : '5%' };
        break;
      }
      case 'perusahaan': {
        const asetLancar = Number(body.asetLancar) || 0;
        const hutangJangkaPendek = Number(body.hutangJangkaPendek) || 0;
        const hartaZakat = asetLancar - hutangJangkaPendek;
        nisab = calculateNisabEmas(hargaEmasPerGram);
        isWajib = hartaZakat >= nisab;
        zakat = isWajib ? Math.round(hartaZakat * 0.025) : 0;
        details = { asetLancar: formatRupiah(asetLancar), hutangJangkaPendek: formatRupiah(hutangJangkaPendek), hartaZakat: formatRupiah(hartaZakat), nisab: formatRupiah(nisab), tarif: '2.5%' };
        break;
      }
      case 'saham': {
        const jumlahLembar = Number(body.jumlahLembar) || 0;
        const hargaSaham = Number(body.hargaSaham) || 0;
        const dividen = Number(body.dividen) || 0;
        const totalHarta = (jumlahLembar * hargaSaham) + dividen;
        nisab = calculateNisabEmas(hargaEmasPerGram);
        isWajib = totalHarta >= nisab;
        zakat = isWajib ? Math.round(totalHarta * 0.025) : 0;
        details = { jumlahLembar, hargaSaham: formatRupiah(hargaSaham), nilaiSaham: formatRupiah(jumlahLembar * hargaSaham), dividen: formatRupiah(dividen), totalHarta: formatRupiah(totalHarta), nisab: formatRupiah(nisab), tarif: '2.5%' };
        break;
      }
      case 'barang-tambang': {
        const nilaiTambang = Number(body.nilaiTambang) || 0;
        nisab = calculateNisabEmas(hargaEmasPerGram);
        isWajib = nilaiTambang >= nisab;
        zakat = isWajib ? Math.round(nilaiTambang * 0.025) : 0;
        details = { nilaiTambang: formatRupiah(nilaiTambang), nisab: formatRupiah(nisab), tarif: '2.5%' };
        break;
      }
      case 'hasil-laut': {
        const nilaiHasilLaut = Number(body.nilaiHasilLaut) || 0;
        nisab = calculateNisabEmas(hargaEmasPerGram);
        isWajib = nilaiHasilLaut >= nisab;
        zakat = isWajib ? Math.round(nilaiHasilLaut * 0.025) : 0;
        details = { nilaiHasilLaut: formatRupiah(nilaiHasilLaut), nisab: formatRupiah(nisab), tarif: '2.5%' };
        break;
      }
      case 'investasi-penyewaan': {
        const pendapatanSewa = Number(body.pendapatanSewa) || 0;
        const biayaPerawatan = Number(body.biayaPerawatan) || 0;
        const hartaBersih = pendapatanSewa - biayaPerawatan;
        nisab = calculateNisabEmas(hargaEmasPerGram);
        isWajib = hartaBersih >= nisab;
        zakat = isWajib ? Math.round(hartaBersih * 0.025) : 0;
        details = { pendapatanSewa: formatRupiah(pendapatanSewa), biayaPerawatan: formatRupiah(biayaPerawatan), hartaBersih: formatRupiah(hartaBersih), nisab: formatRupiah(nisab), tarif: '2.5%' };
        break;
      }
      case 'profesi': {
        const penghasilanProfesi = Number(body.penghasilanProfesi) || 0;
        const biayaOperasional = Number(body.biayaOperasional) || 0;
        const periode = String(body.periode) || 'bulanan';
        const penghasilanBersih = penghasilanProfesi - biayaOperasional;
        if (periode === 'bulanan') {
          nisab = calculateNisabBulanan(hargaEmasPerGram);
          isWajib = (penghasilanProfesi * 12) >= calculateNisabEmas(hargaEmasPerGram);
        } else {
          nisab = calculateNisabEmas(hargaEmasPerGram);
          isWajib = penghasilanProfesi >= nisab;
        }
        zakat = isWajib ? Math.round(penghasilanBersih * 0.025) : 0;
        details = { penghasilanProfesi: formatRupiah(penghasilanProfesi), biayaOperasional: formatRupiah(biayaOperasional), penghasilanBersih: formatRupiah(penghasilanBersih), nisab: formatRupiah(nisab), periode, tarif: '2.5%' };
        break;
      }
      default:
        return NextResponse.json({ error: 'Jenis zakat tidak valid' }, { status: 400 });
    }

    return NextResponse.json({
      success: true, zakat, zakatFormatted: formatRupiah(zakat), nisab, nisabFormatted: formatRupiah(nisab), isWajib, details,
      message: isWajib ? 'Zakat yang harus Anda bayarkan adalah ' + formatRupiah(zakat) : 'Anda belum mencapai nisab. Namun Anda masih dapat mengeluarkan sebagian sebagai sedekah atau infak.',
    });
  } catch (error) {
    return NextResponse.json({ error: 'Terjadi kesalahan dalam perhitungan zakat', detail: String(error) }, { status: 500 });
  }
}

export async function GET() {
  const hargaEmasPerGram = await fetchHargaEmasRealtime();
  const nisabEmasRupiah = calculateNisabEmas(hargaEmasPerGram);
  const nisabBulananRupiah = calculateNisabBulanan(hargaEmasPerGram);
  return NextResponse.json({
    info: 'Kalkulator Zakat BAZNAS Kota Lubuk Linggau',
    nisab: { emas: NISAB.EMAS_GRAM + ' gram', perak: NISAB.PERAK_GRAM + ' gram', pertanian: NISAB.PERTANIAN_KG + ' kg gabah', hargaEmasPerGram: formatRupiah(hargaEmasPerGram), nisabEmasRupiah: formatRupiah(nisabEmasRupiah), nisabBulanan: formatRupiah(nisabBulananRupiah) },
    nisabEmasRupiah, nisabBulananRupiah, hargaEmasPerGramNumber: hargaEmasPerGram, emasGram: NISAB.EMAS_GRAM, tarif: '2.5%', timestamp: new Date().toISOString(),
    types: [
      { id: 'penghasilan', name: 'Zakat Penghasilan', tarif: '2.5%' },
      { id: 'tabungan', name: 'Zakat Tabungan', tarif: '2.5%' },
      { id: 'perdagangan', name: 'Zakat Perdagangan', tarif: '2.5%' },
      { id: 'emas-perak', name: 'Zakat Emas, Perak & Logam Mulia', tarif: '2.5%' },
      { id: 'pertanian', name: 'Zakat Pertanian', tarif: '5% / 10%' },
      { id: 'perusahaan', name: 'Zakat Perusahaan', tarif: '2.5%' },
      { id: 'saham', name: 'Zakat Saham', tarif: '2.5%' },
      { id: 'barang-tambang', name: 'Zakat Barang Tambang (Madin)', tarif: '2.5%' },
      { id: 'hasil-laut', name: 'Zakat Hasil Laut/Perikanan', tarif: '2.5%' },
      { id: 'investasi-penyewaan', name: 'Zakat Investasi Penyewaan Aset', tarif: '2.5%' },
      { id: 'profesi', name: 'Zakat Profesi', tarif: '2.5%' },
    ],
  });
}