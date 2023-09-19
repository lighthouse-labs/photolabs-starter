import { useState } from "react";

const useApplicationData = function() {
  const [showModal, setShowModal] = useState(false);
  const [showPhotoDetails, setShowPhotoDetails] = useState([]);
  const [favPhotos, setFavPhotos] = useState([]);

  const createFavorite = (id) => {
    setFavPhotos([...favPhotos, id]);
  };

  const deleteFavorite = (id) => {
    const updatedFavorites = favPhotos.filter((favId) => favId !== id);
    setFavPhotos(updatedFavorites);
  };

  const handleClick = (photoDetails) => {
    setShowModal(true);
    setShowPhotoDetails([photoDetails]);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return {
    showModal,
    showPhotoDetails,
    favPhotos,
    createFavorite,
    deleteFavorite,
    handleClick,
    handleClose,
  };
};

export default useApplicationData;
