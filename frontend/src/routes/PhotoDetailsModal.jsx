import React, { useState } from 'react';

import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = () => {
  // toggle CSS visibility visible and hidden ???
  const [isShown, setIsShown] = useState(true);
  const closeModal = () => {
    setIsShown(!isShown);
  };

  const modalClassName = isShown ? 'photo-details-modal' : 'hidden-modal';

  return (
    // <div className="photo-details-modal">
    <div className={modalClassName}>
      <button className="photo-details-modal__close-button" onClick={closeModal}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
    </div>
  );
};

export default PhotoDetailsModal;
