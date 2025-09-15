'use server'
import GetTokenAuth from "@/GetTokenAuth"



export async function removeWish(id:string){
    
        const token =await GetTokenAuth()
        if(!token){
            throw new Error('Unauthorized, login first!')
        }
    const res = await fetch(`${process.env.API}/wishlist/${id}`,{
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