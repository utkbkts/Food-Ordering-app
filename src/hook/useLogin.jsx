import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase/config";
import { doc, getDoc } from "firebase/firestore";
import {  useNavigate } from "react-router-dom";
import useAuthStore from "../store/store";
import toast from "react-hot-toast";

const useLogin = () => {
  const navigate = useNavigate()
  const userLogin = useAuthStore((state) => state.login);
  const login = async (email,password) => {
    try {
      const userResponse = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (userResponse.user) {
        const docref = doc(db, "users", userResponse.user.uid);
        const docSnap = await getDoc(docref);
        const userData = docSnap.data();
        localStorage.setItem("user-info", JSON.stringify(userData));
        userLogin(userData);
      }
      navigate("/")
      return userResponse.user;
    } catch (error) {
    }
  };
  return { login };
};

export default useLogin;