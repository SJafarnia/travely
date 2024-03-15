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
