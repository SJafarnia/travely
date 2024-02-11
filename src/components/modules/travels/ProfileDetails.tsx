import Image from 'next/image';

function ProfileDetails({
    styles,
    button,
}: {
    styles?: string | null;
    button: React.ReactNode;
}) {
    return (
        <div className={`${styles} flex w-full flex-row justify-start`}>
            <div className='flex w-1/2 justify-center'>
                {/* TODO: replace with user image */}
                <Image
                    src={'/images/airport.jpg'}
                    height={600}
                    width={600}
                    className='h-32 w-32 rounded-full'
                    alt='k'
                ></Image>
            </div>
            <div className='flex w-full flex-grow flex-col justify-around gap-1'>
                <span className=''>User091</span>
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
                    <div className='ml-1 text-sm'>
                        <span>California,</span> <span>LA</span>
                    </div>
                </div>
                {button}
            </div>
        </div>
    );
}

export default ProfileDetails;
