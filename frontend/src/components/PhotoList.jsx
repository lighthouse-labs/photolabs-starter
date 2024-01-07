import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = ({favouritedPhotos, handleFavouritePhotos, photos, onPhotoClick}) => {
  return (
    <ul className="photo-list">
      { photos.map((data) => (
        <PhotoListItem 
          data={data} 
          key={data.id} 
          favouritedPhotos={favouritedPhotos}
          handleFavouritePhotos={handleFavouritePhotos}
          onPhotoClick={onPhotoClick}
        />
      ))}
    </ul>
  );
};

export default PhotoList;
