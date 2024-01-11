import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      container: {
        padding: {
          DEFAULT: '12rem',
        },
      },
      colors: {
        primary: '#16ABF8',
        secondary: '#F4F4F4',
        dark: '#111111',
        gray: '#888888',
      },
    },
  },
  plugins: [],
};
export default config;
