import React from 'react';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from '../components/PhotoList';

const PhotoDetailsModal = (props) => {
  const handleCloseModal = () => {
    props.closeModal();
  };

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={handleCloseModal}>
        <img src={closeSymbol} alt="close symbol" />
      </button>

      {/* Display the selected photo */}
      <div className="photo-details-modal__image-container">
        <img className="photo-details-modal__image" src={props.selectedPhotoData.imageSource} alt={`Photo by ${props.selectedPhotoData.username}`} />
      </div>

      {/* Display similar photos using PhotoList component */}
      <div className="photo-details-modal__similar-photos">

        <h2 className="photo-details-modal__header"></h2>
        <p className="photo-details-modal__header photo-details-modal__line">
        Similar Photos
        </p>
        <PhotoList
          photos={props.similarPhotos}
          alert={props.alert}
          setAlert={props.setAlert}
          isLiked={(photoId) => props.isLiked(photoId)}
          toggleLike={(photoId) => props.toggleLike(photoId)}
          openPhotoModal={(id, photoData) => props.openPhotoModal(id, photoData)}
        />
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
