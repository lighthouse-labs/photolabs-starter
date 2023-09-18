import React, { useState } from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import photos from 'mocks/photos';
import useApplicationData from 'hooks/useApplicationData';

const App = () => {
  const {
    favPhotos,
    setFavPhotos,
    isShown,
    setIsShown,
    selectedPhoto,
    setSelectedPhoto
  } = useApplicationData();

  const closeModal = () => {
    setIsShown(false);
  };
  const openModal = () => {
    setIsShown(true);
  };
  
  return (
    <div className="App">
      <HomeRoute photos={photos} openModal={openModal} selectedPhoto={selectedPhoto} setSelectedPhoto={setSelectedPhoto} favPhotos={favPhotos} setFavPhotos={setFavPhotos}/>
      {!!isShown && <PhotoDetailsModal photos={photos} closeModal={closeModal} isShown={isShown} selectedPhoto={selectedPhoto} favPhotos={favPhotos} setFavPhotos={setFavPhotos}/>}
    </div>
  );
};

export default App;
