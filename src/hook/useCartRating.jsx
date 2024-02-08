import {
  addDoc,
  arrayUnion,
  collection,
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import toast from "react-hot-toast";
import { db } from "../firebase/config";
import useAuthStore from "../store/store";

const useCartRating = () => {
  const authUser = useAuthStore((state) => state.user);
  const RatingCart = async (currentRating,cartId) => {
    const newPost = {
      rating: [currentRating], // currentRating değerini bir dizi içinde tutuyoruz
      createdAt: Date.now(),
      createdBy: authUser.uid,
    };

    try {
      const docRef = await addDoc(collection(db, "rating"), newPost);
      const userDocRef = doc(db, "users", authUser.uid);
      const cartsDocRef = doc(db, "carts",cartId);

      await updateDoc(userDocRef, { rating: arrayUnion(docRef.id) });
      await updateDoc(cartsDocRef, { rating: arrayUnion(currentRating) });

      toast.success("Your vote has been successfully registered");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return { RatingCart };
};

export default useCartRating;
