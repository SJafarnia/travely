import { logType } from '@/types/types';
import prisma from './client';


export const uploadLog = async (values: logType) => {

    const imageObjects = values.images.map((image) => {
        const [publicId, link] = image
        // returns an array for travelPartsImage model's required fields(link, publicId)
        return {
            link: link,
            publicId: publicId,
        };
    });

    const res = await prisma.travel.create({
        data: {
            title: values.title,
            location: values.location,
            // replace with current user id 
            authorId: "917f3dd6-b538-4d24-b6b8-c203ca284e1e",
            parts: {
                create: {
                    mapData: values.mapData,
                    title: values.title,
                    description: values.description,
                    recommendations: values.tips,
                    imageGallery: {
                        createMany: {
                            data: imageObjects
                        }
                    }
                }
            }
        }
    })

    return res
}

// export const makeUser = async () => {
//     const res = await prisma.user.create({
//         data: {
//             email: "s.jafarnia",
//             accessLevel: "ADMIN"
//         }
//     })

//         console.log(res)
// } 
