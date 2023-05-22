import React, { useState } from "react";

import "../styles/PhotoDetailsModal.scss";
import mockPhotos from "../mocks/photos";
import PhotoListItem from "../components/PhotoListItem";
import PhotoFavButton from "../components/PhotoFavButton";
import PhotoList from "../components/PhotoList";

export const PhotoDetailsModal = (props) => {
  const selectedPhoto = props.selectedPhoto;

  const similarPhotos = props.selectedPhoto[0].similar_photos;
  const keys = Object.keys(similarPhotos);
  const similarPhotosArray = [];
  for (const key of keys) {
    similarPhotosArray.push(similarPhotos[key]);
  }

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
          mockPhotos={selectedPhoto}
          imageClassName="photo-details-modal--image"
          imageContainerClassName="photo-details-large-image"
          isFavourite={props.isFavourite}
          dispatch={props.dispatch}
        />

        <h2 className="photo-details-modal--header">Similar Photos</h2>
        <PhotoList
          mockPhotos={similarPhotosArray}
          imageClassName={props.imageClassName}
          imageContainerClassName={props.imageContainerClassName}
          isFavourite={props.isFavourite}
          dispatch={props.dispatch}
        />
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
