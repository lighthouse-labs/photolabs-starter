import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from '../components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';

const PhotoDetailsModal = ({ favoritedPhotos, updateToFavPhotoIds, photo, onClose }) => {
  const similarPhotos = photo.similar_photos;
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={onClose}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className="photo-details-modal__image-container">

      <PhotoFavButton 
        photoId={photo.id} 
        favoritedPhotos={favoritedPhotos} 
        updateToFavPhotoIds={updateToFavPhotoIds}
       />

      <img 
        src={photo.urls.regular} 
        alt={`photo ${photo.id}`} 
        className="photo-details-modal--image" 
      />

      <img 
        src={photo.user.profile} 
        alt={`${photo.user.username} profile`} 
        className="photo-list__user-profile_modal" 
      />
      
      <div className="photo-list__user-info_modal">
          <span>{photo.user.username}</span>
          <div className="photo-list__user-location_modal">{location.city}, {location.country}</div>
        </div>
       </div>
       <div><h2 className="photo-details-modal--header">Similar Photos</h2></div>
      

      <div className="photo-details-modal--images">
        <PhotoList photos={similarPhotos} />
      </div>
    </div>
  )
};

export default PhotoDetailsModal; 
