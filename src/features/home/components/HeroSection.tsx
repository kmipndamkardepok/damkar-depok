// FILE: src/features/home/components/HeroSection.tsx
import React from 'react';
import { Container as HContainer } from '@/shared/components/ui/Container';
import HLink from 'next/link';
import { ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  title: string;
  subtitle: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ title, subtitle }) => {
  return (
    <section className="relative bg-neutral-800 text-white py-20 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/50 opacity-80"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1605599024329-8d2a44a7b2b3?q=80&w=2071&auto=format&fit=crop')" }}
      ></div>
      <HContainer className="relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-lg">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-neutral-200 drop-shadow-md">
          {subtitle}
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <HLink href="/lapor" className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white bg-primary rounded-lg shadow-lg hover:bg-red-700 transition-all transform hover:scale-105">
            Lapor Kejadian Darurat
          </HLink>
          <HLink href="/#informasi" className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-neutral-800 bg-white rounded-lg shadow-lg hover:bg-neutral-200 transition-all transform hover:scale-105">
            Lihat Informasi <ArrowRight className="ml-2 w-5 h-5" />
          </HLink>
        </div>
      </HContainer>
    </section>
  );
};