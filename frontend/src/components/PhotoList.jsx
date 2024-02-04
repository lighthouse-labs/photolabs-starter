import React from "react";
import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";


const PhotoList = ({ photos, isFavorite, toggleFavorite, updateDisplayModal }) => {
  return (
    <ul className="photo-list">
      {photos.map((photo) => (
        <PhotoListItem  photo={photo} key={photo.id} isFavorite={isFavorite} toggleFavorite={toggleFavorite} updateDisplayModal={updateDisplayModal}/>
      ))}
    </ul>
  );
};

export default PhotoList;
