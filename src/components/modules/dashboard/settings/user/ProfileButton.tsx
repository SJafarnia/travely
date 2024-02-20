"use client"
import { useUserData } from "@/lib/zustand/store";
import Link from "next/link"

function ProfileButton() {
    // @ts-ignore
    const userData = useUserData((state => state.userData))

    return (
        <Link
            href={`/user/${userData?.username}`}
            className='m-4 my-6 flex gap-2'
        >
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
                    d='M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z'
                />
            </svg>
            <span className=''>Profile</span>
        </Link>
    )
}

export default ProfileButton