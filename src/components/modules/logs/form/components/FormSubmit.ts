"use server";
import { uploadLog } from "@/lib/db/queries";
import { FormValuesToSubmit } from "@/types/types";
import { uploadPhotos } from '@/lib/utils/cloudinaryUploader';

export const submitLogs = async (formValues: FormValuesToSubmit, imageFiles: FormData) => {

    const files: File[] = [];
    // @ts-ignore
    for (const [key, value] of imageFiles.entries()) {
        files.push(value);
    }

    // data validation
    if (!validateFields(formValues) || files.length < 1) return false;

    // upload images
    const imagesData = await uploadPhotos(files)

    // rejoin imagesData([link,publicId]) with form values
    formValues.images = imagesData

    const res = await uploadLog(formValues)
    if (res?.id) return true;

    return false
}

function validateFields(formData: FormValuesToSubmit): boolean {
    const isMapdataTypeValid = typeof formData.mapData["lat"] == "number" || typeof formData.mapData["lng"] == "number";
    const isMapdataValuesValid = formData.mapData["lat"] != undefined || formData.mapData["lng"] != undefined;

    const validityCheck = isMapdataTypeValid && isMapdataValuesValid && formData.title != '' && formData.location != ''

    // returns a true value if data is valid
    return validityCheck
}