import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          lavender:   '#F3EEF8',
          accent:     '#9B6DBF',
          accentDark: '#7A4FA0',
          text:       '#2D2D3A',
          border:     '#DDD5EA',
          grayLight:  '#F7F4FB',
          grayMid:    '#8E8EA0',
          success:    '#4CAF50',
          error:      '#E57373',
        },
      },
      fontFamily: {
        heading: ['var(--font-raleway)', 'sans-serif'],
        body:    ['var(--font-poppins)', 'sans-serif'],
      },
      maxWidth: {
        content: '1200px',
      },
      // Fluid typography (clamp-based) — Spec point 5
      fontSize: {
        display: ['clamp(2.5rem, 1.5rem + 5vw, 5.25rem)',  { lineHeight: '1.02' }],
        h1:      ['clamp(2rem, 1.3rem + 3.2vw, 3.75rem)',  { lineHeight: '1.08' }],
        h2:      ['clamp(1.75rem, 1.2rem + 2.2vw, 2.75rem)', { lineHeight: '1.12' }],
        h3:      ['clamp(1.375rem, 1.1rem + 1.1vw, 1.875rem)', { lineHeight: '1.2' }],
      },
      letterSpacing: {
        'tight-2': '-0.025em',
        'tight-3': '-0.035em',
        eyebrow:   '0.2em',
      },
      // Easing tokens — Spec point 1
      transitionTimingFunction: {
        emil:      'cubic-bezier(0.32, 0.72, 0, 1)',
        'out-expo':'cubic-bezier(0.16, 1, 0.3, 1)',
        spring:    'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      // Duration tokens — Spec point 2
      transitionDuration: {
        450: '450ms',
        600: '600ms',
        800: '800ms',
        900: '900ms',
      },
      // Tinted shadows — Spec point 8 (rgb is dark brand text 45,45,58)
      boxShadow: {
        'brand-xs':   '0 1px 2px rgba(45,45,58,0.06)',
        'brand-sm':   '0 2px 8px rgba(45,45,58,0.06), 0 1px 2px rgba(45,45,58,0.04)',
        'brand-md':   '0 8px 24px rgba(45,45,58,0.08), 0 2px 6px rgba(45,45,58,0.05)',
        'brand-lg':   '0 20px 48px rgba(45,45,58,0.12), 0 4px 12px rgba(45,45,58,0.06)',
        'brand-xl':   '0 32px 72px rgba(45,45,58,0.16), 0 8px 20px rgba(45,45,58,0.08)',
        'brand-glow': '0 0 0 6px rgba(155,109,191,0.08), 0 12px 32px rgba(155,109,191,0.22)',
      },
      backgroundSize: {
        220: '220% 100%',
      },
      // Keyframes — Spec point 18
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '33%':      { transform: 'translateY(-8px) rotate(1deg)' },
          '66%':      { transform: 'translateY(4px) rotate(-1deg)' },
        },
        gradientDrift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%':      { backgroundPosition: '100% 50%' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%':      { opacity: '0.7', transform: 'scale(1.05)' },
        },
        rippleRing: {
          '0%':   { transform: 'scale(1)',   opacity: '0.6' },
          '100%': { transform: 'scale(2.6)', opacity: '0' },
        },
        scrollDraw: {
          '0%':     { transform: 'scaleY(0)', transformOrigin: 'top' },
          '50%':    { transform: 'scaleY(1)', transformOrigin: 'top' },
          '50.01%': { transformOrigin: 'bottom' },
          '100%':   { transform: 'scaleY(0)', transformOrigin: 'bottom' },
        },
      },
      animation: {
        float:             'float 6s ease-in-out infinite',
        'float-delayed':   'float 6s ease-in-out 2s infinite',
        'gradient-drift':  'gradientDrift 8s ease-in-out infinite',
        shimmer:           'shimmer 6s ease-in-out infinite',
        'pulse-soft':      'pulseSoft 4s ease-in-out infinite',
        ripple:            'rippleRing 2.6s cubic-bezier(0.16, 1, 0.3, 1) infinite',
        'ripple-delay':    'rippleRing 2.6s cubic-bezier(0.16, 1, 0.3, 1) 1.3s infinite',
        'scroll-draw':     'scrollDraw 2.4s cubic-bezier(0.32, 0.72, 0, 1) infinite',
      },
    },
  },
  plugins: [],
}

export default config
