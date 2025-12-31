// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="w-full text-center p-4 border-t border-zinc-800 mt-auto">
      <p className="text-zinc-500 text-sm">
        &copy; {new Date().getFullYear()} Mounika Seelam. All Rights Reserved.
      </p>
      <p className="text-zinc-400 text-xs">
        <a
          href="https://www.vecteezy.com/free-vector/connect"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline">
          Connect Vectors by Vecteezy
        </a>
      </p>
    </footer>
  );
}