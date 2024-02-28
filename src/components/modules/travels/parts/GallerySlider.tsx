'use client';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { useState } from 'react';
import 'swiper/css';

function GallerySlider({
    images,
}: {
    images:
        | {
              link: string;
              publicId: string;
          }[]
        | undefined;
}) {
    const [thumbsSwiper, setThumbsSwiper]: any = useState(null);

    if (!images) return;

    return (
        <div className='w-[16rem] sm:w-[24rem] lg:w-[32rem]'>
            <Swiper
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[Navigation, Thumbs]}
                className='mySwiper2 max-h-[283px]'
                slidesPerView={1}
            >
                {images &&
                    images.map((image) => (
                        <SwiperSlide
                            key={image.publicId}
                            className='rounded-md'
                        >
                            <Image
                                src={image.link}
                                height={1200}
                                width={1200}
                                className='h-full max-h-[283px] w-full rounded-md object-fill'
                                alt='main'
                            ></Image>
                        </SwiperSlide>
                    ))}
            </Swiper>
            <Swiper
                onSwiper={(e) => setThumbsSwiper(e)}
                spaceBetween={10}
                slidesPerView={3}
                // freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className='mySwiper mt-4 h-[52.31px] rounded-md sm:h-[94.33px]'
                wrapperClass='flexrpar'
            >
                {images &&
                    images.map((image) => (
                        <SwiperSlide
                            key={image.publicId}
                            className='rounded-md'
                        >
                            <Image
                                src={image.link}
                                height={1200}
                                width={1200}
                                className='h-full max-h-[288px] w-full rounded-md object-fill'
                                alt='main'
                            ></Image>
                        </SwiperSlide>
                    ))}
            </Swiper>
        </div>
    );
}

export default GallerySlider;
