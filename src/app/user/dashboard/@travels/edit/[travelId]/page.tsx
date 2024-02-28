import EditTravelTemplate from '@/components/templates/EditTravelTemplate';

async function page({
    params: { travelId },
}: {
    params: { travelId: string };
}) {
    return <EditTravelTemplate travelId={travelId} />;
}

export default page;
