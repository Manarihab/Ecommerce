'use client'
import React, { useContext } from 'react'

import Image from 'next/image'
import Link from 'next/link'
import { ProductInterface } from '@/interfaces/products.interface'
import AddToCartBtn from './AddToCartBtn'
import { addWish } from '@/app/wishList/_actions/addWish.action'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'react-toastify'
import { Wish } from '@/wish.context'


export default function ProductItem({prod}:{prod:ProductInterface}) {
  const context = useContext(Wish);
  
  if (!context) {
    throw new Error("WishContext must be used within a WishContextProvider");
  }
  
  const { list} = context;
  const queryClient = useQueryClient()
  const {mutate} = useMutation({mutationFn:addWish,onSuccess:(data)=>{
            queryClient.invalidateQueries({queryKey:['wish']})
            toast.success(data.message)
          },onError:(data)=>{toast.error(data.message)
          }})

  return (
    <>
    <div className='w-full  md:w-1/2 lg:w-1/4 '>
        <div>
            <div className='p-5 relative group green-shadow-hover rounded-[6px]'>
            <Link href={`products/${prod._id}`}>
            <Image width={300} height={300} src={prod.imageCover} alt="" className='w-full rounded-[8px]' />
            <span className='text-main'>{prod.category.name}</span>
            <p className='line-clamp-1'>{prod.title}</p>
            <div className='flex justify-between items-center my-5'>
                <span>{prod.price} EGP</span>
                <span>{prod.ratingsAverage} <i className='fa-solid fa-star text-rating'></i></span>
            </div>
            </Link>
            <div className='flex items-center'>
              <AddToCartBtn id={prod._id}></AddToCartBtn>
              <i onClick={()=>mutate(prod._id)}  className={` ml-auto fa-solid fa-heart cursor-pointer text-gray-800 text-3xl  ${list?.data?.some((item)=>item._id===prod._id) && 'text-red-500' }`}></i>
              </div>
            
            </div>
        </div>
    </div>
    </>
  )
}
