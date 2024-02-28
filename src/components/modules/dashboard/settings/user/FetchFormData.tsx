'use client';
import { ProfileFormType } from '@/lib/types/types';
import { useFormikContext } from 'formik';
import { useEffect } from 'react';

export const FetchFormData = ({ session }: { session: any }) => {
    const { setFieldValue } = useFormikContext<ProfileFormType>();

    useEffect(() => {
        const fetchData = async () => {
            if (session?.user?.email) {
                const res = await fetch('/api/userdata', {
                    method: 'POST',
                    body: JSON.stringify({ email: session.user.email }),
                }).then((res) => res.json());

                if (res.userData) {
                    setFieldValue('userName', res.userData.username);
                    setFieldValue('image', res.userData.profileImg);
                }
            }
            return;
        };
        fetchData();
    }, [session]);

    return null;
};
