// // components/Navbar.tsx
// import Link from 'next/link';

// export default function Navbar() {
//   return (
//     <header className="fixed top-0 left-0 w-full z-50">
//       <div className="bg-zinc-950/40 backdrop-blur-md border-b border-white/5">
//         <nav className="container mx-auto flex justify-between items-center px-4 py-4">
//           <Link href="/" className="text-xl font-bold text-white">
//             Home
//           </Link>
//           <div className="space-x-8 text-zinc-300 font-medium">
//             <Link href="/about" className="hover:text-white transition">About</Link>
//             <Link href="/experience" className="hover:text-white transition">Experience</Link>
//             <Link href="/projects" className="hover:text-white transition">Projects</Link>
//             <Link href="/contact" className="hover:text-white transition">Contact</Link>
//           </div>
//         </nav>
//       </div>
//     </header>
//   );
// }


//------------------------------
// 'use client';

// import { useEffect, useState } from 'react';
// import Link from 'next/link';

// export default function Navbar() {
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 10);
//     window.addEventListener('scroll', onScroll);
//     return () => window.removeEventListener('scroll', onScroll);
//   }, []);

//   return (
//     <header className="fixed top-0 left-0 w-full z-50">
//       {/* Glass layer */}
//       <div
//         className={`
//           transition-all duration-300
//           ${scrolled ? 'bg-zinc-950/60 backdrop-blur-md' : 'bg-transparent'}
//           border-b border-white/5
//         `}
//       >
//         <nav className="container mx-auto flex justify-between items-center px-4 py-4">
//           <Link href="/" className="text-xl font-bold text-white">
//             Home
//           </Link>

//           <div className="space-x-8 text-zinc-300 font-medium">
//             <Link href="/about" className="hover:text-white transition">
//               About
//             </Link>
//             <Link href="/experience" className="hover:text-white transition">
//               Experience
//             </Link>
//             <Link href="/projects" className="hover:text-white transition">
//               Projects
//             </Link>
//             <Link href="/contact" className="hover:text-white transition">
//               Contact
//             </Link>
//           </div>
//         </nav>
//       </div>
//     </header>
//   );
// }


//-----------
// 'use client';

// import { useEffect, useState } from 'react';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import { Menu, X } from 'lucide-react';

// const navLinks = [
//   { href: '/', label: 'Home' },
//   { href: '/about', label: 'About' },
//   { href: '/experience', label: 'Experience' },
//   { href: '/projects', label: 'Projects' },
//   { href: '/contact', label: 'Contact' },
// ];

// export default function Navbar() {
//   const pathname = usePathname();
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [activeSection, setActiveSection] = useState('/');

//   // Glass background on scroll
//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 10);
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // // Scroll-spy only for homepage
//   // useEffect(() => {
//   //   if (pathname !== '/') return; // only enable on home page

//   //   const sections = navLinks
//   //     .map(link => document.getElementById(link.href.slice(1)))
//   //     .filter(Boolean);

//   //   const handleScroll = () => {
//   //     const scrollPos = window.scrollY + 120; // adjust for navbar height
//   //     for (const section of sections) {
//   //       if (section && scrollPos >= section.offsetTop) {
//   //         setActiveSection(`#${section.id}`);
//   //       }
//   //     }
//   //   };

//   //   window.addEventListener('scroll', handleScroll);
//   //   return () => window.removeEventListener('scroll', handleScroll);
//   // }, [pathname]);

//   // // Handle smooth scroll on homepage
//   // const handleLinkClick = (href: string) => {
//   //   if (pathname === '/' && href !== '/') {
//   //     const section = document.getElementById(href.slice(1));
//   //     if (section) {
//   //       section.scrollIntoView({ behavior: 'smooth' });
//   //     }
//   //     setMenuOpen(false);
//   //     return true; // handled scroll, prevent navigation
//   //   } else {
//   //     setMenuOpen(false);
//   //     return false; //allow normal navigation
//   //   }
//   // };

