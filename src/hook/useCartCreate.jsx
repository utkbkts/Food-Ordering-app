import {
  addDoc,
  arrayUnion,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { db, storage } from "../firebase/config";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import useAuthStore from "../store/store";
import { useNavigate } from "react-router-dom";

const useCartCreate = () => {
  const [isLoading, setIsLoading] = useState(false);
  const authUser = useAuthStore((state) => state.user);
  const navigate = useNavigate()
  const CreateFormData = async (data) => {
    setIsLoading(true);
    if (
      !data.image ||
      !data.category ||
      !data.price ||
      !data.title ||
      !data.description
    ) {
      toast.error("Alanlar boş bırakılamaz");
      setIsLoading(false);
      return;
    }
   
    try {
      const newPost = {
        image: data.image,
        rating: [],
        category: data.category,
        selectedCategoryType: data.selectedCategoryType,
        title: data.title,
        price: data.price,
        description:  data.description,
        createdAt: Date.now(),
        createdBy: authUser.uid,
      };
      const docRef = await addDoc(collection(db, "carts"), newPost);
      const userDocRef = doc(db, "users", authUser.uid);
      const imageRef = ref(storage, `posts/${docRef.id}`);
      await updateDoc(userDocRef, { cart: arrayUnion(docRef.id) });
      await uploadString(imageRef, data.image, "data_url");
      const downloadURL = await getDownloadURL(imageRef);
      await updateDoc(docRef, { image: downloadURL });
      newPost.image = downloadURL;

      toast.success("Başarıyla oluşturuldu", { duration: 2000 });
      setIsLoading(false);
      navigate("/")
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  return { CreateFormData, isLoading };
};

export default useCartCreate;
