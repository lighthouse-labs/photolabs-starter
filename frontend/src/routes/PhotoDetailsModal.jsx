import React from 'react';
import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';
import PhotoListItem from 'components/PhotoListItem';

const PhotoDetailsModal = ({ updateDisplayModal, displayModal, favorite, toggleFavorite, darkMode }) => {

  const { urls: { full, regular }, user, location: { city, country }, id, similar_photos } = displayModal;
  const { name, profile } = user;

  const similarPhotoes = Object.values(displayModal.similar_photos)

  return (

    <div className={`photo-details-modal ${darkMode ? 'dark-mode' : ''}`}>
      <button onClick={updateDisplayModal} className="photo-details-modal__close-button">
        <img src={closeSymbol} alt="close symbol" />
      </button>

      <div className='photo-details-modal__images'>
        <PhotoFavButton toggleFavorite={toggleFavorite} favorite={favorite} id={id} />
        <div>
          <img className='photo-details-modal__image' src={full} alt="Photo" />
          <div className='photo-details-modal__photographer-details'>
            <img className='photo-details-modal__photographer-profile' src={`${profile}`} alt="Profile Image" />
            <div className="photo-details-modal__photographer-info">{`${name}`}</div>
            <div className='photo-details-modal__photographer-location'> {`${city}, ${country}`}</div>
          </div>
          <div className="photo-details-modal__header"><b>Similar Photos 📸</b></div>
          <div className='photo-details-modal__images'>

            <PhotoList similarPhotoes={similarPhotoes}
              displayModal={displayModal}
              favorite={favorite}
              toggleFavorite={toggleFavorite}
              updateDisplayModal={updateDisplayModal} />

            <PhotoListItem photo={displayModal}
              toggleFavorite={toggleFavorite}
              favorite={favorite} />
          </div>
        </div>
      </div>

    </div>
  )
};

export default PhotoDetailsModal;