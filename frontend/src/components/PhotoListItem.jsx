import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = ({
  username,
  imageSource,
  id,
  hideUsername,
  addFavPhoto,
  removeFavPhoto,
  onPhotoClick,
}) => {
  const [isFavorited, setIsFavorited] = useState(false);

  useEffect(() => {
    // When the `isFavorited` state changes, add or remove the photo from favorites accordingly
    if (isFavorited) {
      addFavPhoto(id); // Add photo to favorites
    } else {
      removeFavPhoto(id); // Remove photo from favorites
    }
  }, [isFavorited, addFavPhoto, removeFavPhoto, id]);

  const handleFavorited = (favorited) => {
    setIsFavorited(favorited); // Update the `isFavorited` state based on the favorited value
  };

  return (
    <div className="photo-list-item">
      <PhotoFavButton onFavorited={handleFavorited} /> {/* Render the favorite button */}
      <img
        src={imageSource}
        alt={`Photo by ${username}`}
        className="photo-list__image"
        onClick={onPhotoClick}
      />
      {!hideUsername && <p>{username}</p>} {/* Render the username if not hidden */}
    </div>
  );
};

PhotoListItem.propTypes = {
  username: PropTypes.string.isRequired,
  imageSource: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  hideUsername: PropTypes.bool,
  addFavPhoto: PropTypes.func.isRequired,
  removeFavPhoto: PropTypes.func.isRequired,
  onPhotoClick: PropTypes.func.isRequired,
};

export default PhotoListItem;
