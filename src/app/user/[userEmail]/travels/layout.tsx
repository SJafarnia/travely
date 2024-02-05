import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Travels',
    description: 'Travels Page',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode,
}) {
    return (
        <>
            {children}
        </>
    )
}
