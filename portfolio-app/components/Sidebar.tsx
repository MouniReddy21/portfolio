// components/Sidebar.tsx
import Image from 'next/image';
import Link from 'next/link';
import {
  Github,
  Linkedin,
  Instagram,
  Mail,
  MapPin,
  ShieldCheck,
  Plane,
} from 'lucide-react';

export default function Sidebar() {
  return (
    <aside className="fixed top-0 left-0 h-full w-72 bg-zinc-950 p-8 flex flex-col justify-between items-center border-r border-zinc-800">
      {/* --- Profile Section --- */}
      <div className="flex flex-col items-center text-center w-full pt-16">
        <Image
          src="/profile.jpg" 
          alt="Profile Picture"
          width={120}
          height={120}
          className="rounded-full mb-4"
        />
        <h2 className="text-white text-2xl font-bold">Mounika Seelam</h2>
        <p className="bg-zinc-800 text-zinc-300 text-xs font-medium px-3 py-1 rounded-full mt-2">
          Software Engineer
        </p>
      </div>

      {/* --- Contact & Socials Section --- */}
      <div className="w-full text-sm">
        <div className="space-y-4 text-zinc-400">
          <div className="flex items-center">
            <Mail size={16} className="mr-4 flex-shrink-0 text-amber-400" />
            <span>mounika.seelam01@gmail.com</span>
          </div>
          {/* Location */}
          <div className="flex items-center">
            <MapPin size={16} className="mr-4 flex-shrink-0 text-amber-400" />
            <span>Kent, Ohio</span>
          </div>

          {/* Work Authorization */}
          <div className="flex items-center">
            <ShieldCheck
              size={14}
              className="mr-4 flex-shrink-0 text-amber-400"
            />
            <span>US Work Authorization</span>
          </div>

          <div className="flex items-center">
            <Plane
              size={14}
              className="mr-4 flex-shrink-0 text-amber-400"
            />
            <span>Relocation OK</span>
          </div>

          {/* Availability Badge */}
          <div className="flex items-center">
            <span className="ml-8 text-[10px] uppercase tracking-wider text-amber-400 font-semibold flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              Open to Opportunities
            </span>
          </div>
        </div>
        <div className="flex justify-center space-x-4 mt-8">
          <Link href="https://github.com/MouniReddy21" target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-500 hover:text-white">
            <Github size={20} />
          </Link>
          <Link href="https://www.linkedin.com/in/mounikareddy01/" target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-500 hover:text-white">
            <Linkedin size={20} />
          </Link>
          <Link href="#" target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-500 hover:text-white">
            <Instagram size={20} />
          </Link>
        </div>
      </div>
    </aside>
  );
}

