// // app/experience/page.tsx
// import Image from 'next/image';

// export default function ExperiencePage() {
//   return (
//     <div className="relative min-h-full w-full">
      
//       {/* BACKGROUND IMAGE CONTAINER */}
//       <div className="fixed inset-0 -z-10">
//         <Image
//           src="/pages-bg.svg" // Replace with your specific background filename if different
//           alt="Experience Background"
//           fill
//           priority
//           className="object-cover"
//         />
//         <div className="absolute inset-0 bg-zinc-950/90" />
//       </div>
//       {/* Academic Credential Badge */}
//             <div className="bg-zinc-900/50 border border-zinc-800 px-4 py-2 rounded-lg backdrop-blur-sm">
//               <span className="text-zinc-400 text-xs uppercase tracking-widest block">Academic Excellence</span>
//               <span className="text-white font-bold">GPA: 4.0 / 4.0</span>
//             </div>
//       {/* PAGE CONTENT CONTAINER */}
//       <div className="relative z-10 max-w-4xl">
//         <h1 className="text-4xl font-bold text-white mb-8 border-b border-zinc-700 pb-4">
//           Work Experience
//         </h1>
        
//         <div className="space-y-8">
//           {/* EXPERIENCE CARD */}
//           <div className="bg-zinc-900/90 p-8 rounded-lg border border-zinc-800 backdrop-blur-md shadow-xl">
//             <h3 className="text-2xl font-semibold text-white">
//               Senior Developer - Tech Inc.
//             </h3>
//             <p className="text-md text-zinc-400 italic">Jan 2022 - Present</p>
            
//             <ul className="list-disc list-inside mt-4 text-zinc-300 space-y-2">
//               <li>Led development of a new client-facing portal using React.</li>
//               <li>Mentored three junior developers.</li>
//               <li>Optimized application performance, reducing load times by 30%.</li>
//             </ul>
//           </div>
          
//           {/* will add more experience cards here using the same div structure */}
//         </div>
//       </div>
//     </div>
//   );
// }


'use client';

import { useState } from 'react';
import Image from 'next/image';
import { GraduationCap, Briefcase, Calendar } from 'lucide-react';

// Data from your resumes
const educationData = [
  {
    institution: "Kent State University",
    degree: "Master of Science, Computer Science",
    period: "August 2024 - May 2026",
    details: "GPA: 4.0/4.0. Focus on Distributed Systems, AI/ML Infrastructure, and Data Security.",
  },
  {
    institution: "Vasavi College of Engineering",
    degree: "Bachelor of Engineering, ECE",
    period: "August 2019 - May 2023",
    details: "GPA: 8.65/10.0. Core focus on Data Structures, OS, and Computer Networks.",
  }
];

const experienceData = [
  {
    company: "CRITT-TPR (Kent State)",
    role: "Software Engineer (Data Systems)",
    period: "Sep 2025 - Present",
    desc: "Architecting production-grade data platforms and ETL pipelines for terabyte-scale datasets.",
  },
  {
    company: "Outamation",
    role: "AI Workflow Automation Extern",
    period: "July 2025 - Sep 2025",
    desc: "Engineered RAG pipelines on AWS, scaling document ingestion to 10k+ daily requests.",
  },
  {
    company: "Hyundai Mobis",
    role: "Software Engineer",
    period: "June 2023 - July 2024",
    desc: "Developed high-performance C++ systems processing 10k+ events/sec with 99.99% reliability.",
  },
  {
    company: "Amazon",
    role: "Software Dev Engineer Intern",
    period: "Jan 2023 - June 2023",
    desc: "Migrated monolithic backends to Java/AWS Microservices, handling 5M+ daily transactions.",
  }
];

