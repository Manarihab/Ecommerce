

export default async function GetCategories() {
    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/categories`
    )
    const {data}= await res.json();
    return data
}