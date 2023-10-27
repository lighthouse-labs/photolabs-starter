import React from 'react';
import { useState } from "react";

import '../styles/PhotoDetailsModal.scss'

import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from '../components/PhotoList'
import PhotoFavButton from 'components/PhotoFavButton';
import useApplicationData from 'hooks/useApplicationData';
import photos from "../mocks/photos.js"


const PhotoDetailsModal = (props) => {

  const { state, showModal, liked, setLiked, favList, setFavList, setShowModal, reducer, dispatch } = props;

  // console.log(
  //   'relevant photo details:', 
  //   showModal
  // )

  const showModalArray = Object.values(showModal);

  const selectedPhoto = showModalArray[0];

  const similarPhotos = photos.filter((photo) => photo.id !== selectedPhoto)

  //handles the close button of the modal
  const handleCloseClick = () => {
    props.dispatch({ type: 'SHOW_MODAL', payload: false })
  }

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={handleCloseClick}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className="photo-details-modal__images">
        <div className="photo-details-modal__image">
          <PhotoFavButton 
            liked={state.liked}
            setLiked={setLiked}
            id={showModalArray[0]} 
            favList={favList}
            setFavList={setFavList}
            state={state}
            reducer={reducer}
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
            setLiked={setLiked}
            state={state}
            reducer={reducer}
            dispatch={dispatch}
          />
      </div>
    </div>
  )
};

export default PhotoDetailsModal;
