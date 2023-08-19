import { useState, useReducer } from "react";

import photos from 'mocks/photos.js'

// favPhotos = array of favourited photos
// addFavourite = function to add photos to favourite array
// removeFavourite = function to remove photos from favourite array

// clickedPhoto = state of a photo having been clicked or null
// openModal = set clickedPhoto to photo
// closeModal = set clickedPhoto to null
// handlePhotoClick = onClick event calls openModal setting clickedPhoto to photo
// handleCloseClick = onClick event calls closeModal setting clickedPhoto to null

// isFav = set photos state as favourited or not
// handleFavClick = onClick event toggles between favourited state or not 

export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  OPEN_MODAL: 'OPEN_MODAL',
  CLOSE_MODAL: 'CLOSE_MODAL'
}

function reducer(state, action) {
  switch (action.type) {
    case OPEN_MODAL:
      return 
  }
}

const useApplicationData = () => {

const allPhotos = photos;

const [favPhotos, setFavPhotos] = useState([]);
const [clickedPhoto, setClickedPhoto] = useState(null);
const [clickedPhotoInfo, setClickedPhotoInfo] = useState({});
const [similarPhotos, setSimilarPhotos] = useState([]);
const [isFav, setIsFav] = useState(false);


  // set state of favourite/not favourite photos

  const addFavourite = (photoID) => {
    if (!favPhotos.includes(photoID)) {
      setFavPhotos([...favPhotos, photoID]);
    }
  };

  const removeFavourite = (photoID) => {
    if (favPhotos.includes(photoID)) {
      setFavPhotos(favPhotos.filter((id) => id !== photoID));
    }
  };


  // set state of clicked photo to open modal/set clicked photo state to null to close modal
  
  const openModal = (photo) => {
    setClickedPhoto(photo);
  };

  const getPhotoInfo = (data, target) => {
    let info = {};
    for (const p of data) {
      if (p.id === target) {
        info = {...p}
      }
    }
    return info;
  }

  const closeModal = () => {
    setClickedPhoto(null)
  };

  const handlePhotoClick = (photo) => {
    openModal(photo);


    // set information about clicked photo

    const info = getPhotoInfo(allPhotos, photo.target.id)
    setClickedPhotoInfo(info)


    // set value for similar photos to clicked photo

    const simPhotos = Object.values(info.similar_photos)
    setSimilarPhotos(simPhotos)
  };

  const handleCloseClick = () => {
    closeModal();
  };

  // set state of a favourite button
 
  const handleFavClick = ()=> { 
    {isFav === true ? setIsFav(false) : setIsFav(true)}
  };
  
 
  return { 
    favPhotos, addFavourite, removeFavourite, 
    clickedPhoto, openModal, closeModal, 
    handlePhotoClick, handleCloseClick,
    clickedPhotoInfo, similarPhotos, 
    isFav, handleFavClick,
    }

};


export default useApplicationData;