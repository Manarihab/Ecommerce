'use client'
import { addProduct } from '@/app/cart/_actions/addProduct.action'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import React from 'react'
import { toast } from 'react-toastify'

export default  function AddToCartBtn({id}:{id:string}) {
    const queryClient = useQueryClient()
    const {mutate,isPending} = useMutation({mutationFn:addProduct,
        onSuccess:(data)=>{
          queryClient.invalidateQueries({queryKey:['cart']})
          toast.success(data.message)
        },onError:(data)=>{toast.error(data.message)
        }
    })
  return (
    <button onClick={()=>mutate({id})} className='bg-transparent text-gray-800 border border-main text-xl px-5 py-2 rounded-[8px] cursor-pointer'>{isPending?<i className='fa-solid fa-spin fa-spinner'></i>:'Add to Cart'} </button>
  )
}
