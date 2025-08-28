// FILE: src/app/(marketing)/tugas-pokok-dan-fungsi/page.tsx
import { getMockProfileData as getTupoksiProfileData } from "@/features/profile/services/getMockProfileData";
import { ProfilePageLayout as TupoksiLayout } from "@/features/profile/components/ProfilePageLayout";

export default async function TupoksiPage() {
  const data = await getTupoksiProfileData();

  return (
    <TupoksiLayout title="Tugas Pokok & Fungsi">
      <p>
        Berdasarkan peraturan yang berlaku, Dinas Pemadam Kebakaran dan
        Penyelamatan memiliki tugas pokok dan fungsi sebagai berikut:
      </p>
      <ul className="list-disc pl-5 space-y-2 mt-4">
        {data.tupoksi.map((block) => (
          <li key={block._key}>
            {block.children.map((span) => span.text).join("")}
          </li>
        ))}
      </ul>
    </TupoksiLayout>
  );
}
