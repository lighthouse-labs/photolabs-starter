import React from 'react';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = ({ closeModal, selectedPhotoData }) => {
  const handleCloseModal = () => {
    closeModal();
  };

  console.log('Selected Photo Data:', selectedPhotoData); // Log the selected photo data

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
