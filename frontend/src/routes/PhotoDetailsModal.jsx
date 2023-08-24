import React from 'react';
import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoFavButton from 'components/PhotoFavButton';
import PhotoList from 'components/PhotoList';

const PhotoDetailsModal = (props) => {
  const {id, location,  urls, user} = props.sampleDataForPhotoListItem;//photo's being clicked Data
  const item = props.photos.find((item) => item.id === id);
  const keys = Object.keys(item.similar_photos);
  const  similar_photosArray = [] ;
  keys.map((key) => similar_photosArray.push(item.similar_photos[key]));
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button">
        <img src={closeSymbol} alt="close symbol"  onClick= {() => {
          props.setSidePeek(false)
        }} />
      </button>
      <div className='photo-details-modal__images'>
      <PhotoFavButton photoId={id} favourite={props.favourite} toggleFavourite={props.toggleFavourite} ></PhotoFavButton>
      <img className="photo-details-modal__image" src={ urls.full}  />
      </div>
      <div className='photo-details-modal__header'>Similar Photos</div>
      <PhotoList photos={similar_photosArray} setSampleDataForPhotoListItem={props.setSampleDataForPhotoListItem} favourite={props.favourite} toggleFavourite={props.toggleFavourite}  setSidePeek={props.setSidePeek} sidePeek={props.sidePeek}  setSidePeekForLikedPhotos={props.setSidePeekForLikedPhotos}  /> 
    </div>
  )
};

export default PhotoDetailsModal;