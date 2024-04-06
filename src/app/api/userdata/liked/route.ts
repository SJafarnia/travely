import {
    getLike,
    getUserByEmailOrUsernameForProfile,
} from '@/lib/db/queries/getQueries';
import { getServerSession } from 'next-auth';
import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export const POST = async (req: NextRequest) => {
    const { travelId } = await req.json();
    const {
        user: { email },
    } = await getServerSession();

    if (!email) {
        return NextResponse.json('unauthorized', {
            status: 401,
        });
    }

    if (travelId) {
        const liked = await getLike(travelId, email);

        if (liked) return NextResponse.json({ liked: true });

        return NextResponse.json({ liked: false });
    }

    return NextResponse.json('Failed', { status: 422 });
};
