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
                // TBA Colors (référence vers les CSS variables)
                primary: 'var(--color-primary)',
                darkprimary: 'var(--color-darkprimary)',
                lightPrimary: 'var(--color-lightPrimary)',
                accent: 'var(--color-accent)',
                'accent-light': 'var(--color-accent-light)',
                beige: 'var(--color-beige)',

                // Legacy template colors (pour compatibilité)
                SlateBlue: 'var(--color-SlateBlue)',
                BorderLine: 'var(--color-BorderLine)',
                AliceBlue: 'var(--color-AliceBlue)',
                LightApricot: 'var(--color-LightApricot)',
                secondary: 'var(--color-secondary)',

                // Dark mode
                darkmode: 'var(--color-darkmode)',
                darklight: 'var(--color-darklight)',
                darktext: 'var(--color-darktext)',
                dark_border: 'var(--color-dark_border)',
            },
            fontFamily: {
                sans: ['var(--font-montserrat)', 'sans-serif'],
                bitter: ['var(--font-bitter)', 'serif'],
            },
            maxWidth: {
                container: 'var(--spacing-container)',
            },
            boxShadow: {
                darkmd: '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)',
            },
        },
    },
    plugins: [],
}

export default config