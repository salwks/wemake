import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "./app/**/*.{html,js,ts,jsx,tsx}",
    "./welcome/**/*.{html,js,ts,jsx,tsx}", // welcome 폴더 추가
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
