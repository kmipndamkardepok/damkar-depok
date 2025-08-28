# Analisis Skema Supabase (PostgreSQL)

Skema tabel `reports` ini dirancang dengan sangat baik, mempertimbangkan integritas data, performa query, dan keamanan.

## 1. Struktur & Tipe Data
- **Enums (`report_status`, `report_type`)**  
  Penggunaan `ENUM` adalah praktik terbaik. Ini memastikan konsistensi data (menghindari kesalahan ketik seperti `'baru'` vs `'new'`) dan lebih efisien dalam penyimpanan dibandingkan tipe `TEXT`.

- **Tabel `reports`**
  - **Kolom**: Pemilihan tipe data sudah tepat. `uuid` sebagai primary key adalah standar modern yang baik. Kolom `name`, `phone`, `email` bersifat opsional, yang masuk akal untuk pelaporan darurat. `photos` sebagai `text[]` adalah cara efisien untuk menyimpan daftar URL gambar (misalnya di Cloudflare R2).  
  - **Constraints**: Validasi `lat_range` dan `lng_range` di level database adalah lapisan pertahanan yang kuat untuk menjaga integritas data geografis.  
  - **Timestamps**: Penggunaan `timestamptz` sangat krusial untuk aplikasi global. Default `now()` juga sudah tepat.  

## 2. Performa & Otomatisasi
- **Trigger `set_updated_at`**  
  Otomatisasi yang sangat berguna. Aplikasi tidak perlu lagi mengelola pembaruan `updated_at`, mengurangi potensi bug dan menyederhanakan kode.

- **Full-Text Search (FTS)**  
  Implementasi FTS dengan **generated column** sangat powerful.  
  Dengan `generated always as (...) stored`, kolom `fts` dihitung sekali saat data masuk/ubah dan disimpan fisik → pencarian lebih cepat karena tidak perlu `to_tsvector` tiap query.  
  Tokenizer `'simple'` dipilih karena aman dan cepat tanpa konfigurasi bahasa spesifik.  

- **Indexing**  
  Strategi indexing sangat solid dan fokus performa:
  - `reports_created_at_idx`: untuk mengurutkan laporan terbaru.  
  - `reports_status_idx`, `reports_type_idx`: mempercepat filtering berdasarkan status/tipe laporan.  
  - `reports_fts_idx` (GIN): indeks paling penting untuk pencarian. Tanpa ini, FTS akan lambat.  

## 3. Keamanan (Row Level Security)
- `alter table public.reports enable row level security`  
  Mengaktifkan RLS secara default adalah pendekatan **security-first** yang sangat baik.  

- **Policy `allow_anon_insert_reports`**  
  Kebijakan dirancang tepat.  
  - `anon` hanya bisa `INSERT` data (misalnya lewat form publik dengan Supabase anon key).  
  - Tidak ada `SELECT`, `UPDATE`, atau `DELETE` bagi `anon` → data yang sudah masuk **tidak bisa dibaca/dimodifikasi** oleh publik.  
  - Sangat aman untuk skenario pelaporan publik.  

---

# Analisis Skema Sanity.io

Struktur skema konten di Sanity logis, modular, dan dirancang untuk pengalaman terbaik bagi pengelola konten.

## 1. Model Konten (Documents)
- **Pemisahan Dokumen**  
  Tipe konten dipisah dengan jelas: `article`, `category`, `profilePage`, dan `station`.  
  → Memudahkan pengelolaan konten.

- **`article` & `category`**  
  Pola relasi blog standar. `reference` menghubungkan artikel ke kategori.  
  Skema `article` lengkap: `slug`, kutipan, rich text `body`, dan `image`.

- **`profilePage` (Singleton Pattern)**  
  Cara cerdas untuk halaman tunggal seperti Profil. Admin cukup buka 1 dokumen tanpa bingung di antara banyak data lain.

- **`station`**  
  Sederhana & tepat guna. Field `geopoint` asli dari Sanity langsung mendukung integrasi peta (misalnya Leaflet).  

## 2. Pengalaman Pengguna (CMS)
- **Validasi**  
  Konsisten menggunakan `r.required()`, memastikan data penting tidak lupa diisi.

- **Preview & Orderings**  
  Memudahkan melihat & mengurutkan konten di Sanity Studio.

- **Struktur Studio (`sanity.config.ts`)**  
  - Mengganti label default jadi lebih familiar (misalnya `"Artikel"`, `"Kategori Artikel"`).  
  - Urutan logis mempermudah staf non-teknis.  

- **Integrasi (`basePath: '/dashboard'`)**  
  Studio disematkan langsung ke aplikasi Next.js → pengalaman terintegrasi penuh.  

---

# Kesimpulan Akhir Analisis
- **Lapisan Data (Supabase)**: Kuat, aman, dan dioptimalkan untuk performa. Cocok untuk fitur pelaporan & pencarian.  
- **Lapisan Konten (Sanity)**: Terstruktur, fleksibel, dan ramah pengguna non-teknis.  

Proyek ini memiliki fondasi teknis yang sangat solid dari sisi **database** maupun **CMS**.
