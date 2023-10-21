import React from 'react';

import './App.scss';
import HomeRoute from './components/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';

const App = () => {
  const {
    toggleFavorite,
    updateAlert,
    openModal,
    closeModal,
    addFavPhoto,
    removeFavPhoto,
    setCurrentTopic,
    isModalOpen,
    selectedPhoto,
    favorites,
    selected,
    displayAlert,
    photos,
    topics
  } = useApplicationData();

  const isPhotoFavorited = (photo) => {
    return favorites.has(photo);
  };

  return (
    <div className="App">
      <HomeRoute photos={photos} topics={topics} favorites={favorites} selected={selected} displayAlert={displayAlert} addFavPhoto={addFavPhoto} removeFavPhoto={removeFavPhoto} onClick={openModal} toggleFavorite={toggleFavorite} updateAlert={updateAlert} setCurrentTopic={setCurrentTopic}/>
      {isModalOpen && <PhotoDetailsModal
        {...selectedPhoto}
        toggleFavorite={toggleFavorite}
        isPhotoFavorited={isPhotoFavorited}
        updateAlert={updateAlert}
        onClick={closeModal}
      />}
    </div>
  );
};

export default App;
