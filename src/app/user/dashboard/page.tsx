import FollowingsMain from '@/components/modules/Modals/followingsModal/FollowingsMain';
import DashboardProfileDetails from '@/components/modules/dashboard/DashboardProfileDetails';
import { getFollowingData } from '@/lib/db/queries/getQueries';
import { getServerSession } from 'next-auth';
import Link from 'next/link';
import { notFound } from 'next/navigation';

const Button = ({
    as,
    children,
    filled,
    secondary,
    ...rest
}: {
    as?: any;
    children?: any;
    filled?: any;
    secondary?: any;
}) => {
    const that = {
        as,
    };
    return (
        <that.as
            className={`dir-control ${secondary ? 'dir-control--secondary' : ''} ${filled ? 'dir-control--filled' : ''}`}
            {...rest}
        >
            {children}
            <span />
            <span />
            <span />
            <span />
            <b aria-hidden='true'>{children}</b>
            <b aria-hidden='true'>{children}</b>
            <b aria-hidden='true'>{children}</b>
            <b aria-hidden='true'>{children}</b>
        </that.as>
    );
};

Button.defaultProps = {
    as: 'button',
};

export default async function page() {
    const session = await getServerSession();

    if (!session.user.email) return notFound();

    const followingData = await getFollowingData(session.user.email);

    return (
        <div className='mx-auto my-16 w-11/12 animate-fadeOut bg-Night/90 p-8 text-white'>
            <DashboardProfileDetails
                styles='flex-row flex [&>div]:mx-2'
                button={
                    <div className='mt-4 flex flex-col justify-end gap-4'>
                        <Link
                            href={'/user/dashboard/profile'}
                            className='relative z-10 mt-2 h-auto rounded-md'
                        >
                            <Button>Edit</Button>
                        </Link>
                        <FollowingsMain
                            username={session.user.email}
                            followingData={followingData}
                        />
                    </div>
                }
            />
        </div>
    );
}
