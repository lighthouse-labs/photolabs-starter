import React from "react";
import PropTypes from "prop-types";
import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = ({
  photos,
  addFavPhoto,
  removeFavPhoto,
  onPhotoClick,
  toggleFavorite,
  favPhotos,
}) => {
  // Map through the photos array to create an array of PhotoListItem components
  const photoItems = photos.map((photo, index) => (
    <PhotoListItem
      key={`${photo.id}_${index}`}
      photo={photo}
      username={photo.user.username}
      imageSource={photo.urls.regular}
      hideUsername={photo.hideUsername}
      toggleFavorite={toggleFavorite}
      favorited={favPhotos && favPhotos.includes(photo.id)}
      id={photo.id}
      description={photo.description}
      onPhotoClick={onPhotoClick}
    />
  ));

  return (
    <div>
      <ul className="photo-list">{photoItems}</ul>
    </div>
  );
};

// Prop types validation
PhotoList.propTypes = {
  photos: PropTypes.array.isRequired,
  addFavPhoto: PropTypes.func.isRequired,
  removeFavPhoto: PropTypes.func.isRequired,
  onPhotoClick: PropTypes.func.isRequired,
  toggleFavorite: PropTypes.func.isRequired,
  favPhotos: PropTypes.array,
};

export default PhotoList;
