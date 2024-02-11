import { getUserByEmail } from '@/lib/db/queries';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

// export const metadata: Metadata = {
//     title: 'Travels',
//     description: 'Travels Page',
// }

export default async function Layout({
    children,
    params: { userEmail },
}: {
    children: React.ReactNode;
    params: { userEmail: string };
}) {
    const user = await getUserByEmail(userEmail);

    if (!user) {
        return notFound();
    }

    return <>{children}</>;
}
