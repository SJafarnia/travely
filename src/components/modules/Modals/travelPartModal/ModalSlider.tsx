'use client';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function ModalSlider({
    images,
}: {
    images: {
        link: string;
        publicId: string;
    }[];
}) {
    return (
        <div className='mx-auto cursor-pointer rounded-md p-8'>
            <Swiper
                spaceBetween={10}
                navigation={true}
                effect={'fade'}
                pagination={{
                    clickable: true,
                }}
                modules={[Navigation, Pagination, EffectFade]}
                className='mySwiper2 max-h-[288px]'
                slidesPerView={1}
            >
                {images.map((image) => (
                    <SwiperSlide key={image.publicId} className='rounded-md'>
                        <Image
                            src={image.link}
                            height={600}
                            width={600}
                            className='mx-auto h-80 max-h-[283px] max-w-[540px] rounded-md object-cover shadow-lg'
                            alt='xxx'
                        ></Image>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default ModalSlider;
