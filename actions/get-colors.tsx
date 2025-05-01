import { API_URL } from "@/constants";
import { Color } from "@/types";

const url = `${API_URL}/colors`

const getColors = async (): Promise<Color[]> => {
    const res = await fetch(url)
    return res.json();
}

export default getColors