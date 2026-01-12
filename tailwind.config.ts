import type { Config } from "tailwindcss";

const config: Config = {
  // QUAN TRỌNG: Dòng này để kích hoạt chế độ tối bằng nút bấm
  darkMode: 'class', 

  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // Nếu bạn có thư mục src thì bỏ comment dòng dưới
    // "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;