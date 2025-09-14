'use server'
import GetTokenAuth from "@/GetTokenAuth"
import { redirect } from "next/navigation";


export async function updateCount({id,count}:{id:string,count:number}){
    
        const token =await GetTokenAuth()
        if(!token){
             redirect("/auth/login");
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