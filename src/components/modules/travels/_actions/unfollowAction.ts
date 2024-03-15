'use server';
import { unfollowUser } from '@/lib/db/queries/deleteQueries';

export const unfollowAction = async (idToRemove: string) => {
    const res = await unfollowUser(idToRemove);
    if (res) return true;
};
