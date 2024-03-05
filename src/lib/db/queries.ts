import { FormValuesToSubmit, addPartValueType } from '@/types/types';
import prisma from './client';

export const uploadLog = async (
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
        return null;
    }
};

export const uploadPart = async (
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
        return null;
    }
};

export const updatePart = async (
    values: Omit<addPartValueType, 'images'>,
    travelPartId: string
) => {
    try {
        const res = await prisma.travelPart.update({
            where: {
                id: travelPartId,
            },
            data: {
                title: values.title,
                description: values.description,
                recommendations: values.tips,
                mapData: values.mapData,
            },
        });

        return res;
    } catch (err) {
        return null;
    }
};

export const deleteTravel = async (travelId: string) => {
    try {
        const res = await prisma.travel.delete({
            where: {
                id: travelId,
            },
        });

        return res;
    } catch (error) {
        return null;
    }
};

export const deleteTravelPart = async (id: string) => {
    try {
        const res = await prisma.travelPart.delete({
            where: {
                id,
            },
        });

        return res;
    } catch (error) {
        return null;
    }
};

export const getUserPageDataByEmailOrUsername = async (
    emailOrUsername: string
) => {
    try {
        const res = await prisma.user.findFirst({
            where: {
                OR: [
                    { email: emailOrUsername },
                    {
                        username: emailOrUsername,
                    },
                ],
            },
            select: {
                posts: {
                    select: {
                        author: {
                            select: {
                                id: true,
                                email: true,
                            },
                        },
                        id: true,
                        published: true,
                        public: true,
                        parts: {
                            select: {
                                title: true,
                                description: true,
                                imageGallery: {
                                    select: {
                                        link: true,
                                        partId: true,
                                    },
                                },
                            },
                        },
                    },
                },
            },
        });

        return res;
    } catch (err) {
        return null;
    }
};

export const getUserPostsByEmailOrUsername = async (
    emailOrUsername: string
) => {
    try {
        const res = await prisma.travel.findMany({
            where: {
                OR: [
                    { author: { username: emailOrUsername } },
                    { author: { email: emailOrUsername } },
                ],
            },
            select: {
                id: true,
                title: true,
                location: true,
                published: true,
                public: true,
                parts: {
                    select: {
                        imageGallery: {
                            select: {
                                link: true,
                            },
                        },
                    },
                },
            },
        });

        return res;
    } catch (err) {
        return null;
    }
};

export const getTravelDataById = async (travelId: string) => {
    try {
        const res = await prisma.travel.findFirst({
            where: {
                id: travelId,
            },
            select: {
                author: {
                    select: {
                        email: true,
                    },
                },
                title: true,
                location: true,
                parts: {
                    include: {
                        imageGallery: {
                            select: {
                                publicId: true,
                                link: true,
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

export const getTravelPartsByTravelId = async (travelId: string) => {
    try {
        const res = await prisma.travelPart.findMany({
            where: {
                travelId,
            },
            select: {
                id: true,
                title: true,
                description: true,
                mapData: true,
                imageGallery: {
                    select: {
                        link: true,
                    },
                },
            },
        });

        return res;
    } catch (error) {
        return null;
    }
};

export const getTravelPartById = async (partId: string) => {
    try {
        const res = prisma.travelPart.findUnique({
            where: {
                id: partId,
            },
            select: {
                mapData: true,
                title: true,
                description: true,
                date: true,
                recommendations: true,
                imageGallery: {
                    select: {
                        link: true,
                        publicId: true,
                    },
                },
            },
        });

        return res;
    } catch (err) {
        return null;
    }
};

export const getTravelPartByIdToEdit = async (partId: string) => {
    try {
        const res = prisma.travelPart.findUnique({
            where: {
                id: partId,
            },
            select: {
                mapData: true,
                title: true,
                description: true,
                recommendations: true,
                imageGallery: {
                    select: {
                        link: true,
                        publicId: true,
                    },
                },
            },
        });

        return res;
    } catch (err) {
        return null;
    }
};

export const getUserByEmailOrUsername = async (emailOrUsername: string) => {
    try {
        const res = await prisma.user.findFirst({
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
        });

        return res;
    } catch (err) {
        console.log({ 'DB error': err });
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
        return;
    }
};

export const updateUser = async (
    email: string,
    username: string,
    image: string
) => {
    try {
        const res = await prisma.user.update({
            where: {
                email: email,
            },
            data: {
                username: username,
                profileImg: image,
            },
        });

        return res;
    } catch (err) {
        return null;
    }
};

export const followUser = async (follower_id: string, user_id: string) => {
    try {
        const res = await prisma.follower.create({
            data: {
                followed_user_id: user_id,
                follower_id: follower_id,
            },
        });

        return res;
    } catch (err) {
        return null;
    }
};
