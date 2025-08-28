// FILE: src/features/profile/services/getProfileData.ts
// This is a MOCK service to simulate fetching data from Sanity.
// It allows us to build UI components without a live backend connection.

// Simulates the structure of the 'profilePage' document in Sanity
const mockProfileData = {
  heroTitle: 'Dinas Pemadam Kebakaran & Penyelamatan',
  heroSubtitle: 'Kota Depok - Cepat, Tanggap, Profesional',
  visi: [
    { _key: 'v1', style: 'normal', children: [{ _key: 'v1c1', text: 'Terwujudnya penyelenggaraan pemadaman kebakaran dan penyelamatan yang profesional dan handal dalam melindungi masyarakat dan asetnya dari bahaya kebakaran dan kondisi darurat lainnya.' }] }
  ],
  misi: [
    'Meningkatkan kesiapsiagaan dan kecepatan respon terhadap setiap laporan kebakaran dan permintaan penyelamatan.',
    'Menyelenggarakan operasi pemadaman dan penyelamatan secara efektif, efisien, dan aman.',
    'Meningkatkan partisipasi masyarakat dalam upaya pencegahan dan penanggulangan kebakaran melalui edukasi dan sosialisasi.',
    'Mengembangkan sumber daya manusia yang kompeten dan profesional serta didukung oleh sarana dan prasarana yang modern.',
  ],
  tupoksi: [
    { _key: 't1', style: 'normal', children: [{ _key: 't1c1', text: 'Pencegahan, pengendalian, pemadaman, dan penyelamatan dari bencana kebakaran.' }] },
    { _key: 't2', style: 'normal', children: [{ _key: 't2c1', text: 'Penyelamatan dan evakuasi korban non-kebakaran, seperti kecelakaan, bencana alam, dan kondisi darurat lainnya.' }] },
    { _key: 't3', style: 'normal', children: [{ _key: 't3c1', text: 'Pemberdayaan masyarakat dalam pencegahan kebakaran.' }] },
    { _key: 't4', style: 'normal', children: [{ _key: 't4c1', text: 'Pengawasan terhadap sistem proteksi kebakaran di gedung dan lingkungan.' }] },
  ],
  sejarah: [
    { _key: 's1', style: 'normal', children: [{ _key: 's1c1', text: 'Dinas Pemadam Kebakaran dan Penyelamatan Kota Depok didirikan pada tahun 1999 seiring dengan terbentuknya Kota Depok sebagai kota otonom. Berawal dari beberapa unit mobil pemadam peninggalan pemerintah Kabupaten Bogor, dinas ini terus berkembang untuk memenuhi kebutuhan perlindungan masyarakat yang semakin meningkat.' }] },
    { _key: 's2', style: 'normal', children: [{ _key: 's2c1', text: 'Seiring waktu, kami tidak hanya menangani kebakaran, tetapi juga berbagai misi penyelamatan, membuktikan peran vital kami sebagai garda terdepan dalam menghadapi kondisi darurat di Kota Depok.' }] },
  ],
  strukturOrganisasi: {
    url: 'https://placehold.co/1200x800.png?text=Struktur+Organisasi',
    alt: 'Bagan Struktur Organisasi Dinas Pemadam Kebakaran dan Penyelamatan Kota Depok'
  },
  contactEmergency: {
    phone: '112 atau (021) 77827281',
    email: 'damkar@depok.go.id',
    address: 'Jl. Boulevard Grand Depok City, Tirtajaya, Kec. Sukmajaya, Kota Depok, Jawa Barat 16412'
  }
};

// The function that our server components will call
export const getMockProfileData = async () => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 50)); 
  return mockProfileData;
};