import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: { 600: "#303032" },
        text: { 
          primary: "#202022", 
          secondary: "#5E5E60", 
          subdued: "#909092", 
          info: "#1A6AED", 
          label: "#464649", 
          neutral: "#F2F2F3",
          cta: "#FEFEFF" ,
          error: "#FF401E"
        },
        primary: { 100: "#824FE7", hover: "#A277FF" },
        secondary: {
          hover: "#303032",
        },
        tertiary: {
          highlight: "#DADADB",
          dim: "#E6E6E7",
          hover: "#F2F2F3",
        },
        orange: { 400: "#FFB693", 500: "#FF8C51" },
        purple: { 400: "#D2BCFF", 500: "#BA9AFF" },
        bg: { invert: "#F2F2F3", overlay: "#46464929" },
        surface: { 
          active: "#F2F2F3", 
          bgInvert: "#FEFEFF", 
          info: "#EAF3FF", 
          neutral: "#202022",
          subdue: "#E6E6E7"
        },
        border: {
          light: "rgba(218, 218, 219, 1)",
          error: "rgba(255, 64, 30, 1)",
        }
      },
      boxShadow: {
        'active-input': '0px 0px 0px 4px #8957EF33',
        'card': '0px 0.5px 0px 0px rgba(86, 94, 113, 0.08) 0px 0.5px 0px 0px rgba(63, 71, 89, 0.12) 0px 1px 0.5px 0px rgba(0, 0, 0, 0.16) ',
        'error': '0px 0px 0px 4px rgba(255, 64, 30, 0.24)',
        'primaryBtn-hover': '0px 0.5px 0px 0px #565E7114 0px 0.5px 0px 0px #3F47591F 0px 1px 0.5px 0px #00000029',
        'primaryBtn-active': '0px -1px 2px 0px #222C3B7A inset',
        'primaryBtn-focus': '0px 0px 0px 4px #8957EF33',
        'secBtn-hover': '0px 0.5px 0px 0px #565E7114 0px 0.5px 0px 0px #3F47591F 0px 1px 0.5px 0px #00000029',
        'secBtn-active': '0px -1px 2px 0px #222C3B7A inset',
        'secBtn-focus': '0px 0px 0px 4px #0B0A0C29',
      },
    },
  },
};
export default config;
