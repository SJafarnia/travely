'use client';
import 'react-vertical-timeline-component/style.min.css';
import Timeline from '../modules/travels/travel/Timeline';
import { travelDataType } from '@/lib/types/types';

function TravelPageTemplate({
    travelId,
    travelData,
}: {
    travelId: string;
    travelData: travelDataType;
}) {
    return (
        <div className='App mx-4 my-20'>
            <Timeline travelId={travelId} travelData={travelData} />
        </div>
    );
}

export default TravelPageTemplate;
