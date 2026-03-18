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
    },
  },
  plugins: [],
}

export default config
