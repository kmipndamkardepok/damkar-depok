// FILE: src/app/(marketing)/visi-dan-misi/page.tsx
import { getMockProfileData as getVisiMisiProfileData } from "@/features/profile/services/getMockProfileData";
import { ProfilePageLayout as VisiMisiLayout } from "@/features/profile/components/ProfilePageLayout";

export default async function VisiMisiPage() {
  const data = await getVisiMisiProfileData();

  return (
    <VisiMisiLayout title="Visi dan Misi">
      <h2>Visi</h2>
      {data.visi.map((block) => (
        <p key={block._key}>
          {block.children.map((span) => span.text).join("")}
        </p>
      ))}
      <h2 className="mt-8">Misi</h2>
      <ol className="list-decimal pl-5 space-y-2">
        {data.misi.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
    </VisiMisiLayout>
  );
}
