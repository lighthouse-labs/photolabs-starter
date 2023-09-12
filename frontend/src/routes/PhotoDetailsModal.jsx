import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from '../components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';

const PhotoDetailsModal = ({ favoritedPhotos, setFavoritedPhotos, photo, onClose, photos }) => {
  const similarPhotos = photos.filter(p => p.user.username === photo.user.username && p.id !== photo.id);
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={onClose}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className="photo-details-modal__image-container">
      <PhotoFavButton 
        photoId={photo.id} 
        favoritedPhotos={favoritedPhotos} 
        setFavoritedPhotos={setFavoritedPhotos}
       />
      <img 
        src={photo.urls.regular} 
        alt={`photo ${photo.id}`} 
        className="photo-details-modal--image" 
      />
       
       </div>
      <h2 className="photo-details-modal--header">Similar Photos</h2>

      <div className="photo-details-modal--images">
        <PhotoList photos={similarPhotos} />
      </div>
    </div>
  )
};

export default PhotoDetailsModal; 
