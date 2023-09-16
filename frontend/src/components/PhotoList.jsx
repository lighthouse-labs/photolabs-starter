import React from "react";

import "../styles/PhotoList.scss";
import photos from "../mocks/photos";
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {
  const { favPhotos, setFavPhotos, openModal } = props;

  return (
    <ul className="photo-list">
      {photos.map((photo) => (
        <PhotoListItem key={photo.id} data={photo} favPhotos={favPhotos} setFavPhotos={setFavPhotos} openModal={openModal}/>
      ))}
    </ul>
  );
};

export default PhotoList;
