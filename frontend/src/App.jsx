import React from 'react';

import './App.scss';

import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import photos from 'mocks/photos';
import useApplicationData from 'hooks/useApplicationData';


const App = () => {
  const {
    isModalOpen,
    selectedPhoto,
    favoritedPhotos,
    openModal,
    closeModal,
    setFavoritedPhotos
  } = useApplicationData();

  return (
  <div className="App">
    {isModalOpen && (
  <PhotoDetailsModal 
    photo={selectedPhoto} 
    photos={photos} 
    onClose={closeModal}
    favoritedPhotos={favoritedPhotos} 
    setFavoritedPhotos={setFavoritedPhotos}
  />
)}
    <HomeRoute 
   openModal={openModal} 
   favoritedPhotos={favoritedPhotos}
   setFavoritedPhotos={setFavoritedPhotos}
/> 
  </div>
  
  );
};

export default App; 
