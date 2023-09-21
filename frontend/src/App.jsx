import React, { useState } from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import { useApplicationData } from 'hooks/useApplicationData';

// Note: Rendering a single component to build components in isolation
const App = () => {
  const {
    favourites,
    isModalOpen,
    clickedPhoto,
    isFavourite,
    isFavPhotoExist,
    setModalHandler,
    selectedPhoto,
    selectedPhotoHandler,
    setClickedPhoto,
    closeModal,
    photos
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute
        photos={photos}
        favourites={favourites}
        selectedPhoto={selectedPhoto}
        selectedPhotoHandler={selectedPhotoHandler}
        isFavourite={isFavourite}
        isFavPhotoExist={isFavPhotoExist}
        setModalHandler={setModalHandler}
        setClickedPhoto={setClickedPhoto}
      />
      {isModalOpen && (
        <PhotoDetailsModal
          selectedPhotoHandler={selectedPhotoHandler}
          closeModal={closeModal}
          clickedPhoto={clickedPhoto}
          photos={photos}
          isFavourite={isFavourite}
          selectedPhoto={selectedPhoto}
          setModalHandler={setModalHandler}
          setClickedPhoto={setClickedPhoto}
        />
      )}
    </div>
  );
};

export default App;
