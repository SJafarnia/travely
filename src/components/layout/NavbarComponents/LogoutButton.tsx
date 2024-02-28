'use client';
import { signOut } from 'next-auth/react';

function LogoutButton() {
    return (
        <span onClick={() => signOut()} className='cursor-pointer px-5 py-3'>
            Log Out
        </span>
    );
}

export default LogoutButton;
