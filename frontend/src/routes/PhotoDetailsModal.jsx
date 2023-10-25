import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoFavButton from 'components/PhotoFavButton';
import PhotoList from 'components/PhotoList';

const PhotoDetailsModal = ({ state, closeModal, handleFav }) => {
  const photo = state.photo;
  const similarPhotos = photo.similar_photos;

  return (
    <a className="photo-details-modal">
      <div className='photo-details-modal__top-bar'>
        <button className="photo-details-modal__close-button">
          <img src={closeSymbol} alt="close symbol" onClick={closeModal}/>
        </button>
      </div>

      <div className='photo-details-modal__images' >
        < PhotoFavButton photo={photo} state={state} handleFav={handleFav} />
        <img src={photo.urls.full} alt="Selected Photo" className='photo-details-modal__image'/>
        <div className='photo-details-modal__photographer-info' >
          <h2 className="photo-details-modal__photographer-details">{photo.username}</h2>
          <h2 className="photo-details-modal__photographer-location">
            {photo.location.city}, {photo.location.country}
          </h2>
        </div>
      </div>

      <h3 className='photo-details-modal__header' >Similar Photos</h3>
      <div className='photo-details-modal__images'>
        <PhotoList photoData={Object.values(similarPhotos)} state={state} handleFav={handleFav} openModal={null}/>
      </div>
    </a>
  )
};

export default PhotoDetailsModal;
