import { useState } from "react";
import toast from "react-hot-toast";

const usePreviewImage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const maxFilesSizeBytes = 6 * 1024 * 2024;

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      if (file.size > maxFilesSizeBytes) {
        toast.error("File size must be less than 2MB");
        setSelectedFile(null);
        return;
      }
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedFile(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      toast.error("Please image file");
    }
  };
  return { selectedFile, handleImageChange, setSelectedFile };
};

export default usePreviewImage;
