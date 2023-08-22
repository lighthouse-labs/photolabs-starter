import React from 'react';

// Styling
import './App.scss';

// Routes
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

// Hooks
import useApplicationData from 'hooks/useApplicationData';


// Note: Rendering a single component to build components in isolation
const App = () => {
  const { handleShowFavsClick, removeFavourite, openModal, closeModal, addFavourite, handleAllClick, handleTopicClick, handlePhotoClick, handleCloseClick, state, } = useApplicationData();
  const { photos, topics, clickedPhoto, favPhotosArray, clickedPhotoInfo, similarPhotos, } = state;

  return (
    <div className="App">
      <HomeRoute
        topics={topics}
        photos={photos}
        openModal={openModal}
        handlePhotoClick={handlePhotoClick}
        favPhotosArray={favPhotosArray}
        addFavourite={addFavourite}
        removeFavourite={removeFavourite}
        handleTopicClick={handleTopicClick}
        handleAllClick={handleAllClick}
        handleShowFavsClick={handleShowFavsClick}
      />

      {clickedPhoto &&
        <PhotoDetailsModal
          photos={photos}
          favPhotosArray={favPhotosArray}
          favPhotosExist={favPhotosArray.length > 0}
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
