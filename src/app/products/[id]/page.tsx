
import GetSingleProduct from '@/apis/productDetails.api'
import { ProductInterface } from '@/interfaces/products.interface'
import React from 'react'
import Slider from './_components/Slider'
import AddToCartBtn from './_components/AddToCart'
import Heart from './_components/Heart'


export default async function page({params}:{params:Promise<{id:string}>}) {
    const {id} = await params
    const data:ProductInterface = await GetSingleProduct(id)
   
      

  return (
    <>
    <div className='flex flex-wrap items-center py-10 container my-30'>
        <div className=' md:w-1/3'>
        <Slider data={data}></Slider>
        </div>
        <div className='w-full md:w-2/3 p-5'>
        <h3>{data.title}</h3>
        <p className='text-gray-500 my-3'>{data.description}</p>
        <p>{data.category.name}</p>
         <div className='flex justify-between items-center my-5'>
                <span>{data.price} EGP</span>
                <span>{data.ratingsAverage} <i className='fa-solid fa-star text-rating'></i></span>
            </div>
            <div className='flex items-center'>
                          <AddToCartBtn id={data._id}></AddToCartBtn>
                          <Heart id={data._id}></Heart>
            </div>
        </div>
    </div>
    </>
  )
}
