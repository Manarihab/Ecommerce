import GetCategories from '@/apis/GetCategories'
import { Categories } from '@/interfaces/categories.interface'
import React from 'react'
import 'swiper/css'
import Swiperr from './Swiper'



export default async function CatSlider() {
    const cats:Categories[] = await GetCategories()

  
    return (
        <div className=' w-full my-8'>
<Swiperr  cats={cats}></Swiperr>
        
    
      </div>
  )
}
