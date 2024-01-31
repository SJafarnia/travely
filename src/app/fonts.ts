import { Inter, Caveat, Montserrat } from 'next/font/google'

export const montserrat = Montserrat({
    subsets: ["cyrillic"],
    variable: '--font-montserrat',
})
export const caveat = Caveat({
    subsets: ['cyrillic', "latin"],
    variable: '--font-caveat',
})
