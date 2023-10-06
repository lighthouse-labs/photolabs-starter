// HomeRoute.jsx
import React from 'react';
import TopNavBar from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';
import '../styles/HomeRoute.scss';
import PhotoDetailsModal from './PhotoDetailsModal';
import useApplicationData, { ACTIONS } from '../hooks/useApplicationData'; // Adjust the import path

const HomeRoute = () => {
  const {
    likedPhotos,
    setLikedPhotos,
    alert,
    setAlert,
    similarPhotosData,
    modalVisible,
    selectedPhotoId,
    selectedPhotoData,
    toggleLike,
    openPhotoModal,
    closeModal,
    transformedTopics,
    transformedPhotos, // Add transformedPhotos from useApplicationData
  } = useApplicationData();
  console.log('home', similarPhotosData);

  // Function to handle adding a favorite photo
  const handleAddFavorite = (photoId) => {
    // Dispatch the action to add a favorite photo
    toggleLike(photoId);
    // You can add additional logic here if needed
  };

  // Function to handle removing a favorite photo
  const handleRemoveFavorite = (photoId) => {
    // Dispatch the action to remove a favorite photo
    toggleLike(photoId);
    // You can add additional logic here if needed
  };

  return (
    <div className="home-route">
      <TopNavBar
        topics={transformedTopics}
        likedPhotos={likedPhotos}
        setLikedPhotos={setLikedPhotos}
        alert={alert}
        setAlert={setAlert}
      />
      <PhotoList
        photos={transformedPhotos}
        alert={alert}
        setAlert={setAlert}
        isLiked={(photoId) => likedPhotos.includes(photoId)}
        toggleLike={toggleLike}
        openPhotoModal={openPhotoModal}
      />
      {modalVisible && selectedPhotoId !== null && (
        <PhotoDetailsModal
          selectedPhotoId={selectedPhotoId}
          closeModal={closeModal}
          selectedPhotoData={selectedPhotoData}
          similarPhotos={similarPhotosData}
          setAlert={setAlert}
          alert={alert}
          isLiked={(photoId) => likedPhotos.includes(photoId)}
          toggleLike={toggleLike}
          openPhotoModal={openPhotoModal}
          onAddFavorite={handleAddFavorite} // Pass the add favorite function
          onRemoveFavorite={handleRemoveFavorite} // Pass the remove favorite function
        />
      )}
    </div>
  );
};

export default HomeRoute;
