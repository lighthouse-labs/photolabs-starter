import React from "react";

import TopNavigation from "../components/TopNavigationBar";
import PhotoList from "../components/PhotoList";

import "../styles/HomeRoute.scss";

const HomeRoute = (props) => {
  const {
    topics,
    photos,
    toggleFavoritePhoto,
    isPhotoFavorite,
    photoClickHandler,
    numFavorites,
    setTopic,
    displayFavorites,
    toggleFavoritesModal,
  } = props;

  return (
    <div className="home-route">
      <TopNavigation
        topics={topics}
        photos={photos}
        numFavorites={numFavorites}
        setTopic={setTopic}
        displayFavorites={displayFavorites}
        toggleFavoritesModal={toggleFavoritesModal}
      />
      <PhotoList
        photos={photos}
        toggleFavoritePhoto={toggleFavoritePhoto}
        isPhotoFavorite={isPhotoFavorite}
        photoClickHandler={photoClickHandler}
      />
    </div>
  );
};

export default HomeRoute;
