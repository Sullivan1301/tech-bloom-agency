import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                // Brand Extraction Palette
                'brand-primary': '#384B70',
                'brand-red-rose': '#C94A6B',
                'brand-red-cherry': '#B8001F',
                'brand-dark-blue': '#0D2A40',
                'brand-purple': '#623255',
                'brand-burgundy': '#841F40',
                'brand-gray': '#6B7280',
                'brand-light-gray': '#E5E7EB',
                'brand-pale-pink': '#F5DDE1',
                'brand-bg-soft': '#FBF2F4',
                
                // Semantic aliases
                'primary': '#384B70',
                'secondary': '#6B7280',
                'background': '#FFFFFF',
                'foreground': '#0D2A40',
            },
            borderRadius: {
                'agency-xs': '4px',
                'agency-sm': '12px',
                'agency-md': '16px',
                'agency-lg': '24px',
                'full': '9999px',
            },
            fontFamily: {
                'sans': ['var(--font-inter)', 'system-ui', 'sans-serif'],
                'serif': ['var(--font-bitter)', 'Georgia', 'serif'],
                'display': ['var(--font-bitter)', 'Georgia', 'serif'],
            },
            container: {
                center: true,
                padding: {
                    DEFAULT: '1rem',
                    sm: '1.5rem',
                    lg: '2rem',
                },
                screens: {
                    sm: '640px',
                    md: '768px',
                    lg: '1024px',
                    xl: '1280px',
                },
            },
        },
    },
    plugins: [],
}

export default config;