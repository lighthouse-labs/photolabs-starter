import React from "react";

import "../styles/PhotoList.scss";
import photos from "../mocks/photos";
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {
  return (
    <ul className="photo-list">
      {photos.map((photo) => (
        <PhotoListItem key={photo.id} data={photo} favPhotos={props.favPhotos} setFavPhotos={props.setFavPhotos}/>
      ))}
    </ul>
  );
};

export default PhotoList;