//   return (
//     <header className="fixed top-0 left-0 w-full z-50">
//       {/* Glass background */}
//       <div
//         className={`transition-all duration-300 ${
//           scrolled ? 'bg-zinc-950/60 backdrop-blur-md' : 'bg-transparent'
//         } border-b border-white/5`}
//       >
//         <nav className="container mx-auto flex justify-between items-center px-4 py-4">
//           {/* Logo */}
//           <Link href="/" className="text-xl font-bold text-white">
//             Shreyas
//           </Link>

//           {/* Desktop Nav */}
//           <div className="hidden md:flex space-x-8">
//             {navLinks.map(link => {
//               const isActive =
//                 pathname !== '/'
//                   ? pathname === link.href
//                   : activeSection === `#${link.href.slice(1)}` || pathname === link.href;

//               return (
//                 <a
//                   key={link.href}
//                   href={link.href}
//                    onClick={e => {
//                     const handled = handleLinkClick(link.href);
//                     if (handled) e.preventDefault(); // prevent default only if scroll handled
//                   }}
//                   className="relative text-zinc-300 hover:text-white transition"
//                 >
//                   {link.label}
//                   <span
//                     className={`absolute left-0 -bottom-1 h-[2px] bg-cyan-400 rounded-full transition-all duration-300
//                       ${isActive ? 'w-full' : 'w-0'}
//                     `}
//                   />
//                 </a>
//               );
//             })}
//           </div>

//           {/* Mobile Hamburger */}
//           <button
//             className="md:hidden text-zinc-200"
//             onClick={() => setMenuOpen(!menuOpen)}
//             aria-label="Toggle menu"
//           >
//             {menuOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </nav>
//       </div>

//       {/* Mobile Menu with slide-down animation */}
//       <div
//         className={`md:hidden bg-zinc-950/95 backdrop-blur-md border-b border-white/5 overflow-hidden transition-all duration-500 ease-in-out`}
//         style={{ maxHeight: menuOpen ? '500px' : '0px' }}
//       >
//         <div className="flex flex-col space-y-4 px-6 py-6">
//           {navLinks.map(link => {
//             const isActive =
//               pathname !== '/'
//                 ? pathname === link.href
//                 : activeSection === `#${link.href.slice(1)}` || pathname === link.href;

//             return (
//               <a
//                 key={link.href}
//                 href={link.href}
//                  onClick={e => {
//                     const handled = handleLinkClick(link.href);
//                     if (handled) e.preventDefault(); // prevent default only if scroll handled
//                   }}
//                 className={`text-lg transition ${
//                   isActive
//                     ? 'text-cyan-400 font-semibold'
//                     : 'text-zinc-300 hover:text-white'
//                 }`}
//               >
//                 {link.label}
//               </a>
//             );
//           })}
//         </div>
//       </div>
//     </header>
//   );
// }


'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/experience', label: 'Experience' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div
        className={`transition-all duration-300 ${
          scrolled ? 'bg-zinc-950/80 backdrop-blur-md py-3' : 'bg-transparent py-5'
        } border-b border-white/5`}
      >
        <nav className="container mx-auto flex justify-between items-center px-6">
          <Link href="/" className="text-2xl font-bold text-white tracking-tighter">
            SHREYAS
          </Link>

          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative text-sm font-medium transition-colors duration-300 ${
                    isActive ? 'text-white' : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  {link.label}
                  {/* Underline matches your Arctic foreground color */}
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] bg-amber-400 rounded-full transition-all duration-300
                      ${isActive ? 'w-full' : 'w-0'}
                    `}
                  />
                </Link>
              );
            })}
          </div>

          <button
            className="md:hidden text-zinc-200 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      <div
        className={`md:hidden bg-zinc-950/95 backdrop-blur-xl border-b border-white/10 overflow-hidden transition-all duration-500 ease-in-out`}
        style={{ maxHeight: menuOpen ? '400px' : '0px' }}
      >
        <div className="flex flex-col space-y-4 px-8 py-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
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