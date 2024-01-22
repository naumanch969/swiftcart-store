import { Category } from "@/types";

const url = `${process.env.NEXT_PUBLIC_API_URL}/categories`

const getCategory = async (id: string): Promise<Category> => {
    const res = await fetch(`${url}/${id}`)
    return res.json();
}

export default getCategory