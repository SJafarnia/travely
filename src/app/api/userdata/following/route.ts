import {
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

    if (body.username) {
        const followings = await getUserFollowings(session.user.email);
        const targetUserId = await getUserIdByEmailOrUsername(body.username);

        const filteredFollowings = followings.followings.filter(
            (following: any) => following.followed_user_id == targetUserId.id
        );

        if (filteredFollowings.length > 0 && filteredFollowings.length < 2) {
            return NextResponse.json({
                isFollowing: true,
                id: filteredFollowings[0].id,
            });
        }
        return NextResponse.json({ isFollowing: false });
    }

    return NextResponse.json('Failed', { status: 422 });
};
