import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import PhotoListItem from 'components/PhotoListItem';


const PhotoDetailsModal = (props) => {

  const { targetId, clickedPhoto, handleCloseClick, photos, favPhotos, favPhotosExist, addFavourite, removeFavourite, photo, closeModal, isAFavPhoto } = props


  // get selected photo information and similar photos information

  const selectPhoto = function(pics) {
    const targetID = (photo.target.id);
    let selectedPhotoInfo = {};
    for(const p of pics) {
      if (p.id === targetID) {
        selectedPhotoInfo = {...p}
      }
    }
    return selectedPhotoInfo
  }

  console.log(clickedPhoto.target.id)

  const selectedPhoto = selectPhoto(photos)
  const similarPhotos = (Object.values(selectedPhoto.similar_photos))

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
        key={selectedPhoto.id}
        photoID={selectedPhoto.id}
        imageSource={selectedPhoto.urls.regular} 
        imageSourceFull={selectedPhoto.urls.full}
        profile={selectedPhoto.user.profile}
        name={selectedPhoto.user.name}
        userName={selectedPhoto.user.username}
        city={selectedPhoto.location.city}
        country={selectedPhoto.location.country}
        imagesStyle={"photo-details-modal__image"} 
        photographerDetails={"photo-details-modal__photographer-details"} 
        
        favPhotos={favPhotos}
        isAFavPhoto={favPhotos.includes(selectedPhoto.id)}
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
