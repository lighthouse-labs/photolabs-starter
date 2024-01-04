import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = ({photos, addFavouritePhoto, onPhotoClick}) => {
  return (
    <ul className="photo-list">
      { photos.map((data) => (
        <PhotoListItem 
          data={data} 
          key={data.id} 
          addFavouritePhoto={addFavouritePhoto}
          onPhotoClick={onPhotoClick}
        />
      ))}
    </ul>
  );
};

export default PhotoList;
