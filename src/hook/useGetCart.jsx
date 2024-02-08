import { collection, onSnapshot } from "firebase/firestore";
import React, { useEffect } from "react";
import { useState } from "react";
import { db } from "../firebase/config";

const useGetCart = () => {
  const [Getblog, setGetBlog] = useState([]);
  const GetCart = async () => {
    const unsub = onSnapshot(collection(db, "carts"), (snapshot) => {
      let list = [];
      snapshot.forEach((doc) => {
        list.push({ id: doc.id, ...doc.data() });
      });
      setGetBlog(list)
    });
    return () => {
        unsub();
      };
  };
  useEffect(() => {
    GetCart();
  }, []);
  return{Getblog}
};

export default useGetCart;
