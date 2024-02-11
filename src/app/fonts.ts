import { Inter, Caveat, Montserrat, Poppins } from 'next/font/google';

export const montserrat = Montserrat({
    subsets: ['cyrillic'],
    variable: '--font-montserrat',
    display: 'swap',
});
export const caveat = Caveat({
    subsets: ['cyrillic', 'latin'],
    variable: '--font-caveat',
    display: 'swap',
});

export const poppins = Poppins({
    subsets: ['latin', 'devanagari'],
    weight: ['400', '700'],
    variable: '--font-poppins',
    display: 'swap',
});
