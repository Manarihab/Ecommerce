'use client'
import React from 'react'
import {Swiper,  SwiperSlide } from 'swiper/react'
import 'swiper/css'
import Image from 'next/image'
import { Categories } from '@/interfaces/categories.interface'
import { Autoplay, Navigation } from 'swiper/modules'

export default function Swiperr({cats}:{cats:Categories[]}) {
  return (
    <Swiper watchSlidesProgress={true}  modules={[Autoplay, Navigation]} loop={true} slidesPerView={2} breakpoints={{
            
      768: {
              slidesPerView: 4
            },
            1024: {
              slidesPerView: 6,
            }}} className=" flex w-full ">
        {cats.map((cat)=><SwiperSlide key={cat._id}>
                <Image width={350} height={350} src={cat.image} alt='' className='h-[250px] object-cover w-full'/>
                <h3>{cat.name}</h3>
        </SwiperSlide>)}
    </Swiper>
  )
}
