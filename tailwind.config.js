/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      transitionProperty: {
        width: 'width',
      },
      backgroundImage: {
        featured1: "url('public/IMG/NMS-home.png')",
      },
      fontFamily: {
        jetBrainsRegular: ['JetBrains Mono Regular', 'monospace'],
        jetBrainsSemibold: ['JetBrains Mono SemiBold', 'monospace'],
        jetBrainsExtraBold: ['JetBrains Mono ExtraBold', 'monospace'],
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
