import React from "react";
import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";
// import photos from "mocks/photos";


const PhotoList = ({ photos }) => {
  return (
    <ul className="photo-list">
      {photos.map((photo) => (
        <PhotoListItem  photo={photo} key={photo.id}/>
      ))}
    </ul>
  );
};

export default PhotoList;
