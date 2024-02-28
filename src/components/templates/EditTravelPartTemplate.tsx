import EditPart from '@/modules/dashboard/travels/edit/editTravelPart/EditPart';

function EditTravelPartTemplate({ travelPartId }: { travelPartId: string }) {
    return <EditPart travelPartId={travelPartId} />;
}

export default EditTravelPartTemplate;
