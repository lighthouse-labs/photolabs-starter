import { useState } from 'react'

function useApplicationData() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [favoritedPhotoIds, setFavoritedPhotoIds] = useState([])

  const updateToFavPhotoIds = (photoId) => {
    if (favoritedPhotoIds.includes(photoId)) {
      const newFavoritedPhotoIds = favoritedPhotoIds.filter(id => id !== photoId);
      console.log(newFavoritedPhotoIds)
      setFavoritedPhotoIds(newFavoritedPhotoIds);
    } else {
      const newFavoritedPhotoIds = [...favoritedPhotoIds, photoId];
      console.log(newFavoritedPhotoIds)
      setFavoritedPhotoIds(newFavoritedPhotoIds);
    }
   };

   const setPhotoSelected = (photoData = null) => {
    setIsModalOpen(!isModalOpen)
    setSelectedPhoto(photoData)
   };

   const onClosePhotoDetailsModal = () => {
    setIsModalOpen(false);
    setSelectedPhoto(null);
  };

  return {
    state: { isModalOpen, selectedPhoto, favoritedPhotoIds },
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal
  };
}

export default useApplicationData;