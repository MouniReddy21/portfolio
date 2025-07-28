// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)'],
      },
      colors: {
        midnight: '#090F15',
        mountainside: '#262E36',
        'apres-ski': '#6C6D74',
        slopes: '#B3B7BA',
        arctic: '#D3D1CE',
      },
    },
  },
  plugins: [],
};
export default config;