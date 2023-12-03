import React, { useState } from "react";

import TopNavigation from "../components/TopNavigationBar";
import PhotoList from "../components/PhotoList";

import * as photoHelpers from "../helpers/photolabsHelpers";

import "../styles/HomeRoute.scss";

const HomeRoute = (props) => {
  const {
    topics,
    photos,
    toggleFavoritePhoto,
    isPhotoFavorite,
    photoClickHandler,
    checkFavorites,
  } = props;

  return (
    <div className="home-route">
      <TopNavigation
        topics={topics}
        photos={photos}
        checkFavorites={checkFavorites}
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
