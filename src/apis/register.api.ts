'use server'
import { RegisterSchemaForm } from "@/schemas/register.schema";


export default async function addUser(user:{user:RegisterSchemaForm}) {
    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/auth/signup`,{
        method:'POST',
        body:JSON.stringify(user)
    }
    )
    const {data}= await res.json();
    return data
}