'use server';
import { getServerSession } from 'next-auth';
import { createLog } from '@/lib/db/queries/createQueries';
import { FormValuesToSubmit } from '@/types/types';
import { uploadPhotos } from '@/lib/utils/cloudinaryUploader';

export const submitLogs = async (
    formValues: FormValuesToSubmit,
    imageFiles: FormData
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

    const session = await getServerSession();

    const res = await createLog(formValues, session.user.email);

    if (res?.id) {
        return true;
    }

    return false;
};

function validateFields(formData: FormValuesToSubmit): boolean {
    const isMapdataTypeValid =
        typeof formData.mapData['lat'] == 'number' ||
        typeof formData.mapData['lng'] == 'number';

    const isMapdataValuesValid =
        formData.mapData['lat'] != undefined ||
        formData.mapData['lng'] != undefined;

    const validityCheck =
        isMapdataTypeValid &&
        isMapdataValuesValid &&
        formData.title != '' &&
        formData.location != '';

    // returns a true value if data is valid
    return validityCheck;
}
