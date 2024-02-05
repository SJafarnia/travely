import GallerySlider from "@/components/modules/travels/parts/GallerySlider";
import { JsonValue } from "@prisma/client/runtime/library";
import dynamic from 'next/dynamic'

const DynamicMap = dynamic(() => import('./map/Map'), {
    ssr: false,
})

function GalleySection({ images, mapData, popUp }: {
    images: {
        link: string;
        publicId: string;
    }[] | undefined,
    mapData: JsonValue,
    popUp: string
}) {
    return (
        <section id="gallery" className="my-20">
            <div className="flex lg:flex-row flex-col justify-around mx-auto">
                <div className="gallerydiv mx-auto lg:mx-0">
                    <GallerySlider images={images} />
                </div>
                <div className="location mx-auto lg:mx-0 lg:my-auto h-[14rem] w-2/3 lg:w-4/12 mt-12 text-Night rounded-md">
                    <DynamicMap mapData={mapData} popUp={popUp} />
                </div>
            </div>
        </section>
    )
}

export default GalleySection