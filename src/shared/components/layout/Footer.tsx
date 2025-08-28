// FILE: src/shared/components/layout/Footer.tsx
import { Container as FContainer } from '@/shared/components/ui/Container'; // Renaming to avoid conflict
import FLink from 'next/link';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-neutral-900 text-neutral-200">
      <FContainer className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold text-white mb-4">Kontak Darurat</h3>
            <p className="text-neutral-400">Hubungi kami jika dalam keadaan darurat:</p>
            <p className="text-2xl font-bold text-primary mt-2">112</p>
            <p className="text-lg font-semibold text-white">(021) 77827281</p>
          </div>
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold text-white mb-4">Tautan Cepat</h3>
            <ul className="space-y-2">
              <li><FLink href="/visi-dan-misi" className="text-neutral-400 hover:text-white transition-colors">Visi & Misi</FLink></li>
              <li><FLink href="/sejarah" className="text-neutral-400 hover:text-white transition-colors">Sejarah</FLink></li>
              <li><FLink href="/#informasi" className="text-neutral-400 hover:text-white transition-colors">Informasi</FLink></li>
              <li><FLink href="/lapor" className="text-neutral-400 hover:text-white transition-colors">Lapor Darurat</FLink></li>
            </ul>
          </div>
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold text-white mb-4">Alamat Kantor Pusat</h3>
            <address className="not-italic text-neutral-400">
              Jl. Boulevard Grand Depok City, Tirtajaya, Kec. Sukmajaya, Kota Depok, Jawa Barat 16412
            </address>
          </div>
        </div>
        <div className="mt-12 border-t border-neutral-800 pt-8 text-center text-neutral-500 text-sm">
          <p>&copy; {currentYear} Dinas Pemadam Kebakaran dan Penyelamatan Kota Depok. All rights reserved.</p>
        </div>
      </FContainer>
    </footer>
  );
};