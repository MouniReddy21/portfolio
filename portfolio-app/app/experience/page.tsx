// app/experience/page.tsx
import Image from 'next/image';

export default function ExperiencePage() {
  return (
    <div className="relative min-h-full w-full">
      
      {/* BACKGROUND IMAGE CONTAINER */}
      <div className="fixed inset-0 -z-10">
        <Image
          src="/pages-bg.svg" // Replace with your specific background filename if different
          alt="Experience Background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-zinc-950/90" />
      </div>
      {/* Academic Credential Badge */}
            <div className="bg-zinc-900/50 border border-zinc-800 px-4 py-2 rounded-lg backdrop-blur-sm">
              <span className="text-zinc-400 text-xs uppercase tracking-widest block">Academic Excellence</span>
              <span className="text-white font-bold">GPA: 4.0 / 4.0</span>
            </div>
      {/* PAGE CONTENT CONTAINER */}
      <div className="relative z-10 max-w-4xl">
        <h1 className="text-4xl font-bold text-white mb-8 border-b border-zinc-700 pb-4">
          Work Experience
        </h1>
        
        <div className="space-y-8">
          {/* EXPERIENCE CARD */}
          <div className="bg-zinc-900/90 p-8 rounded-lg border border-zinc-800 backdrop-blur-md shadow-xl">
            <h3 className="text-2xl font-semibold text-white">
              Senior Developer - Tech Inc.
            </h3>
            <p className="text-md text-zinc-400 italic">Jan 2022 - Present</p>
            
            <ul className="list-disc list-inside mt-4 text-zinc-300 space-y-2">
              <li>Led development of a new client-facing portal using React.</li>
              <li>Mentored three junior developers.</li>
              <li>Optimized application performance, reducing load times by 30%.</li>
            </ul>
          </div>
          
          {/* will add more experience cards here using the same div structure */}
        </div>
      </div>
    </div>
  );
}
