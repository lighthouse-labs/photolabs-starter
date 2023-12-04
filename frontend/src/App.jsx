import React, { useState } from "react";

// import PhotoList from "./components/PhotoList";
// import TopicList from "./components/TopicList";
// import TopNavigationBar from "components/TopNavigationBar";

import "./App.scss";
import HomeRoute from "./routes/HomeRoute.jsx";
import PhotoDetailsModal from "./routes/PhotoDetailsModal";

import photoData from "./mocks/photos";
import topicData from "./mocks/topics";

import { useApplicationData } from "./hooks/useApplicationData";
import * as photoHelpers from "./helpers/photolabsHelpers";

const App = () => {
  const {
    photos,
    topics,
    toggleFavoritePhoto,
    isPhotoFavorite,
    checkFavorites,
    photoClickHandler,
    openModal,
    isOpenModal,
    clickedPhoto,
    closeModal,
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute
        photos={photos}
        topics={topics}
        isPhotoFavorite={isPhotoFavorite}
        toggleFavoritePhoto={toggleFavoritePhoto}
        photoClickHandler={photoClickHandler}
        checkFavorites={checkFavorites}
      />
      {isOpenModal && (
        <PhotoDetailsModal
          photos={photos}
          closeModal={closeModal}
          isPhotoFavorite={isPhotoFavorite}
          clickedPhoto={clickedPhoto}
          openModal={openModal}
        />
      )}
    </div>
  );
  // ...
};
export default App;
