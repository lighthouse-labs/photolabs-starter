import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
// import photos from 'mocks/photos';

const PhotoDetailsModal = ({ updateDisplayModal, displayModal, isFavorite }) => {
  console.log('Modal data is:', displayModal);

  const { urls: { full, regular }, user, location: { city, country }, id, similar_photos } = displayModal;
  const { name, profile } = user;
  // const { photo2, photo3, photo4, photo5 } = similar_photos;

  return (
    <div className="photo-details-modal">
      <button onClick={updateDisplayModal} className="photo-details-modal__close-button">
        <img src={closeSymbol} alt="close symbol" />
      </button>

      <div className='photo-details-modal__images'>
        <div>
          <img className='photo-details-modal__image' src={full} alt="Photo" />

          <div className='photo-details-modal__photographer-details'>
            <img className='photo-details-modal__photographer-profile' src={`${profile}`} alt="Profile Image" />

            <div className="photo-details-modal__photographer-info">{`${name}`}</div>
            <div className='photo-details-modal__photographer-location'> {`${city}, ${country}`}</div>
          </div>
          
          <div className='photo-details-modal__images'>
            {/* <PhotoList modalData={displayModal} isFavorite={isFavorite} toggleFavorite={toggleFavorite}/> */}
          </div>
        </div>
      </div>

    </div>
  )
};

export default PhotoDetailsModal;