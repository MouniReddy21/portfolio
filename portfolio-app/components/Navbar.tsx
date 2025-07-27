// components/Navbar.tsx
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full bg-transparent p-4 z-50">
      <nav className="container mx-auto flex justify-between items-center px-4">
        {/* You can add a name/logo on the left if you want */}
        <Link href="/" className="text-xl font-bold text-zinc-200">
          Home
        </Link>
        <div className="space-x-8 text-zinc-300 font-medium">
        <Link href="/about" className="hover:text-white">About</Link>
          <Link href="/experience" className="hover:text-white">Experience</Link>
          <Link href="/projects" className="hover:text-white">Projects</Link>
          <Link href="/contact" className="hover:text-white">Contact</Link>
          {/* Add a Resume link if you have one */}
          {/* <Link href="/resume.pdf" className="hover:text-white">Resume</Link> */}
        </div>
      </nav>
    </header>
  );
}
