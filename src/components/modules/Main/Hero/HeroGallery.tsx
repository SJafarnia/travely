import Image from 'next/image';
import Link from 'next/link';

function HeroGallery() {
    return (
        <div className='mx-auto my-16 flex w-2/4 flex-col text-creamWhite/85'>
            <Image
                src={'/images/camp.png'}
                width={1000}
                height={1000}
                alt='camp'
                className=' rounded-md'
            ></Image>
            <h3 className='mx-auto my-8 font-caveat text-4xl '>
                Share your travel logs with us!
            </h3>
            <div className='hero-grid'>
                <div className='hero-subgrid-1'>
                    <Image
                        src={'/images/camera.jpg'}
                        width={1000}
                        height={1000}
                        alt='camp'
                        className='h-full w-full rounded-lg shadow-lg'
                    ></Image>
                </div>
                <div className='hero-subgrid-2'>
                    <Image
                        src={'/images/airport.jpg'}
                        width={1000}
                        height={1000}
                        alt='camp'
                        className=' h-full w-full rounded-lg object-cover shadow-lg'
                    ></Image>
                </div>
                <div className='hero-subgrid-3'>
                    <Image
                        src={'/images/japan.jpg'}
                        width={1000}
                        height={1000}
                        alt='camp'
                        className=' h-full w-full rounded-lg object-center shadow-lg'
                    ></Image>
                </div>
                <div className='hero-subgrid-4'>
                    <Image
                        src={'/images/shore.jpg'}
                        width={1000}
                        height={1000}
                        alt='camp'
                        className=' h-full w-full rounded-lg object-center shadow-lg'
                    ></Image>
                </div>
            </div>
            <h3 className='mx-auto my-8 font-caveat text-4xl'>
                Start with a picture of your journey
            </h3>
            <Link
                href={'/log'}
                className='peer mx-auto flex cursor-pointer self-center rounded-full border border-Night/90 bg-Night/90 p-5 text-sm font-semibold text-goldenRod'
            >
                <span className='self-center'>Share a journey</span>
                <p className='ml-1 mt-[0.15rem] flex h-full items-center justify-center self-center font-semibold'>
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
                            d='m8.25 4.5 7.5 7.5-7.5 7.5'
                        />
                    </svg>
                </p>
            </Link>
        </div>
    );
}

export default HeroGallery;
