import React from 'react';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from '../components/PhotoList';

const PhotoDetailsModal = ({ closeModal, selectedPhotoData, similarPhotos }) => {
  const handleCloseModal = () => {
    closeModal();
  };

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={handleCloseModal}>
        <img src={closeSymbol} alt="close symbol" />
      </button>

      {/* Display the selected photo */}
      <div className="photo-details-modal__image-container">
        <img className="photo-details-modal__image" src={selectedPhotoData.imageSource} alt={`Photo by ${selectedPhotoData.username}`} />
      </div>

      {/* Display similar photos using PhotoList component */}
      <div className="photo-details-modal__similar-photos">
        <h2>Similar Photos</h2>
        <PhotoList
          photos={similarPhotos} // Pass the list of similar photos
          isLiked={(photoId) => selectedPhotoData.isLiked(photoId)} // Pass isLiked function
          toggleLike={(photoId) => selectedPhotoData.toggleLike(photoId)} // Pass toggleLike function
          alert={selectedPhotoData.alert} // Pass alert state
          setAlert={selectedPhotoData.setAlert} // Pass setAlert function
          setModalVisible={selectedPhotoData.setModalVisible} // Pass setModalVisible function
        />
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
