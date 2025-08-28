// FILE: src/shared/components/layout/Header.tsx
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Container } from '@/shared/components/ui/Container'; // Assuming alias is set up
import { Menu, X, ChevronDown, Phone } from 'lucide-react';

const profileLinks = [
  { href: '/visi-dan-misi', label: 'Visi dan Misi' },
  { href: '/tugas-pokok-dan-fungsi', label: 'Tugas Pokok & Fungsi' },
  { href: '/sejarah', label: 'Sejarah' },
  { href: '/struktur-organisasi', label: 'Struktur Organisasi' },
];

const navLinks = [
  { href: '/#informasi', label: 'Informasi' },
  { href: '/#edukasi', label: 'Edukasi' },
];

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleProfileMenu = () => setIsProfileOpen(!isProfileOpen);

  return (
    <header className={`sticky top-0 z-40 w-full transition-all duration-180 ${isScrolled ? 'bg-white/80 shadow-md backdrop-blur-sm' : 'bg-white'}`}>
      <Container>
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2" aria-label="Beranda Damkar Depok">
            <svg className="w-10 h-10 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" fill="#D7263D"/><path d="M12 2L22 7V17L12 22M12 2L2 7V17L12 22M12 12L2 7M12 12L22 7M12 12V22" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            <span className="text-lg font-bold text-neutral-900 hidden sm:block">
              Damkar Depok
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <div className="relative">
              <button onClick={toggleProfileMenu} className="flex items-center gap-1 text-neutral-600 hover:text-primary transition-colors">
                Profil <ChevronDown className={`w-4 h-4 transition-transform ${isProfileOpen ? 'rotate-180' : ''}`} />
              </button>
              {isProfileOpen && (
                <div className="absolute top-full mt-2 w-56 bg-white rounded-lg shadow-lg py-2">
                  {profileLinks.map((link) => (
                    <Link key={link.href} href={link.href} className="block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100 hover:text-primary" onClick={() => setIsProfileOpen(false)}>
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-neutral-600 hover:text-primary transition-colors">
                {link.label}
              </Link>
            ))}
          </nav>
          
          <div className="flex items-center gap-4">
            <Link href="/lapor" className="hidden sm:flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-primary rounded-md hover:bg-red-700 transition-colors shadow-sm">
              <Phone className="w-4 h-4" />
              Lapor Darurat
            </Link>
            <button onClick={toggleMenu} className="lg:hidden p-2" aria-label="Buka menu navigasi" aria-expanded={isOpen}>
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-neutral-200">
          <nav className="flex flex-col p-4 gap-2">
            <div className="relative">
              <button onClick={toggleProfileMenu} className="w-full flex justify-between items-center py-2 text-neutral-700 font-medium">
                Profil <ChevronDown className={`w-5 h-5 transition-transform ${isProfileOpen ? 'rotate-180' : ''}`} />
              </button>
              {isProfileOpen && (
                <div className="pl-4 mt-1 flex flex-col gap-1">
                  {profileLinks.map((link) => (
                    <Link key={link.href} href={link.href} className="block py-2 text-neutral-600 hover:text-primary" onClick={toggleMenu}>
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="py-2 text-neutral-700 font-medium hover:text-primary" onClick={toggleMenu}>
                {link.label}
              </Link>
            ))}
            <Link href="/lapor" className="mt-4 flex items-center justify-center gap-2 px-4 py-3 text-base font-semibold text-white bg-primary rounded-md hover:bg-red-700 transition-colors shadow-sm">
              <Phone className="w-5 h-5" />
              Lapor Darurat
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};