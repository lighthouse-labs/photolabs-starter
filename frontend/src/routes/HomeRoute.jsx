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
    numFavorites,
    setTopic,
  } = props;

  return (
    <div className="home-route">
      <TopNavigation
        topics={topics}
        photos={photos}
        numFavorites={numFavorites}
        setTopic={setTopic}
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
