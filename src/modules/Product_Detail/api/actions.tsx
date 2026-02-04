import { GET_PRODUCT_DETAIL } from "./constants"

export const getProductDetails=(id:string)=>{
    return{
        type:GET_PRODUCT_DETAIL,
        payload:id
    }
}