import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                // Brand Colors
                'brand-blue-dark': '#0D2A40',
                'brand-blue': '#384B70',
                'brand-blue-petrol': '#507687',
                'brand-beige': '#FCFAEE',
                'brand-red-cherry': '#B8001F',
                'brand-red-rose': '#C94A6B',

                // Semantic
                'primary': '#384B70',
                'secondary': '#507687',
                'accent': '#B8001F',
                'accent-light': '#C94A6B',
                'beige': '#FCFAEE',
                'darkprimary': '#0D2A40',

                // Dark Mode
                'darkmode': '#0B1220',
                'darklight': '#111827',
                'darktext': '#E5E7EB',
                'dark_border': '#1F2933',

                // Legacy
                'SlateBlue': '#6B7CB5',
                'BorderLine': '#E5E7EB',
                'AliceBlue': '#F1F5F9',
                'LightApricot': '#FAD7A0',
            },
            fontFamily: {
                sans: ['var(--font-montserrat)', 'system-ui', 'sans-serif'],
                bitter: ['var(--font-bitter)', 'Georgia', 'serif'],
                heading: ['var(--font-montserrat)', 'system-ui', 'sans-serif'],
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
                'linear-to-br': 'linear-gradient(to bottom right, var(--tw-gradient-stops))',
            },
            boxShadow: {
                'darkmd': '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)',
            },
        },
    },
    plugins: [],
}

export default config