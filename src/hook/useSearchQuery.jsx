import { collection, getDocs, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { db } from "../firebase/config";
import { isEmpty, isNull } from "lodash";
function useQuery() {
  return new URLSearchParams(useLocation().search);
}
const useSearchQuery = () => {
    const queryString = useQuery();
    const [search, setSearch] = useState("");
    const [GetSearch, setGetSearch] = useState([]);
    const searchQuerys = queryString.get("searchQuery");
  
    const SearchQuery = async () => {
      const docRef = collection(db, "carts");
      // const searchQueryLower = searchQuerys.toLowerCase();
      
      if (!isNull(searchQuerys)) { // Eğer searchQuery boş değilse
        //! title search
        const titleRef = query(docRef, where("title", "==", searchQuerys));
        const titleSnapshot = await getDocs(titleRef);
        let titlearray = [];
        titleSnapshot.forEach((doc) => {
          titlearray.push({ id: doc.id, ...doc.data()});
        });
        //! category search
        const categoryQuery = query(docRef, where("category", "==", searchQuerys));
        const CategorySnapshot = await getDocs(categoryQuery);
        let CategoryArray = [];
        CategorySnapshot.forEach((doc) => {
          CategoryArray.push({ id: doc.id, ...doc.data()});
        });
  
        const combinedSearchBlogs = titlearray.concat(CategoryArray);
        setGetSearch(combinedSearchBlogs);
      }
    };
  
    useEffect(() => {
      SearchQuery();
    }, [searchQuerys]); // Her searchQuerys değiştiğinde SearchQuery fonksiyonunu çağır
  
    const handleChange = (e) => {
      const { value } = e.target;
      setSearch(value);
    };
  
    return { SearchQuery, handleChange, search, GetSearch };
  };

export default useSearchQuery;
