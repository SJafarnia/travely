import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            backgroundColor: {
                'theme-gradient':
                    'linear-gradient(rgba(34,139,34,1) 0%, rgba(253,187,45,1) 100%);',
            },
            colors: {
                forestGreen: '#228B22',
                forestGreenShade1: '#228b22',
                richBlack: '#010203',
                silver: '#C0C0C0',
                goldenRod: '#DAA520',
                creamWhite: '#FFFDD0',
                Night: '#12130F',
                honoluluBlue: '#2176AE',
                PayneGray: '#3B7080',
                jet: '#333333',
                navyBlue: '#001F3F',
            },
            animation: {
                fadeOut: 'fadeOut 500ms ease-in-out',
            },
            keyframes: {
                fadeOut: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
            },
            fontFamily: {
                caveat: ['var(--font-caveat)'],
                montserrat: ['var(--font-montserrat)'],
                poppins: ['var(--font-poppins)'],
            },
        },
    },
    plugins: [],
};
export default config;
