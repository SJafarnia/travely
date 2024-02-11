import ActionBar from './ActionBar';

function Navbar() {
    return (
        <div className='w-12/12 mx-auto mt-8 h-20 rounded-md text-creamWhite'>
            <div className='hidden justify-around p-4 sm:flex'>
                <ul className='flex text-sm font-semibold uppercase'>
                    <li className='cursor-pointer self-center'>
                        <span>Explore journeys </span>
                    </li>
                    <li className='mx-auto ml-8 cursor-pointer self-center'>
                        <span>Atlas</span>
                    </li>
                </ul>
                <h2 className='ml-8 cursor-pointer self-center font-caveat text-6xl font-semibold uppercase'>
                    Travely
                </h2>
                <ActionBar />
            </div>
        </div>
    );
}

export default Navbar;
