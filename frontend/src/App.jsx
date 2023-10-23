import React from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';
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
    setSearchTerm,
    showFavorites,
    toggleDarkMode,
    isModalOpen,
    selectedPhoto,
    favorites,
    selected,
    displayAlert,
    photos,
    topics,
    displayFavorites,
    darkMode
  } = useApplicationData();

  const isPhotoFavorited = (photo) => {
    return favorites.has(photo);
  };

  return (
    <div className={`App${darkMode ? '-dark-mode' : ''}`}>
      <HomeRoute
        photos={photos}
        topics={topics}
        favorites={favorites}
        selected={selected}
        displayAlert={displayAlert}
        displayFavorites={displayFavorites}
        addFavPhoto={addFavPhoto}
        removeFavPhoto={removeFavPhoto}
        onClick={openModal}
        toggleFavorite={toggleFavorite}
        updateAlert={updateAlert}
        setCurrentTopic={setCurrentTopic}
        setSearchTerm={setSearchTerm}
        showFavorites={showFavorites}
        toggleDarkMode={toggleDarkMode}
        darkMode={darkMode}
      />
      {isModalOpen && <PhotoDetailsModal
        {...selectedPhoto}
        toggleFavorite={toggleFavorite}
        isPhotoFavorited={isPhotoFavorited}
        updateAlert={updateAlert}
        onClick={closeModal}
        darkMode={darkMode}
      />}
    </div>
  );
};

export default App;
