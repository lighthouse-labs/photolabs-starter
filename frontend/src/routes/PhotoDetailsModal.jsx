import React from "react";

import "../styles/PhotoDetailsModal.scss";
import PhotoList from "../components/PhotoList";
import PhotoFavButton from "../components/PhotoFavButton";
import PhotoListItem from "../components/PhotoListItem";

const PhotoDetailsModal = (props) => {
  const { onClose, photo, photos, toggleFavorite, favorited, favPhotos } =
    props;

  const { imageSource, description, username, id } = photo;

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
      {/* Image section */}
      <div className="photo-details-modal__content">
        <div className="photo-details-modal__image-section">
          {/* Favorite button */}
          <PhotoFavButton
            filled={favorited}
            toggleFavorite={() => toggleFavorite(id)}
          />
          {/* Image */}
          <img
            className="photo-details-modal__image"
            src={imageSource}
            alt={description}
          />
          {/* Photo credit */}
          <h3>photo by {username}</h3>
        </div>
        {/* Similar photos section */}
        <div className="photo-details-modal__similar-photos-section">
          <h4 className="photo-details-modal__header">Similar Photos</h4>
          {/* List of similar photos */}
          <PhotoList
            photos={[photos[0], photos[1], photos[3], photos[4]]}
            toggleFavorite={toggleFavorite}
            favPhotos={favPhotos}
          />
        </div>
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
