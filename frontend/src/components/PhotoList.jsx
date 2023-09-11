import React from "react";
import PhotoListItem from "./PhotoListItem";
import photos from 'mocks/photos';
import "../styles/PhotoList.scss";


const PhotoList = ({ photos, favoritedPhotos, setFavoritedPhotos, openModal }) => {

  return (
    <ul className="photo-list">
      {photos.map(photo => (
        <PhotoListItem
          key={photo.id}
          photo={photo}
          favoritedPhotos={favoritedPhotos}
          setFavoritedPhotos={setFavoritedPhotos}
          openModal={openModal}
        />
      ))}
    </ul>
  );
};

export default PhotoList; 