export default function QualificationPage() {
  const [activeTab, setActiveTab] = useState<'experience' | 'education'>('experience');

  return (
    <div className="relative min-h-full w-full">
      {/* BACKGROUND IMAGE CONTAINER */}
      <div className="fixed inset-0 -z-10">
        <Image src="/pages-bg.svg" alt="Background" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-zinc-950/90" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto pb-20 pt-10">
        {/* HEADER SECTION */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-2">Qualification</h1>
          <p className="text-zinc-400">My professional and academic journey</p>
        </div>

        {/* TOGGLE TABS */}
        <div className="flex justify-center gap-8 mb-16">
          <button 
            onClick={() => setActiveTab('education')}
            className={`flex items-center gap-3 text-xl font-medium transition-all ${activeTab === 'education' ? 'text-amber-400' : 'text-zinc-500 hover:text-zinc-300'}`}
          >
            <GraduationCap size={28} />
            <div className="text-left">
              <span>Education</span>
              <div className={`h-0.5 w-full bg-amber-400 transition-transform duration-300 ${activeTab === 'education' ? 'scale-x-100' : 'scale-x-0'}`} />
            </div>
          </button>

          <button 
            onClick={() => setActiveTab('experience')}
            className={`flex items-center gap-3 text-xl font-medium transition-all ${activeTab === 'experience' ? 'text-amber-400' : 'text-zinc-500 hover:text-zinc-300'}`}
          >
            <Briefcase size={26} />
            <div className="text-left">
              <span>Experience</span>
              <div className={`h-0.5 w-full bg-amber-400 transition-transform duration-300 ${activeTab === 'experience' ? 'scale-x-100' : 'scale-x-0'}`} />
            </div>
          </button>
        </div>

        {/* TIMELINE SECTION */}
        <div className="relative">
          {/* Vertical Center Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-zinc-800" />

          <div className="space-y-8">
            {(activeTab === 'education' ? educationData : experienceData).map((item, idx) => (
              <div key={idx} className={`relative flex items-center justify-between w-full ${idx % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                
                {/* Content Side */}
                <div className="w-[45%] group">
                  <div className="bg-zinc-900/80 p-4 rounded-xl border border-zinc-800 backdrop-blur-md shadow-lg transition-all hover:border-amber-400/30 group-hover:-translate-y-1">
                    <h3 className="text-lg font-semibold text-white group-hover:text-amber-400 transition-colors">
                      {'institution' in item ? item.institution : item.company}
                    </h3>

                    <p className="text-zinc-400 text-sm mt-1">
                      {'degree' in item ? item.degree : item.role}
                    </p>

                    <div className="flex items-center gap-2 text-zinc-500 text-xs mt-2">
                      <Calendar size={13} />
                      <span>{item.period}</span>
                    </div>

                    <div className="mt-3 h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />

                    {/* Expandable description */}
                    <div
                      className="
                        overflow-hidden
                        max-h-0
                        opacity-0
                        transition-all
                        duration-500
                        ease-out
                        group-hover:max-h-32
                        group-hover:opacity-100
                        md:group-hover:mt-3
                        max-md:max-h-none
                        max-md:opacity-100
                        max-md:mt-3
                      "
                    >
                      <p className="text-zinc-400 text-sm leading-relaxed">
                        {'details' in item ? item.details : item.desc}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-amber-400 shadow-[0_0_15px_rgba(251,191,36,0.5)] z-20" />

                {/* Empty Side (For Spacing) */}
                <div className="w-[45%]" />
              </div>
            ))}
          </div>
        </div>

        {/* Academic Credential Badge (Appears below education) */}
        {activeTab === 'education' && (
          <div className="mt-16 flex justify-center">
            <div className="bg-zinc-900/50 border border-zinc-800 px-6 py-3 rounded-xl backdrop-blur-sm flex items-center gap-4">
              <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <div>
                <span className="text-zinc-400 text-xs uppercase tracking-widest block font-bold">Academic Excellence</span>
                <span className="text-white font-bold text-lg">Current GPA: 4.0 / 4.0</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}