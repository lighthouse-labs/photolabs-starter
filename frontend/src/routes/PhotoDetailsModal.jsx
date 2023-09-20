import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';

const PhotoDetailsModal = ({ togglePhotoModal, photoData, favoritedPhotoIds, toggleFavoritePhoto }) => {
  const { urls, location, user, similar_photos } = photoData;
  const largerImageSource = urls.full;
  const { username, profile } = user;
  const similarPhotosArray = Object.values(similar_photos);

  return (
    <div className="photo-details-modal">
    <button className="photo-details-modal__close-button" onClick={togglePhotoModal}>
        <img src={closeSymbol} alt="close symbol" />
    </button>
    <div className='photo-details-modal__images'>
    <PhotoFavButton 
  isFavorited={favoritedPhotoIds.includes(photoData.id)}
  toggleFavoritePhoto={() => toggleFavoritePhoto(photoData.id)} 
/>
    <img
        src={largerImageSource}
        alt={`Large version of selected photo`}
        className='photo-details-modal__image'
    />
    <div className="photo-details-modal__photographer-details">
        <img
            src={profile}
            alt={`${username}'s profile`}
            className='photo-list__user-profile' 
        />
        <div>
            <h2 className='photo-list__user-info'>{username}</h2>
            <p className='photo-list__user-location'>
                {location.city}, {location.country}
            </p>
        </div>
    </div>
    </div>
    <h3 className="photo-details-modal__images">Similar Photos</h3>
    <PhotoList 
      photos={similarPhotosArray} 
      favoritedPhotoIds={favoritedPhotoIds}
      toggleFavoritePhoto={toggleFavoritePhoto}
      isInsideModal={true} />   
</div>
  )
};

export default PhotoDetailsModal;
