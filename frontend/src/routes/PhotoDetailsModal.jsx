import React from 'react';
import { useState } from "react";

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoListItem from '../components/PhotoListItem'


const PhotoDetailsModal = (props) => {

  const {showModal} = props

  console.log(
    'relevant photo details:', 
    showModal
  )

  const handleCloseClick = () => {
    props.setShowModal(false)
  }

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={handleCloseClick}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
    </div>
  )
};

export default PhotoDetailsModal;
