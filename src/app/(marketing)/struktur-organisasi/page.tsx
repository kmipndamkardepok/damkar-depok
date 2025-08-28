// FILE: src/app/(marketing)/struktur-organisasi/page.tsx
import { getMockProfileData as getStrukturProfileData } from "@/features/profile/services/getMockProfileData";
import { ProfilePageLayout as StrukturLayout } from "@/features/profile/components/ProfilePageLayout";
import Image from "next/image";

export default async function StrukturOrganisasiPage() {
  const data = await getStrukturProfileData();

  return (
    <StrukturLayout title="Struktur Organisasi">
      <p>
        Berikut adalah bagan struktur organisasi Dinas Pemadam Kebakaran dan
        Penyelamatan Kota Depok yang berlaku saat ini.
      </p>
      <div className="mt-8 border rounded-lg overflow-hidden shadow-sm">
        <Image
          src={data.strukturOrganisasi.url}
          alt={data.strukturOrganisasi.alt}
          width={1200}
          height={800}
          className="w-full h-auto"
          priority
        />
      </div>
    </StrukturLayout>
  );
}
