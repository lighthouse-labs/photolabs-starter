import React, { useState } from "react";

import TopNavigation from "../components/TopNavigationBar";
import PhotoList from "../components/PhotoList";

import * as photoHelpers from "../helpers/photolabsHelpers";

import "../styles/HomeRoute.scss";

const HomeRoute = (props) => {
  const { photos, topics, photoClickHandler } = props;

  const [favoritePhotos, setfavoritePhotos] = useState(photos); //Add isfavorite to photos
  // console.log("home", photolabs);

  const addPhotoFavorite = (photoId) => {
    const updatedPhotos = photoHelpers.addFavoriteToPhotos(
      updatedPhotos,
      photoId
    );

    setfavoritePhotos(updatedPhotos);
  };

  const checkFavorites = (favoritePhotos) => {
    return favoritePhotos.some((photo) => photo.isFavorite === true);
  };

  return (
    <div className="home-route">
      <TopNavigation topics={topics} checkFavorites={checkFavorites} />
      <PhotoList
        photos={photos}
        addPhotoFavorite={addPhotoFavorite}
        photoClickHandler={photoClickHandler}
      />
    </div>
  );
};

export default HomeRoute;
