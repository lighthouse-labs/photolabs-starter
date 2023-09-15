import React from "react";

import "../styles/PhotoList.scss";
import photos from "../mocks/photos";
import PhotoListItem from "./PhotoListItem";

const PhotoList = () => {
  return (
    <ul className="photo-list">
      {photos.map((photo) => (
        <PhotoListItem key={photo.id} data={photo} />
      ))}
    </ul>
  );
};

export default PhotoList;
