'use server'
import GetTokenAuth from "@/GetTokenAuth"
import { redirect } from "next/navigation"

type shippingAddressType ={
    "details": string
        "phone": string,
        "city": string
}

export async function Checkout(cartId:string,shippingAddress:shippingAddressType){
    
        const token =await GetTokenAuth()
        if(!token){
             redirect("/auth/login");
        }
    const res = await fetch(`${process.env.API}/orders/checkout-session/${cartId}?url=http://localhost:3000`,{
        method:'POST',
        headers:{
            'content-type':'application/json',
            token
        },body:JSON.stringify(shippingAddress)
    })
    const payload = await res.json()
    return( payload)

}