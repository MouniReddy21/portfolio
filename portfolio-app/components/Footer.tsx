// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="w-full text-center p-4 border-t border-zinc-800 mt-auto">
      <p className="text-zinc-500 text-sm">
        &copy; {new Date().getFullYear()} Mounika Seelam. All Rights Reserved.
      </p>
    </footer>
  );
}