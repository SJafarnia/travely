import prisma from '../client';

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
        console.log(err);
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
        console.log(err);
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
                likes: {
                    select: {
                        id: true,
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
    } catch (err) {
        console.log(err);
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
        console.log(err);
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
        console.log(err);
        return null;
    }
};

export const getUserByEmailOrUsernameForProfile = async (
    emailOrUsername: string
) => {
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
            select: {
                email: true,
                username: true,
                profileImg: true,
            },
        });
        return res;
    } catch (err) {
        console.log(err);
        return null;
    }
};

export const getUserFollowings = async (emailOrUsername: string) => {
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
            select: {
                followings: true,
                _count: {
                    select: {
                        followings: true,
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

export const getUserFollowers = async (emailOrUsername: string) => {
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
            select: {
                followers: true,
                _count: {
                    select: {
                        followers: true,
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

export const getFollowingData = async (emailOrUsername: string) => {
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
            select: {
                _count: {
                    select: {
                        followers: true,
                        followings: true,
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

export const getFollowerUsers = async (username: string) => {
    const user = await getUserIdByEmailOrUsername(username);

    try {
        const res = await prisma.follower.findMany({
            where: {
                followed_user_id: user.id,
            },
            select: {
                follower: {
                    select: {
                        profileImg: true,
                        username: true,
                        email: true,
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

export const getFollowingUsers = async (username: string) => {
    const user = await getUserIdByEmailOrUsername(username);

    try {
        const res = await prisma.follower.findMany({
            where: {
                follower_id: user.id,
            },
            select: {
                followed_user: {
                    select: {
                        profileImg: true,
                        username: true,
                        email: true,
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

export const getUserIdByEmailOrUsername = async (emailOrUsername: string) => {
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
            select: {
                id: true,
            },
        });

        return res;
    } catch (err) {
        console.log(err);
        return null;
    }
};

export const getLike = async (travelId: string, userEmail: string) => {
    try {
        const res = await prisma.like.findFirst({
            where: {
                travelId,
                userEmail,
            },
            select: {
                id: true,
            },
        });

        return res;
    } catch (err) {
        console.log(err);
        return null;
    }
};
