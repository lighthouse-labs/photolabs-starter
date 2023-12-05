import React from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import { useState } from 'react';
import { useApplicationData } from 'hooks/useApplicationData';

// Note: Rendering a single component to build components in isolation

const App = () => {

  const {
    state: { modal, photoDetails, liked, photos, topics },
    updateToFavPhotoIds: toggleLike,
    setPhotoSelected: toggleModal,
    closeModal,
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute toggleModal={toggleModal} liked={liked} toggleLike={toggleLike} photos={photos} topics={topics}/>
      {modal && <PhotoDetailsModal closeModal={closeModal} photoDetails={photoDetails} liked={liked} toggleLike={toggleLike}/>}
    </div>
  );
};

export default App;