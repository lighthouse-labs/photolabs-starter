import React, { useState } from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import photos from 'mocks/photos';

// Note: Rendering a single component to build components in isolation
const App = () => {
  const [favPhotos, setFavPhotos] = useState([]);
  // Modal Open/Close functions
  const [isShown, setIsShown] = useState(false);

  const closeModal = () => {
    setIsShown(false);
  };

  const openModal = () => {
    setIsShown(true);
  };

  // Selected photo data to be displayed in modal
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  
  return (
    <div className="App">
      <HomeRoute photos={photos} openModal={openModal} selectedPhoto={selectedPhoto} setSelectedPhoto={setSelectedPhoto} favPhotos={favPhotos} setFavPhotos={setFavPhotos}/>
      {!!isShown && <PhotoDetailsModal photos={photos} closeModal={closeModal} isShown={isShown} selectedPhoto={selectedPhoto} favPhotos={favPhotos} setFavPhotos={setFavPhotos}/>}
    </div>
  );
};

export default App;
