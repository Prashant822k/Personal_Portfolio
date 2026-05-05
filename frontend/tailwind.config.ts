import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#0f0f14',
        'bg-secondary': '#17171f',
        'bg-elevated': '#1f1f2b',
        'accent': '#ff6b35',
        'accent-dim': '#cc4f1e',
        'accent-glow': 'rgba(255,107,53,0.15)',
        'text-primary': '#f0ede8',
        'text-secondary': '#8a8799',
        'text-muted': '#4a4860',
        'border': '#242330',
        'badge-win': '#ff6b35',
        'badge-win-text': '#0f0f14',
        'card-accent': '#ff6b35',
      },
      fontFamily: {
        'display': ['"Bebas Neue"', 'sans-serif'],
        'heading': ['"Syne"', 'sans-serif'],
        'body': ['"DM Sans"', 'sans-serif'],
        'mono': ['"JetBrains Mono"', 'monospace'],
      },
      maxWidth: {
        'content': '1280px',
      },
      borderRadius: {
        'card': '8px',
        'badge': '4px',
      },
      animation: {
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'scroll-x': 'scrollX 30s linear infinite',
      },
      keyframes: {
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 40px rgba(255,107,53,0.15)' },
          '50%': { boxShadow: '0 0 80px rgba(255,107,53,0.25)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        scrollX: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
