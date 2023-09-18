import { useState } from "react";

const useApplicationData = () => {
  const [favPhotos, setFavPhotos] = useState([]);
  const [isShown, setIsShown] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return {
    favPhotos,
    setFavPhotos,
    isShown,
    setIsShown,
    selectedPhoto,
    setSelectedPhoto
  };
};

export default useApplicationData;