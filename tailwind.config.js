/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'title-primary': '#05264e',
        'description-primary': '#4f5e64',
        'description-alternative': '#002c3fb3',
        'link-primary': '#022f5d',
        'link-active': '#1ca774',
        'money-primary': '#FF8B00'
      },
      backgroundColor: {
        'breadcrumb-primary': '#016551',
        'button-primary': '#1ca774'
      },
      borderColor: {
        'default': '#dee2e6'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
