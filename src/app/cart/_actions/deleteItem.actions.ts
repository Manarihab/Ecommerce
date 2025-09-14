'use server'
import GetTokenAuth from "@/GetTokenAuth"
import { redirect } from "next/navigation";


export async function deleteItem(id:string){
    
        const token =await GetTokenAuth()
        if(!token){
             redirect("/auth/login");
        }
    const res = await fetch(`${process.env.API}/cart/${id}`,{
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