import React from 'react';
import HomeRoute from './routes/HomeRoute';
import useApplicationData from './hooks/useApplicationData';

const App = () => {
  const {
    likedPhotos,
    alert,
    similarPhotosData,
    modalVisible,
    selectedPhotoId,
    selectedPhotoData,
    toggleLike,
    openPhotoModal,
    closeModal,
    photoData,
    fetchPhotosByTopic, // Add transformedPhotos from useApplicationData
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute />
    </div>
  );
};

export default App;
