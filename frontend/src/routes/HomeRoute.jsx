import React, { useState } from "react";

import TopNavigation from "../components/TopNavigationBar";
import PhotoList from "../components/PhotoList";

import * as photoHelpers from "../helpers/photolabsHelpers";

import "../styles/HomeRoute.scss";

const HomeRoute = (props) => {
  const {
    topics,
    photoClickHandler,
    favoritePhotos,
    toggleFavoritePhoto,
    isPhotoFavorite,
  } = props;

  const checkFavorites = () => {
    return favoritePhotos.some((el) => el.isFavorite === true);
  };

  return (
    <div className="home-route">
      <TopNavigation
        topics={topics}
        favoritePhotos={favoritePhotos}
        checkFavorites={checkFavorites}
      />
      <PhotoList
        favoritePhotos={favoritePhotos}
        toggleFavoritePhoto={toggleFavoritePhoto}
        isPhotoFavorite={isPhotoFavorite}
        photoClickHandler={photoClickHandler}
      />
    </div>
  );
};

export default HomeRoute;
