import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from '../components/PhotoList'
import PhotoFavButton from 'components/PhotoFavButton';

const PhotoDetailsModal = (props) => {

  const { state, showModal, liked, favList, setFavList, dispatch, photoData } = props;

  const showModalArray = Object.values(showModal);

  const selectedPhoto = showModalArray[0];

  const similarPhotos = photoData.filter((photo) => photo.id !== selectedPhoto);

  //handles the close button of the modal
  const handleCloseClick = () => {
    props.dispatch({ type: 'SHOW_MODAL', payload: false })
  };

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={handleCloseClick}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className="photo-details-modal__images">
        <div className="photo-details-modal__image">
          <PhotoFavButton 
            liked={state.liked}
            id={showModalArray[0]} 
            favList={favList}
            setFavList={setFavList}
            state={state}
            dispatch={dispatch}
          />
        </div>
        <img className="photo-details-modal__image" src={showModal.imageSource}></img>
        <div className="photo-details-modal__photographer-details">
          <img className="photo-details-modal__photographer-profile" src={showModal.profile} ></img>
          <div className="photo-details-modal__photographer-info">
            <p> {showModal.username} </p>
            <p className="photo-details-modal__photographer-location"> {showModal.city}, {showModal.country} </p>
          </div>
        </div>
          <h1 className="photo-details-modal__header"> Similar Photos </h1>
          <PhotoList 
            similarPhotos={similarPhotos}
            liked={liked}
            state={state}
            dispatch={dispatch}
          />
      </div>
    </div>
  )
};

export default PhotoDetailsModal;
