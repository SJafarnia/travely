'use cleint';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

function useFetchTravelData(travelId: string) {
    const { data: session } = useSession();
    const [travelParts, setTravelParts] = useState([]);

    if (!session?.user?.email) return;

    useEffect(() => {
        const fetcher = async () => {
            const res: { parts: [] } = await fetch("/api/travels/traveldata/", {
                method: "POST",
                body: JSON.stringify({ travelId }),
                headers: {
                    'Content-Type': 'application/json',
                },
            }).then((res) => res.json());

            if (res.parts.length > 0) setTravelParts(res.parts);
        }

        fetcher()
    }, [travelId]);

    return travelParts
}

export default useFetchTravelData;
