"use client"
import { signOut } from 'next-auth/react';

function LogOut() {
    const logOutHandler = () => {
        signOut()
    }

    return (
        <button className='m-4 my-6 flex gap-2' onClick={logOutHandler}>
            <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='h-6 w-6'
            >
                <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15'
                />
            </svg>
            <span>Logout</span>
        </button>
    )
}

export default LogOut