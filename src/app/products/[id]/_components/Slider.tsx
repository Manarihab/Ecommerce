'use client'
import { ProductInterface } from '@/interfaces/products.interface'
import React from 'react'
import {Swiper,  SwiperSlide } from 'swiper/react'
import 'swiper/css'
import Image from 'next/image'

export default function Slider({data}:{data:ProductInterface}) {
  return (
    <Swiper  loop={true} slidesPerView={1} className="">
            {data.images.map((img)=><SwiperSlide key={img}>
                    <Image width={400} height={400} src={img} alt='' className='h-[500px]  object-cover w-full'/>
            </SwiperSlide>)}
        </Swiper>
  )
}
