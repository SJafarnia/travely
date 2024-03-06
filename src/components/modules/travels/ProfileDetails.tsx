'use client';
import useFetchUserData from '@/components/hooks/useFetchUserData';
import { useUserData } from '@/lib/zustand/store';
import Image from 'next/image';
import { followAction } from './followAction';

function ProfileDetails({
    styles,
    isDashboard,
    button,
    username
}: {
    styles?: string | null;
    isDashboard: boolean,
    username?: string,
    button?: React.ReactNode;
}) {
    useFetchUserData(username, isDashboard);
    // @ts-ignore
    const userData = useUserData((state) => state.userData);

    const followHandler = async () => {
        const followRes = await followAction(username)
        console.log({ followRes })
    }

    return (
        <div className={`${styles} flex w-full flex-row justify-start`}>
            <div className='flex w-1/2 justify-center'>
                {userData.profileImg ? (
                    <Image
                        loading='lazy'
                        src={userData.profileImg}
                        height={600}
                        width={600}
                        className='h-32 w-32 animate-fadeOut rounded-full'
                        alt='profileDetailPhoto'
                    />
                ) : (
                    <div className='h-32 w-32 animate-pulse rounded-full bg-white'></div>
                )}
            </div>
            <div className='flex w-full flex-grow flex-col justify-around gap-1'>
                {userData?.username || userData.email ? (
                    <span className=''>{userData?.username || userData.email}</span>
                ) : (
                    <span className='w-1/3 animate-pulse rounded-md bg-white p-3'></span>
                )}
                <div className='flex items-center'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={1.5}
                        stroke='currentColor'
                        className='h-4 w-4'
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
                        />
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z'
                        />
                    </svg>
                    <div className='ml-1 w-full text-sm'>
                        {userData?.username || userData.email ? (
                            <>
                                <span>California,</span> <span>LA</span>
                            </>
                        ) : (
                            <div className='m-1 w-1/3 animate-pulse rounded-md bg-white p-2'></div>
                        )}
                    </div>
                </div>

                <button onClick={followHandler} className='mt-2 rounded-md border border-creamWhite/30 bg-jet/40 p-1 text-white transition-all duration-150 ease-in-out hover:border-creamWhite/80 hover:bg-jet/70'>
                    Follow
                </button>

            </div>
        </div>
    );
}

export default ProfileDetails;
