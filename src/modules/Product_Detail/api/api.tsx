/*
    fetch product detail data from backend.
*/

import { BASE_URL } from "@/src/store/config"
import axios from "axios"

export const fetchProductDetailData=async(id:string)=>{
    const response = await axios.get(`${BASE_URL}/product/byId/${id}`);
    return response.data?.product;
}
