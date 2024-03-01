import { getTravelPartsByTravelId } from '@/lib/db/queries';
import { getServerSession } from 'next-auth';
import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export const POST = async (req: NextRequest) => {
    const session = await getServerSession();
    const body: { travelId: string } = await req.json();

    if (!session?.user?.email) {
        return NextResponse.json('unauthorized', {
            status: 401,
        });
    }

    if (body?.travelId) {
        const parts = await getTravelPartsByTravelId(body.travelId);

        return NextResponse.json({ parts }, { status: 200 });
    }

    return NextResponse.json('Failed to Get Body Params', {
        status: 422,
    });
};
