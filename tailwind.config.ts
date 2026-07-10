import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'sans-serif'],
        serif: ['var(--font-source-serif)', 'Georgia', 'serif'],
        mono: ['var(--font-jetbrains-mono)', 'JetBrains Mono', 'monospace'],
      },
      colors: {
        cream: '#FAF8F5',
        ink: {
          DEFAULT: '#1a1a18',
          muted: '#5c5c58',
          faint: '#8a8a85',
        },
        brand: {
          DEFAULT: '#1e3a5f',
          light: '#2d5a8e',
          dark: '#0f2440',
        },
        accent: {
          DEFAULT: '#c45c26',
          light: '#e07a42',
        },
      },
    },
  },
  plugins: [],
}
export default config
