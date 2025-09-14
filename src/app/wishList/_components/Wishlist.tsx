'use client'
import Image from 'next/image'
import AddToCartBtn from './AddToCart.wishlist'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import {  WishI, WishList } from '../_interfaces/wish.interface'
import { removeWish } from '../_actions/removeWish.actions'
import { toast } from 'react-toastify'
import Loading from '@/app/_components/loading'


export default function Wishlist() {


    const {data,isLoading}= useQuery<WishList>({queryKey:['wish'],queryFn:async()=>{
        const res = await fetch('/api/wishlist')
        const payload=await res.json()
        return payload
    }})
    
  return (
    <>
    {isLoading && <Loading />}
    <div className='bg-light w-[80%] mx-auto rounded-[3px] p-8 my-30'>
      <div className='flex justify-between items-center py-5'>
        <h2 className='text-gray-800 text-3xl font-medium'>wishlist</h2>
        
      </div>
      


  
  <div className="w-full   text-gray-500 dark:text-gray-400">
    
    <div>
      {data?.data.map((prod)=><WishItem key={prod._id} prod={prod}></WishItem>)}
    </div>
  </div>
  

    </div>
    </>
  )
}
function WishItem({prod}:{prod:WishI}){

      const queryClient = useQueryClient()
    const {mutate,isPending} = useMutation({mutationFn:removeWish,onSuccess:()=>{
      queryClient.invalidateQueries({queryKey:['wish']})
    },
        onError:()=>{toast.error('failed to remove')

          
        }
    })
  return <>
  <div className="flex p-5 items-center border-b dark:bg-gray-800 dark:border-gray-700 ">
         <Image width={200} height={200} src={prod.imageCover} className='w-[150px] h-[200px] object-cover' alt=''/>
         <div className='flex px-5 justify-between items-center w-full'>
            <div className='text-gray-800 text-2xl '>
              <h5 className='font-medium'>{prod.title}</h5>
              <h6 className='font-medium'>{prod.price} EGP</h6>
              <button onClick={()=>mutate(prod._id)} className='text-red-600 font-medium text-sm cursor-pointer'>{isPending?<i className='fa-solid fa-spin fa-spinner'></i>:<><i className='fa-solid fa-trash font-medium text-sm'></i>Remove</>}</button>
            </div>
            <div>
              <AddToCartBtn id={prod._id}/>
              </div>
         </div>
        </div>
  </>
}
