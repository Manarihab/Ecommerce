'use client'
import { useQuery } from '@tanstack/react-query'
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import React, { useState } from 'react'

import { CartRes } from '../cart/_interfaces/cart.interface'
import { usePathname } from 'next/navigation'


export default function Navbar() {
  const pathname = usePathname()
  const {data}= useQuery<CartRes>({queryKey:['cart'],queryFn:async()=>{
        const res = await fetch('/api/cart')
        const payload=await res.json()
        return payload
    }})
    const [isOpen,setOpen]= useState(true)
    const { data: session, status } = useSession();
    
if (status === 'loading') return null;
    const links=[
        {path:'/', element:'Home'},
        {path:'/cart', element:'cart'},
        {path:'/wishList', element:'wish list'},
        {path:'/products', element:'Products'},
        {path:'/categories', element:'categories'},
        {path:'/brands', element:'brands'}

      ]
      
  return (
    <>
        <nav className="bg-gray-50  border-gray-200 dark:bg-gray-900 fixed w-full top-0 z-10 ">
  <div className="max-w-screen-xl container  md:flex items-center justify-between  mx-auto p-4">


  
  <div className='flex items-center justify-between '>
  <div className='flex items-center'>
    <i className='fa-solid fa-cart-shopping text-main text-3xl'></i>
    <h2 className='font-medium '>freshcart</h2>
    </div>
    <div className=' flex justify-end'>
  <button onClick={()=>setOpen(!isOpen)} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default">
    <span className="sr-only">Open main menu</span>
    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
    </svg>
  </button>
</div>
  </div>

  
  <div className={`${isOpen && 'hidden'}  md:flex md:justify-center flex-1`}>
    <ul className="font-medium gap-4 flex flex-col md:flex-row">
      {status=='authenticated'&&<>
      {links.map(link => (
        <li key={link.path}>
          <Link href={link.path} className={`text-gray-600 ${link.path===pathname&&'active'}   hover:text-gray-800 transition duration-300 rounded-sm md:bg-transparent `}>
            {link.element}
          </Link>
        </li>
      ))}</>}
    </ul>
  </div>

  <div className={`flex ${isOpen && 'hidden'}   items-center justify-center md:flex `}>
    <ul className='flex gap-4'>
      {status=='authenticated'&&session?.user ?
       <div className='flex gap-4'> <li>
            <Link href='/cart' className='relative'>
      <i className='fa-solid fa-cart-shopping hover:text-gray-800 transition duration-300 text-gray-600 text-3xl'></i>
      <span className='absolute -right-2 -top-5 bg-main text-white text-xs rounded-[4px] px-2 py-0.5'>{data?.numOfCartItems}</span>
    </Link>
        </li>
        <li  className='text-gray-600 hover:text-gray-800 transition duration-300 cursor-pointer'><Link href='/auth/login' onClick={()=>signOut()}>log out</Link></li></div>:<>
        <li >
          <Link href='/auth/login' className=" text-gray-600  hover:text-gray-800 transition duration-300 rounded-sm md:bg-transparent dark:text-white md:dark:text-blue-500">
            login
          </Link>
        </li>
        <li >
          <Link href='/auth/register' className=" text-gray-600  hover:text-gray-800 transition duration-300 rounded-sm md:bg-transparent dark:text-white md:dark:text-blue-500">
            register
          </Link>
        </li></>}
    </ul>
    
  </div>

  

</div>

</nav>
    </>
  )
}
