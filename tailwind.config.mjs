/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Urbanist", system-UI, sans-serif'],
      },
      container: {
        padding: "2rem",
        center: true,
      },
      colors: {
        background: "#F3D4A8",
        text: "#180E0F",
        accent: "#64748B",
      },
    },
  },
  plugins: [],
};
