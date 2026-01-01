// app/layout.tsx
'use client';

import { usePathname } from 'next/navigation';
import { Geist, Geist_Mono, Lora } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import Footer from '@/components/Footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const lora = Lora({
  variable: '--font-lora',
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${lora.variable} antialiased bg-[#090F15] text-[#D3D1CE]`}
      >
        <div className="relative min-h-screen flex flex-col">
          {isHomePage ? (
            // Homepage: Full screen, no sidebar
            <>
              <Navbar />
              <main className="flex-grow">{children}</main>
            </>
          ) : (
            // Inner Pages: Fixed Sidebar + Content Area
            <div className="flex flex-grow">
              <Sidebar />
              <div className="flex flex-col flex-grow md:ml-72 min-h-screen">
                <Navbar />
                <main className="flex-grow p-6 md:p-12 pt-20 md:pt-20">
                  {children}
                </main>
                <Footer />
              </div>
            </div>
          )}
        </div>
      </body>
    </html>
  );
}