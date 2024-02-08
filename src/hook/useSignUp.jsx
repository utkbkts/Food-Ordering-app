import {
  addDoc,
  collection,
  doc,
  getDocs,
  query,
  serverTimestamp,
  setDoc,
  where,
} from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { auth, db } from "../firebase/config";
import useAuthStore from "../store/store";

const useSignUpWithEmailAndPassword = () => {
  const navigate = useNavigate();
  const loginUser = useAuthStore((state) => state.login);

  const signup = async (email,password,name) => {
    if (!email || !password || !name) {
      toast.error("Please fill all the fields");
      return;
    }

    const usersRef = collection(db, "users");
    const q = query(usersRef, where("name", "==", name));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      toast.error("name already exists");
      return;
    }

    try {
      const newUser = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (!newUser && error) {
        toast.error(error.message);
        return;
      }
      if (newUser) {
        const userDoc = {
          uid: newUser.user.uid,
          email: email,
          Name: name,
          bio: "",
          phone:"",
          streetadress:"",
          postalcode:"",
          city:"",
          country:"",
          profilePicURL: "",
          cart: [],
          favoritedata:[],
          orderdata:[],
          createdAt: Date.now(),
        };
        await setDoc(doc(db, "users", newUser.user.uid), userDoc);
        localStorage.setItem("user-info", JSON.stringify(userDoc));
        loginUser(userDoc);
        navigate("/login");
      }
    } catch (error) {
    }
  };
  return { signup };
};
export default useSignUpWithEmailAndPassword;
