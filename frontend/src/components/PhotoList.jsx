import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";
import photos from "mocks/photos";

const PhotoList = (props) => {
  const photoList = photos.map((photo) =>
    <PhotoListItem 
      key = {photo.id}
      sampleImage={photo}
      onClickPhoto={props.onClickPhoto}
      isLiked={props.likedPhotos.includes(photo.id)}
      handleButtonClick={() => props.handleButtonClick(photo.id)}
    />
  )

  return (
    <ul className="photo-list">
      {photoList}
    </ul>
  );
};


export default PhotoList;