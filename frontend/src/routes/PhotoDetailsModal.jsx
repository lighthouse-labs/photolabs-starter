import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import PhotoListItem from 'components/PhotoListItem';
import PhotoFavButton from 'components/PhotoFavButton';


const PhotoDetailsModal = (props) => {
  return (
    <div className="photo-details-modal">
      <button onClick={props.onClose} className="photo-details-modal__close-button">
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <PhotoFavButton 
        isLiked={props.likedPhotos.includes(props.photo.id)}
        handleButtonClick={() => props.handleButtonClick(props.photo.id)}
      />
      <img src={props.photo.urls.regular} className="photo-list__image"/>
      <h3>Similar Photos</h3>
      {Object.values(props.photo.similar_photos).map((photo) => 
        <PhotoListItem 
          key = {photo.id}
          sampleImage={photo}
          isLiked={props.likedPhotos.includes(photo.id)}
          handleButtonClick={() => props.handleButtonClick(photo.id)}
        />
      )}
    </div>
  )
};

export default PhotoDetailsModal;
