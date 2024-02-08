import { collection, onSnapshot, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase/config";

const useGetUsers = () => {
  const [userData, setUserData] = useState([]); // Kullanıcı verisini saklamak için bir state tanımlayın
  const [isLoading, setIsLoading] = useState(false); // Yükleme durumunu saklamak için bir state tanımlayın

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true); // Yükleme durumunu true yapın

      const q = query(collection(db, "users"));
      const unsubscribe = onSnapshot(q, (snapshot) => {
        let userArray = [];

        snapshot.forEach((doc) => {
          userArray.push({ ...doc.data(), id: doc.id });
        });

        setUserData(userArray); // Kullanıcı verisini güncelleyin
        setIsLoading(false); // Yükleme durumunu false yapın
      });

      return () => unsubscribe(); // Aboneliği temizleyin
    };

    fetchData(); // Veriyi getirme işlemini gerçekleştirin

  }, []); // useEffect'i sadece ilk renderda çalıştırmak için boş bağımlılık dizisi kullanın

  return { userData, isLoading }; // Kullanıcı verisini ve yükleme durumunu döndürün
};

export default useGetUsers;
