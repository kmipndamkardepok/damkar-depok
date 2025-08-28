// FILE: src/features/profile/components/ProfilePageLayout.tsx
import React from 'react';
import { Container as PContainer } from '@/shared/components/ui/Container';

interface ProfilePageLayoutProps {
  title: string;
  children: React.ReactNode;
}

export const ProfilePageLayout: React.FC<ProfilePageLayoutProps> = ({ title, children }) => {
  return (
    <main className="py-16 md:py-24 bg-white">
      <PContainer>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold text-neutral-900 border-b-4 border-primary pb-4 mb-8">
            {title}
          </h1>
          <div className="prose prose-lg max-w-none text-neutral-700">
            {children}
          </div>
        </div>
      </PContainer>
    </main>
  );
}