import { getUserByEmailOrUsername } from '@/lib/db/queries';
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

    if (body?.email) {
        const userData = await getUserByEmailOrUsername(body.email);
        return NextResponse.json({ userData });
    }

    return NextResponse.json('Failed', { status: 422 });
};
