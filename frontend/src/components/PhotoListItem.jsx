import React from "react";
import PropTypes from "prop-types";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = ({
  username,
  imageSource,
  description,
  id,
  profile,
  toggleFavorite,
  favorited,
  onPhotoClick,
  city,
  country,
}) => {
  // Handle toggle favorite event
  const handleToggleFavorite = () => {
    toggleFavorite(id);
  };

  // Handle photo click event
  const handlePhotoClick = () => {
    onPhotoClick({ username, imageSource, description, id, profile });
  };

  return (
    <div className="photo-list-item">
      {/* Favorite button */}
      <PhotoFavButton filled={favorited} toggleFavorite={handleToggleFavorite} />
      
      {/* Photo image */}
      <img
        src={imageSource}
        alt={description}
        className="photo-list__image"
        onClick={handlePhotoClick}
      />
      
      {/* User details */}
      <div className="photo-list-details__parent">
        <img
          src={profile}
          className="photo-list__user-profile"
          alt="user-photo"
        />
        <div>
          <h1 className="photo-list__user-info">{username}</h1>
          <p className="photo-list__user-location">{city}, {country}</p>
        </div>
      </div>
    </div>
  );
};

// Define prop types for type checking
PhotoListItem.propTypes = {
  username: PropTypes.string.isRequired,
  imageSource: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  profile: PropTypes.string.isRequired,
  toggleFavorite: PropTypes.func.isRequired,
  favorited: PropTypes.bool.isRequired,
  onPhotoClick: PropTypes.func.isRequired,
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
};

export default PhotoListItem;
