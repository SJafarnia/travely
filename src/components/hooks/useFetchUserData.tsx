'use cleint';
import { useUserData } from '@/lib/zustand/store';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';

function useFetchUserData() {
    const { data: session } = useSession();

    useEffect(() => {
        const fetchData = async () => {
            if (session?.user?.email) {
                const res = await fetch('/api/userdata', {
                    method: 'POST',
                    body: JSON.stringify({ email: session?.user?.email }),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }).then((res) => res.json());

                if (res.userData) {
                    useUserData.setState({ userData: res.userData });
                }
            }
            return;
        };
        fetchData();
    }, [session]);

    // return userData
}

export default useFetchUserData;
