import React from "react";
import TopNavBar from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';
import '../styles/HomeRoute.scss';
import PhotoDetailsModal from './PhotoDetailsModal';
import useApplicationData, { ACTIONS } from '../hooks/useApplicationData';

const HomeRoute = () => {
  const {
    likedPhotos,
    alert,
    similarPhotosData,
    modalVisible,
    selectedPhotoId,
    selectedPhotoData,
    toggleLike,
    handlePhotoClick,
    openPhotoModal,
    closeModal,
    photoData,
    topicData,
    fetchPhotosByTopic,
  } = useApplicationData();

  // Function to handle adding a favorite photo
  const handleAddFavorite = (photoId) => {
    toggleLike(photoId);
  };

  // Function to handle removing a favorite photo
  const handleRemoveFavorite = (photoId) => {
    toggleLike(photoId);
  };

  return (
    <div className="home-route">
      <TopNavBar
        likedPhotos={likedPhotos}
        alert={alert}
        topics={topicData}
        fetchPhotosByTopic={fetchPhotosByTopic}
      />
      <PhotoList
        photos={photoData}
        alert={alert}
        isLiked={(photoId) => likedPhotos.includes(photoId)}
        toggleLike={toggleLike}
        openPhotoModal={openPhotoModal}
        handlePhotoClick={handlePhotoClick}
      />
      {modalVisible && selectedPhotoId !== null && (
        <PhotoDetailsModal
          selectedPhotoId={selectedPhotoId}
          closeModal={closeModal}
          selectedPhotoData={selectedPhotoData}
          similarPhotos={similarPhotosData}
          alert={alert}
          isLiked={(photoId) => likedPhotos.includes(photoId)}
          toggleLike={toggleLike}
          openPhotoModal={openPhotoModal}
          onAddFavorite={handleAddFavorite}
          onRemoveFavorite={handleRemoveFavorite}
        />
      )}
    </div>
  );
};

export default HomeRoute;
