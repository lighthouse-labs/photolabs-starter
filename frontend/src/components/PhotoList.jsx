import React, { useState } from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";
import PhotoDetailsModal from "../routes/PhotoDetailsModal";

const PhotoList = (props) => {
  // console.log("this is props.photos:", props.photos);
  const { photos, addFavPhoto, removeFavPhoto, onPhotoClick } = props;

  const photoItems = photos.map((photo, index) => {
    return (
      <PhotoListItem
        key={`${photo.id}_${index}`}
        username={photo.user.username}
        imageSource={photo.urls.full}
        addFavPhoto={addFavPhoto}
        removeFavPhoto={removeFavPhoto}
        id={photo.id}
        onPhotoClick={onPhotoClick}
      />
    );
  });
  return (
    <div>
      <ul className="photo-list">{photoItems}</ul>
    </div>
  );
};

export default PhotoList;