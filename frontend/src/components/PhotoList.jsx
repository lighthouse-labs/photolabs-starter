import React from "react";

import "../styles/PhotoList.scss";
// import photos from "../mocks/photos";
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {
  const { state, toggleFav, photos } = props;

  return (
    <ul className="photo-list">
      {photos.map((photo) => (
        <PhotoListItem
          {...props}
          key={photo.id}
          photoData={photo}
          // favPhotos={favPhotos}
          // setFavPhotos={setFavPhotos}
          // openModal={openModal}
          // selectedPhoto={selectedPhoto}
          // setSelectedPhoto={setSelectedPhoto}
          
        />
      ))}
    </ul>
  );
};

export default PhotoList;
