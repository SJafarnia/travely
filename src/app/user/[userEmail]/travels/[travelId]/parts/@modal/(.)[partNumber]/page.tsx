import ModalCloseButton from "@/components/modules/ext/Modal/ModalCloseButton"
import ModalSlider from "@/components/modules/ext/Modal/ModalSlider"
import ViewLog from "@/components/modules/ext/Modal/ViewLog"
import Details from "@/components/modules/travels/parts/description/Details"

export default function page() {

    return (
        // Travel part Modal
        <div className="fixed inset-0 bg-zinc-900/20 z-[9999] travelModal">
            <div className="flex items-center h-full max-w-3xl mx-auto">
                <div className="relative bg-zinc-900/40 w-full px-2 rounded-lg py-20 h-lvh overflow-y-auto overflow-x-clip scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                    <ModalCloseButton />
                    {/* <Image src={"/images/japan.jpg"} className='h-80 mx-auto object-cover rounded-md' height={600} width={600} alt='imageName'></Image> */}
                    <ModalSlider />
                    <div className=" text-center w-4/5 mx-auto my-10 bg-Night/95 text-white rounded-md p-4">
                        {/* <Details />
                        <Details />
                        <Details /> */}
                    </div>
                    <ViewLog />
                </div>
            </div>

        </div>
    )
}

