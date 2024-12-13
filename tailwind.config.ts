import type { Config } from "tailwindcss"; 
import plugin from "tailwindcss/plugin";
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        border: "hsl(var(--border))",
      },
    },
  },
  plugins: [
    plugin(function ({
      addUtilities,
      theme,
    }: {
      addUtilities: (utilities: Record<string, any>) => void;
      theme: (path: string) => any;
    }) {
      addUtilities({
        ".border-border": {
          borderColor: theme("colors.border"),
        },
      });
    }),
  ],
} satisfies Config;
