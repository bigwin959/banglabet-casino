/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "var(--color-primary)",
                secondary: "var(--color-secondary)",
                cta: "var(--color-cta)",
                background: "var(--color-background)",
                text: "var(--color-text)",
                heading: "var(--color-heading)",
            },
            fontFamily: {
                heading: ["var(--font-chakra)", "sans-serif"],
                body: ["var(--font-chakra)", "sans-serif"],
            },
            animation: {
                "neon-pulse": "neon-pulse 2s ease-in-out infinite",
                glitch: "glitch 0.3s ease-in-out",
                scanline: "scanline 8s linear infinite",
            },
            keyframes: {
                "neon-pulse": {
                    "0%, 100%": {
                        textShadow:
                            "0 0 10px #7C3AED, 0 0 20px #7C3AED, 0 0 30px #7C3AED, 0 0 40px #7C3AED",
                    },
                    "50%": {
                        textShadow:
                            "0 0 5px #7C3AED, 0 0 10px #7C3AED, 0 0 15px #7C3AED, 0 0 20px #7C3AED",
                    },
                },
                glitch: {
                    "0%": { transform: "translate(0)" },
                    "20%": { transform: "translate(-2px, 2px)" },
                    "40%": { transform: "translate(-2px, -2px)" },
                    "60%": { transform: "translate(2px, 2px)" },
                    "80%": { transform: "translate(2px, -2px)" },
                    "100%": { transform: "translate(0)" },
                },
                scanline: {
                    "0%": { transform: "translateY(-100%)" },
                    "100%": { transform: "translateY(100%)" },
                },
            },
        },
    },
    plugins: [],
};
