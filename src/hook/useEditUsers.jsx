import { doc ,updateDoc } from "firebase/firestore";
import { db, storage } from "../firebase/config";
import useAuthStore from "../store/store";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import toast from "react-hot-toast";

const useEditUsers = () => {
  const authUser = useAuthStore((state) => state.user);
  const setAuthUser = useAuthStore((state) => state.setUser);
  const EditUser = async (formData,selectedFile) => {
    try {
      const storageRef = ref(storage, `profilePics/${authUser.uid}`);
      const userDocRef = doc(db, "users", authUser.uid);
      let URL = "";
      if (selectedFile) {
        await uploadString(storageRef, selectedFile, "data_url");
        URL = await getDownloadURL(ref(storage, `profilePics/${authUser.uid}`));
      }
      const updatedUser={
        ...authUser,
        Name:formData.name || authUser.Name,
        postalcode:formData.postalcode || authUser.postalcode,
        streetadress:formData.streetadress || authUser.streetadress,
        country:formData.country || authUser.country,
        city:formData.city || authUser.city,
        bio:formData.bio || authUser.bio,
        profilePicURL: URL || authUser.profilePicURL,
        phone:formData.phone|| authUser.phone

      }
      await updateDoc(userDocRef, updatedUser);
      localStorage.setItem("user-info", JSON.stringify(updatedUser));
      setAuthUser(updatedUser);
      toast.success("Successfully edit")
    } catch (error) {
      toast.error(error.message);
    }
  };
  return { EditUser };
};

export default useEditUsers;
