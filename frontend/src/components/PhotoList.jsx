import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = ({ photos }) => {
  return (
    <ul className="photo-list">
      {photos.map((photoData) =>(
        <PhotoListItem key={photoData.id} photoData={photoData} />
      ))}
    </ul>
  );
};

export default PhotoList;
