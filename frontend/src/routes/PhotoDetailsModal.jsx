import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoFavButton from 'components/PhotoFavButton';
import PhotoList from 'components/PhotoList';

const PhotoDetailsModal = (props) => {
  const {id, location,  urls, user} = props.sampleDataForPhotoListItem
  
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button">
        <img src={closeSymbol} alt="close symbol" onClick= {() => {
          props.setSidePeek(false)
        }} />
      </button>
      <PhotoFavButton photoId={id} favourite={props.favourite} toggleFavourite={props.toggleFavourite} ></PhotoFavButton>
      <img className="photo-details-modal__images" src={ urls.regular}  />
      <div className='photo-details-modal__images'>Similar Photos</div>
      <PhotoList  photos={props.photos} favourite={props.favourite} toggleFavourite={props.toggleFavourite} />
      
    </div>
  )
};

export default PhotoDetailsModal;
