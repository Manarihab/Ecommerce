
type newdataType ={
    email:string,
    newPassword:string
}

export default async function reset(newdata:newdataType) {
    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/auth/resetPassword`,{
        method:'PUT',
        body:JSON.stringify(newdata),
        headers:{
            'Content-Type': 'application/json'
        }
    }
    )
    const data= await res.json();
    return data
}