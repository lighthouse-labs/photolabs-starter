import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import PhotoListItem from 'components/PhotoListItem';


const PhotoDetailsModal = (props) => {

  const { similarPhotos, clickedPhotoInfo, clickedPhoto, handleCloseClick, photos, favPhotos, favPhotosExist, addFavourite, removeFavourite, photo, closeModal, isAFavPhoto } = props
  
  return (

    <div className="photo-details-modal">
      <div className='photo-details-modal__top-bar'>
        <button className="photo-details-modal__close-button" onClick={ handleCloseClick } >
          <img src={closeSymbol} alt="close symbol" />
        </button>
      </div>

    <section className="photo-details-modal__images-container" >
      <div className="photo-details-modal__image-container">
      <PhotoListItem 
        key={clickedPhotoInfo.id}
        photoID={clickedPhotoInfo.id}
        imageSource={clickedPhotoInfo.urls.regular} 
        imageSourceFull={clickedPhotoInfo.urls.full}
        profile={clickedPhotoInfo.user.profile}
        name={clickedPhotoInfo.user.name}
        userName={clickedPhotoInfo.user.username}
        city={clickedPhotoInfo.location.city}
        country={clickedPhotoInfo.location.country}
        imagesStyle={"photo-details-modal__image"} 
        photographerDetails={"photo-details-modal__photographer-details"} 
        
        favPhotos={favPhotos}
        isAFavPhoto={favPhotos.includes(clickedPhotoInfo.id)}
        favPhotosExist={favPhotosExist}
        addFavourite={addFavourite}
        removeFavourite={removeFavourite}
        handlePhotoClick={null}
      />

    </div>

      <div className='photo-details-modal__header'>
        Similar Photos
      </div>
      <div className='photo-detail-modal__images'>
        <PhotoList 
          photos={similarPhotos} 
          favPhotos={favPhotos}
          favPhotosExist={favPhotos.length > 0}
          addFavourite={addFavourite}
          removeFavourite={removeFavourite}
        />
      </div>
      </section>  
    </div>
  )
};

export default PhotoDetailsModal;
