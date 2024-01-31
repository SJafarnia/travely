"use client"
import { useState } from "react"

function ActionBar() {

    const [isLoggenIn, setIsLoggedIn] = useState<boolean>(false)

    return (
        <ul className='flex gap-8 uppercase justify-self-end'>
            {isLoggenIn ?
                <>
                    <li className='self-center text-sm mx-auto font-semibold'>
                        <span className='py-3 px-5 cursor-pointer'>My Logs</span>
                    </li>
                    <li className='self-center text-sm mx-auto font-semibold flex border-creamWhite border bg-creamWhite text-goldenRod hover:border-goldenRod hover:bg-goldenRod transition-colors duration-300 ease-in-out hover:text-creamWhite rounded-full cursor-pointer'>
                        <div className='rounded-full opacity-85 bg-forestGreen peer text-creamWhite'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 p-2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                        </div>
                        <span className='self-center px-5 py-3 transition-all duration-100 peer ease-in-out peer-hover:scale-105 hover:scale-105'>Share a journey</span>
                    </li>
                </>
                :
                <li className='self-center text-sm mx-auto font-semibold'>
                    <p className=' bg-creamWhite rounded-full text-forestGreen py-4 px-5 cursor-pointer hover:scale-125 hover:border-goldenRod hover:bg-goldenRod transition-all duration-300 ease-in-out hover:text-creamWhite shadow-md hover:shadow-none'>Become a traveler</p>
                </li>
            }
        </ul>
    )
}

export default ActionBar