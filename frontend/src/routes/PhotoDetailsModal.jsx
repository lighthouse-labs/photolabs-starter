import React from 'react';

import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoFavButton from "../components/PhotoFavButton";
import PhotoList from 'components/PhotoList';

const PhotoDetailsModal = (props) => {
  const {
    onClick,
    id,
    city,
    country,
    full,
    profile,
    name,
    setFavorites,
    removeFromFavorites,
    isPhotoFavorited,
    similar_photos,
    toggleFavorite,
    updateAlert,
    darkMode
  } = props;

  // convert similar_photos from an object of objects to an array of objects
  const similarPhotos = Object.keys(similar_photos).map(key => (
    {
      id: key,
      ...similar_photos[key]
    }
  ));

  return (
    <div className={`photo-details-modal${darkMode ? '-dark-mode' : ''}`}>
      <button className="photo-details-modal__close-button">
        <img src={closeSymbol} alt="close symbol" onClick={()=> onClick()}/>
      </button>
      <div className="photo-details-modal__images">
        <PhotoFavButton
          setFavorites={setFavorites}
          removeFromFavorites={removeFromFavorites}
          photoId={id} isPhotoFavorited={isPhotoFavorited}
          toggleFavorite={toggleFavorite}
          updateAlert={updateAlert}
        />
        <img src={full} className="photo-details-modal__image"/>
        <div className="photo-details-modal__photographer-details">
          <img className="photo-details-modal__photographer-profile" src={profile} />
          <div className="photo-details-modal__photographer-info">
            {name}
            <div className='photo-details-modal__photographer-location'>
              {city}, {country}
            </div>
          </div>
        </div>
        <section className="photo-details-modal__header">Similar Photos</section>
      </div>
      <section className="photo-details-modal__images">
        <PhotoList
          photos={similarPhotos}
          setFavorites={setFavorites}
          removeFromFavorites={removeFromFavorites}
          isPhotoFavorited={isPhotoFavorited}
          toggleFavorite={toggleFavorite}
          updateAlert={updateAlert}
          similarPhotos={similar_photos}
          darkMode={darkMode}
        />
      </section>
    </div>
  );
};

export default PhotoDetailsModal;
