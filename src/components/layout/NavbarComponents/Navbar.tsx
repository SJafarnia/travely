import ActionBar from "./ActionBar"

function Navbar() {
    return (
        <div className='h-20 text-creamWhite mt-8 mx-auto rounded-md w-12/12'>
            <div className='p-4 justify-around hidden sm:flex'>
                <ul className='flex text-sm uppercase font-semibold'>
                    <li className='self-center cursor-pointer'>
                        <span>Explore journeys </span>
                    </li>
                    <li className='ml-8 self-center mx-auto cursor-pointer'>
                        <span>Atlas</span>
                    </li>
                </ul>
                <h2 className='ml-8 uppercase text-6xl self-center font-semibold font-caveat cursor-pointer'>Travely</h2>
                <ActionBar />
            </div>
        </div>
    )
}

export default Navbar