// FILE: src/app/(marketing)/layout.tsx
import { Header } from '@/shared/components/layout/Header';
import { Footer } from '@/shared/components/layout/Footer';

export const metadata = {
  title: 'Damkar Depok - Informasi & Pelaporan',
  description: 'Website Resmi Dinas Pemadam Kebakaran dan Penyelamatan Kota Depok.',
};

export default function MarketingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      {/* <a href="#main-content" className="skip-link">Lompat ke konten utama</a> */}
      <Header />
      <main id="main-content">{children}</main>
      <Footer />
    </div>
  );
}