import React from "react";

import "../styles/PhotoList.scss";
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
        />
      ))}
    </ul>
  );
};

export default PhotoList;
