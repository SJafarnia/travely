import EditTravelPartTemplate from '@/components/templates/EditTravelPartTemplate';

async function page({
    params: { travelPartId },
}: {
    params: { travelPartId: string };
}) {
    return <EditTravelPartTemplate travelPartId={travelPartId} />;
}

export default page;
