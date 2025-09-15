'use server'
import GetTokenAuth from "@/GetTokenAuth"



export async function updateCount({id,count}:{id:string,count:number}){
    
        const token =await GetTokenAuth()
        if(!token){
            throw new Error('Unauthorized, login first!')
        }
    const res = await fetch(`${process.env.API}/cart/${id}`,{
        cache:'no-store',
        method:'PUT',
        headers:{
            'content-type':'application/json',
            token
        },body:JSON.stringify({count})
    })
    const payload = await res.json()
    return( payload)

}