import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = ({ photos, favoritedPhotoIds, toggleFavorite, toggleModal }) => {
  return (
    <ul className="photo-list">
      {photos.map((photoData) =>(
        <PhotoListItem 
          key={photoData.id} 
          photoData={photoData}
          isFavorited={favoritedPhotoIds.includes(photoData.id)}
          toggleFavorite={toggleFavorite}
          toggleModal={toggleModal} />
      ))}
    </ul>
  );
};

export default PhotoList;
