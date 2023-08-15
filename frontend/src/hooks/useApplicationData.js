import { useState } from 'react';

const useApplicationData = () => {

  const [isModalVisible, setModalVisible] = useState(false); //Show and do not show modal
  const [selectedPhotoData, setSelectedPhotoData] = useState(null);
  const [favoritedPhotoIds, setFavoritedPhotoIds] = useState([]);

  const toggleFavorite = (photoId) => {
    console.log("Toggling favorite for photo ID:", photoId);
    if (favoritedPhotoIds.includes(photoId)) {
      setFavoritedPhotoIds(favoritedPhotoIds.filter((id) => id !== photoId));
    } else {
      setFavoritedPhotoIds([...favoritedPhotoIds, photoId]);
    }
  };


  const openModal = (photoData) => {
    setSelectedPhotoData(photoData);
    setModalVisible(true);
  };

  const closeModal = () => {
    setSelectedPhotoData(null);
    setModalVisible(false);
  };

  return {
    isModalVisible,
    setModalVisible,
    selectedPhotoData,
    setSelectedPhotoData,
    favoritedPhotoIds,
    setFavoritedPhotoIds,
    toggleFavorite,
    openModal,
    closeModal,
  };
};

export default useApplicationData;
