import type { Metadata } from 'next';

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
