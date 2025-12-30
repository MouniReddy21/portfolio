'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function HomePage() {
  const [typedName, setTypedName] = useState('');
  const fullName = 'Shreyas KV';
  const tagline = "I love coding, coffee, and keyboards!";

  useEffect(() => {
    const startTypingTimeout = setTimeout(() => {
      if (typedName.length < fullName.length) {
        const timeoutId = setTimeout(() => {
          setTypedName(fullName.slice(0, typedName.length + 1));
        }, 150);
        return () => clearTimeout(timeoutId);
      }
    }, 500);
    return () => clearTimeout(startTypingTimeout);
  }, [typedName, fullName]);

  return (
    <div className="relative w-full h-screen flex flex-col justify-center items-center text-center p-4 overflow-hidden">
      {/* Background Image Container */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/hero-bg.svg"
          alt="Plexus Background"
          fill
          priority
          // CHANGE 1: Removed 'opacity-40'. The image is now fully opaque and crisp.
          className="object-cover"
        />
        {/* CHANGE 2: Increased overlay from /60 to /80. 
           This acts like darker sunglasses, keeping the text readable 
           while letting the sharp lines shine through.
        */}
        <div className="absolute inset-0 bg-zinc-950/80" /> 
      </div>

      {/* Content */}
      <div className="z-10">
        <h1 className="text-5xl md:text-7xl font-light text-zinc-100 mb-4 drop-shadow-2xl">
          Hi, my name is{' '}
          <span className="font-semibold text-white">
            {typedName}
            <span className="wave-cursor">👋</span>
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-zinc-300 font-medium tracking-wide">
          Software Developer
        </p>
        <p className="text-lg md:text-xl max-w-2xl text-zinc-400 mt-2 italic font-light">
          {tagline}
        </p>
      </div>
    </div>
  );
}