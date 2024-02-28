import React from "react";

import "./App.scss";
import HomeRoute from "./routes/HomeRoute.jsx";
import PhotoDetailsModal from "./routes/PhotoDetailsModal";
import PhotoFavoritesModal from "./routes/PhotoFavoritesModal";

import {useApplicationData} from "./hooks/useApplicationData";

const App = () => {
  const {
    photos,
    topics,
    favorites,
    isPhotoFavorite,
    numFavorites,
    photoClickHandler,
    // openModal,
    isOpenModal,
    clickedPhoto,
    // closeModal,
    setTopic,
    toggleModal,

    // openFavoritesModal,
    toggleFavoritePhoto,
    // closeFavoritesModal,
    isOpenFavoritesModal,
    getFavoritePhotos,
    toggleFavoritesModal,
    searchInput,
    setSearchInput
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute
        photos={photos}
        topics={topics}
        isPhotoFavorite={isPhotoFavorite}
        toggleFavoritePhoto={toggleFavoritePhoto}
        photoClickHandler={photoClickHandler}
        numFavorites={numFavorites}
        setTopic={setTopic}
        toggleFavoritesModal={toggleFavoritesModal}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
      />

      {isOpenModal && (
        <PhotoDetailsModal
          photos={photos}
          // closeModal={closeModal}
          isPhotoFavorite={isPhotoFavorite}
          toggleFavoritePhoto={toggleFavoritePhoto}
          clickedPhoto={clickedPhoto}
          toggleModal={toggleModal}
          // openModal={openFavoritesModal}
          photoClickHandler={photoClickHandler}
        />
      )}
      {isOpenFavoritesModal && (
        <PhotoFavoritesModal
          // closeModal={closeFavoritesModal}
          isPhotoFavorite={isPhotoFavorite}
          toggleFavoritePhoto={toggleFavoritePhoto}
          getFavoritePhotos={getFavoritePhotos}
          toggleFavoritesModal={toggleFavoritesModal}
        />
      )}
    </div>
  );
  // ...
};
export default App;
