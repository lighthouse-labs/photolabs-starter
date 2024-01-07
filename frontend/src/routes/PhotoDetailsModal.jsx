import React from 'react';
import PhotoList from 'components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';
import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = ({onCloseClick, data, favouritedPhotos, handleFavouritePhotos}) => {

  const similarPhotos = Object.values(data.similar_photos)

  return (
    <div className="photo-details-modal">

      <div className='photo-details-modal__top-bar'>
        <button className="photo-details-modal__close-button" onClick={onCloseClick}>
          <img src={closeSymbol} alt="close symbol" />
        </button>
      </div>

      <div className='photo-details-modal__images'>
        <PhotoFavButton 
          data={data}
          favouritedPhotos={favouritedPhotos}
          handleFavouritePhotos={handleFavouritePhotos}
        />
        <img className='photo-details-modal__image' src={data.urls.full}/>
        <div className='photo-details-modal__photographer-details'>
            <img className='photo-details-modal__photographer-profile' src={data.user.profile}/>
            <div>
              <div>
                <span className='photo-details-modal__photographer-info'>{data.user.name}</span>
              </div>
              <div>
                <span className='photo-details-modal__photographer-info photo-details-modal__photographer-location'>{data.location.city}, {data.location.country}</span>
              </div>
            </div>
        </div>
        <h3 className='photo-details-modal__header'>Similar Photos</h3>
        <PhotoList 
          photos={similarPhotos}
          favouritedPhotos={favouritedPhotos}
          handleFavouritePhotos={handleFavouritePhotos}
        />
      </div>

    </div>
  )
};

export default PhotoDetailsModal;
