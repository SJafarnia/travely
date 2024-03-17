import { getServerSession } from 'next-auth';
import LogoutButton from './LogoutButton';
import Link from 'next/link';

async function ActionBar() {
    const session = await getServerSession();
    const isLoggedIn = session?.user?.email ? true : false;

    return (
        <ul className='flex animate-fadeOut gap-8 justify-self-end uppercase'>
            {isLoggedIn ? (
                <>
                    <li className='mx-auto self-center text-sm font-semibold'>
                        <Link href={'/user/dashboard'}>
                            <span className='cursor-pointer px-5 py-3'>
                                Dashboard
                            </span>
                        </Link>
                    </li>
                    <li className='mx-auto self-center text-sm font-semibold text-red-600/90 hover:animate-pulse'>
                        <LogoutButton />
                    </li>
                    <li className='mx-auto flex cursor-pointer self-center rounded-full border border-creamWhite bg-creamWhite text-sm font-semibold text-goldenRod transition-colors duration-300 ease-in-out hover:border-goldenRod hover:bg-goldenRod hover:text-creamWhite'>
                        <div className='peer rounded-full bg-forestGreen text-creamWhite opacity-85'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                viewBox='0 0 24 24'
                                strokeWidth={1.5}
                                stroke='currentColor'
                                className='h-12 w-12 p-2'
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    d='M12 4.5v15m7.5-7.5h-15'
                                />
                            </svg>
                        </div>
                        <Link href={"/log"} className='peer self-center px-5 py-3 transition-all duration-100 ease-in-out hover:scale-105 peer-hover:scale-105'>
                            <span className=''>
                                Share a journey
                            </span>
                        </Link>
                    </li>
                </>
            ) : (
                <li className='mx-auto self-center text-sm font-semibold'>
                        <Link href={"/login"}>
                            <p className=' cursor-pointer rounded-full bg-creamWhite px-5 py-4 text-forestGreen shadow-md transition-all duration-300 ease-in-out hover:scale-125 hover:border-goldenRod hover:bg-goldenRod hover:text-creamWhite hover:shadow-none'>
                                Become a traveler
                            </p>
                        </Link>
                </li>
            )}
        </ul>
    );
}

export default ActionBar;
