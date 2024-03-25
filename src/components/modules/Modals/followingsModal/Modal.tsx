'use client';
import Image from 'next/image';
import useLockModalScrollHook from '../travelPartModal/hooks/useLockModalScrollHook';
import useCloseModal from './hooks/useCloseModal';
import ModalFollowButton from './ModalFollowButton';

function Modal({
    followingData,
    followings,
    followers,
    status,
    showModal,
    modalSetter,
}: {
    followingData: {
        _count: {
            followings: number;
            followers: number;
        };
        };
        followings: [];
        followers: [];
        status: 'followings' | 'followers';
        showModal: 'followings' | 'followers' | '';
        modalSetter: React.Dispatch<
            React.SetStateAction<'' | 'followings' | 'followers'>
        >;
}) {
    const isActive = showModal != null;

    useLockModalScrollHook(isActive);
    useCloseModal(modalSetter);

    return (
        <div className='absolute inset-0 z-50 flex min-h-lvh bg-Night/60'>
            <div className='ModalCloser box-border flex grow flex-col items-stretch justify-center'>
                <div className=' pointer-events-none box-border flex items-start justify-center'>
                    <div className='pointer-events-auto relative z-0 flex flex-col overflow-x-visible overflow-y-visible outline-none'>
                        <div className='relative z-10 flex items-center justify-center'>
                            <div className='relative items-stretch overflow-x-hidden overflow-y-hidden rounded-2xl border-[0.5px] border-solid border-slate-500 bg-Night'>
                                <div className='relative flex max-h-[calc(100svh-64px)] min-h-[112px] w-[520px] flex-col items-center justify-center overflow-x-hidden overflow-y-hidden'>
                                    <div className='header absolute top-0 z-10 flex min-h-[60px] w-full items-center justify-center overflow-x-hidden rounded-t-2xl bg-richBlack'>
                                        <div className='grid w-full grid-cols-2 items-center'>
                                            <div
                                                onClick={() =>
                                                    modalSetter('followers')
                                                }
                                                className={`${status == 'followers' ? 'border-b-2 border-b-slate-200' : 'border-b-[1px] border-b-slate-500'} relative border-solid text-center`}
                                            >
                                                <div className='m-0 flex h-[60px] cursor-pointer touch-manipulation select-none flex-col justify-center border-0 bg-transparent p-0 outline-none'>
                                                    <span className='relative min-w-0 select-none overflow-x-visible overflow-y-visible whitespace-pre-line break-words text-center text-base text-white'>
                                                        Followers
                                                    </span>
                                                    <span className='relative min-w-0 select-none overflow-x-visible overflow-y-visible whitespace-pre-line break-words text-center text-xs text-white'>
                                                        {followingData?._count
                                                            ?.followers ||
                                                            (followers.length &&
                                                                followers.length)}
                                                    </span>
                                                </div>
                                            </div>
                                            <div
                                                onClick={() => {
                                                    modalSetter('followings');
                                                }}
                                                className={`${status == 'followings' ? 'border-b-2 border-b-slate-200' : 'border-b-[1px] border-b-slate-500'} relative border-solid text-center`}
                                            >
                                                <div className='m-0 flex h-[60px] cursor-pointer touch-manipulation select-none flex-col justify-center border-0 bg-transparent p-0 outline-none'>
                                                    <span
                                                        className={`relative min-w-0 select-none overflow-x-visible overflow-y-visible whitespace-pre-line break-words text-center text-base text-white`}
                                                    >
                                                        Following
                                                    </span>
                                                    <span className='relative min-w-0 select-none overflow-x-visible overflow-y-visible whitespace-pre-line break-words text-center text-xs text-white'>
                                                        {followingData?._count
                                                            ?.followings ||
                                                            (followings?.length &&
                                                                followings.length)}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='main relative z-0 flex h-full w-full flex-col overflow-y-auto overflow-x-hidden overscroll-y-contain pb-1'>
                                        <div className='relative flex grow flex-col last:mb-4'>
                                            <div className='spacerForHeader min-h-[60px]'></div>
                                            {status == 'followers' &&
                                                followers?.map(
                                                    (follower: {
                                                        follower: {
                                                            email: string;
                                                            username: string;
                                                            profileImg: string;
                                                        };
                                                    }) => {
                                                        return (
                                                            <div className='pointer-events-auto flex cursor-pointer pl-4 pt-4'>
                                                                <div className='imgContainer relative h-fit cursor-pointer pb-[2px] pr-3 pt-1'>
                                                                    <div className='size-9 rounded-full'>
                                                                        <Image
                                                                            src={
                                                                                follower
                                                                                    .follower
                                                                                    .profileImg
                                                                            }
                                                                            alt='profileImage'
                                                                            width={
                                                                                36
                                                                            }
                                                                            height={
                                                                                36
                                                                            }
                                                                            className='aspect-square overflow-clip rounded-full object-cover outline-[0.5px] ring-offset-1'
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className='infoContainer flex min-w-0 grow cursor-pointer flex-col border-b-[0.5px] border-solid border-b-slate-500 pr-4'>
                                                                    <div className=' flex grow items-center justify-between pb-4'>
                                                                        <div className=' flex h-11 min-w-0 flex-col justify-center pr-2'>
                                                                            <div className='flex items-center'>
                                                                                <span className='m-0 flex items-center p-0 text-white'>
                                                                                    <a
                                                                                        href=''
                                                                                        className=''
                                                                                    >
                                                                                        <span className='max-w-full overflow-x-visible overflow-y-visible whitespace-pre-line text-left text-base font-semibold'>
                                                                                            {
                                                                                                follower
                                                                                                    .follower
                                                                                                    .email
                                                                                            }
                                                                                        </span>
                                                                                    </a>
                                                                                </span>
                                                                            </div>
                                                                            {follower
                                                                                .follower
                                                                                ?.username && (
                                                                                    <div className='flex items-center'>
                                                                                        <span className='min-w-0 max-w-full overflow-x-visible overflow-y-visible text-sm'>
                                                                                            {
                                                                                                follower
                                                                                                    .follower
                                                                                                    ?.username
                                                                                            }
                                                                                    </span>
                                                                                </div>
                                                                                )}
                                                                        </div>
                                                                        <ModalFollowButton
                                                                            username={
                                                                                follower
                                                                                    ?.follower
                                                                                    ?.email
                                                                            }
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        );
                                                    }
                                                )}

                                            {status == 'followings' &&
                                                followings?.map(
                                                    (followed_user: {
                                                        followed_user: {
                                                            email: string;
                                                            username: string;
                                                            profileImg: string;
                                                        };
                                                    }) => {
                                                        return (
                                                            <div className='pointer-events-auto flex cursor-pointer pl-4 pt-4'>
                                                                <div className='imgContainer relative h-fit cursor-pointer pb-[2px] pr-3 pt-1'>
                                                                    <div className='size-9 rounded-full'>
                                                                        <Image
                                                                            src={
                                                                                followed_user
                                                                                    ?.followed_user
                                                                                    ?.profileImg
                                                                            }
                                                                            alt='profileImage'
                                                                            width={
                                                                                36
                                                                            }
                                                                            height={
                                                                                36
                                                                            }
                                                                            className='aspect-square overflow-clip rounded-full object-cover outline-[0.5px] ring-offset-1'
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className='infoContainer flex min-w-0 grow cursor-pointer flex-col border-b-[0.5px] border-solid border-b-slate-500 pr-4'>
                                                                    <div className=' flex grow items-center justify-between pb-4'>
                                                                        <div className=' flex h-11 min-w-0 flex-col justify-center pr-2'>
                                                                            <div className='flex items-center'>
                                                                                <span className='m-0 flex items-center p-0 text-white'>
                                                                                    <a
                                                                                        href=''
                                                                                        className=''
                                                                                    >
                                                                                        <span className='max-w-full overflow-x-visible overflow-y-visible whitespace-pre-line text-left text-base font-semibold'>
                                                                                            {
                                                                                                followed_user
                                                                                                    ?.followed_user
                                                                                                    ?.email
                                                                                            }
                                                                                        </span>
                                                                                    </a>
                                                                                </span>
                                                                            </div>
                                                                            {followed_user
                                                                                .followed_user
                                                                                ?.username && (
                                                                                    <div className='flex items-center'>
                                                                                        <span className='min-w-0 max-w-full overflow-x-visible overflow-y-visible text-sm'>
                                                                                            follower.follower?.username
                                                                                        </span>
                                                                                    </div>
                                                                                )}
                                                                        </div>
                                                                        <ModalFollowButton
                                                                            username={
                                                                                followed_user
                                                                                    ?.followed_user?.email
                                                                            }
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        );
                                                    }
                                                )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;

function setState(arg0: boolean): [any, any] {
    throw new Error('Function not implemented.');
}
