import React, { useState } from "react";
import "../styles/PhotoDetailsModal.scss";
import mockPhotos from "../mocks/photos";
import PhotoListItem from "../components/PhotoListItem";
import PhotoFavButton from "../components/PhotoFavButton";
import PhotoList from "../components/PhotoList";

export const PhotoDetailsModal = (props) => {
  const mainPhoto = props.photos.filter(
    (photo) => photo.id === props.selectedPhoto
  );
  const similarPhotos = mainPhoto[0].similar_photos;

  return (
    <div className="photo-details-modal">
      <button
        className="photo-details-modal--close-button"
        onClick={props.closeModal}
      >
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
      <div className="modal-container">
        <PhotoList
          photos={mainPhoto}
          imageClassName="photo-details-modal--image"
          imageContainerClassName="photo-details-large-image"
          favouritePhotos={props.favouritePhotos}
          addToFavourite={props.addToFavourite}
        />

        <h2 className="photo-details-modal--header">Similar Photos</h2>
        <PhotoList
          photos={similarPhotos}
          imageClassName={props.imageClassName}
          imageContainerClassName={props.imageContainerClassName}
          favouritePhotos={props.favouritePhotos}
          addToFavourite={props.addToFavourite}
        />
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
