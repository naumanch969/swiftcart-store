import { API_URL } from "@/constants";
import { Product } from "@/types";
import qs from 'query-string'

const url = `${API_URL}/products`

interface Query {
    categoryId?: string,
    colorId?: string,
    sizeId?: string,
    isFeatured?: boolean,
}

const getProducts = async (query: Query): Promise<Product[]> => {
    const modifiedUrl = qs.stringifyUrl({
        url,
        query: {
            colorId: query.colorId,
            categoryId: query.categoryId,
            isFeatured: query.isFeatured,
            sizeId: query.sizeId
        }
    })
    const res = await fetch(modifiedUrl)
    return res.json();
}

export default getProducts