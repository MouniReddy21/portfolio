// app/layout.tsx
'use client';

import { usePathname } from 'next/navigation';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import Footer from '@/components/Footer'; // <-- Import the new Footer

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-900`}
      >
        <div className="relative min-h-screen">
          {isHomePage ? (
            // Homepage Layout
            <>
              <Navbar />
              <main>{children}</main>
            </>
          ) : (
            // Inner Pages Layout
            <div className="flex">
              <Sidebar />
              <div className="flex flex-col w-full ml-72"> {/* Container for main content and footer */}
                <Navbar />
                <main className="flex-grow p-8 md:p-12 mt-16">{children}</main>
                <Footer />
              </div>
            </div>
          )}
        </div>
      </body>
    </html>
  );
}
