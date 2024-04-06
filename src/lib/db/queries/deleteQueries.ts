import prisma from '../client';

export const deleteTravel = async (travelId: string) => {
    try {
        const res = await prisma.travel.delete({
            where: {
                id: travelId,
            },
        });

        return res;
    } catch (err) {
        console.log(err);
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
    } catch (err) {
        console.log(err);
        return null;
    }
};

export const unfollowUser = async (id: string) => {
    try {
        const res = await prisma.follower.delete({
            where: {
                id,
            },
        });

        return res;
    } catch (err) {
        console.log(err);
        return null;
    }
};

export const deleteLike = async (travelId: string, userEmail: string) => {
    try {
        const like = await prisma.like.findFirst({
            where: {
                Travel: {
                    id: travelId,
                },
                user: {
                    email: userEmail,
                },
            },
            select: {
                id: true,
            },
        });

        const res = await prisma.like.delete({
            where: {
                id: like.id,
            },
        });
        return res;
    } catch (err) {
        console.log(err);
        return null;
    }
};
