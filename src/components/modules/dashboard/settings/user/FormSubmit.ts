'use server';
import { updateUser } from '@/lib/db/queries';

export const submitUpdateUser = async (
    email: string,
    username: string,
    image: string
) => {
    const usernamePattern = /^[a-zA-Z0-9_.]{3,20}$/;

    const isValid = usernamePattern.test(username);

    if (isValid) {
        const updatedUser = await updateUser(email, username, image);
        if (updatedUser.email) return true;
    }

    return false;
};
