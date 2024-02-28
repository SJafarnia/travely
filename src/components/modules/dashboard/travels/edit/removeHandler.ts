'use server';
import { deleteTravel, deleteTravelPart } from '@/lib/db/queries';
import { FieldToReomve } from '@/lib/types/types';

const removeHandler = async (travelId: string, field: FieldToReomve) => {
    switch (field) {
        case 'travel':
            return await deleteTravel(travelId);
        case 'travelPart':
            return await deleteTravelPart(travelId);
        default:
            break;
    }

    return false;
};

export default removeHandler;
