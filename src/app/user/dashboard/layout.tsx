import type { Metadata } from 'next';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
    title: 'Dashboard',
    description: 'Dashboard Page',
};

export default async function Layout({
    children,
    settings,
    travels,
}: {
    children: React.ReactNode;
    settings: React.ReactNode;
    travels: React.ReactNode;
}) {

    const session = await getServerSession();

    if (!session?.user?.email) return redirect("/login");

    return (
        <div className='mx-auto my-10 grid max-w-4xl grid-cols-1 items-center justify-center align-middle [&>div]:rounded-md [&>div]:p-8'>
            {children}
            <div className='flex h-screen content-center justify-center gap-6 [&>div]:h-4/5 [&>div]:rounded-md [&>div]:p-4'>
                {settings}
                {travels}
            </div>
        </div>
    );
}
