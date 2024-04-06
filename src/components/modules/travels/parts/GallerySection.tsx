import GallerySlider from '@/components/modules/travels/parts/GallerySlider';
import { JsonValue } from '@prisma/client/runtime/library';
import dynamic from 'next/dynamic';
import StatusBar from './StatusBar';

const DynamicMap = dynamic(() => import('./map/Map'), {
    ssr: false,
});

function GallerySection({
    images,
    mapData,
    popUp,
    date
}: {
    images:
    | {
        link: string;
        publicId: string;
    }[]
    | undefined;
    mapData: JsonValue;
    popUp: string;
    date: string
}) {
    return (
        <section id='gallery' className='my-20'>
            <div className='mx-auto flex flex-col justify-evenly lg:flex-row'>
                <div className='gallerydiv mx-auto lg:mx-0'>
                    <StatusBar date={date} />
                    <GallerySlider images={images} />
                </div>
                <div className='location mx-auto mt-12 h-[14rem] w-2/3 rounded-md text-Night lg:mx-0 lg:my-auto lg:w-4/12'>
                    <DynamicMap mapData={mapData} popUp={popUp} />
                </div>
            </div>
        </section>
    );
}

export default GallerySection;
