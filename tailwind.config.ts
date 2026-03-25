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
                // Palette TBA officielle
                'navy': '#0D2A40',
                'blue': '#384B70',
                'teal': '#507687',
                'red': '#B8001F',
                'red-hover': '#960019',
                'beige': '#FCFAEE',
                'gray': '#6B7280',
                'white': '#FFFFFF',
                
                // Legacy support (backward compatibility)
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
            },
            borderRadius: {
                'sm': 'var(--radius-sm)',
                'md': 'var(--radius-md)',
                'lg': 'var(--radius-lg)',
                'agency-xs': '4px',
                'agency-sm': '12px',
                'agency-md': '16px',
                'agency-lg': '24px',
                'full': '9999px',
            },
            fontFamily: {
                'heading': ['var(--font-heading)', 'Georgia', 'serif'],
                'body': ['var(--font-body)', 'system-ui', 'sans-serif'],
                'sans': ['var(--font-body)', 'system-ui', 'sans-serif'],
                'serif': ['var(--font-heading)', 'Georgia', 'serif'],
                'display': ['var(--font-heading)', 'Georgia', 'serif'],
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