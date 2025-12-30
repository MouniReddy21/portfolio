// components/Sidebar.tsx
import Image from 'next/image';
import Link from 'next/link';
import {
  Github,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react';

export default function Sidebar() {
  return (
    <aside className="fixed top-0 left-0 h-full w-72 bg-zinc-950 p-8 flex flex-col justify-between items-center border-r border-zinc-800">
      {/* --- Profile Section --- */}
      <div className="flex flex-col items-center text-center w-full">
        <Image
          src="/profile.jpg" // Using your local image
          alt="Profile Picture"
          width={120}
          height={120}
          className="rounded-full mb-4"
        />
        <h2 className="text-white text-2xl font-bold">Mounika Seelam</h2>
        <p className="bg-zinc-800 text-zinc-300 text-xs font-medium px-3 py-1 rounded-full mt-2">
          Software Developer
        </p>
      </div>

      {/* --- Contact & Socials Section --- */}
      <div className="w-full text-sm">
        <div className="space-y-4 text-zinc-400">
          <div className="flex items-center">
            <Mail size={16} className="mr-4 flex-shrink-0 text-amber-400" />
            <span>your.email@example.com</span>
          </div>
          <div className="flex items-center">
            <Phone size={16} className="mr-4 flex-shrink-0 text-amber-400" />
            <span>+1 234 567 8900</span>
          </div>
          <div className="flex items-center">
            <MapPin size={16} className="mr-4 flex-shrink-0 text-amber-400" />
            <span>Kent, Ohio</span>
          </div>
        </div>
        <div className="flex justify-center space-x-4 mt-8">
          <Link href="#" className="text-zinc-500 hover:text-white">
            <Github size={20} />
          </Link>
          <Link href="#" className="text-zinc-500 hover:text-white">
            <Linkedin size={20} />
          </Link>
          <Link href="#" className="text-zinc-500 hover:text-white">
            <Instagram size={20} />
          </Link>
        </div>
      </div>
    </aside>
  );
}

