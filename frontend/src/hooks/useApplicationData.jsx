import { useState } from "react";

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

const useApplicationData = () => {

const allPhotos = photos;

  // set state of favourite/not favourite photos

  const [favPhotos, setFavPhotos] = useState([]);

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

  const [clickedPhoto, setClickedPhoto] = useState(null);

  const openModal = async (photo) => {
    setClickedPhoto(photo)
  };

  const closeModal = () => {
    setClickedPhoto(null)
  };

  const handlePhotoClick = (photo) => {
    openModal(photo);
  };

  const handleCloseClick = () => {
    closeModal();
  };

  // set state of a favourite button

  const [isFav, setIsFav] = useState(false);
  
  const handleFavClick = ()=> { 
    {isFav === true ? setIsFav(false) : setIsFav(true)}
  };

  
  // get selected photo information and similar photos information
  
  // const selectPhoto = async function(pics) {
  //   const photo = await clickedPhoto
  //   const targetID = await (photo.target.id);
  //   let selectedPhotoInfo = {};
  //   for(const p of pics) {
  //     if (p.id === targetID) {
  //       selectedPhotoInfo = {...p}
  //     }
  //   }
  //   return selectedPhotoInfo
  // }

  // const clickedPhotoInfo = selectPhoto(photos)

  // const getSimilarPhotos = async () => {
  //   const info = await selectPhoto(photos)
  //   return (Object.values(info.similar_photos))
  // }
  
  // const similarPhotos = getSimilarPhotos()

 
  
 
  return { 
    favPhotos, addFavourite, removeFavourite, 
    clickedPhoto, openModal, closeModal, handlePhotoClick, handleCloseClick,
    isFav, handleFavClick,
  
    // similarPhotos, clickedPhotoInfo,
    }

};


export default useApplicationData;