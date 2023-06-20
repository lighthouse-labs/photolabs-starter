import React, { useState, useEffect } from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = ({
  username,
  imageSource,
  id,
  hideUserName,
  addFavPhoto,
  removeFavPhoto,
}) => {
  const [isFavorited, setIsFavorited] = useState(false);

  useEffect(() => {
    // Use effect to handle adding or removing a favorite photo when isFavorited changes
    if (isFavorited) {
      // If the photo is favorited, call the addFavPhoto function
      addFavPhoto(id);
    } else {
      // If the photo is not favorited, call the removeFavPhoto function
      removeFavPhoto(id);
    }
  }, [isFavorited, addFavPhoto, removeFavPhoto, id]);

  const onFavorited = (favorited) => {
    // Callback function to update the isFavorited state
    setIsFavorited(favorited);
  };

  return (
    <li className="photo-list-item">
      <PhotoFavButton onFavorited={onFavorited} />
      <img className= "photo-list__image" src={imageSource} alt={`Photo by ${username}`} />
    </li>
  );
};

export default PhotoListItem;
