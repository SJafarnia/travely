'use client';
import useFetchFollowers from '@/components/hooks/useFetchFollowers';
import useFetchFollowings from '@/components/hooks/useFetchFollowings';
import { useState } from 'react';
import Modal from './Modal';

function FollowingsMain({
    followingData,
    username,
}: {
    followingData?: {
        _count: {
            followings: number;
            followers: number;
        };
    };
    username: string;
}) {
    const [showModal, setShowModal] = useState<'followings' | 'followers' | ''>(
        null
    );
    const [followings, setFollowings] = useState<[]>([]);
    const [followers, setFollowers] = useState<[]>([]);

    useFetchFollowings(username, setFollowings, showModal);
    useFetchFollowers(username, setFollowers, showModal);

    return (
        <div className='flex w-full justify-around gap-8'>
            <button
                onClick={() => setShowModal('followers')}
                className='mt-2 w-full rounded-md border border-creamWhite/30 bg-jet/40 p-2 text-sm text-white transition-all duration-150 ease-in-out hover:border-creamWhite/80 hover:bg-jet/70'
            >
                Followers
            </button>
            <button
                onClick={() => setShowModal('followings')}
                className='mt-2 w-full rounded-md border border-creamWhite/30 bg-jet/40 p-2 py-2 text-sm text-white transition-all duration-150 ease-in-out hover:border-creamWhite/80 hover:bg-jet/70'
            >
                Followings
            </button>

            {showModal && (
                <Modal
                    followingData={followingData}
                    followings={followings}
                    followers={followers}
                    status={showModal}
                    showModal={showModal}
                    modalSetter={setShowModal}
                />
            )}
        </div>
    );
}

export default FollowingsMain;
