import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import FavIcon from 'components/FavIcon';
import PhotoListItem from 'components/PhotoListItem';
import PhotoFavButton from 'components/PhotoFavButton';

const PhotoDetailsModal = (props) => {

  const { photos,favPhotos, favPhotosExist, addFavourite, removeFavourite, photo, closeModal } = props

  const handleCloseClick = () => {
    closeModal();
  };

  const photoID = photo.target.id;
  console.log(photoID)

  return (

    <div className="photo-details-modal">
      <div className='photo-details-modal__top-bar'>
        <button className="photo-details-modal__close-button" onClick={ handleCloseClick } >
          <img src={closeSymbol} alt="close symbol" />
        </button>
      </div>

      <div className="photo-details-modal__image-container">
      <div className='photo-details-modal__fav-button'>
      <PhotoFavButton />

      </div>

      <img src={photo.target.src} className="photo-details-modal__image"/>
      <div className='photo-details-modal__header'>
        Similar Photos
      </div>
      <div className='photo-detail-modal__images'>
        <PhotoList 
          photos={photos} 
          favPhotos={favPhotos}
          favPhotosExist={favPhotos.length > 0}
          addFavourite={addFavourite}
          removeFavourite={removeFavourite}
        />
    

      </div>

      </div>
     
      
      
    </div>
    
  )
};

export default PhotoDetailsModal;
