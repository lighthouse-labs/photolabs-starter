import React from 'react';
import { useState } from "react";

import '../styles/PhotoDetailsModal.scss'

import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from '../components/PhotoList'
import PhotoFavButton from 'components/PhotoFavButton';
import photos from "../mocks/photos.js"


const PhotoDetailsModal = (props) => {

  const {showModal, liked, setLiked, favList, setFavList } = props;

  // console.log(
  //   'relevant photo details:', 
  //   showModal
  // )

  console.log('PhotoDetailsModal liked', liked)
  const showModalArray = Object.values(showModal);
  // console.log("PhotoDetailsModal showModalArray", showModalArray)
  // console.log("PhotoDetailsModal showModalArray[0]", showModalArray[0])

  const selectedPhoto = showModalArray[0];
  console.log('selectedPhoto', selectedPhoto)

  const similarPhotos = photos.filter((photo) => photo.id !== selectedPhoto)
  console.log("similarPhotos", similarPhotos)

  //handles the close button of the modal
  const handleCloseClick = () => {
    props.setShowModal(false)
  }

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={handleCloseClick}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className="photo-details-modal__images">
      <PhotoFavButton 
        liked={liked}
        setLiked={setLiked}
        id={showModalArray[0]} 
        // modalId={showModalArray[0]}
        favList={favList}
        setFavList={setFavList}
      />
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
          />
      </div>
    </div>
  )
};

export default PhotoDetailsModal;
