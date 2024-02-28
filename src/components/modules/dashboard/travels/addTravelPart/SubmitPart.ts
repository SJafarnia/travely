'use server';
import { getServerSession } from 'next-auth';
import { addPartValueType } from '@/types/types';
import { uploadPhotos } from '@/lib/utils/cloudinaryUploader';
import { uploadPart } from '@/lib/db/queries';

export const submitPart = async (
    formValues: addPartValueType,
    imageFiles: FormData,
    travelId: string
) => {
    const files: File[] = [];
    // @ts-ignore
    for (const [key, value] of imageFiles.entries()) {
        files.push(value);
    }

    // data validation
    if (!validateFields(formValues) || files.length < 1) return false;

    // uploads images
    const imagesData = await uploadPhotos(files);

    // rejoins imagesData([link,publicId]) with form values
    formValues.images = imagesData;

    const res = await uploadPart(formValues, travelId);

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
