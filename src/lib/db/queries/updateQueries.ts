import { addPartValueType } from '@/types/types';
import prisma from '../client';

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
        console.log(err);
        return null;
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
        console.log(err);
        return null;
    }
};
