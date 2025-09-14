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
        },onError:()=>{toast.error('login first!')
        }
    })
  return (
    
    <button 
  onClick={() => mutate({ id })} 
  className='
    absolute z-10 w-[70%] mx-auto text-white bg-green text-xl
    text-center py-2 rounded-[8px] cursor-pointer my-3
    bottom-[-10rem] opacity-0 pointer-events-none
    transition-all duration-400 ease-in-out
    group-hover:bottom-0 group-hover:opacity-100 group-hover:pointer-events-auto
    flex justify-center
  '
>
  {isPending ? <i className='fa-solid fa-spin fa-spinner'></i> : '+ Add'}
</button>

  )
}
