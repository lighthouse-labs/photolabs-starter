import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = ({onCloseClick, data}) => {
  return (
    <div className="photo-details-modal">
      <button 
        className="photo-details-modal__close-button" 
        onClick={onCloseClick}
      >
        <img src={closeSymbol} alt="close symbol" />
      </button>
      {console.log(data)}
    </div>
  )
};

export default PhotoDetailsModal;
