import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import FavIcon from 'components/FavIcon';
import PhotoListItem from 'components/PhotoListItem';
import PhotoFavButton from 'components/PhotoFavButton';

const PhotoDetailsModal = (props) => {

  const { photos, favPhotos, favPhotosExist, addFavourite, removeFavourite, photo, closeModal, isAFavPhoto } = props


  const handleCloseClick = () => {
    closeModal();
  };




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

const selectedPhoto = selectPhoto(photos)
const similar = (Object.values(selectedPhoto.similar_photos))
similar.map((e) => {
  console.log("E", e.urls.regular)
})

//const similarPhoto = function()


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
      />

    </div>

      <div className='photo-details-modal__header'>
        Similar Photos
      </div>
      <div className='photo-detail-modal__images'>
        <PhotoList 
          photos={similar} 
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
