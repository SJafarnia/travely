'use server';
import { deslugify } from '@/utils/textModifiers';
import { getServerSession } from 'next-auth';
import { createLike } from '@/lib/db/queries/createQueries';
import { deleteLike } from '@/lib/db/queries/deleteQueries';

export const likeTravel = async (travelId: string) => {
    const session = await getServerSession();
    const res = await createLike(deslugify(travelId), session?.user?.email);

    if (res) return true;

    return false;
};

export const unlikeTravel = async (travelId: string) => {
    const session = await getServerSession();
    const res = await deleteLike(deslugify(travelId), session?.user?.email);

    if (res) return true;

    return false;
};
