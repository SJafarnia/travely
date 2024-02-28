'use client';
import { signIn, signOut, useSession } from 'next-auth/react';
import React from 'react';

function LoginPage() {
    const { data: session, status } = useSession();

    return (
        <div>
            {!session && (
                <button
                    onClick={() => {
                        signIn('google');
                    }}
                >
                    Sign in with Google
                </button>
            )}

            {session && (
                <div>
                    <button onClick={() => signOut()}>Sign out</button>
                </div>
            )}
        </div>
    );
}

export default LoginPage;
