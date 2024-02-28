import EditTravel from '../modules/dashboard/travels/edit/editTravel/EditTravel';

function EditTravelTemplate({ travelId }: { travelId: string }) {
    return <EditTravel travelId={travelId} />;
}

export default EditTravelTemplate;
