'use client';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

function ImageSlider({
    images,
}: {
    images:
        | {
              link: string;
              publicId: string;
          }[]
        | undefined;
}) {
    if (!images) return;

    return (
        <div className='w-[14rem] sm:w-[16] md:w-[24rem] lg:w-[32rem]'>
            <Swiper
                spaceBetween={30}
                effect={'fade'}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className='mySwiper2 max-h-[283px]'
                slidesPerView={1}
            >
                {images.map((image) => (
                    <SwiperSlide key={image.publicId} className='rounded-md'>
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
        </div>
    );
}

export default ImageSlider;
