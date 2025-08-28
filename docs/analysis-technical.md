# Analisis Proyek: Kanal Informasi & Pelaporan Damkar Depok

Proyek ini bertujuan membangun sebuah platform digital dengan dua fungsi utama:  
1. Kanal informasi publik yang dinamis.  
2. Sistem pelaporan insiden real-time untuk Dinas Pemadam Kebakaran dan Penyelamatan Kota Depok.  

---

## Analisis Arsitektur dan Teknologi

### Framework (Next.js 14 App Router)
Pilihan yang tepat.  
- **React Server Components (RSC)** meminimalkan JavaScript di sisi klien → website lebih cepat, terutama untuk halaman informasi.  
- **Route Handlers (API Routes)** ideal untuk menangani logika backend seperti form pelaporan.  

### Headless CMS (Sanity.io)
Sangat cocok untuk konten yang dikelola staf non-teknis (profil, berita, kategori).  
- Fleksibilitas skema konten memudahkan pengelolaan.  

### Backend as a Service (Supabase)
- **Database (Postgres)**: kuat, andal, dengan **Full-Text Search (FTS)** bawaan untuk pencarian.  
- **Realtime**: kunci fitur notifikasi live. Bisa "mendengarkan" perubahan di tabel laporan dan menyiarkannya ke klien.  

### Strategi Rendering & Caching
- **SSG/ISR untuk konten statis/jarang berubah** (Profil, Informasi).  
  - Performa luar biasa cepat, SEO baik.  
  - On-demand revalidation via webhook dari Sanity.  
- **Client-Side Rendering untuk fitur interaktif** (Map, Notifikasi).  
  - `dynamic import` dengan `ssr: false` untuk `react-leaflet`.  

### Deployment & Keamanan
- **Deployment**: Vercel (native untuk Next.js) dengan Edge Network + Image Optimization.  
- **Keamanan**: Validasi (Zod), rate limiting, dan hCaptcha → aspek produksi sudah diperhatikan.  

---

## Analisis Alur Fitur

### Alur Informasi Publik
1. Admin/Staf Damkar membuat atau memperbarui konten di Sanity Studio.  
2. Sanity mengirim webhook ke Vercel/Next.js.  
3. Next.js melakukan revalidasi on-demand → mengambil data terbaru dari Sanity → menghasilkan ulang halaman statis.  
4. Pengguna mendapat konten terbaru dengan performa halaman statis.  
5. Supabase Realtime dapat menyiarkan event *"Info Baru Terbit"* ke klien aktif.  

**Analisis**: Efisien, cepat untuk pengguna, mudah untuk admin.  

### Alur Pelaporan Insiden
1. Pengguna mengisi form di website.  
2. Data form divalidasi di sisi klien & server (Zod).  
3. Form dikirim ke Route Handler (Next.js).  
4. Handler menyimpan data ke database Supabase (Postgres).  
5. Setelah berhasil, handler memicu notifikasi email via Resend.  
6. Database trigger atau fungsi Next.js menyiarkan event *"Laporan Baru Masuk"* via Supabase Realtime.  
7. Klien (dashboard petugas) langsung menerima notifikasi realtime tanpa refresh.  

**Analisis**: Solid, real-time, dengan redundansi notifikasi (website + email) yang krusial untuk kasus darurat.  

---

## Kesimpulan Analisis
- **Performa Tinggi**: Berkat SSR/SSG/ISR di Next.js.  
- **Skalabilitas**: Serverless arsitektur (Vercel + Supabase) siap lonjakan trafik.  
- **DX (Developer Experience)**: TypeScript, App Router, Tailwind → standar industri.  
- **UX Admin**: Sanity.io ramah non-teknis.  
- **Realtime & Interaktif**: Supabase Realtime mendukung pelaporan darurat yang responsif.  

---

## Tech Stack

- **Framework**: Next.js 14 (App Router, RSC, Route Handlers, Edge Runtime)  
- **Bahasa**: TypeScript  
- **Styling**: Tailwind CSS + CSS variables (design tokens), minimalkan JS di klien  
- **Konten**: Sanity (Profil, Informasi, Kategori, Lokasi Damkar)  
- **Database**: Supabase (Postgres + FTS untuk pencarian)  
- **Realtime**: Supabase Realtime  
- **Email**: Resend (SPF/DKIM mudah)  
- **Upload**: Cloudflare R2 / S3 kompatibel + presigned upload  
- **Map**: Leaflet + react-leaflet (dynamic import, SSR off), MapTiler  
- **Deploy**: Vercel (ISR + Edge + CDN), image via `next/image`  
- **Monitoring**: Sentry, Vercel Analytics, Web Vitals  
- **Keamanan**: Zod validation, rate limiting (Upstash/Redis), hCaptcha/Turnstile, HTTPS-only cookies  

---

## Arsitektur & Strategi Rendering

- **Halaman statis cepat**:  
  - Hero, Profil → SSG + ISR, trigger revalidate via webhook Sanity.  
- **Informasi (berkategori)**:  
  - ISR + revalidate on-demand, list pakai RSC + pagination di server.  
- **Pelaporan**:  
  - Submit → Route Handler → Postgres → Email (Resend) → broadcast realtime event.  
- **Map**:  
  - Marker lokasi pos/damkar (`lat`, `lng`, `name`, `address`) dari Sanity, dengan ikon khusus.  
- **Live Notification**:  
  - Client subscribe ke Supabase Realtime untuk event *"New Info Published"* & *"Laporan Masuk"*.  

### Caching
- `next/image` + CDN.  
- `fetch` dengan `cache: 'force-cache' | revalidate` + tags untuk granular revalidate.  
- `stale-while-revalidate` untuk API publik.  
