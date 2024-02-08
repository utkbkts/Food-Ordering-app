import { collection, getDocs, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebase/config";
import useAuthStore from "../store/store";
import usePostStore from "../store/PostStore";

const useGetCartId = () => {
  const authuser = useAuthStore((state) => state.user);
  const [isLoading, setIsLoading] = useState(true);
  const { posts, setPosts } = usePostStore();
  useEffect(() => {
    const GetCartId = async () => {
      try {
        const q = query(
          collection(db, "carts"),
          where("createdBy", "==", authuser.uid)
        );
        const querySnapshot = await getDocs(q);
        const posts = [];
        querySnapshot.forEach((doc) => {
          posts.push({ ...doc.data(), id: doc.id });
        });
        posts.sort((a, b) => b.createdAt - a.createdAt);
        setPosts(posts);
      } catch (error) {
        console.log(error);
        setPosts([]);
      }
    };
    GetCartId();
  }, [setPosts, authuser]);
  return { isLoading, posts };
};

export default useGetCartId;
