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
                // Couleurs de marque principales
                'brand-blue-dark': '#0D2A40',
                'brand-blue': '#384B70',
                'brand-blue-petrol': '#507687',
                'brand-beige': '#FCFAEE',
                'brand-red-cherry': '#B8001F',
                'brand-red-rose': '#C94A6B',
                
                // Alias sémantiques (recommandés pour une meilleure lisibilité)
                'primary': '#384B70',
                'secondary': '#507687',
                'accent': '#B8001F',
                'accent-light': '#C94A6B',
                'beige': '#FCFAEE',
                'background': '#FCFAEE',
                'text-primary': '#0D2A40',
                'text-secondary': '#384B70',
            },
            fontFamily: {
                // Polices principales
                'sans': ['var(--font-inter)', 'system-ui', 'sans-serif'],
                'serif': ['var(--font-bitter)', 'Georgia', 'serif'],
                
                // Alias sémantiques
                'body': ['var(--font-inter)', 'system-ui', 'sans-serif'],
                'heading': ['var(--font-bitter)', 'Georgia', 'serif'],
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