// FILE: src/app/(marketing)/page.tsx
import { HeroSection } from "@/features/home/components/HeroSection";
import { getMockProfileData as getHomeProfileData } from "@/features/profile/services/getMockProfileData";

export default async function HomePage() {
  const profileData = await getHomeProfileData();

  return (
    <>
      <HeroSection
        title={profileData.heroTitle}
        subtitle={profileData.heroSubtitle}
      />
      {/* Other sections like 'Informasi Terkini' will be added here later */}
      <div id="informasi" className="py-20 text-center">
        <h2 className="text-3xl font-bold">Informasi & Edukasi</h2>
        <p className="mt-4 text-neutral-600">
          Bagian ini akan menampilkan daftar informasi dan edukasi terkini.
        </p>
        {/* Placeholder for ArticleList component */}
      </div>
      <div id="edukasi" className="py-20 text-center bg-neutral-100">
        <h2 className="text-3xl font-bold">Edukasi Pencegahan</h2>
        <p className="mt-4 text-neutral-600">
          Bagian ini akan menampilkan konten edukasi.
        </p>
        {/* Placeholder for EdukasiList component */}
      </div>
    </>
  );
}
