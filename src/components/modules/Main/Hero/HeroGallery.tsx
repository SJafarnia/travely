import Image from 'next/image'
import Link from 'next/link'

function HeroGallery() {
    return (
        <div className='my-16 flex mx-auto w-2/4 flex-col text-creamWhite/85'>
            <Image src={"/images/camp.png"} width={1000} height={1000} alt='camp' className=' rounded-md'></Image>
            <h3 className='mx-auto my-8 font-caveat text-4xl '>Share your travel logs with us!</h3>
            <div className='hero-grid'>
                <div className='hero-subgrid-1'>
                    <Image src={"/images/camera.jpg"} width={1000} height={1000} alt='camp' className='w-full shadow-lg h-full rounded-lg'></Image>
                </div>
                <div className='hero-subgrid-2'>
                    <Image src={"/images/airport.jpg"} width={1000} height={1000} alt='camp' className=' w-full shadow-lg object-cover h-full rounded-lg'></Image>
                </div>
                <div className='hero-subgrid-3'>
                    <Image src={"/images/japan.jpg"} width={1000} height={1000} alt='camp' className=' w-full shadow-lg object-center h-full rounded-lg'></Image>
                </div>
                <div className='hero-subgrid-4'>
                    <Image src={"/images/shore.jpg"} width={1000} height={1000} alt='camp' className=' w-full shadow-lg object-center h-full rounded-lg'></Image>
                </div>
            </div>
            <h3 className='mx-auto my-8 font-caveat text-4xl'>Start with a picture of your journey</h3>
            <Link href={"/log"} className='self-center p-5 text-sm mx-auto font-semibold flex peer border-Night/90 border bg-Night/90 text-goldenRod rounded-full cursor-pointer'>
                <span className='self-center'>
                    Share a journey
                </span>
                <p className='self-center flex items-center justify-center font-semibold mt-[0.15rem] ml-1 h-full'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>

                </p>
            </Link>
        </div>
    )
}

export default HeroGallery