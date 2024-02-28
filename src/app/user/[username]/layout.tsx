import { getUserByEmailOrUsername } from '@/lib/db/queries';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
    title: 'Travels',
    description: 'Travels Page',
};

export default async function Layout({
    children,
    params: { username },
}: {
    children: React.ReactNode;
    params: { username: string };
}) {
    const user = await getUserByEmailOrUsername(decodeURIComponent(username));

    if (!user) {
        return notFound();
    }

    return <>{children}</>;
}
