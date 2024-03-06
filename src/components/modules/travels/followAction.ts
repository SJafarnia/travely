'use server';
import { getServerSession } from 'next-auth';
import {
    followUser,
    getUserIdByEmailOrUsername,
} from './../../../lib/db/queries';

export const followAction = async (targetUsername: string) => {
    const {
        user: { email },
    } = await getServerSession();

    const currentUser = await getUserIdByEmailOrUsername(email);
    const targetUser = await getUserIdByEmailOrUsername(targetUsername);
    const res = await followUser(currentUser.id, targetUser.id);
    console.log(res);
};
