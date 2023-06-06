import { useState } from "react";

const useApplicationData = () => {
  const [showModal, setShowModal] = useState(false);
  const [favouritePhotos, setFavouritePhotos] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState("");

  const addToFavourite = (id) => {
    let likedPhoto;
    if (favouritePhotos.includes(id)) {
      likedPhoto = favouritePhotos.filter((photo) => photo !== id);
    } else {
      likedPhoto = [...favouritePhotos, id];
    }
    setFavouritePhotos(likedPhoto);
  };

  const openModal = () => {
    setShowModal(true);
  };

  const setModalPhoto = (id) => {
    setSelectedPhoto(id);
  };

  const closeModal = () => {
    if (showModal) {
      setShowModal(false);
    }
  };

  return {
    showModal,
    openModal,
    addToFavourite,
    favouritePhotos,
    selectedPhoto,
    setModalPhoto,
    closeModal,
  };
};

export default useApplicationData;
