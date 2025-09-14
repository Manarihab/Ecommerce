'use client'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import React from 'react'
import { CartRes, Product } from '../_interfaces/cart.interface'
import Image from 'next/image'
import { deleteItem } from '../_actions/deleteItem.actions'
import { toast } from 'react-toastify'
import { clearCart } from '../_actions/clearCart.actions'
import { updateCount } from '../_actions/updateCount.actions'
import Loading from '@/app/_components/loading'
import Link from 'next/link'

export default function Cart() {
    const queryClient = useQueryClient()
    const {mutate} = useMutation({mutationFn:clearCart,
        onSuccess:(data)=>{
          queryClient.invalidateQueries({queryKey:['cart']})
          toast.success(data.message)
        },onError:()=>{toast.error('failed to add')
        }
    })
     
    const {data:cdata,isLoading}= useQuery<CartRes>({queryKey:['cart'],queryFn:async()=>{
        const res = await fetch('/api/cart')
        const payload=await res.json()
        return payload
    }})



return (
    <>
    {isLoading && <Loading />}
    <div className='bg-light w-[80%] mx-auto rounded-[3px] p-8 my-30'>
      <div className='flex justify-between items-center py-5'>
        <h2 className='text-gray-800 text-3xl font-medium'>Cart Shop</h2>
        <Link
  href={`/checkout/${cdata?.cartId}`}
  className='bg-blue-600 text-xl text-white px-5 py-3 transition duration-500 rounded-[8px] hover:bg-blue-700'
>
  Check out
</Link>

      </div>
      <div className='flex justify-between items-center pb-3'>
        <h5 className='text-gray-800 text-xl font-medium'>total price: <span className='text-main'>{cdata?.data.totalCartPrice}</span></h5>
        <h5 className='text-gray-800 text-xl font-medium'>total number of items: <span className='text-main'>{cdata?.numOfCartItems}</span></h5>
      </div>


  
  <div className="w-full   text-gray-500 dark:text-gray-400">
    
    <div>
      {cdata?.data?.products?.map((prod)=><CartItem key={prod._id} prod={prod}></CartItem>)}
    </div>
  </div>
  <div className='flex justify-center my-5 '>
        <button onClick={()=>mutate()} className='bg-transparent text-gray-800 border border-main text-xl px-5 py-2 rounded-[8px] cursor-pointer'>
                Clear Your Cart
            </button>
  </div>

    </div>




    </>
  )
}
function CartItem({prod}:{prod:Product}){
  
  const queryClient = useQueryClient()
    const {mutate,isPending} = useMutation({mutationFn:deleteItem,
        onSuccess:(data)=>{
          console.log('data on succes:',data);
          queryClient.invalidateQueries({queryKey:['cart']})
          toast.success(data.message)
        },onError:(data)=>{toast.error(data.message)
        }
    })
    const {mutate:updateMutate,isPending:isPendingM} = useMutation({mutationFn:updateCount,
        onSuccess:(data)=>{
          console.log('data on succes:',data);
          queryClient.invalidateQueries({queryKey:['cart']})
          toast.success(data.message)
        },onError:()=>{toast.error('failed to add')
        }
    })
    return <div className="flex p-5 items-center border-b dark:bg-gray-800 dark:border-gray-700 ">
       <Image width={200} height={200} src={prod.product.imageCover} className='w-[150px] h-[200px] object-cover' alt=''/>
       <div className='flex px-5 justify-between items-center w-full'>
          <div className='text-gray-800 text-2xl '>
            <h5 className='font-medium'>{prod.product.title}</h5>
            <h6 className='font-medium'>{prod.price} EGP</h6>
            <button onClick={()=>mutate(prod.product._id)} className='text-red-600 font-medium text-sm cursor-pointer'>{isPending?<i className='fa-solid fa-spin fa-spinner'></i>:<><i className='fa-solid fa-trash font-medium text-sm'></i>Remove</>}</button>
          </div>
          <div>
            <button onClick={()=>updateMutate({id:prod.product._id,count:prod.count+1})} className='border-main border rounded-[4px] p-2 px-3 text-gray-900 cursor-pointer text-sm'>+</button>
            <span className='text-black px-4'>{isPendingM?<i className='fa-solid fa-spin fa-spinner'></i>:prod.count}</span>
            <button onClick={()=>updateMutate({id:prod.product._id,count:prod.count-1})} className='border-main border rounded-[4px] p-2 px-3.5 text-gray-900 cursor-pointer  text-sm'>-</button>
          </div>
       </div>
      </div>
}
