import { NextRequest, NextResponse } from 'next/server';

// Nisab values based on BAZNAS standards
const NISAB = {
  EMAS_GRAM: 85, // 85 gram emas
  PERAK_GRAM: 595, // 595 gram perak
  EMAS_HARGA_PER_GRAM: 1750000, // approx Rp 1.750.000/gram (2024-2025)
  PERTANIAN_KG: 653, // 653 kg gabah (5 wasaq)
};

// Harga emas per gram terkini (akan digunakan sebagai referensi)
const HARGA_EMAS_PER_GRAM = NISAB.EMAS_HARGA_PER_GRAM;

interface ZakatCalculationRequest {
  type: string;
  [key: string]: string | number | boolean;
}

function formatRupiah(amount: number): string {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

function calculateNisabEmas(): number {
  return NISAB.EMAS_GRAM * HARGA_EMAS_PER_GRAM;
}

function calculateNisabBulanan(): number {
  return Math.round(calculateNisabEmas() / 12);
}

export async function POST(request: NextRequest) {
  try {
    const body: ZakatCalculationRequest = await request.json();
    const { type } = body;

    let zakat = 0;
    let nisab = 0;
    let isWajib = false;
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
          nisab = calculateNisabBulanan();
          const penghasilanTahunan = totalPenghasilan * 12;
          const nisabTahunan = calculateNisabEmas();
          isWajib = penghasilanTahunan >= nisabTahunan;
        } else {
          nisab = calculateNisabEmas();
          isWajib = totalPenghasilan >= nisab;
        }

        zakat = isWajib ? Math.round(penghasilanBersih * 0.025) : 0;

        details = {
          penghasilanUtama: formatRupiah(penghasilanUtama),
          penghasilanLain: formatRupiah(penghasilanLain),
          totalPenghasilan: formatRupiah(totalPenghasilan),
          hutang: formatRupiah(hutang),
          penghasilanBersih: formatRupiah(penghasilanBersih),
          nisab: formatRupiah(nisab),
          periode,
          tarif: '2.5%',
        };
        break;
      }

      case 'tabungan': {
        const saldoAkhir = Number(body.saldoAkhir) || 0;
        const bungaBank = Number(body.bungaBank) || 0;

        const hartaZakat = saldoAkhir - bungaBank;
        nisab = calculateNisabEmas();
        isWajib = hartaZakat >= nisab;
        zakat = isWajib ? Math.round(hartaZakat * 0.025) : 0;

        details = {
          saldoAkhir: formatRupiah(saldoAkhir),
          bungaBank: formatRupiah(bungaBank),
          hartaZakat: formatRupiah(hartaZakat),
          nisab: formatRupiah(nisab),
          tarif: '2.5%',
        };
        break;
      }

      case 'perdagangan': {
        const modal = Number(body.modal) || 0;
        const keuntungan = Number(body.keuntungan) || 0;
        const piutang = Number(body.piutang) || 0;
        const hutang = Number(body.hutang) || 0;

        const hartaZakat = modal + keuntungan + piutang - hutang;
        nisab = calculateNisabEmas();
        isWajib = hartaZakat >= nisab;
        zakat = isWajib ? Math.round(hartaZakat * 0.025) : 0;

        details = {
          modal: formatRupiah(modal),
          keuntungan: formatRupiah(keuntungan),
          piutang: formatRupiah(piutang),
          hutang: formatRupiah(hutang),
          hartaZakat: formatRupiah(hartaZakat),
          nisab: formatRupiah(nisab),
          tarif: '2.5%',
        };
        break;
      }

      case 'emas-perak': {
        const jenisLogam = String(body.jenisLogam) || 'emas';
        const berat = Number(body.berat) || 0;
        const hargaPerGram = Number(body.hargaPerGram) || HARGA_EMAS_PER_GRAM;

        const nilaiHarta = berat * hargaPerGram;

        if (jenisLogam === 'emas') {
          nisab = NISAB.EMAS_GRAM * hargaPerGram;
          isWajib = berat >= NISAB.EMAS_GRAM;
        } else if (jenisLogam === 'perak') {
          nisab = NISAB.PERAK_GRAM * hargaPerGram;
          isWajib = berat >= NISAB.PERAK_GRAM;
        } else {
          // Logam mulia lainnya mengikuti nisab emas
          nisab = NISAB.EMAS_GRAM * hargaPerGram;
          isWajib = nilaiHarta >= nisab;
        }

        zakat = isWajib ? Math.round(nilaiHarta * 0.025) : 0;

        details = {
          jenisLogam,
          berat: `${berat} gram`,
          hargaPerGram: formatRupiah(hargaPerGram),
          nilaiHarta: formatRupiah(nilaiHarta),
          nisab: jenisLogam === 'emas'
            ? `${NISAB.EMAS_GRAM} gram (${formatRupiah(nisab)})`
            : `${NISAB.PERAK_GRAM} gram (${formatRupiah(nisab)})`,
          tarif: '2.5%',
        };
        break;
      }

      case 'pertanian': {
        const jenisKomoditas = String(body.jenisKomoditas) || 'padi';
        const jumlahPanen = Number(body.jumlahPanen) || 0;
        const jenisIrigasi = String(body.jenisIrigasi) || 'irigasi';
        const hargaPerKg = Number(body.hargaPerKg) || 0;

        const nilaiPanen = jumlahPanen * hargaPerKg;
        nisab = NISAB.PERTANIAN_KG * hargaPerKg;
        isWajib = jumlahPanen >= NISAB.PERTANIAN_KG;

        const tarif = jenisIrigasi === 'irigasi' ? 0.05 : 0.10;
        zakat = isWajib ? Math.round(nilaiPanen * tarif) : 0;

        // Zakat dalam kg
        const zakatKg = isWajib ? Math.round(jumlahPanen * tarif) : 0;

        details = {
          jenisKomoditas,
          jumlahPanen: `${jumlahPanen} kg`,
          hargaPerKg: formatRupiah(hargaPerKg),
          nilaiPanen: formatRupiah(nilaiPanen),
          jenisIrigasi: jenisIrigasi === 'irigasi' ? 'Irigasi / Tadah Hujan' : 'Non-Irigasi / Pengairan Berbayar',
          nisab: `${NISAB.PERTANIAN_KG} kg (${formatRupiah(nisab)})`,
          tarif: jenisIrigasi === 'irigasi' ? '5%' : '10%',
          zakatKg: `${zakatKg} kg`,
        };
        break;
      }

      case 'perusahaan': {
        const aktivaLancar = Number(body.aktivaLancar) || 0;
        const kewajibanPendek = Number(body.kewajibanPendek) || 0;

        const hartaZakat = aktivaLancar - kewajibanPendek;
        nisab = calculateNisabEmas();
        isWajib = hartaZakat >= nisab;
        zakat = isWajib ? Math.round(hartaZakat * 0.025) : 0;

        details = {
          aktivaLancar: formatRupiah(aktivaLancar),
          kewajibanPendek: formatRupiah(kewajibanPendek),
          hartaZakat: formatRupiah(hartaZakat),
          nisab: formatRupiah(nisab),
          tarif: '2.5%',
        };
        break;
      }

      case 'saham': {
        const bookValue = Number(body.bookValue) || 0;
        const dividen = Number(body.dividen) || 0;

        const hartaZakat = bookValue + dividen;
        nisab = calculateNisabEmas();
        isWajib = hartaZakat >= nisab;
        zakat = isWajib ? Math.round(hartaZakat * 0.025) : 0;

        details = {
          bookValue: formatRupiah(bookValue),
          dividen: formatRupiah(dividen),
          hartaZakat: formatRupiah(hartaZakat),
          nisab: formatRupiah(nisab),
          tarif: '2.5%',
        };
        break;
      }

      case 'barang-tambang': {
        const jenisTambang = String(body.jenisTambang) || 'emas';
        const berat = Number(body.berat) || 0;
        const hargaPerGram = Number(body.hargaPerGram) || HARGA_EMAS_PER_GRAM;

        const nilaiHarta = berat * hargaPerGram;

        if (jenisTambang === 'emas') {
          nisab = NISAB.EMAS_GRAM * hargaPerGram;
          isWajib = berat >= NISAB.EMAS_GRAM;
        } else if (jenisTambang === 'perak') {
          nisab = NISAB.PERAK_GRAM * hargaPerGram;
          isWajib = berat >= NISAB.PERAK_GRAM;
        } else {
          // Mineral/logam lain mengikuti nisab emas
          nisab = NISAB.EMAS_GRAM * hargaPerGram;
          isWajib = nilaiHarta >= nisab;
        }

        zakat = isWajib ? Math.round(nilaiHarta * 0.025) : 0;

        details = {
          jenisTambang,
          berat: `${berat} gram`,
          hargaPerGram: formatRupiah(hargaPerGram),
          nilaiHarta: formatRupiah(nilaiHarta),
          nisab: jenisTambang === 'emas'
            ? `${NISAB.EMAS_GRAM} gram (${formatRupiah(nisab)})`
            : jenisTambang === 'perak'
            ? `${NISAB.PERAK_GRAM} gram (${formatRupiah(nisab)})`
            : `Setara ${NISAB.EMAS_GRAM} gram emas (${formatRupiah(nisab)})`,
          tarif: '2.5%',
          waktu: 'Setelah barang tambang dikeluarkan',
        };
        break;
      }

      case 'hasil-laut': {
        const jenisHasilLaut = String(body.jenisHasilLaut) || 'ikan';
        const jumlahHasil = Number(body.jumlahHasil) || 0;
        const hargaPerKg = Number(body.hargaPerKg) || 0;

        const nilaiHasil = jumlahHasil * hargaPerKg;
        nisab = calculateNisabEmas();
        isWajib = nilaiHasil >= nisab;
        zakat = isWajib ? Math.round(nilaiHasil * 0.025) : 0;

        details = {
          jenisHasilLaut,
          jumlahHasil: `${jumlahHasil} kg`,
          hargaPerKg: formatRupiah(hargaPerKg),
          nilaiHasil: formatRupiah(nilaiHasil),
          nisab: formatRupiah(nisab),
          tarif: '2.5%',
          waktu: 'Setelah hasil laut diperoleh',
        };
        break;
      }

      case 'investasi-penyewaan': {
        const pendapatanSewa = Number(body.pendapatanSewa) || 0;
        const biayaOperasional = Number(body.biayaOperasional) || 0;

        const penghasilanBersih = pendapatanSewa - biayaOperasional;
        nisab = calculateNisabEmas();
        isWajib = penghasilanBersih >= nisab;
        zakat = isWajib ? Math.round(penghasilanBersih * 0.025) : 0;

        details = {
          pendapatanSewa: formatRupiah(pendapatanSewa),
          biayaOperasional: formatRupiah(biayaOperasional),
          penghasilanBersih: formatRupiah(penghasilanBersih),
          nisab: formatRupiah(nisab),
          tarif: '2.5%',
        };
        break;
      }

      case 'profesi': {
        const penghasilanProfesi = Number(body.penghasilanProfesi) || 0;
        const biayaOperasional = Number(body.biayaOperasional) || 0;
        const periode = String(body.periode) || 'bulanan';

        const penghasilanBersih = penghasilanProfesi - biayaOperasional;

        if (periode === 'bulanan') {
          nisab = calculateNisabBulanan();
          const penghasilanTahunan = penghasilanBersih * 12;
          isWajib = penghasilanTahunan >= calculateNisabEmas();
        } else {
          nisab = calculateNisabEmas();
          isWajib = penghasilanBersih >= nisab;
        }

        zakat = isWajib ? Math.round(penghasilanBersih * 0.025) : 0;

        details = {
          penghasilanProfesi: formatRupiah(penghasilanProfesi),
          biayaOperasional: formatRupiah(biayaOperasional),
          penghasilanBersih: formatRupiah(penghasilanBersih),
          nisab: formatRupiah(nisab),
          periode,
          tarif: '2.5%',
        };
        break;
      }

      default:
        return NextResponse.json(
          { error: 'Tipe zakat tidak valid', validTypes: [
            'penghasilan', 'tabungan', 'perdagangan', 'emas-perak',
            'pertanian', 'perusahaan', 'saham', 'barang-tambang',
            'hasil-laut', 'investasi-penyewaan', 'profesi'
          ]},
          { status: 400 }
        );
    }

    return NextResponse.json({
      success: true,
      type,
      zakat: formatRupiah(zakat),
      zakatRaw: zakat,
      isWajib,
      nisab: typeof nisab === 'number' ? formatRupiah(nisab) : nisab,
      details,
      message: isWajib
        ? `Zakat yang harus Anda bayarkan adalah ${formatRupiah(zakat)}`
        : 'Anda belum mencapai nisab. Namun Anda masih dapat mengeluarkan sebagian sebagai sedekah atau infak.',
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Terjadi kesalahan dalam perhitungan zakat', detail: String(error) },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    info: 'Kalkulator Zakat BAZNAS Kota Lubuk Linggau',
    nisab: {
      emas: `${NISAB.EMAS_GRAM} gram`,
      perak: `${NISAB.PERAK_GRAM} gram`,
      pertanian: `${NISAB.PERTANIAN_KG} kg gabah`,
      hargaEmasPerGram: formatRupiah(HARGA_EMAS_PER_GRAM),
      nisabEmasRupiah: formatRupiah(calculateNisabEmas()),
      nisabBulanan: formatRupiah(calculateNisabBulanan()),
    },
    types: [
      { id: 'penghasilan', name: 'Zakat Penghasilan', tarif: '2.5%' },
      { id: 'tabungan', name: 'Zakat Tabungan', tarif: '2.5%' },
      { id: 'perdagangan', name: 'Zakat Perdagangan', tarif: '2.5%' },
      { id: 'emas-perak', name: 'Zakat Emas, Perak & Logam Mulia', tarif: '2.5%' },
      { id: 'pertanian', name: 'Zakat Pertanian', tarif: '5% / 10%' },
      { id: 'perusahaan', name: 'Zakat Perusahaan', tarif: '2.5%' },
      { id: 'saham', name: 'Zakat Saham', tarif: '2.5%' },
      { id: 'barang-tambang', name: "Zakat Barang Tambang (Ma'din)", tarif: '2.5%' },
      { id: 'hasil-laut', name: 'Zakat Hasil Laut/Perikanan', tarif: '2.5%' },
      { id: 'investasi-penyewaan', name: 'Zakat Investasi Penyewaan Aset', tarif: '2.5%' },
      { id: 'profesi', name: 'Zakat Profesi', tarif: '2.5%' },
    ],
  });
}
