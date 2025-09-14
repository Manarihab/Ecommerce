import GetBrands from '@/apis/GetBrands'
import { Brand } from '@/interfaces/brands.interface'
import Image from 'next/image'
import React from 'react'

export default async function Brandss() {
    const res:Brand[] = await GetBrands()
    
  return (
    <div className='flex flex-wrap container my-30'>
        {res.map((brand)=><BrandItem key={brand._id} brand={brand}></BrandItem>)}
    </div>
  )
}
function BrandItem({brand}:{brand:Brand}){

    return(<>
    <div className=' md:w-1/4'>
        
            <div className='m-3 border  rounded-[7px] border-gray-300 shadow-md green-shadow-hover transition duration-500'>
            
            <Image width={400} height={400} src={brand.image} alt="" className='w-full  object-cover' />
            
            <div className='flex justify-center text-center p-3 my-5'>
               <h3 className='font-medium '>{brand.name}</h3>
            </div>
            
            
            </div>
        
    </div>
    
    </>)}
