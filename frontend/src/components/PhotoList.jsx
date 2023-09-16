import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = ({ photos, favoritedPhotoIds, toggleFavorite }) => {
  return (
    <ul className="photo-list">
      {photos.map((photoData) =>(
        <PhotoListItem 
          key={photoData.id} 
          photoData={photoData}
          isFavorited={favoritedPhotoIds.includes(photoData.id)}
          toggleFavorite={toggleFavorite} />
      ))}
    </ul>
  );
};

export default PhotoList;
