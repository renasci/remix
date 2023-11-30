import type { Config } from 'tailwindcss'
import  defaultTheme  from 'tailwindcss/defaultTheme'
export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      'sm': '320px',
      'md': '768px',
      'lg': '1024px'
      
    },
    colors: {
      dark: {
        100: '#2f3550',
        200: '#2b314a'
      },
      yellow: {
        100: '#d8c459',
        200: '#b4a657'
      },
      mint: {
        100: '#bacba2',
        200: '#98ac72'
      }
    },
    extend: {
      fontFamily: {
        sans: ['Signika Negative', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
} satisfies Config

