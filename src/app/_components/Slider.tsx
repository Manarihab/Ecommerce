'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import slider1 from '../../assets/slider1.jpg'
import slider2 from '../../assets/slider2.jpg'
import slider3 from '../../assets/slider3.jpg'
import f1 from '../../assets/f1.jpg'
import f2 from '../../assets/f2.jpg'
import Image from 'next/image'
export default function Slider() {
  
  return (
    <div className='md:flex  w-3/4 md:w-1/2  container mt-30 mb-10'>
        <div className='w-full md:w-1/2'>
        <Swiper
           
          loop={true}
          spaceBetween={50}
          slidesPerView={1}
        >
          <SwiperSlide>
            <Image src={slider1} className='h-[400px] object-cover w-full' alt=''/>
          </SwiperSlide>
          <SwiperSlide>
            <Image src={slider2} className='h-[400px] object-cover w-full' alt=''/>
          </SwiperSlide>
          <SwiperSlide>
            <Image src={slider3} className='h-[200px] object-cover w-full' alt=''/>
          </SwiperSlide>
        </Swiper>
        </div>
        <div className='w-full md:w-1/2'>
        <Image src={f1} className='h-[230px] object-cover w-full' alt=''/>
        <Image src={f2} className='h-[230px] object-cover w-full' alt=''/>
        </div>
    </div>
  )
}
    