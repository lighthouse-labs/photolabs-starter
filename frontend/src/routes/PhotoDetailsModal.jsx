import React from 'react';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = ({ closeModal }) => {
  const handleCloseModal = () => {
    closeModal(); // Call the closeModal function when the close button is clicked
  };

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={handleCloseModal}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      {/* Add your modal content here */}
    </div>
  );
};

export default PhotoDetailsModal;

