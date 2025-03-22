# Aplikasi Generator Faktur dan Kwitansi

Aplikasi web untuk membuat, mengelola, dan mengekspor faktur dan kwitansi profesional dengan berbagai template yang dapat disesuaikan. Dibangun dengan React, Vite, dan Tailwind CSS.

![Screenshot Aplikasi](/public/preview.png)

## Fitur Utama

- 🧾 **Pembuatan Faktur**: Buat faktur lengkap dengan informasi perusahaan, pelanggan, dan detail item
- 🧮 **Penghitungan Otomatis**: Perhitungan subtotal, pajak, dan total secara otomatis
- 🖨️ **Ekspor ke PDF**: Simpan faktur dan kwitansi dalam format PDF profesional
- 🎨 **Multiple Template**: 9 template faktur dan 4 template kwitansi yang dapat dipilih
- 💾 **Penyimpanan Lokal**: Data faktur tersimpan di localStorage untuk memudahkan penggunaan
- 📱 **Responsif**: Tampilan yang optimal di semua perangkat
- 🔄 **Fill Dummy Data**: Fitur untuk mengisi formulir dengan data sampel untuk pengujian

## Teknologi

- **React**: Library JavaScript untuk UI
- **Vite**: Build tool modern dan cepat
- **Tailwind CSS**: Framework CSS untuk desain responsif
- **React Router**: Navigasi antar halaman
- **React Query**: Manajemen state dan data fetching
- **jsPDF & html2canvas**: Pembuatan dokumen PDF
- **date-fns**: Utilitas format tanggal
- **Radix UI**: Komponen UI yang aksesibel

## Instalasi dan Penggunaan

### Prasyarat

- Node.js (versi 14 atau lebih tinggi)
- npm atau yarn

### Instalasi

1. Clone repositori:
   ```bash
   git clone https://github.com/bimadevs/invoice-receipt-generator.git
   cd invoice-receipt-generator
   ```

2. Instal dependensi:
   ```bash
   bun install
   ```

3. Jalankan aplikasi dalam mode pengembangan:
   ```bash
   bun run dev
   ```

4. Buka aplikasi di browser:
   ```
   http://localhost:5173
   ```

### Build Produksi

Untuk membuat versi produksi:

```bash
bun run build
```

File hasil build akan tersedia di direktori `dist/`.

## Cara Penggunaan

### Membuat Faktur

1. Pada halaman utama, isi informasi "Bill To" (Ditagihkan Kepada) dan "Ship To" (Dikirim Kepada)
2. Isi informasi faktur (nomor faktur, tanggal faktur, tanggal pembayaran)
3. Isi informasi perusahaan Anda
4. Tambahkan item dengan mengklik tombol "Add Item"
5. Sesuaikan persentase pajak jika diperlukan
6. Tambahkan catatan jika diperlukan
7. Pilih template yang diinginkan dari galeri template
8. Unduh faktur dalam format PDF

### Membuat Kwitansi

1. Klik tombol dengan ikon dokumen di pojok kanan atas untuk beralih ke generator kwitansi
2. Isi informasi perusahaan Anda
3. Isi informasi pelanggan dan kasir
4. Tambahkan item dengan mengklik tombol "Add Item"
5. Sesuaikan persentase pajak jika diperlukan
6. Tambahkan catatan dan footer jika diperlukan
7. Pilih tipe kwitansi dari empat template yang tersedia
8. Unduh kwitansi dalam format PDF

## Struktur Proyek

```
invoice-receipt-generator/
├── src/
│   ├── components/         # Komponen UI
│   │   ├── templates/      # Template faktur dan kwitansi
│   │   └── ui/             # Komponen UI dasar
│   ├── pages/              # Halaman aplikasi
│   │   ├── Index.jsx       # Halaman utama generator faktur
│   │   ├── TemplatePage.jsx # Halaman preview template faktur
│   │   └── ReceiptPage.jsx # Halaman generator kwitansi
│   ├── utils/              # Utilitas dan helper functions
│   ├── lib/                # Library dan konfigurasi
│   ├── App.jsx             # Komponen utama
│   └── main.jsx            # Entry point
├── public/                 # Aset statis
├── index.html              # File HTML utama
├── vite.config.js          # Konfigurasi Vite
├── tailwind.config.js      # Konfigurasi Tailwind CSS
└── package.json            # Dependensi dan script
```

## Kustomisasi

### Format Mata Uang

Aplikasi ini menggunakan format mata uang Rupiah (IDR). Anda dapat mengubah format mata uang di file `src/utils/formatCurrency.js`:

```javascript
export const formatCurrency = (amount, minimumFractionDigits = 2) => {
  return new Intl.NumberFormat('id-ID', { 
    style: 'currency', 
    currency: 'IDR', 
    minimumFractionDigits 
  }).format(amount);
};
```

Untuk mengubah ke mata uang lain, ganti 'id-ID' dengan kode lokal yang sesuai dan 'IDR' dengan kode mata uang yang diinginkan.

### Menambahkan Template Baru

Untuk menambahkan template faktur baru:

1. Buat file komponen template baru di `src/components/templates/`
2. Impor dan daftarkan template di `src/utils/templateRegistry.js`
3. Tambahkan preview template di direktori `public/assets/`


## Lisensi

Didistribusikan di bawah Lisensi MIT. Lihat `LICENSE` untuk informasi lebih lanjut.

## Kontak

Nama Anda - [@biimaa_jo](https://instagram.com/biimaa_jo) - bimadev06@gmail.com

Link Proyek: [https://github.com/bimadevs/invoice-receipt-generator](https://github.com/bimadevs/invoice-receipt-generator)
