import React, { useState } from 'react';

// Styling
import './App.scss';

// Routes
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

// Mock Data
import photos from 'mocks/photos.js'
import topics from 'mocks/topics.js'

// Hooks
import useApplicationData from 'hooks/useApplicationData'


// Note: Rendering a single component to build components in isolation
const App = () => {

  const { 
    favPhotos, addFavourite, removeFavourite, 
    clickedPhoto, openModal, closeModal, handlePhotoClick, handleCloseClick,
    isFav, handleFavClick,
    
    similarPhotos, clickedPhotoInfo,
    }  
    = useApplicationData();


  return (
    <div className="App">
      <HomeRoute 
        topics={topics}
        photos={photos}
        openModal={openModal}
        handlePhotoClick={handlePhotoClick}
        favPhotos={favPhotos}
        addFavourite={addFavourite}
        removeFavourite={removeFavourite}
        isFav={isFav}
        handleFavClick={handleFavClick}
        />

      {clickedPhoto && 
        <PhotoDetailsModal 
          photos={photos} 
          favPhotos={favPhotos}
          favPhotosExist={favPhotos.length > 0}
          addFavourite={addFavourite}
          removeFavourite={removeFavourite}
          photo={clickedPhoto} 
          closeModal={closeModal} 
          handlePhotoClick={handlePhotoClick}
          handleCloseClick={handleCloseClick}
          clickedPhoto={clickedPhoto}
        
          // similarPhotos={similarPhotos}
          // clickedPhotoInfo={clickedPhotoInfo}      
        />}

    </div>
  );
};



export default App;
