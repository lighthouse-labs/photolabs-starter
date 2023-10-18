import React, { useState } from 'react';

import './App.scss';
import HomeRoute from './components/HomeRoute';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';

// Note: Rendering a single component to build components in isolation
const App = () => {
  const {isModalOpen, selectedPhoto, favorites, selected, displayAlert, openModal, closeModal, addFavPhoto, removeFavPhoto, iconLiked, iconUnliked} = useApplicationData();

  return (
    <div className="App">
      <HomeRoute photos={photos} topics={topics} favorites={favorites} selected={selected} displayAlert={displayAlert} addFavPhoto={addFavPhoto} removeFavPhoto={removeFavPhoto} onClick={openModal} iconLiked={iconLiked} iconUnliked={iconUnliked} />
      {isModalOpen && <PhotoDetailsModal
        {...selectedPhoto}
        onClick={closeModal}
      />}
    </div>
  );
};

export default App;
