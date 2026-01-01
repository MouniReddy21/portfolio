// // app/experience/page.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { GraduationCap, Briefcase, Calendar, Code2, ScrollText, FileSpreadsheet, X, ExternalLink } from 'lucide-react';

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

const certifications = [
  { title: "INTERNATIONAL CONFERENCE ON SMART COMPUTING AND INFORMATICS", provider: "Springer", link: "https://drive.google.com/file/d/13M4vpseoKxJeIvSBO2cBpmWU5OXN3irc/view?usp=drive_link" },
  { title: "JPMorgan Chase & Co - Software Engineering", provider: "Forage", link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Sj7temL583QAYpHXD/E6McHJDKsQYh79moz_Sj7temL583QAYpHXD_BCZEKrXKHKYyW895G_1740264739230_completion_certificate.pdf" },
  { title: "Goldman Sachs - Software Engineering", provider: "Forage", link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/MBA4MnZTNFEoJZGnk/NPdeQ43o8P9HJmJzg_MBA4MnZTNFEoJZGnk_BCZEKrXKHKYyW895G_1737246158845_completion_certificate.pdf"},
  { title: "University of Michigan - Programming for Everybody (Getting Started with Python)", provider: "Coursera", link: "https://www.coursera.org/account/accomplishments/certificate/E5AFFV8Y84BV"},
  { title: "University of Michigan - Python Data Structures", provider: "Coursera", link: "https://www.coursera.org/account/accomplishments/certificate/4P6NURYBYKPN"},
  { title: "Introduction to Networks", provider: "Cisco", link: "https://drive.google.com/file/d/1K683vEpTOdIQ08vY3R1QvtYRpNsN_LYD/view?usp=sharing" },
  { title: "IBM - Introduction to Cloud Computing", provider: "edX", link: "https://courses.edx.org/certificates/c906703bc29f481baa111f9b7519701c"},
  { title: "UC San Diego - Combinatorics and Probability", provider: "Coursera", link: "https://www.coursera.org/account/accomplishments/certificate/78EFNVJZ2E92"},
  { title: "UC San Diego - Mathematical Thinking in Computer Science", provider: "Coursera", link: "https://www.coursera.org/account/accomplishments/verify/DYQAUXRHSBEA?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course"},
  { title: "Introduction to HTML5", provider: "Coursera", link: "https://drive.google.com/file/d/1dPMG0mB6dGob0ANErMQEqdG3ayxsy2JQ/view?usp=drive_link"},
  
];

const publications = [
  { title: "Automated Body Temperature Scanning System for COVID-19 Health Monitoring", journal: "Springer", link: "https://link.springer.com/chapter/10.1007/978-981-16-9705-0_14" },
];

export default function QualificationPage() {
  const [activeTab, setActiveTab] = useState<'experience' | 'education'>('experience');

  // Modal State: null | 'certs' | 'papers'
  const [modalType, setModalType] = useState<null | 'certs' | 'papers'>(null);

  const closeModal = () => setModalType(null);

  return (
    <div className="relative min-h-full w-full">
      {/* BACKGROUND IMAGE CONTAINER */}
      <div className="fixed inset-0 -z-10">
        <Image src="/portfolio/pages-bg.svg" alt="Background" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-zinc-950/90" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto pb-20 pt-0 px-4 md:px-0">
        {/* HEADER SECTION */}
        <div className="text-center mb-8">
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
        {/* --- STATS CARDS SECTION (Added at the bottom) --- */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Coding Card */}
          <div className="bg-zinc-900/80 border border-zinc-800 p-6 rounded-2xl backdrop-blur-md flex flex-col items-center text-center group hover:border-amber-400/30 transition-all shadow-xl">
            <div className="p-3 bg-zinc-800/50 rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                <Code2 className="text-amber-400" size={32} />
            </div>
            <h3 className="text-white font-bold text-lg mb-1">Coding Experience</h3>
            <span className="text-amber-400 font-bold text-2xl tracking-tighter">6+ Years</span>
          </div>

          {/* Certifications Card */}
          <div className="bg-zinc-900/80 border border-zinc-800 p-6 rounded-2xl backdrop-blur-md flex flex-col items-center text-center group hover:border-amber-400/30 transition-all shadow-xl">
            <div className="p-3 bg-zinc-800/50 rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                <ScrollText className="text-amber-400" size={32} />
            </div>
            <h3 className="text-white font-bold text-lg mb-1">Certifications</h3>
            <button 
              onClick={() => setModalType('certs')}
              className="text-amber-400 font-bold text-sm uppercase underline decoration-2 underline-offset-4 hover:text-white transition-colors"
            >
              View Certificates
            </button>
          </div>

          {/* Paper Published Card */}
          <div className="bg-zinc-900/80 border border-zinc-800 p-6 rounded-2xl backdrop-blur-md flex flex-col items-center text-center group hover:border-amber-400/30 transition-all shadow-xl">
            <div className="p-3 bg-zinc-800/50 rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                <FileSpreadsheet className="text-amber-400" size={32} />
            </div>
            <h3 className="text-white font-bold text-lg mb-1">Paper Published</h3>
            <button 
              onClick={() => setModalType('papers')}
              className="text-amber-400 font-bold text-sm uppercase underline decoration-2 underline-offset-4 hover:text-white transition-colors"
            >
              View Papers
            </button>
          </div>
        </div>
        
        {/* --- THE MODAL OVERLAY --- */}
      {modalType && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="relative w-full max-w-2xl bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden">
            
            {/* Modal Header */}
            <div className="p-6 border-b border-zinc-800 bg-zinc-900/50 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-white uppercase tracking-tight">
                {modalType === 'certs' ? 'Certifications' : 'Publications'}
              </h2>
              <button onClick={closeModal} className="p-2 hover:bg-zinc-800 rounded-full text-zinc-400 hover:text-white transition-colors">
                <X size={24} />
              </button>
            </div>

            {/* Modal Content - Vertical Scrollable List */}
            <div className="p-6 max-h-[60vh] overflow-y-auto space-y-4">
              {(modalType === 'certs' ? certifications : publications).map((item, idx) => (
                <div key={idx} className="p-4 bg-zinc-800/30 border border-zinc-700 rounded-xl hover:border-amber-400/50 transition-colors flex justify-between items-center group">
                  <div>
                    <h4 className="text-white font-semibold">{item.title}</h4>
                    <p className="text-zinc-500 text-sm">{'provider' in item ? item.provider : item.journal}</p>
                  </div>
                  <a href={item.link} target="_blank" className="text-amber-400 hover:text-white text-sm font-bold uppercase flex items-center gap-2">
                    View <ExternalLink size={14} />
                  </a>
                </div>
              ))}
            </div>

            {/* Modal Footer */}
            {/* <div className="p-4 border-t border-zinc-800 bg-zinc-900/50 flex justify-end">
              <button onClick={closeModal} className="px-6 py-2 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg font-bold transition-colors">
                Close
              </button>
            </div> */}
          </div>
          
          {/* Backdrop Click to Close */}
          <div className="absolute inset-0 -z-10" onClick={closeModal} />
        </div>
      )}

        {/* Academic Credential Badge (Appears below education) */}
        {activeTab === 'education' && (
          <div className="mt-12 flex justify-center">
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