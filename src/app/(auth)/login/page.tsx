'use client';
import { signIn, useSession } from 'next-auth/react';
import React from 'react';

function LoginPage() {
    const { data: session, status } = useSession();

    return (
        <div className='flex h-svh w-full items-center justify-center'>
            <div className='flex h-3/5 w-5/12 items-center justify-center rounded-lg bg-Night/90'>
                {!session && (
                    <div className='w-6/12 cursor-pointer'>
                        <button
                            className='flex h-auto w-full items-center justify-around rounded-lg border border-white bg-white p-4 hover:border-white/20 hover:bg-white/80'
                            onClick={() => {
                                signIn('google');
                            }}
                        >
                            <span className='h-8 w-8'>
                                <img src='https://www.chess.com/bundles/web/images/socials/google.d19562c0.svg'></img>
                            </span>
                            <span className='font-semibold'>
                                Log in with Google
                            </span>
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default LoginPage;
