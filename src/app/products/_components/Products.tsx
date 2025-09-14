import React from 'react'

import { ProductInterface } from '@/interfaces/products.interface'
import GetProducts from '@/apis/Products.api'
import FeaturedProducts from './FeaturedProducts'

export default async function Products() {
  const data:ProductInterface[] =await GetProducts()
  
  return (<>
    <FeaturedProducts data={data}/>
    
    </>
  )
}
