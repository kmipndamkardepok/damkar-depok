// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class", '[data-theme="dark"]'],
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: "var(--font-sans)",
        mono: "var(--font-mono)",
        display: "var(--font-display)",
      },
      fontSize: {
        "display-2xl": "var(--text-display-2xl)",
        "display-xl": "var(--text-display-xl)",
        "display-lg": "var(--text-display-lg)",
        "display-md": "var(--text-display-md)",
        "display-sm": "var(--text-display-sm)",
      },
      colors: {
        background: "var(--neutral-bg)",
        surface: "var(--neutral-soft-normal)",

        primary: {
          DEFAULT: "var(--primary-solid)",
          hover: "var(--primary-solid-hover)",
          soft: "var(--primary-soft-bg)",
          "soft-hover": "var(--primary-soft-hover)",
          "soft-pressed": "var(--primary-soft-pressed)",
          fg: "var(--primary-fg)",
        },
        secondary: {
          DEFAULT: "var(--secondary-solid)",
          hover: "var(--secondary-solid-hover)",
          soft: "var(--secondary-soft-bg)",
          "soft-hover": "var(--secondary-soft-hover)",
          "soft-pressed": "var(--secondary-soft-pressed)",
          fg: "var(--secondary-fg)",
        },
        border: {
          subtle: "var(--neutral-border-subtle)",
          DEFAULT: "var(--neutral-border-default)",
          strong: "var(--neutral-border-strong)",
        },
        text: {
          primary: "var(--color-text-primary)",
          secondary: "var(--color-text-secondary)",
          muted: "var(--color-text-muted)",
          inverse: "var(--color-text-inverse)",
        },
        report: {
          fire: "var(--report-fire)",
          "fire-soft": "var(--report-fire-soft)",
          rescue: "var(--report-rescue)",
          "rescue-soft": "var(--report-rescue-soft)",
          other: "var(--report-other)",
          "other-soft": "var(--report-other-soft)",
        },
        status: {
          success: "var(--success)",
          warning: "var(--warning)",
          danger: "var(--danger)",
        },
      },
      boxShadow: {
        xs: "var(--shadow-xs)",
        sm: "var(--shadow-sm)",
        md: "var(--shadow-md)",
        lg: "var(--shadow-lg)",
        xl: "var(--shadow-xl)",
        "2xl": "var(--shadow-2xl)",
        inner: "var(--shadow-inner)",
        card: "var(--shadow-card)",
        "card-hover": "var(--shadow-card-hover)",
        button: "var(--shadow-button)",
        "button-hover": "var(--shadow-button-hover)",
        dropdown: "var(--shadow-dropdown)",
        modal: "var(--shadow-modal)",
        tooltip: "var(--shadow-tooltip)",
        focus: "var(--focus-ring)",
      },
      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
        full: "var(--radius-full)",
      },
    },
  },
  plugins: [],
};

export default config;