import React from "react";

import PhotoList from "../components/PhotoList";
import PhotoFavButton from "../components/PhotoFavButton";
import "../styles/PhotoDetailsModal.scss";
// Component for displaying photo details in a modal
export const PhotoDetailsModal = (props) => {
  const { onClose, photo, photos, toggleFavorite, favorited, favPhotos } = props;

  const { imageSource, description, username, id, city, country, profile } = photo;
  return (
    <div className="photo-details-modal">
      {/* Close button */}
      <button className="photo-details-modal__close-button" onClick={onClose}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_428_287)">
            <path
              d="M14.0625 3.9375L3.9375 14.0625"
              stroke="black"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14.0625 14.0625L3.9375 3.9375"
              stroke="black"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_428_287">
              <rect width="18" height="18" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </button>

      <div>
        {/* Favorite button */}
        <PhotoFavButton
          className='fav-badge'
          filled={favorited}
          toggleFavorite={() => toggleFavorite(id)}
        />
        {/* Display the main photo */}
        <img
          src={imageSource}
          alt={description}
          className="photo-details-modal__images"
        />
        <div className="photo-list-details__parent">
          {/* Display the user profile photo */}
          <img
            src={profile}
            className="photo-list__user-profile"
            alt="user-photo"
          />
        </div>
        <div>
          {/* Display the username and location */}
          <h1 className="photo-list__user-info">{username}</h1>
          <p className="photo-list__user-location">{city}, {country}</p>
        </div>
      </div>

      <div>
        {/* Display similar photos */}
        <h4>Similar Photos</h4>
        <div className="photo-details-modal__images">
          <PhotoList
            photos={photo.similarPhotos}
            toggleFavorite={toggleFavorite}
            favPhotos={favPhotos}
          />
        </div>
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
