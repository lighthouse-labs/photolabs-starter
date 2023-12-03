import React from "react";

import "../styles/PhotoList.scss";

import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {
  const { photoClickHandler, photos, toggleFavoritePhoto, isPhotoFavorite } =
    props;

  const photosList = photos.map((photo) => (
    <PhotoListItem
      key={photo.id}
      {...photo}
      toggleFavoritePhoto={() => toggleFavoritePhoto(photo.id)}
      photoClickHandler={() => photoClickHandler(photo.id)}
      isPhotoFavorite={() => isPhotoFavorite(photo.id)}
    />
  ));

  return <ul className="photo-list">{photosList}</ul>;
};

export default PhotoList;
