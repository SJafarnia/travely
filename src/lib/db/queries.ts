import { FormValuesToSubmit } from '@/types/types';
import prisma from './client';

export const uploadLog = async (values: FormValuesToSubmit) => {
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
        const res = await prisma.travel.create({
            data: {
                title: values.title,
                location: values.location,
                // replace with current user id
                authorId: '917f3dd6-b538-4d24-b6b8-c203ca284e1e',
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
export const getUserPageDataByEmail = async (userEmail: string) => {
    try {
        const res = await prisma.user.findUnique({
            where: {
                email: userEmail,
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

export const getTravelPartById = async (partId: string) => {
    try {
        const res = prisma.travelPart.findFirst({
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

export const getUserByEmail = async (email: string) => {
    try {
        const res = await prisma.user.findUnique({
            where: {
                email: email,
            },
        });

        return res;
    } catch (err) {
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
