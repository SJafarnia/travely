import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Travel Part',
    description: 'Travel Part Page',
}

export default function RootLayout({
    children,
    modal
}: {
    children: React.ReactNode,
    modal: React.ReactNode
}) {
    return (
        <>
            {children}
            {modal}
        </>
    )
}
