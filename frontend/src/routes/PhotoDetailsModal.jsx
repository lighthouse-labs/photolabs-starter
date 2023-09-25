import React from 'react';
import PhotoList from 'components/PhotoList';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoFavButton from 'components/PhotoFavButton';

const PhotoDetailsModal = ({ closeModal, clickedPhoto, favourites, toggleFavourites }) => {
  
  const photo = clickedPhoto;
  const similarPhotos = Object.values(photo.similar_photos);

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={closeModal}>
        <img src={closeSymbol} alt="close symbol" />
      </button>

      <div className="photo-details-modal__images">
        <PhotoFavButton
          favourites={favourites}
          photoId={photo.id}
          toggleFavourites={toggleFavourites}
        />
        <img src={photo.urls.full} alt="profile image" className="photo-details-modal__image" />
        <div className="photo-list__user-details">
          <div>
            <img
              src={photo.user.profile}
              alt="profile image"
              className="photo-list__user-profile"
            />
          </div>
          <div className="photo-list__user-info">
            <span>{photo.user.name}</span>
            <p className="photo-list__user-location">
              {photo.location.city},{photo.location.country}
            </p>
          </div>
        </div>
      </div>
      <div className="photo-details-modal__images">
        <p className="photo-details-modal__header">Similar Photos</p>
        <PhotoList
          toggleFavourites={toggleFavourites}
          favourites={favourites}
          similarPhotos={similarPhotos}
        />
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
