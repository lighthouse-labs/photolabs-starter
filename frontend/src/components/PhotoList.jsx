import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = ({ photos, onChange }) => {
  const renderedPhotos = photos.map((photo) => (
    <PhotoListItem
      key={photo.id}
      photoListData={photo}
      onChange={onChange}
    />
  ));

  return <ul className="photo-list">{renderedPhotos}</ul>;
};

export default PhotoList;
