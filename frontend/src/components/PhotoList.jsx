import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = ({ photos, createFavorite, deleteFavorite }) => {
  const renderedPhotos = photos.map((photo) => (
    <PhotoListItem
      key={photo.id}
      photoListData={photo}
      createFavorite={createFavorite}
      deleteFavorite={deleteFavorite}
    />
  ));

  return <ul className="photo-list">{renderedPhotos}</ul>;
};

export default PhotoList;
