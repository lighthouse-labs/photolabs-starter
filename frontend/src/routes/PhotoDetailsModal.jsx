import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoFavButton from 'components/PhotoFavButton';
import PhotoListItem from 'components/PhotoListItem';
import PhotoList from 'components/PhotoList';
import photos from 'mocks/photos';
/*
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
*/



const PhotoDetailsModal = (props) => {
  const {id, location,  urls, user} = props.sampleDataForPhotoListItem;
  const item = props.photos.find((item) => item.id === id);
  const keys = Object.keys(item.similar_photos);


  const  similar_photosArray = [] ;
  keys.map((key) => similar_photosArray.push(item.similar_photos[key]));
  console.log(similar_photosArray,1);


 
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button">
        <img src={closeSymbol} alt="close symbol"  onClick= {() => {
          props.setSidePeek(false)
        }} />
      </button>
      <PhotoListItem key={item.id} sampleDataForPhotoListItem={item}  favourite={props.favourite} toggleFavourite={props.toggleFavourite} setSidePeek={props.setSidePeek} sidePeek={props.sidePeek} Clickable={false} />
      <div className='photo-details-modal__header'>Similar Photos</div>
      <PhotoList photos={similar_photosArray} favourite={props.favourite} toggleFavourite={props.toggleFavourite}  setSidePeek={props.setSidePeek} sidePeek={props.sidePeek}Clickable={false} />
   
      
    </div>
  )
};

export default PhotoDetailsModal;