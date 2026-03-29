import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          base: "var(--bg-base)",
          surface: "var(--bg-surface)",
          elevated: "var(--bg-elevated)",
          overlay: "var(--bg-overlay)",
          light: "var(--bg-light)",
          "light-card": "var(--bg-light-card)",
        },
        text: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          muted: "var(--text-muted)",
          inverse: "var(--text-inverse)",
          light: "var(--text-light)",
          "light-secondary": "var(--text-light-secondary)",
        },
        accent: {
          rose: "var(--accent-rose)",
          warm: "var(--accent-warm)",
          glow: "var(--accent-glow)",
        },
        status: {
          online: "var(--status-online)",
        },
        border: {
          subtle: "var(--border-subtle)",
          default: "var(--border-default)",
          strong: "var(--border-strong)",
          accent: "var(--border-accent)",
        },
      },
      fontFamily: {
        display: ["var(--font-syne)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(32px, 5vw, 48px)", { lineHeight: "1.1", letterSpacing: "-0.03em" }],
        "display-lg": ["clamp(26px, 4vw, 36px)", { lineHeight: "1.12", letterSpacing: "-0.025em" }],
        "display-md": ["clamp(22px, 3vw, 28px)", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
        "display-sm": ["clamp(18px, 2.5vw, 22px)", { lineHeight: "1.2", letterSpacing: "-0.015em" }],
        "body-lg": ["17px", "1.65"],
        "body-md": ["15px", "1.6"],
        "body-sm": ["13px", "1.55"],
        "body-xs": ["11px", "1.5"],
      },
      letterSpacing: {
        tighter: "-0.03em",
        tight: "-0.02em",
        normal: "0em",
        caps: "0.08em",
      },
      spacing: {
        "base-unit": "4px",
        section: "clamp(64px, 8vw, 128px)",
      },
      borderRadius: {
        sm: "6px",
        md: "12px",
        lg: "16px",
        xl: "24px",
        full: "9999px",
      },
      boxShadow: {
        card: "0 1px 3px rgba(0,0,0,0.4), 0 4px 16px rgba(0,0,0,0.2)",
        hover: "0 4px 24px rgba(0,0,0,0.5), 0 1px 4px rgba(0,0,0,0.3)",
        accent: "0 0 0 1px var(--border-accent), 0 4px 20px rgba(183,110,121,0.08)",
        glow: "0 0 40px rgba(183,110,121,0.15)",
      },
      maxWidth: {
        site: "1200px",
        prose: "680px",
      },
      transitionTimingFunction: {
        default: "cubic-bezier(0.4, 0, 0.2, 1)",
        out: "cubic-bezier(0, 0, 0.2, 1)",
        in: "cubic-bezier(0.4, 0, 1, 1)",
      },
      zIndex: {
        base: "0",
        raised: "10",
        overlay: "50",
        navbar: "100",
        modal: "200",
      },
      backgroundImage: {
        grain:
          "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.035) 0, transparent 28%), radial-gradient(circle at 80% 0%, rgba(183,110,121,0.08) 0, transparent 22%), linear-gradient(180deg, rgba(255,255,255,0.015), rgba(255,255,255,0))",
      },
      keyframes: {
        "pulse-dot": {
          "0%, 100%": { transform: "scale(1)", opacity: "0.9" },
          "50%": { transform: "scale(1.15)", opacity: "0.4" },
        },
        "scroll-bounce": {
          "0%, 100%": { transform: "translateY(0)", opacity: "0.65" },
          "50%": { transform: "translateY(6px)", opacity: "1" },
        },
      },
      animation: {
        "pulse-dot": "pulse-dot 2s ease infinite",
        "scroll-bounce": "scroll-bounce 1.5s ease infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
