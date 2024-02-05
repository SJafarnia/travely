"use client"
import 'react-vertical-timeline-component/style.min.css';
import Timeline from '../modules/travels/travel/Timeline';

function TravelPageTemplate({ travelId }: { travelId: string }) {

    return (
        <div className="App my-20 mx-4">
            <Timeline travelId={travelId} />
        </div >
    )
}

export default TravelPageTemplate