import {
    getFollowingUsers,
    getUserFollowings,
    getUserIdByEmailOrUsername,
} from '@/lib/db/queries/getQueries';
import { getServerSession } from 'next-auth';
import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export const POST = async (req: NextRequest) => {
    const body = await req.json();
    const session = await getServerSession();

    if (!session?.user?.email) {
        return NextResponse.json('unauthorized', {
            status: 401,
        });
    }

    // const followings = await getUserFollowings(session.user.email);
    const followings = await getFollowingUsers(session.user.email);
    if (body.username) {
        return NextResponse.json({ followings });
    }

    return NextResponse.json('Failed', { status: 422 });
};
