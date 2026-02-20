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
                ctr: {
                    slate: "#1e293b",   // Dark slate / industrial base
                    blue: "#0ea5e9",    // Electric blue accent
                    cyan: "#06b6d4",    // Cyan for gradient depth
                    indigo: "#6366f1",  // Indigo for gradient richness
                    light: "#f8fafc",   // Clean background
                    dark: "#0f172a",    // Deep background
                },
            },
            fontFamily: {
                sans: ["var(--font-inter)"],
                heading: ["var(--font-manrope)"],
            },
            boxShadow: {
                'glass': '0 4px 30px rgba(0, 0, 0, 0.06), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                'glass-lg': '0 8px 40px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.15)',
                'glass-glow': '0 0 40px rgba(14, 165, 233, 0.15), 0 0 80px rgba(14, 165, 233, 0.05)',
            },
            backdropBlur: {
                'glass': '16px',
                'glass-lg': '24px',
            },
            animation: {
                'gradient-shift': 'gradient-shift 8s ease infinite',
                'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
            },
        },
    },
    plugins: [],
};
export default config;
