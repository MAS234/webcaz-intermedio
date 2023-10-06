import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { informacionCursos } from '@/data/data';
import Image from "next/image";


import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';


import { FreeMode} from 'swiper/modules';

function SliderCursos() {
  return (
    <>
       <Swiper
        slidesPerView={1}
        spaceBetween={20}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          768: {
              slidesPerView: 3,
          },
      }}
        modules={[FreeMode]}
        className="mySwiper swiper1"
        data-aos="fade-up"
      >
        
        {informacionCursos.map((info) => (
          <SwiperSlide key={info.id} className='overflow-hidden swiper-slide1'>

            <Image src={info.image} alt={info.titulo} width={500} height={200} className="rounded-md"/>

            <h2 className="text-3xl text-white font-semibold mt-5 text-left ml-3">{info.titulo}</h2>

            <p className="lg:mt-5 mt-3 text-left md:ml-3 ml-3 text-base lg:text-sm sm:text-xs  lg:w-64 text-white">{info.informacion}</p>

            <p className="absolute bottom-0 right-0 lg:m-3 mr-3  cursor-pointer text-[#fff] hover:text-[#152c3e] text-base lg:text-sm  font-semibold">Leer Mas</p>
          </SwiperSlide>
        ))}
        
      </Swiper>
    </>
  )
}

export default SliderCursos
