"use client"
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


function ModalSlider() {
    return (
        <div className='mx-auto p-8 rounded-md cursor-pointer' >
            <Swiper
                spaceBetween={10}
                navigation={true}
                effect={'fade'}
                pagination={{
                    clickable: true,
                }}
                modules={[Navigation, Pagination, EffectFade]}
                className="mySwiper2 max-h-[288px]"
                slidesPerView={1}
            >
                <SwiperSlide className=' rounded-md'>
                    <Image src={"/images/airport.jpg"} height={600} width={600} className="w-full max-h-[288px] h-80 mx-auto object-cover rounded-md" alt="main"></Image>
                </SwiperSlide>
                <SwiperSlide className=' rounded-md'>
                    <Image src={"/images/camera.jpg"} height={600} width={600} className="w-full max-h-[288px] h-80 mx-auto object-cover rounded-md" alt="main"></Image>
                </SwiperSlide>
                <SwiperSlide className=' rounded-md'>
                    <Image src={"/images/japan.jpg"} height={600} width={600} className="w-full max-h-[288px] h-80 mx-auto object-cover rounded-md" alt="main"></Image>
                </SwiperSlide>
            </Swiper>
        </div >
    )
}

export default ModalSlider