import TravelPageTemplate from '@/components/templates/TravelPageTemplate';
import { deslugify } from '@/utils/textModifiers';
import { getTravelDataById } from '@/lib/db/queries/getQueries';
import { notFound } from 'next/navigation';

export default async function page({
    params: { username, travelId },
}: {
    params: { username: string; travelId: string };
}) {
    const parsedTravelId = deslugify(travelId);
    const travelData: any = await getTravelDataById(parsedTravelId);

    if (!travelData) return notFound();

    return <TravelPageTemplate travelId={travelId} travelData={travelData} />;
}
