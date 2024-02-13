import ProfileDetails from '@/components/modules/travels/ProfileDetails';

export default function page() {
    return (
        <div className='mx-auto my-16 w-11/12 bg-Night/90 p-8 text-white'>
            <ProfileDetails
                styles='flex-row flex [&>div]:mx-2'
                button={
                    <button className='mt-2 rounded-md border border-creamWhite/30 bg-jet/40 p-1 text-white transition-all duration-150 ease-in-out hover:border-creamWhite/80 hover:bg-jet/70'>
                        Edit
                    </button>
                }
            />
            <div className='flex justify-end mt-4'>
                <div className='flex w-2/3 justify-around'>
                    <button className='mt-2 text-sm rounded-md border border-creamWhite/30 bg-jet/40 py-2 p-2 text-white transition-all duration-150 ease-in-out hover:border-creamWhite/80 hover:bg-jet/70'>
                        Followings
                    </button>
                    <button className='mt-2 text-sm p-2 rounded-md border border-creamWhite/30 bg-jet/40 text-white transition-all duration-150 ease-in-out hover:border-creamWhite/80 hover:bg-jet/70'>
                        Followers
                    </button>
                </div>
            </div>
        </div>
    );
}
