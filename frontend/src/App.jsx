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
    openModal,
    setClickedPhoto,
    toggleFavourites,
    closeModal,
    photos,
    topics,
		getTopicId
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute
        photos={photos}
        topics={topics}
        favourites={favourites}
        toggleFavourites={toggleFavourites}
        openModal={openModal}
        setClickedPhoto={setClickedPhoto}
				getTopicId = {getTopicId}
      />
      {/* closing the modal */}
      {/* whatever functionality displays the photodetails */}
      {/* toggle Favourties */}
      {/* favourites */}
      {isModalOpen && (
        <PhotoDetailsModal
          toggleFavourites={toggleFavourites}
          closeModal={closeModal}
          favourites={favourites}
          clickedPhoto={clickedPhoto}
        />
      )}
    </div>
  );
};

export default App;
