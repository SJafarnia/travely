'use server';
import { updateUser } from '@/lib/db/queries/updateQueries';
import { uploadPhotos } from '@/lib/utils/cloudinaryUploader';

export const submitUpdateUser = async (
    email: string,
    username: string,
    formData: FormData
) => {
    const usernamePattern = /^[a-zA-Z0-9_@.]{3,20}$/;

    const isValid = usernamePattern.test(username);

    const files = [];
    // @ts-ignore
    for (const [key, value] of formData.entries()) {
        files.push(value);
    }

    let imageURL: string | File = files[0];

    if (typeof imageURL !== 'string') {
        const files = await uploadPhotos([imageURL]);
        if (files.length > 0) {
            imageURL = files[0][1];
        } else {
            return false;
        }
    }

    if (isValid) {
        const updatedUser = await updateUser(
            email,
            username,
            imageURL as string
        );

        if (updatedUser?.email) return updatedUser;
    }

    return false;
};
