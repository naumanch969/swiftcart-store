import { API_URL } from "@/constants";
import { Category } from "@/types";

const url = `${API_URL}/categories`

const getCategories = async (): Promise<Category[]> => {
    if (!url) return [];
    const res = await fetch(url)
    return res.json();
}

export default getCategories