import { useEffect,useState } from "react";
import axios from "axios";
import { BASE_URL } from "@/src/store/config";

interface Product {
  _id: string;
  name: string;
  image: string;
  rating: number;
  ratingCount: string ;
  assured: boolean;
  sellingPrice: number;
  originalPrice: number;
  discountPercent: number;
  deliveryText: string;
}

export const useSearchProducts = (query:string)=>{
    const [SearchResult,setSearchResult]=useState<Product[]>([]);
       const [loading,setLoading] = useState(false);
    useEffect(()=>{
        if(!query || query.trim().length<0){
            setSearchResult([]);
            return;
        }
        const fetchSearchResults = async()=>{
            try {
                  setLoading(true)
                const res = await axios.get(`${BASE_URL}/search/products`,{
                    params:{query}
                })
                setSearchResult(res.data?.data?.products || [])
            } catch (error) {
                setSearchResult([]);
                console.error("Error fetching search results:",error);
            }finally{
                setLoading(false);
            }
        }

        fetchSearchResults();
    },[query])
    return {SearchResult,loading};
}