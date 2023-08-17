import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";
import photos from "mocks/photos";


const PhotoList = () => {
  const photoList = photos.map((photo) =>
    <PhotoListItem 
      key = {photo.id}
      sampleImage={photo}
    />
  )

  return (
    <ul className="photo-list">
      {photoList}
    </ul>
  );
};


export default PhotoList;