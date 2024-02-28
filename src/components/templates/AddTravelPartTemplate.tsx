import AddPart from '@/components/modules/dashboard/travels/addTravelPart/AddPart';

function AddTravelPartTemplate({ travelId }: { travelId: string }) {
    return <AddPart travelId={travelId} />;
}

export default AddTravelPartTemplate;
