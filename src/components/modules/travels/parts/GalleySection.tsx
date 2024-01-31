import GallerySlider from "@/components/modules/travels/parts/GallerySlider";
import Map from "./map/Map";

function GalleySection() {
    return (
        <section id="gallery" className="my-20">
            <div className="flex lg:flex-row flex-col justify-around mx-auto">
                <div className="gallerydiv mx-auto lg:mx-0">
                    <GallerySlider />
                </div>
                <div className="location mx-auto lg:mx-0 lg:my-auto h-[14rem] w-2/3 lg:w-4/12 mt-12 bg-white text-Night rounded-md">
                    <Map />
                </div>
            </div>
        </section>
    )
}

export default GalleySection