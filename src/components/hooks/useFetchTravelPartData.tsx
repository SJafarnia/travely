'use cleint';
import {
    useMapMarkers,
    useTipsStore,
    useTravelPartData,
} from '@/lib/zustand/store';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';

function useFetchTravelPartData(travelPartId: string) {
    const { data: session } = useSession();

    useEffect(() => {
        const fetchData = async () => {
            if (session?.user?.email) {
                const res = await fetch('/api/travels/partdata/', {
                    method: 'POST',
                    body: JSON.stringify({ travelPartId }),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }).then((res) => res.json());

                if (res?.travelPartData) {
                    useTravelPartData.setState({
                        travelPartData: {
                            title: res?.travelPartData.title,
                            description: res?.travelPartData.description,
                            mapData: res?.travelPartData.mapData,
                            tips: res?.travelPartData.recommendations,
                            images: res?.travelPartData.imageGallery,
                        },
                    });
                    // TODO : remove the following 2 states from the store above if possible
                    const numerofTips = Object.keys(res?.travelPartData?.recommendations)

                    useTipsStore.setState({
                        tips: res?.travelPartData?.recommendations,
                    });
                    useTipsStore.setState({ numTips: numerofTips.length });
                    useMapMarkers.setState({
                        markers: res?.travelPartData?.mapData,
                    });
                }
            }
            return;
        };
        fetchData();
    }, [travelPartId]);

    // return userData
}

export default useFetchTravelPartData;
