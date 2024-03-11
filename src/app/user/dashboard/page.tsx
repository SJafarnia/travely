import FollowingsMain from '@/components/modules/Modals/followingsModal/FollowingsMain';
import DashboardProfileDetails from '@/components/modules/dashboard/DashboardProfileDetails';
import Link from 'next/link';

const Button = ({ as, children, filled, secondary, ...rest }: { as?: any, children?: any, filled?: any, secondary?: any }) => {
    const that = {
        as
    }
    return (
        <that.as className={`dir-control ${secondary ? 'dir-control--secondary' : ''} ${filled ? 'dir-control--filled' : ''}`} {...rest} >
            {children}
            <span />
            <span />
            <span />
            <span />
            <b aria-hidden="true">{children}</b>
            <b aria-hidden="true">{children}</b>
            <b aria-hidden="true">{children}</b>
            <b aria-hidden="true">{children}</b>
        </that.as>
    )
}

Button.defaultProps = {
    as: 'button'
}

export default async function page() {
    return (
        <div className='mx-auto my-16 w-11/12 animate-fadeOut bg-Night/90 p-8 text-white'>
            <DashboardProfileDetails
                styles='flex-row flex [&>div]:mx-2'
                button={
                    <div className='mt-4 flex flex-col justify-end gap-4'>
                        <Link
                            href={'/user/dashboard/profile'}
                            className='h-auto z-10 mt-2 rounded-md relative'
                        >
                            <Button >Edit</Button>
                        </Link>
                        <FollowingsMain />
                    </div>
                }
            />
        </div>
    );
}
