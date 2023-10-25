import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = ({ openModal, photoData, state }) => {
  return (
    <ul className="photo-list">
      {photoData.map((photo) => (
        < PhotoListItem key={photo.id} photo={photo} openModal={openModal} state={state} handleFav={handleFav} />
      ))}
    </ul>
  );
};

export default PhotoList;
