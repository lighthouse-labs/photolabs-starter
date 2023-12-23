import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";
import photos from "mocks/photos";

const PhotoList = ({addFavouritePhoto}) => {
  return (
    <ul className="photo-list">
      { photos.map((data) => (
        <PhotoListItem 
          data={data} 
          key={data.id} 
          addFavouritePhoto={addFavouritePhoto}
        />
      ))}
    </ul>
  );
};

export default PhotoList;
