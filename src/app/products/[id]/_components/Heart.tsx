'use client'
import { addWish } from '@/app/wishList/_actions/addWish.action'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import React from 'react'
import { toast } from 'react-toastify'

export default function Heart({id}:{id:string}) {
    const queryClient = useQueryClient()
      const {mutate} = useMutation({mutationFn:addWish,onSuccess:(data)=>{
                queryClient.invalidateQueries({queryKey:['wish']})
                toast.success(data.message)
              },onError:(data)=>{toast.error(data.message)
              }})
  return (
    <i onClick={()=>mutate(id)}  className={` ml-auto fa-solid fa-heart cursor-pointer text-gray-800 text-3xl `}></i>
  )
}
