import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = (props) => {
  return (
    <div className="photo-details-modal">
      <button onClick={props.onClose} className="photo-details-modal__close-button">
        <img src={closeSymbol} alt="close symbol" />
        {props.photos}
      </button>
    </div>
  )
};

export default PhotoDetailsModal;
