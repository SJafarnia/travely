import { getUserByEmailOrUsername } from '@/lib/db/queries';
import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export const POST = async (req: NextRequest) => {
    const res = await req.json();

    if (res?.email) {
        const userData = await getUserByEmailOrUsername(res.email);
        return NextResponse.json({ userData });
    }

    return NextResponse.json('Failed', { status: 422 });
};
