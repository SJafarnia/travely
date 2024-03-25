import { useState } from 'react';
import useFetchFollowingData from '@/components/hooks/useFetchFollowingData';
import { followAction } from '../../travels/_actions/followAction';
import { unfollowAction } from '../../travels/_actions/unfollowAction';

function ModalFollowButton({ username }: { username: string }) {
    const [followingData, setFollowingData] = useState({
        isFollowing: null,
        id: null,
    });

    console.log({ followingData })
    useFetchFollowingData(username, setFollowingData);

    const followHandler = async () => {
        const res = await followAction(username);
        setFollowingData({ id: res.id, isFollowing: true });
    };
    const unfollowHandler = async () => {
        const res = await unfollowAction(followingData.id);
        setFollowingData({ id: null, isFollowing: false });
    };
    return (
        <>
            {followingData.isFollowing != null ? (
                followingData.isFollowing == true ? (
                    <button
                        onClick={unfollowHandler}
                        className='h-[34px] min-w-[104px] max-w-full shrink-0 animate-fadeOut cursor-pointer items-center justify-center whitespace-nowrap rounded-lg border-[1px] border-solid border-creamWhite/30 border-slate-500  text-sm font-semibold text-white transition-all duration-150 ease-in-out hover:border-creamWhite/80 hover:bg-red-500/70'
                    >
                        Unfollow
                    </button>
                ) : (
                    <button
                        onClick={followHandler}
                        className='h-[34px] min-w-[104px] max-w-full shrink-0 animate-fadeOut cursor-pointer items-center justify-center whitespace-nowrap rounded-lg border-[1px] border-solid border-creamWhite/30 border-slate-500 text-sm font-semibold text-white transition-all duration-150 ease-in-out hover:border-creamWhite/80'
                    >
                        Follow
                    </button>
                )
            ) : (
                <div className='flex min-w-[104px] animate-fadeOut items-center justify-center rounded-md border border-creamWhite/30 bg-jet/40 p-2'>
                    <div
                        className='mx-auto h-4 w-4 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] text-white motion-reduce:animate-[spin_1.5s_linear_infinite]'
                        role='status'
                    ></div>
                </div>
            )}
        </>
    );
}

export default ModalFollowButton;
