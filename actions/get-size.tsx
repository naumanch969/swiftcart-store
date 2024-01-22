import { Size } from "@/types";

const url = `${process.env.NEXT_PUBLIC_API_URL}/sizes`

const getSize = async (id: string): Promise<Size> => {
    const res = await fetch(`${url}/${id}`)
    return res.json();
}

export default getSize