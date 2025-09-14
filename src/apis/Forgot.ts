


export default async function Forgot({email}:{email:string}) {
    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords`,{
        method:'POST',
        body:JSON.stringify({email}),
        headers:{
            'Content-Type': 'application/json'
        }
    }
    )
    const data= await res.json();
    return data
}