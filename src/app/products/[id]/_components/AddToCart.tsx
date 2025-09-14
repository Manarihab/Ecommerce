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
    <button 
  onClick={() => mutate({ id })} 
  className='w-full text-white bg-green text-xl
    text-center px-4 py-2 rounded-[8px] cursor-pointer my-3
    flex justify-center
  '
>
  {isPending ? <i className='fa-solid fa-spin fa-spinner'></i> : '+ Add'}
</button>

  )
}
