import DescriptionSection from '@/components/modules/travels/parts/description/DescriptionSection';
import GallerySection from '@/components/modules/travels/parts/GallerySection';
import StatusBar from '@/components/modules/travels/parts/StatusBar';
import { getTravelDataById } from '@/lib/db/queries/getQueries';
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
            {/* <StatusBar
                date={`${postData?.date.getUTCDate()} - ${postData?.date.getUTCMonth()} - ${postData?.date.getUTCFullYear()}`}
            /> */}
            <GallerySection
                images={postData?.imageGallery}
                mapData={postData.mapData}
                popUp={postData?.title}
                date={`${postData?.date.getUTCDate()} - ${postData?.date.getUTCMonth()} - ${postData?.date.getUTCFullYear()}`}
            />
            <DescriptionSection
                description={postData?.description}
                tips={postData?.recommendations}
            />
        </div>
    );
}

export default TravelPartTemplate;
