import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = ({ updateDisplayModal, modalData }) => {
  console.log('Modal data is:', modalData);

  const { urls: { full, regular }, user, location: { city, country }, id } = modalData;
  const { name, profile } = user;

  return (
    <div className="photo-details-modal">
      <button onClick={updateDisplayModal} className="photo-details-modal__close-button">
        <img src={closeSymbol} alt="close symbol" />
      </button>

      <div className='photo-details-modal__images'>

        <div className='photo-details-modal__header' >
          <img className='photo-details-modal__image' src={regular} alt="Photo" />
          <div className='photo-details-modal__header'>
            <img className='photo-details-modal__header' src={`${profile}`} alt="Profile Image" />
            <div className="photo-list__user-info">{`${name}`}</div>
            <div> {`${city}, ${country}`}</div>
          </div>
          <div className='photo-details-modal__images'>
            <img className='photo-details-modal__images' src={regular} alt="Photo" />
            <img className='photo-details-modal__images' src={regular} alt="Photo" />
          </div>
        </div>
      </div>

    </div>
  )
};

export default PhotoDetailsModal;
