import { FormValuesToSubmit, addPartValueType } from '@/types/types';
import prisma from '../client';

export const createLog = async (
    values: FormValuesToSubmit,
    emailOrUsername: string
) => {
    //@ts-ignore
    const imageObjects = values.images.map((image) => {
        const [publicId, link] = image;

        // map returns an array for travelPartsImage model's required fields(link, publicId)
        return {
            link: link,
            publicId: publicId,
        };
    });

    try {
        const user = await prisma.user.findFirst({
            where: {
                OR: [
                    {
                        email: emailOrUsername,
                    },
                    {
                        username: emailOrUsername,
                    },
                ],
            },
            select: {
                id: true,
            },
        });

        const res = await prisma.travel.create({
            data: {
                title: values.title,
                location: values.location,
                authorId: user.id,
                parts: {
                    create: {
                        mapData: values.mapData,
                        title: values.title,
                        description: values.description,
                        recommendations: values.tips,
                        imageGallery: {
                            createMany: {
                                data: imageObjects,
                            },
                        },
                    },
                },
            },
        });

        return res;
    } catch (err) {
        console.log(err);
        return null;
    }
};

export const createPart = async (
    values: addPartValueType,
    travelId: string
) => {
    //@ts-ignore
    const imageObjects = values.images.map((image) => {
        const [publicId, link] = image;

        // map returns an array for travelPartsImage model's required fields(link, publicId)
        return {
            link: link,
            publicId: publicId,
        };
    });

    try {
        const res = await prisma.travelPart.create({
            data: {
                title: values.title,
                description: values.description,
                mapData: values.mapData,
                recommendations: values.tips,
                imageGallery: {
                    createMany: {
                        data: imageObjects,
                    },
                },
                travelId,
            },
        });

        return res;
    } catch (err) {
        console.log(err);
        return null;
    }
};

type accessEnum = 'BASIC' | 'ADMIN';
export const createUser = async (
    email: string,
    image?: string | '',
    accessLevel?: accessEnum
) => {
    try {
        const res = await prisma.user.create({
            data: {
                email: email,
                accessLevel: accessLevel,
                profileImg: image,
            },
        });
    } catch (err) {
        console.log(err);
        return;
    }
};

export const followUser = async (follower_id: string, user_id: string) => {
    try {
        const res = await prisma.follower.create({
            data: {
                follower_id: follower_id,
                followed_user_id: user_id,
            },
        });

        return res;
    } catch (err) {
        console.log(err);
        return null;
    }
};

export const createLike = async (travelId: string, userEmail: string) => {
    try {
        const res = await prisma.like.create({
            data: {
                Travel: {
                    connect: {
                        id: travelId,
                    },
                },
                user: {
                    connect: {
                        email: userEmail,
                    },
                },
            },
        });
        return res;
    } catch (err) {
        console.log(err);
        return null;
    }
};
