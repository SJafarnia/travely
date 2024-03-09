'use server';
import { unfollowUser } from '../../../../lib/db/queries';

export const unfollowAction = async (idToRemove: string) => {
    const res = await unfollowUser(idToRemove);
    if (res) return true;
};
