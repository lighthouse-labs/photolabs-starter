import React from 'react';

import '../styles/HomeRoute.scss';
import PhotoList from '../components/PhotoList';
import TopNavigationBar from '../components/TopNavigationBar';

const HomeRoute = (props) => {
  const {
    favorites,
    topics,
    photos,
    selected,
    displayAlert,
    addFavPhoto,
    removeFavPhoto,
    toggleFavorite,
    updateAlert,
    setCurrentTopic,
    setSearchTerm,
    showFavorites,
    displayFavorites,
    toggleDarkMode,
    darkMode
  } = props;

  const isFavPhotoExist = favorites.size > 0 ? true : false;
  const isPhotoFavorited = (photo) => {
    return favorites.has(photo);
  };

  return (
    <div className={`home-route${darkMode ? '-dark-mode' : ''}`}>
      <TopNavigationBar
        topics={topics}
        isFavPhotoExist={isFavPhotoExist}
        setCurrentTopic={setCurrentTopic}
        setSearchTerm={setSearchTerm}
        showFavorites={showFavorites}
        displayFavorites={displayFavorites}
        toggleDarkMode={toggleDarkMode}
        darkMode={darkMode}
      />
      <div className="home-route__images">
        <PhotoList
          photos={photos ? photos : []}
          selected={selected}
          displayAlert={displayAlert}
          setFavorites={addFavPhoto}
          removeFromFavorites={removeFavPhoto}
          onClick={props.onClick}
          isPhotoFavorited={isPhotoFavorited}
          toggleFavorite={toggleFavorite}
          updateAlert={updateAlert}
          darkMode={darkMode}
        />
      </div>
    </div>
  );
};

export default HomeRoute;