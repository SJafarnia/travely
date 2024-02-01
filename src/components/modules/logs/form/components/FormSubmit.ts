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
    if (
        typeof formValues.mapData["lat"] != "number" ||
        typeof formValues.mapData["lng"] != "number" ||
        formValues.mapData["lat"] === undefined ||
        formValues.mapData["lng"] === undefined ||
        !formValues.title ||
        !formValues.location ||
        files.length < 1
    ) return false;

    // upload images
    const imagesData = await uploadPhotos(files)

    // rejoin imagesData([link,publicId]) with form values
    formValues.images = imagesData

    const res = await uploadLog(formValues)
    if (res.id) return true;
}