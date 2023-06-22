import React from "react";
import PropTypes from "prop-types";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = ({
  username,
  imageSource,
  description,
  id,
  hideUsername,
  toggleFavorite,
  favorited,
  onPhotoClick,
}) => {
  return (
    <div className="photo-list-item">
      <PhotoFavButton filled={favorited} toggleFavorite={() => toggleFavorite(id)} />
      <img
        src={imageSource}
        alt={description}
        className="photo-list__image"
        onClick={() => onPhotoClick(id)}
      />
      {!hideUsername && (
        <p className="photo-list__user-profile photo-list__user-info">
          {username}
        </p>
      )}
    </div>
  );
};

PhotoListItem.propTypes = {
  username: PropTypes.string.isRequired,
  imageSource: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  hideUsername: PropTypes.bool,
  toggleFavorite: PropTypes.func.isRequired,
  favorited: PropTypes.bool.isRequired,
  onPhotoClick: PropTypes.func.isRequired,
};

export default PhotoListItem;
