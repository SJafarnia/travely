import ModalCloseButton from "@/components/modules/ext/Modal/ModalCloseButton"
import ModalSlider from "@/components/modules/ext/Modal/ModalSlider"
import ViewLog from "@/components/modules/ext/Modal/ViewLog"
import Details from "@/components/modules/travels/parts/description/Details"
import { getTravelDataById } from '@/lib/db/queries'
import { notFound } from 'next/navigation'
import { deslugify } from "@/utils/textModifiers"

export default async function page({ params: { travelId, partNumber } }: { params: { travelId: string, partNumber: number } }) {

    const travel = await getTravelDataById(deslugify(travelId))

    if (!travel?.parts[partNumber - 1]) {
        return notFound();
    }

    return (
        // Travel part Modal
        <div className="fixed inset-0 bg-zinc-900/60 z-[9999] travelModal">
            <div className="flex items-center h-full max-w-3xl mx-auto">
                <div className="relative bg-zinc-900/40 w-full px-2 rounded-lg py-20 h-lvh overflow-y-auto overflow-x-clip scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                    <ModalCloseButton />
                    <ModalSlider images={travel.parts[partNumber - 1].imageGallery} />
                    <div className="text-center w-4/5 mx-auto my-10 bg-Night/90 rounded-md p-4">
                        <Details styles="text-white font-medium font-poppins p-4" description={travel.parts[partNumber - 1].description} />
                    </div>
                    <ViewLog />
                </div>
            </div>

        </div>
    )
}

