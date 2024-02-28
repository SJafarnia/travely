import AddTravelPartTemplate from '@/components/templates/AddTravelPartTemplate';

async function page({
    params: { travelId },
}: {
    params: { travelId: string };
}) {
    return <AddTravelPartTemplate travelId={travelId} />;
}

export default page;
