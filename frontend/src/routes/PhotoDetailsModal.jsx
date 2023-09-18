import React from 'react';

import '../styles/PhotoDetailsModal.scss';
import '../styles/PhotoListItem.scss';
import '../styles/PhotoList.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoFavButton from 'components/PhotoFavButton';
import PhotoList from 'components/PhotoList';

const PhotoDetailsModal = (props) => {
  const { closeModal, selectedPhoto, favPhotos, setFavPhotos, photos } = props;
  
  const similarPhotosObj = photos.find(photo => photo.id === selectedPhoto.id).similarPhotos;

  const similarPhotosArr = Object.values(similarPhotosObj);
  console.log(Object.values(similarPhotosObj));

  // const similarPhotos = photos.filter( => similarPhotosArr.includes(selectedPhoto.id));
  // console.log(similarPhotos);

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={closeModal}>
        <img src={closeSymbol} alt="close symbol" />
      </button>

      <div className='photo-details-modal__images'>
        <PhotoFavButton id={selectedPhoto.id} favPhotos={favPhotos} setFavPhotos={setFavPhotos}/>
        <img className="photo-details-modal__image" src={selectedPhoto.urls.full}/>
        <section className="photo-details-modal__photographer-details">
          <img className="photo-list__user-profile" src={selectedPhoto.user.profile} alt="Profile image"/>
          <div className="photo-list__user-info">
            <span>{selectedPhoto.user.name}</span>
            <span className="photo-list__user-location">{selectedPhoto.location.city},{selectedPhoto.location.country}</span>
          </div>
        </section>

        <h1 className="photo-details-modal__header">Similar Photos</h1>
      
        {/* <div className='photo-details-modal__images'> */}
        <PhotoList className='photo-list' {...props} photos={similarPhotosArr}  />
        {/* </div> */}
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
