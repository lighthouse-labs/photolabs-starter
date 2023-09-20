import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = ({ photos, favoritedPhotoIds = [], toggleFavoritePhoto, togglePhotoModal, isInsideModal }) => {
  return (
    <ul className="photo-list">
      {photos.map((photoData) =>(
        <PhotoListItem 
          key={photoData.id} 
          photoData={photoData}
          isFavorited={favoritedPhotoIds.includes(photoData.id)}
          toggleFavoritePhoto={toggleFavoritePhoto}
          togglePhotoModal={togglePhotoModal}
          isInsideModal={isInsideModal} />
      ))}
    </ul>
  );
};

export default PhotoList;
