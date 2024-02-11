import { v2 as cloudinary } from 'cloudinary';

export const uploadPhotos = async (files: File[]) => {
    const imagesData: [publicId: string, link: string][] = [];

    const timestamp = Math.round(new Date().getTime() / 1000);
    const signature = cloudinary.utils.api_sign_request(
        {
            timestamp: timestamp,
        },
        `${process.env.CLOUDINARY_API_SECRET}`
    );

    const cloudinary_form = new FormData();

    cloudinary_form.set('timestamp', `${timestamp}`);
    cloudinary_form.set('signature', signature);
    cloudinary_form.set('api_key', `${process.env.CLOUDINARY_API_KEY}`);

    for (const file of files) {
        cloudinary_form.set('file', file);

        const res = await fetch(
            `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/image/upload`,
            {
                method: 'POST',
                body: cloudinary_form,
            }
        ).then((r) => r.json());

        if (res.secure_url && res.public_id) {
            imagesData.push([String(res.public_id), res.secure_url]);
        }
    }

    return imagesData;
};
