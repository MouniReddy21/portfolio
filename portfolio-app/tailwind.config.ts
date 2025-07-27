// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Direct palette colors
        'arctic': '#D3D1CE',
        'midnight': '#090F15',
        'mountainside': '#262E36',
        'apres-ski': '#6C6D74',
        'slopes': '#B3B7BA',
        'off-white': '#F7F7F7', // A clean white for cards

        // Semantic names for UI elements
        'background': 'var(--background)', // Main page background (Arctic)
        'foreground': 'var(--foreground)', // Main text color (Midnight)
        'card': 'var(--card)',             // Card backgrounds (Off-White)
        'card-foreground': 'var(--card-foreground)', // Text on cards (Midnight)
        'primary': 'var(--primary)',       // Primary actions/elements (Mountainside)
        'primary-foreground': 'var(--primary-foreground)', // Text on primary elements (Arctic)
        'secondary': 'var(--secondary)',   // Secondary text (Apres Ski)
        'accent': 'var(--accent)',         // Borders, dividers, hover states (Slopes)
      },
      fontFamily: {
        // Match the fonts defined in layout.tsx
        sans: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)'],
      },
    },
  },
  plugins: [],
}
export default config