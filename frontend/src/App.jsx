import React, { useState } from "react";

import "./App.scss";
import HomeRoute from "./routes/HomeRoute.jsx";
import PhotoDetailsModal from "./routes/PhotoDetailsModal";

import { useApplicationData } from "./hooks/useApplicationData";

const App = () => {
  const {
    photos,
    topics,
    toggleFavoritePhoto,
    isPhotoFavorite,
    numFavorites,
    photoClickHandler,
    openModal,
    isOpenModal,
    clickedPhoto,
    closeModal,
    setTopic,
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
      />
      {isOpenModal && (
        <PhotoDetailsModal
          photos={photos}
          closeModal={closeModal}
          isPhotoFavorite={isPhotoFavorite}
          toggleFavoritePhoto={toggleFavoritePhoto}
          clickedPhoto={clickedPhoto}
          openModal={openModal}
          photoClickHandler={photoClickHandler}
        />
      )}
    </div>
  );
  // ...
};
export default App;
