import { API_URL } from "@/constants";
import { Color } from "@/types";

const url = `${API_URL}/colors`

const getColor = async (id: string): Promise<Color> => {
    const res = await fetch(`${url}/${id}`)
    return res.json();
}

export default getColor