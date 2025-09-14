import GetCategories from '@/apis/GetCategories'
import { Categories } from '@/interfaces/categories.interface'
import Image from 'next/image'
import React from 'react'

export default async function Categoriess() {
            const data:Categories[] = await GetCategories()
            
            
  return (
    <div className='flex flex-wrap container my-30'>
        {data.map((category)=><CatItem key={category._id} cat={category}></CatItem>)}
    </div>
  )
}

function CatItem({cat}:{cat:Categories}){

    return(<>
    <div className=' md:w-1/3'>
        
            <div className='m-3 border  rounded-[7px] border-gray-300 shadow-md green-shadow-hover transition duration-500'>
            
            <Image width={400} height={400} src={cat.image} alt="" className='w-full h-[320px] object-cover' />
            
            <div className='flex justify-center text-center  my-5'>
               <h3 className='text-main2 font-medium text-3xl text-center'>{cat.name}</h3>
            </div>
            
            
            </div>
        
    </div>
    
    </>)
}
