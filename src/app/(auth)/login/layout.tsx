import { createUser } from '@/lib/db/queries/createQueries';
import { getUserByEmailOrUsername } from '@/lib/db/queries/getQueries';
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
            user: { email, image },
        } = session;

        const currentUser = await getUserByEmailOrUsername(email);

        if (!currentUser) {
            // TODO: change accessLevel yo BASIC in production
            const newUser = await createUser(email, image, 'ADMIN');
        }
        redirect('/');
    }

    return <div>{children}</div>;
}
