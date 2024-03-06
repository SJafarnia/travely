import EditPart from '@/components/modules/dashboard/travels/edit/editTravelPart/EditPartMain';

function EditTravelPartTemplate({ travelPartId }: { travelPartId: string }) {
    return <EditPart travelPartId={travelPartId} />;
}

export default EditTravelPartTemplate;
