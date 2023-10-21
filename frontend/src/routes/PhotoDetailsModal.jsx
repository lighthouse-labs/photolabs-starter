import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoFavButton from 'components/PhotoFavButton';

const PhotoDetailsModal = ({ state, toggleFav, closeModal }) => {
  // const { state, toggleFav, closeModal } = useApplicationData();
  const photo = state.photo;
  const similarPhotos = photo.similar_photos;

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button">
        <img src={closeSymbol} alt="close symbol" onClick={closeModal}/>
      </button>
      < PhotoFavButton onClick={toggleFav} isFav={state.isFav}/>

      <div className='photo-details-modal__images' >
        <img src={photo.urls.full} alt="Selected Photo" className='photo-details-modal__image'/>
        <div className='photo-details-modal__photographer-info' >
          <h2 className="photo-details-modal__photographer-details">{photo.username}</h2>
          <h2 className="photo-details-modal__photographer-location">
            {photo.location.city}, {photo.location.country}
          </h2>
        </div>
      </div>

      <h3 className='photo-details-modal__header' >Similar Photos</h3>
      <div className='photo-details-modal__images'>
        {Object.keys(similarPhotos).map(key => (
          <div key={key}>
            < PhotoFavButton onClick={toggleFav} isFav={state.isFav}/>
            <img src={similarPhotos[key].urls.full} alt={similarPhotos[key].location.city} className='photo-details-modal__image' />
            <div className='photo-details-modal__photographer-info' >
              <h2 className="photo-details-modal__photographer-details">{similarPhotos[key].user.username}</h2>
              <h2 className="photo-details-modal__photographer-location">
              {similarPhotos[key].location.city}, {similarPhotos[key].location.country}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
};

export default PhotoDetailsModal;
