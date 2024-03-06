import { createUser, getUserByEmailOrUsername } from '@/lib/db/queries';
import type { Metadata } from 'next';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
    title: 'Login',
    description: 'Login Page',
};

export default async function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    const session = await getServerSession();

    if (session?.user?.email) {
        const {
            user: { email, image, name },
        } = session;

        const currentUser = await getUserByEmailOrUsername(email);

        if (!currentUser) {
            console.log('user not found');
            // TODO: change accessLevel yo BASIC in production
            const newUser = await createUser(email, image, 'ADMIN');
        }
        redirect('/');
    }

    return <div>{children}</div>;
}
