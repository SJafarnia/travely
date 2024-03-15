import { getTravelPartByIdToEdit } from '@/lib/db/queries/getQueries';
import { getServerSession } from 'next-auth';
import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export const POST = async (req: NextRequest) => {
    const session = await getServerSession();
    const body: { travelPartId: string } = await req.json();

    if (session?.user?.email) {
        if (body?.travelPartId) {
            const travelPartData = await getTravelPartByIdToEdit(
                body.travelPartId
            );

            return NextResponse.json({ travelPartData }, { status: 200 });
        }

        return NextResponse.json('Failed to Get Body Params', { status: 422 });
    }

    return NextResponse.json('unauthorized', {
        status: 401,
    });
};
