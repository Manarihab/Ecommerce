'use server'
import GetTokenAuth from "@/GetTokenAuth"
import { redirect } from "next/navigation";


export async function addWish(id:string){
    
        const token =await GetTokenAuth()
        if(!token){
            redirect("/auth/login");
        }
    const res = await fetch(`${process.env.API}/wishlist`,{
        cache:'no-store',
        method:'POST',
        headers:{
            'content-type':'application/json',
            token
        },body:JSON.stringify({productId:id})
    })
    const payload = await res.json()
    return( payload)

}