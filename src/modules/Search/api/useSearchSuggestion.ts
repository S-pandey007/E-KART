import { useEffect,useState } from "react";
import axios from "axios";
import { BASE_URL } from "@/src/store/config";

export const useSearchSuggestion =(query:string)=>{
    const [products,setProducts] = useState<string[]>([]);
    const [categories,setCategories] = useState<string[]>([]);
    const [loading,setLoading] = useState(false);

    useEffect(()=>{
        if(!query || query.trim().length<2){
            setProducts([]);
            setCategories([]);
            return;
        }

        const fetchSuggestions = async()=>{
            try {
                setLoading(true)
                const res = await axios.get(`${BASE_URL}/search/suggesstions`,{
                    params:{q:query}
                })
                 setProducts(res.data?.data?.products || []);
                setCategories(res.data?.data?.categories || []);
            } catch (error) {
                setProducts([]);
                setCategories([]);
                console.error("Error fetching search suggestions:", error);
            }finally{
                setLoading(false);
            }
        }

        fetchSuggestions();
    },[query]);
    return {products,categories,loading};
}

