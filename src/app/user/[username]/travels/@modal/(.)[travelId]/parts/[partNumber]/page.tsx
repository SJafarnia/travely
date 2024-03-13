import ModalCloseButton from '@/components/modules/Modals/travelPartModal/ModalCloseButton';
import ModalSlider from '@/components/modules/Modals/travelPartModal/ModalSlider';
import ViewLog from '@/components/modules/Modals/travelPartModal/ViewLog';
import Details from '@/components/modules/travels/parts/description/Details';
import { getTravelDataById } from '@/lib/db/queries';
import { notFound } from 'next/navigation';
import { deslugify } from '@/utils/textModifiers';

export default async function page({
    params: { travelId, partNumber },
}: {
    params: { travelId: string; partNumber: number };
}) {
    const travel = await getTravelDataById(deslugify(travelId));

    if (!travel?.parts[partNumber - 1]) {
        return notFound();
    }

    return (
        // Travel part Modal
        <div className='ModalCloser fixed inset-0 z-[9999] bg-zinc-900/60'>
            <div className='mx-auto flex h-full max-w-3xl items-center'>
                <div className='scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 relative h-lvh w-full overflow-y-auto overflow-x-clip rounded-lg bg-zinc-900/40 px-2 py-20'>
                    <ModalCloseButton />
                    <ModalSlider
                        images={travel.parts[partNumber - 1].imageGallery}
                    />
                    <div className='mx-auto my-10 w-4/5 rounded-md bg-Night/90 p-4 text-center'>
                        <Details
                            styles='text-white font-medium font-poppins p-4'
                            description={
                                travel.parts[partNumber - 1].description
                            }
                        />
                    </div>
                    <ViewLog />
                </div>
            </div>
        </div>
    );
}
