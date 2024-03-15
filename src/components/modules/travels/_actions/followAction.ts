'use server';
import { getServerSession } from 'next-auth';
import { getUserIdByEmailOrUsername } from '@/lib/db/queries/getQueries';
import { followUser } from '@/lib/db/queries/createQueries';

export const followAction = async (targetUsername: string) => {
    const {
        user: { email },
    } = await getServerSession();

    const currentUser = await getUserIdByEmailOrUsername(email);
    const targetUser = await getUserIdByEmailOrUsername(targetUsername);
    const res = await followUser(currentUser.id, targetUser.id);
    if (res) return res;
};
