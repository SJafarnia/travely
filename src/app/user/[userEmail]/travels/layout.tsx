import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Travels',
    description: 'Travels Page',
};

export default function Layout({
    children,
    modal,
}: {
    children: React.ReactNode;
    modal: React.ReactNode;
}) {
    return (
        <>
            {children}
            {modal}
        </>
    );
}
