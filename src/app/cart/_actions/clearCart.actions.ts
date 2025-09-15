'use server'
import GetTokenAuth from "@/GetTokenAuth"



export async function clearCart(){
    
        const token =await GetTokenAuth()
        if(!token){
            throw new Error('Unauthorized, login first!')
        }
    const res = await fetch(`${process.env.API}/cart/`,{
        cache:'no-store',
        method:'DELETE',
        headers:{
            'content-type':'application/json',
            token
        }
    })
    const payload = await res.json()
    return( payload)

}