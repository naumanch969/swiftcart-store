import { API_URL } from "@/constants";
import { Size } from "@/types";

const url = `${API_URL}/sizes`

const getSizes = async (): Promise<Size[]> => {
    const res = await fetch(url)
    return res.json();
}

export default getSizes