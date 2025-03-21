/** @type {import('tailwindcss').Config} */
import {nextui} from "@nextui-org/react";
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      screens: {
          'sm': '640px',
          'md': '768px',
          'lg': '1024px',
          'xl': '1280px',
      }
    },
    extend: {
      colors: {
        'title-primary': '#05264e',
        'title-muted': '#728ca3',
        'description-primary': '#4f5e64',
        'description-alternative': '#002c3fb3',
        'span-primary': '#6a828f',
        'link-primary': '#022f5d',
        'link-active': '#1ca774',
        'money-primary': '#FF8B00',
        'label-primary': '#132227',
        'button-primary': '#24486c',
      },
      backgroundColor: {
        'section-primary': '#016551',
        'section-alternative': '#f7f9fc',
        'span-primary': '#f3f6fa',
        'button-primary': '#1ca774',
        'gray-alternative': '#f1f5f8',
        'icon-primary': '#3d9b66',
        'detail-primary': '#081721'
      },
      borderColor: {
        'default': '#dee2e6',
        'alternative': '#e1e8e5'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  darkMode: 'class',
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            success: {
              DEFAULT: '#1ca774',
              foreground: '#FFF',
            },
          },
        },
      },
    }),
  ],
}
