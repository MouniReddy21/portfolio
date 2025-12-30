
'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

export default function HomePage() {
  const [typedName, setTypedName] = useState('');
  const fullName = 'Shreyas KV';
  const tagline = "I love coding, coffee, and keyboards!";

  const hasStarted = useRef(false);

  useEffect(() => {
    if (typedName.length < fullName.length) {
      const delay = hasStarted.current ? 150 : 500;
      hasStarted.current = true;

      const timeout = setTimeout(() => {
        setTypedName(fullName.slice(0, typedName.length + 1));
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [typedName]);


  return (
    <div className="relative w-full h-screen overflow-hidden flex flex-col justify-center items-center text-center p-4 overflow-hidden space-y-8">
      {/* Background Image Container */}
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <div className="hero-bg-layer" />
        <div className="absolute inset-0 bg-zinc-950/80" />
      </div>
      {/* Holographic Image Container */}
      <div className="relative z-10 group">
        {/* 1. The pulsing glow ring behind the image */}
        <div className="absolute -inset-4 bg-cyan-500/20 rounded-[2rem] blur-2xl animate-pulse-slow group-hover:bg-cyan-400/30 transition-colors duration-500"></div>
        
        {/* 2. A subtle border container */}
        <div className="relative h-40 w-40 md:h-48 md:w-48 rounded-[2rem] border border-white/10 bg-zinc-900/50 backdrop-blur-sm overflow-hidden shadow-2xl p-1">
           {/* 3. The actual image */}
           <div className="relative h-full w-full rounded-[1.8rem] overflow-hidden relative">
             <Image
               src="/profile.jpg" 
               alt="Shreyas KV"
               fill
               priority
               className="object-cover object-top hover:scale-105 transition-transform duration-500"
             />
           </div>
        </div>
      </div>
      {/* ---------------------------------------- */}


      <div className="z-10 flex flex-col items-center">
        <h1 className="text-5xl md:text-7xl font-light text-zinc-100 mb-4 drop-shadow-2xl">
          Hi, my name is{' '}
          <span className="font-semibold">
            <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
              {typedName}
            </span>

            {typedName.length === fullName.length && (
              <span className="animate-pulse ml-1">|</span>
            )}
            <span className="wave-cursor ml-2" aria-hidden="true">
              👋
            </span>
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-zinc-300 font-medium tracking-wide">
          Software Developer
        </p>
        <p className="text-lg md:text-xl max-w-2xl text-zinc-400 mt-4 italic font-light">
          {tagline}
        </p>
      </div>
    </div>
  );
}