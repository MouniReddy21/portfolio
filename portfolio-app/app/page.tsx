// app/page.tsx
'use client';

import { useState, useEffect } from 'react';

export default function HomePage() {
  const [typedName, setTypedName] = useState('');
  const fullName = 'Shreyas KV';
  const tagline = "I love coding, coffee, and keyboards!";

  useEffect(() => {
    // A simple delay to let the page settle before starting to type
    const startTypingTimeout = setTimeout(() => {
      if (typedName.length < fullName.length) {
        const timeoutId = setTimeout(() => {
          setTypedName(fullName.slice(0, typedName.length + 1));
        }, 150); // Typing speed
        return () => clearTimeout(timeoutId);
      }
    }, 500); // Initial delay
    
    return () => clearTimeout(startTypingTimeout);
  }, [typedName, fullName]);

  return (
    // This container creates the full-screen centered effect
    <div className="homepage-bg absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center text-center p-4 -z-10">
      <h1 className="text-5xl md:text-7xl font-light text-zinc-200 mb-4">
        Hi, my name is{' '}
        <span className="font-semibold text-white">
          {typedName}
          <span className="wave-cursor">👋</span>
        </span>
      </h1>
      <p className="text-xl md:text-2xl text-zinc-300">Software Developer</p>
      <p className="text-lg md:text-xl max-w-2xl text-zinc-400 mt-2">{tagline}</p>
    </div>
  );
}