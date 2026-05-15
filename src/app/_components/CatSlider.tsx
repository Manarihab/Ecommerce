import GetCategories from '@/apis/GetCategories'
import { Categories } from '@/interfaces/categories.interface'
import React from 'react'

import Swiperr from './Swiper'



export default async function CatSlider() {
    const cats:Categories[] = await GetCategories()

  
    return (
        <div className=' w-full my-8'>
            <h1 className="mb-6 ms-4">Our Categories</h1>
<Swiperr  cats={cats}></Swiperr>
        
    
      </div>
  )
}
