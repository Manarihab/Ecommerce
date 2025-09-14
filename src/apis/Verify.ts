export default async function Verifycode({resetCode}:{resetCode:string}) {
    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode`,{
        method:'POST',
        body:JSON.stringify({resetCode}),
        headers:{
            'Content-Type': 'application/json'
        }
    }
    )
    const data= await res.json();
    return data
}