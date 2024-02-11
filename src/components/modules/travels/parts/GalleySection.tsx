import GallerySlider from '@/components/modules/travels/parts/GallerySlider';
import { JsonValue } from '@prisma/client/runtime/library';
import dynamic from 'next/dynamic';

const DynamicMap = dynamic(() => import('./map/Map'), {
    ssr: false,
});

function GalleySection({
    images,
    mapData,
    popUp,
}: {
    images:
        | {
              link: string;
              publicId: string;
          }[]
        | undefined;
    mapData: JsonValue;
    popUp: string;
}) {
    return (
        <section id='gallery' className='my-20'>
            <div className='mx-auto flex flex-col justify-around lg:flex-row'>
                <div className='gallerydiv mx-auto lg:mx-0'>
                    <GallerySlider images={images} />
                </div>
                <div className='location mx-auto mt-12 h-[14rem] w-2/3 rounded-md text-Night lg:mx-0 lg:my-auto lg:w-4/12'>
                    <DynamicMap mapData={mapData} popUp={popUp} />
                </div>
            </div>
        </section>
    );
}

export default GalleySection;
