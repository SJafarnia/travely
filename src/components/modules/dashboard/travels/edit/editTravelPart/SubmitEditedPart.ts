'use server';
import { addPartValueType } from '@/types/types';
import { updatePart } from '@/lib/db/queries/updateQueries';

export const submitEditPart = async (formValues: any, travelPartId: string) => {
    // data validation

    if (!validateFields(formValues)) return false;

    const res = await updatePart(formValues, travelPartId);

    if (res?.id) {
        return true;
    }

    return false;
};

function validateFields(formData: addPartValueType): boolean {
    const isMapdataTypeValid =
        typeof formData.mapData['lat'] == 'number' ||
        typeof formData.mapData['lng'] == 'number';

    const isMapdataValuesValid =
        formData.mapData['lat'] != undefined ||
        formData.mapData['lng'] != undefined;

    const validityCheck =
        isMapdataTypeValid && isMapdataValuesValid && formData.title != '';

    // returns a true value if data is valid
    return validityCheck;
}
