"use client"
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { useState } from 'react';
import 'swiper/css';


function GallerySlider() {
    const [thumbsSwiper, setThumbsSwiper]: any = useState(null);

    return (
        <div className='w-[16rem] sm:w-[32rem]'>
            <Swiper
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[Navigation, Thumbs]}
                className="mySwiper2 max-h-[288px]"
                slidesPerView={1}
            >
                <SwiperSlide className=' rounded-md'>
                    <Image src={"/images/airport.jpg"} height={1200} width={1200} className="w-full object-fill max-h-[288px] rounded-md " alt="main"></Image>
                </SwiperSlide>
                <SwiperSlide className=' rounded-md'>
                    <Image src={"/images/camera.jpg"} height={1200} width={1200} className="w-full object-fill max-h-[288px] rounded-md" alt="main"></Image>
                </SwiperSlide>
                <SwiperSlide className=' rounded-md'>
                    <Image src={"/images/japan.jpg"} height={1200} width={1200} className="w-full object-fill max-h-[288px] rounded-md" alt="main"></Image>
                </SwiperSlide>

            </Swiper>
            <Swiper
                onSwiper={(e) => setThumbsSwiper(e)}
                spaceBetween={10}
                slidesPerView={3}
                // freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper h-[52.31px]  sm:h-[88.31px] rounded-md mt-4"
                wrapperClass='flexrpar'
            >
                <SwiperSlide className='h-full !shrink flexr gap-2 ml-[10px]'>
                    <Image src={"/images/airport.jpg"} height={1200} width={1200} className="w-full object-fill h-full rounded-md" alt="main"></Image>
                </SwiperSlide>
                <SwiperSlide className='h-full !shrink flexr'>
                    <Image src={"/images/camera.jpg"} height={1200} width={1200} className="w-full object-fill h-full rounded-md" alt="main"></Image>
                </SwiperSlide>
                <SwiperSlide className='h-full !shrink flexr'>
                    <Image src={"/images/japan.jpg"} height={1200} width={1200} className="w-full object-fill h-full rounded-md" alt="main"></Image>
                </SwiperSlide>

            </Swiper>
            {/* <div className='flexrpar'>
                <div className='flexr'>
                    <Image src={"/images/japan.jpg"} height={1200} width={1200} className="w-full h-full rounded-md m-2" alt="main"></Image>

                </div>
                <div className='flexr'>
                    <Image src={"/images/camera.jpg"} height={1200} width={1200} className="w-full h-full rounded-md m-2" alt="main"></Image>

                </div>
                <div className='flexr'>
                    <Image src={"/images/airport.jpg"} height={1200} width={1200} className="w-full h-full rounded-md m-2" alt="main"></Image>

                </div>
            </div> */}
        </div>
    )
}

export default GallerySlider