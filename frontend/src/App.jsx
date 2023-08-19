import React, { useState } from 'react';

// Styling
import './App.scss';

// Routes
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

// Hooks
import useApplicationData from 'hooks/useApplicationData'


// Note: Rendering a single component to build components in isolation
const App = () => {
  const { handleFavClick, handlePhotoClick, handleCloseClick, state, actions } = useApplicationData();
  const { addFavourite, removeFavourite, openModal, closeModal  } = actions;
  const { photos, topics, clickedPhoto, favPhotos, clickedPhotoInfo, similarPhotos, isFav} = state;

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
        
          similarPhotos={similarPhotos}
          clickedPhotoInfo={clickedPhotoInfo}      
        />}

    </div>
  );
};



export default App;
