import React from "react";
import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";


const PhotoList = ({ photos, favorite, toggleFavorite, updateDisplayModal, similarPhotoes }) => {

  return (
    <ul className="photo-list">

      {similarPhotoes ? (similarPhotoes.map(photos => {
        return <PhotoListItem key={photos.id}
          photo={photos}
          toggleFavorite={toggleFavorite}
          favorite={favorite}
          updateDisplayModal={updateDisplayModal} />

      })) : (photos.map(photo => {
        return <PhotoListItem key={photo.id}
          photo={photo}
          toggleFavorite={toggleFavorite}
          favorite={favorite}
          updateDisplayModal={updateDisplayModal}
          modalState />
      }))}
    </ul>
  );
};

export default PhotoList;

