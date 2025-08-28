
import type { Config } from 'tailwindcss'

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        status: {
          success: "var(--success)",
          warning: "var(--warning)",
          danger: "var(--danger)",
        },
      },
    },
    fontFamily: {
      sans: ["var(--font-inter)", "sans-serif"],
    },
  },
  plugins: [],
}
export default config