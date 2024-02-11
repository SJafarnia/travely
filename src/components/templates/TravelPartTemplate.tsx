import DescriptionSection from '@/components/modules/travels/parts/description/DescriptionSection';
import GalleySection from '@/components/modules/travels/parts/GalleySection';
import StatusBar from '@/components/modules/travels/parts/StatusBar';
import { getTravelDataById } from '@/lib/db/queries';
import { deslugify } from '@/utils/textModifiers';
import { notFound } from 'next/navigation';

async function TravelPartTemplate({
    partNumber,
    travelId,
}: {
    partNumber: number;
    travelId: string;
}) {
    const travelData = await getTravelDataById(deslugify(travelId));
    const postData = travelData?.parts[partNumber - 1];

    if (!postData) return notFound();

    return (
        <div className='w-10/412 mx-auto text-jet'>
            <StatusBar
                date={`${postData?.date.getUTCDate()} - ${postData?.date.getUTCMonth()} - ${postData?.date.getUTCFullYear()}`}
            />
            <GalleySection
                images={postData?.imageGallery}
                mapData={postData.mapData}
                popUp={postData?.title}
            />
            <DescriptionSection
                description={postData?.description}
                tips={postData?.recommendations}
            />
        </div>
    );
}

export default TravelPartTemplate;
