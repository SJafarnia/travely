import TravelPartTemplate from '@/components/templates/TravelPartTemplate';

export default function page({
    params: { partNumber, travelId },
}: {
    params: { partNumber: number; travelId: string };
}) {
    return <TravelPartTemplate partNumber={partNumber} travelId={travelId} />;
}
