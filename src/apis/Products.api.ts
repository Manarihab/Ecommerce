

export default async function GetProducts() {
    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/products`,
        {cache:'no-store'}
    )
    const {data}= await res.json();
    return data
}