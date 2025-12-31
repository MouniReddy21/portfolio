// // components/Navbar.tsx
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/about#skills', label: 'Skills' },
  { href: '/experience', label: 'Experience' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isSkillsActive, setIsSkillsActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // 1. Handle Glass Background
      setScrolled(window.scrollY > 10);

      // 2. Handle Skills Underline (Scroll Spy)
      if (pathname === '/about') {
        const skillsSection = document.getElementById('skills');
        if (skillsSection) {
          const rect = skillsSection.getBoundingClientRect();
          // If the top of the skills section is near the top of the viewport
          setIsSkillsActive(rect.top <= 150); 
        }
      } else {
        setIsSkillsActive(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div
        className={`transition-all duration-300 ${
          scrolled ? 'bg-zinc-950/80 backdrop-blur-md py-3' : 'bg-transparent py-5'
        } border-b border-white/5`}
      >
        <nav className="container mx-auto flex justify-between items-center px-6">
          <Link href="/" className="text-2xl font-bold text-white tracking-tighter uppercase">
            Mounika
          </Link>

          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => {
              // Custom Mutually Exclusive Active Logic
              let isActive = false;
              
              if (link.label === 'Skills') {
                isActive = isSkillsActive;
              } else if (link.label === 'About') {
                isActive = pathname === '/about' && !isSkillsActive;
              } else {
                isActive = pathname === link.href;
              }

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`relative text-sm font-medium transition-colors duration-300 ${
                    isActive ? 'text-white' : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] bg-amber-400 rounded-full transition-all duration-300
                      ${isActive ? 'w-full' : 'w-0'}
                    `}
                  />
                </Link>
              );
            })}
          </div>

          <button className="md:hidden text-zinc-200 p-2" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-zinc-950/95 backdrop-blur-xl border-b border-white/10 overflow-hidden transition-all duration-500 ease-in-out`}
        style={{ maxHeight: menuOpen ? '450px' : '0px' }}
      >
        <div className="flex flex-col space-y-4 px-8 py-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`text-xl font-semibold transition ${
                pathname === link.href ? 'text-white' : 'text-zinc-400'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}