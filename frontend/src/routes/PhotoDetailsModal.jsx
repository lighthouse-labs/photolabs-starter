import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = () => (
  <div className="photo-details-modal">
    <button className="photo-details-modal--close-button">
      <img src={closeSymbol} alt="close symbol" />
    </button>
  </div>
);

export default PhotoDetailsModal;