'use client'
import { useQuery } from '@tanstack/react-query'
import React, { createContext, useEffect, useState } from 'react'
import { WishList } from './app/wishList/_interfaces/wish.interface'


interface WishContextType {
  list: WishList | undefined;
  setList: React.Dispatch<React.SetStateAction<WishList | undefined>>;
}

     export const Wish = createContext<WishContextType | null>(null)
export default function WishContextProvider({children}:{children:React.ReactNode}) {
        const [list,setList]= useState<WishList>()
        const {data}= useQuery<WishList>({queryKey:['wish'],queryFn:async()=>{
        const res = await fetch('/api/wishlist')
        const payload=await res.json()
        return payload
    }})
    useEffect(()=>{
        if(data){
        setList(data)
        }
    },[data])


  return (
    <Wish.Provider value={{list,setList}}>
        {children}
    </Wish.Provider>
  )
}
