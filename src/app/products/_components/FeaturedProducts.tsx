'use client'

import { ProductInterface } from '@/interfaces/products.interface'
import React, { useEffect, useState } from 'react'
import ProductItem from './ProductItem'
import Loading from '@/app/_components/loading'


export default  function FeaturedProducts({data}:{data:ProductInterface[]}) {
    const [term,setTerm]= useState('')
    const [isLoading,setLoading]= useState(true)
     useEffect(() => {
    if (data !== null) {
      setLoading(false)
    }
  }, [data])
  return (
<div className='my-30'>
    
      
    <input onChange={(e)=>setTerm(e.target.value)}
          type="search"
          id="search"
          className="block w-2/3 mx-auto p-3 my-5  text-sm text-gray-900 border border-gray-300
           rounded-lg bg-gray-50  focus:border-blue-300
            dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
             dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search..."
          required
        />
        {isLoading && <Loading />}
   <div className='flex flex-wrap container '>
        {data.map((prod)=>prod.title.toLowerCase().includes(term.toLowerCase())&&<ProductItem key={prod._id} prod={prod}></ProductItem>)}
    </div>
    </div>
  )
}
