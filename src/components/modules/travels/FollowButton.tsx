'use client'
import { useState } from 'react';
import { unfollowAction } from './_actions/unfollowAction';
import { followAction } from './_actions/followAction';
import useFetchFollowingData from '@/components/hooks/useFetchFollowingData';
import FollowingsMain from '../Modals/followingsModal/FollowingsMain';

function FollowButton({ username }: { username: string }) {
    const [followingData, setFollowingData] = useState({
        isFollowing: null,
        id: null
    });
    // console.log(followingData)
    useFetchFollowingData(username, setFollowingData);

    const followHandler = async () => {
        const res = await followAction(username)
        setFollowingData({ id: res.id, isFollowing: true })
    }
    const unfollowHandler = async () => {
        const res = await unfollowAction(followingData.id)
        setFollowingData({ id: null, isFollowing: false })
    }

    return (
        <>
            {followingData.isFollowing != null ?
                followingData.isFollowing == true ?
                    <button onClick={unfollowHandler} className='mt-2 animate-fadeOut rounded-md border border-creamWhite/30 bg-jet/40 p-1 text-white transition-all duration-150 ease-in-out hover:border-creamWhite/80 hover:bg-red-500/70'>
                        Unfollow
                    </button>
                    :
                    <button onClick={followHandler} className='mt-2 animate-fadeOut rounded-md border border-creamWhite/60 bg-ylmnBLue/80 p-1 text-white transition-all duration-150 ease-in-out hover:border-creamWhite/80 hover:bg-ylmnBLue'>
                        Follow
                    </button>
                :
                <div className='mt-2 p-2 flex w-full items-center animate-fadeOut rounded-md border border-creamWhite/30 justify-center bg-jet/40'>
                    <div
                        className='mx-auto h-4 w-4 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] text-white motion-reduce:animate-[spin_1.5s_linear_infinite]'
                        role='status'
                    ></div>
                </div>
            }
            <FollowingsMain username={username} followingData={null} />
        </>
    )
}

export default FollowButton