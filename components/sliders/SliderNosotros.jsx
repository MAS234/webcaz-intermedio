import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { informacionTeam } from '@/data/data'
import Image from 'next/image'

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { FreeMode} from 'swiper/modules';

function SliderNosotros() {
  return (
    <>
    <Swiper
        slidesPerView={1}
        spaceBetween={30}
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
        className="mySwiper swiper2"
        data-aos="fade-up"
      >
        
        {informacionTeam.map((info) => (
          <SwiperSlide key={info.id} className='overflow-hidden swiper-slide2'>

            <Image src={info.image} alt={info.titulo} width={300} height={300} className="rounded-md"/>

            <h2 className="text-3xl text-white font-semibold mt-5 text-center ">{info.nombre}</h2>

            <p className="lg:mt-5 mt-3 text-center  text-lg lg:text-base sm:text-xs  lg:w-auto text-white">{info.titulo}</p>

            <p className="m-5  text-center  text-base lg:text-sm sm:text-xs  lg:w-auto text-white">{info.frase}</p>

          </SwiperSlide>
        ))}
        
      </Swiper>
      
    </>
  )
}

export default SliderNosotros
