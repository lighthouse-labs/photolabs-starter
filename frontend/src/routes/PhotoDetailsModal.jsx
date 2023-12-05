import React from 'react';
import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoFavButton from 'components/PhotoFavButton';
import PhotoList from 'components/PhotoList';
import PhotoListItem from 'components/PhotoListItem';
import FavIcon from 'components/FavIcon';

const PhotoDetailsModal = (props) => {

  const { photoDetails, liked, toggleLike } = props;

  return (
    <div className="photo-details-modal">
    <button className="photo-details-modal__close-button">
        <img src={closeSymbol} alt="close symbol" onClick={props.closeModal}/>
      </button>
    <div className='photo-details-modal__images'>
        <PhotoFavButton isLiked={liked.includes(photoDetails.id)} toggleLike={() => toggleLike(photoDetails.id)}/>
        <img src={photoDetails.urls.full} alt="close symbol" className="photo-details-modal__image"/>
      <div className="photo-list__user-details">
         <img className="photo-details-modal__photographer-profile" src={photoDetails.user.profile} />
      <div className="photo-list__user-info-layout">
        <span  className="photo-details-modal__photographer-info ">{photoDetails.user.username}</span>
        <span  className="photo-details-modal__photographer-location"> {photoDetails.location.city}, {photoDetails.location.country}</span>
     </div>
    </div>
    <div className='photo-details-modal__header'>
        Similar Photos
    </div>
  </div>
    <div className='photo-details-modal__images'>
      <PhotoList photos={Object.values(photoDetails.similar_photos)} liked={liked} toggleLike={toggleLike} toggleModal={() => {}}/>
    </div>
  </div>
  )
};

export default PhotoDetailsModal;
