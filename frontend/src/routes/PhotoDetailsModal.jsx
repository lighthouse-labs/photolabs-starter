import React, { useState } from 'react';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from '../components/PhotoList';
import PhotoFavButton from '../components/PhotoFavButton';

const PhotoDetailsModal = (props) => {
 

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={props.closeModal}>
        <img src={closeSymbol} alt="close symbol" />
      </button>

      <div className="photo-details-modal__images">
        <div className="photo-details-modal__image">
          {/* Display the Favorite button */}
          <div className="photo-details-modal__like-button" onClick={props.toggleLike}>
            <PhotoFavButton
              isLiked={props.isLiked(props.selectedPhotoData.id)}
              toggleLike={() => props.toggleLike(props.selectedPhotoData.id)}
              alert={props.alert}
              setAlert={props.setAlert}
              id={props.selectedPhotoData.id}
            />
          </div>
          <img
            src={props.selectedPhotoData.imageSource}
            alt={`Photo by ${props.selectedPhotoData.username}`}
          />
        </div>

        <div className="photo-details-modal__top-bar">
          <div className="photo-details-modal__photographer-details">
            <img
              src={props.selectedPhotoData.profile}
              alt={`Profile of ${props.selectedPhotoData.username}`}
              className="photo-details-modal__photographer-profile"
            />
            <p className="photo-details-modal__header">
              Photo by {props.selectedPhotoData.username}
            </p>
          </div>

          <p className="photo-details-modal__photographer-location">
            {props.selectedPhotoData.location.city}, {props.selectedPhotoData.location.country}
          </p>
        </div>

        <div className="photo-details-modal__photographer-info">
          {/* Display similar photos using PhotoList component */}
          <div className="photo-details-modal__similar-photos">
            <h2 className="photo-details-modal__header">Similar Photos</h2>
            <PhotoList
              photos={props.similarPhotos}
              alert={props.alert}
              setAlert={props.setAlert}
              isLiked={(photoId) => props.isLiked(photoId)}
              toggleLike={(photoId) => props.toggleLike(photoId)}
              openPhotoModal={(id, photoData) => props.openPhotoModal(id, photoData)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
