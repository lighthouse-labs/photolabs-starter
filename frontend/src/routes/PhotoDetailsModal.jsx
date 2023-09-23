/* eslint-disable camelcase */
import React from 'react';
import PhotoList from 'components/PhotoList';
import '../styles/PhotoDetailsModal.scss';
import PhotoFavButton from 'components/PhotoFavButton';
import closeSymbol from '../assets/closeSymbol.svg';



const PhotoDetailsModal = ({ closeModal, isModalVisible, selectedPhotoData, favoritedPhotoIds, toggleFavorite }) => {
  const { id, user, location, urls, similar_photos } = selectedPhotoData || {};
  const handleButtonClick = () => {
    if (isModalVisible) {
      closeModal(); // Close the modal if it's open
    }
  };


  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={handleButtonClick}>
        <img src={closeSymbol} alt="close symbol" />
      </button>

      {/* Display the selected photo with PhotoFavButton */}
      <div className="photo-details-modal__images">
        <div className="photo-details-modal__fav">
          <PhotoFavButton
            displayAlert={false}
            favoritedPhotoIds={favoritedPhotoIds}
            toggleFavorite={toggleFavorite}
            photoId={selectedPhotoData.id}
            className="photo-details-modal__fav"
          />
        </div>
        <img src={selectedPhotoData.urls.full} alt={`Selected Photo`} className="photo-details-modal__image" />
        
        <div className="photo-details-modal__photographer-details">
          <img src={user.profile} alt={`Profile of ${user.username}`} className="photo-details-model__profile-image" />
          <div className="text-info">
            <p className="username">{user.username}</p>
            <p className="location">{`${location.city}, ${location.country}`}</p>
          </div>
        </div>
      </div>


      {/* Display similar photos using the PhotoList component */}
      <div className="photo-details-modal__images">
        <PhotoList
          favoritedPhotoIds={favoritedPhotoIds}
          toggleFavorite={toggleFavorite}
          photoData={Object.values(similar_photos)}
        />
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
