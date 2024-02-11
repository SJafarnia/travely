import TravelPageTemplate from '@/components/templates/TravelPageTemplate';
import { deslugify } from '@/utils/textModifiers';
import { getTravelDataById } from '@/lib/db/queries';
import { notFound } from 'next/navigation';
import { travelDataType } from '@/lib/types/types';

export default async function page({
    params: { userEmail, travelId },
}: {
    params: { userEmail: string; travelId: string };
}) {
    const parsedTravelId = deslugify(travelId);
    const travelData: travelDataType = await getTravelDataById(parsedTravelId);

    if (!travelData) return notFound();

    return <TravelPageTemplate travelId={travelId} travelData={travelData} />;
}
