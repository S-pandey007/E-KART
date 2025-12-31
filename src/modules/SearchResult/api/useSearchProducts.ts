import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "@/src/store/config";

export const useSearchProducts = (query: string) => {
  const [SearchResult, setSearchResult] = useState({});

  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [loadingMore, setLoadingMore] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const fetchSearchResults = async (pageNumber=1) => {
    if(!query) return;
    try {
      pageNumber ===1?setLoading(true):setLoadingMore(true);

      const res = await axios.get(`${BASE_URL}/search/products`, {
        params: { query,page:pageNumber,limit:10 },
      });

      // console.log("res api : ",res.data?.data)

      const data = res.data?.data;

      setSearchResult(prev=>({
        products:pageNumber===1?data.products :[...prev.products,...data.products],
        influencers:data.influencers,
        pagination:data.pagination
      }));

      setHasMore(pageNumber<data.pagination.totalPages);
    } catch (error) {
      setSearchResult({});
      console.error("Error fetching search results:", error);
    } finally {
      setLoading(false);
      setLoadingMore(false)
    }
  };

  // new search
  useEffect(() => {
   setPage(1);
   fetchSearchResults(1)
  }, [query]);

  //load more
  const loadMore =()=>{
    if(!loadingMore && hasMore){
        const nextPage=page+1;
        setPage(nextPage);
        fetchSearchResults(nextPage)
    }
  }

  return { SearchResult, loading,loadingMore,loadMore };
};
