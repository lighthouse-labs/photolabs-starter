// HomeRoute.jsx
import React from 'react';
import TopNavBar from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';
import '../styles/HomeRoute.scss';
import PhotoDetailsModal from './PhotoDetailsModal';
import useApplicationData from '../hooks/useApplicationData'; // Adjust the import path

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
  console.log('home',similarPhotosData)
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
        />
      )}
    </div>
  );
};

export default HomeRoute;
