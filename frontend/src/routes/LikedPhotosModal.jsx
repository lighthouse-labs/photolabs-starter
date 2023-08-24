import React from 'react';
import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoFavButton from 'components/PhotoFavButton';
import PhotoList from 'components/PhotoList';

const LikedPhotosModal = (props) => {
  const favourite = props.favourite;//photo's being Liked Data
  
  const likedPhotos =  props.photos.filter((photo) => {
    let id = photo.id
    //console.log(photo.id);
    //console.log(favourite)
    return (favourite.includes(id) )
  })
  
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button">
        <img src={closeSymbol} alt="close symbol"  onClick= {() => {
          props.setSidePeekForLikedPhotos(false)
        }} />
      </button>
     
      <div className='photo-details-modal__header'>Liked Photos</div>
      <PhotoList photos={likedPhotos} setSampleDataForPhotoListItem={props.setSampleDataForPhotoListItem} favourite={props.favourite} toggleFavourite={props.toggleFavourite}  setSidePeek={props.setSidePeek} sidePeek={props.sidePeek} setSidePeekForLikedPhotos={props.setSidePeekForLikedPhotos}  /> 
    </div>
  )
};

export default LikedPhotosModal;