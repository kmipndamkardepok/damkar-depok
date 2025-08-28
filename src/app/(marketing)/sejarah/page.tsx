// FILE: src/app/(marketing)/sejarah/page.tsx
import { getMockProfileData as getSejarahProfileData } from "@/features/profile/services/getMockProfileData";
import { ProfilePageLayout as SejarahLayout } from "@/features/profile/components/ProfilePageLayout";

export default async function SejarahPage() {
  const data = await getSejarahProfileData();

  return (
    <SejarahLayout title="Sejarah">
      {data.sejarah.map((block) => (
        <p key={block._key} className="mb-4">
          {block.children.map((span) => span.text).join("")}
        </p>
      ))}
    </SejarahLayout>
  );
}
