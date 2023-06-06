import { useState, useEffect } from "react";
import axios from "axios";

const useApplicationData = () => {
  const [showModal, setShowModal] = useState(false);
  const [favouritePhotos, setFavouritePhotos] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState([]);

  const favoritePhoto = () => {
    const likedPhoto = applicationState.photos.find((photo) => {
      return photo.id === action.payload;
    });

    const removedFromFavourite = state.favouritePhotos.filter((photo) => {
      return photo.id !== action.payload;
    });

    const foundPhoto = state.favouritePhotos.find((favouritePhoto) => {
      return likedPhoto.id === favouritePhoto.id;
    });

    if (!foundPhoto) {
      // return {
      //   ...state,
      //   favouritePhotos: [...state.favouritePhotos, likedPhoto],
      // };
      setFavouritePhotos(likedPhoto);
    } else {
      // return {
      //   ...state,
      //   favouritePhotos: removedFromFavourite,
      // };
      setFavouritePhotos(removedFromFavourite);
    }
  };

  const setModalPhoto = () => {
    const selected = applicationState.photos.filter((photo) => {
      return photo.id === action.payload;
    });
    if (!state.showModal) {
      // return {
      //   ...state,
      //   showModal: !applicationState.showModal,
      //   selectedPhoto: selected.length > 0 ? selected : "",
      // };
      setShowModal(!showModal);
      setSelectedPhoto(selected.length > 0 ? selected : "");
    }
  };

  const closeModal = () => {
    if (showModal) {
      // return {
      //   ...state,
      //   showModal: false,
      //   selectedPhoto: null,
      // };

      setShowModal(!showModal);
      setSelectedPhoto(null);
    }
  };

  // const reducer = (state, action) => {
  //   switch (action.type) {
  //     case "SELECT_PHOTO":
  //       const selected = applicationState.photos.filter((photo) => {
  //         return photo.id === action.payload;
  //       });
  //       if (!state.showModal) {
  //         return {
  //           ...state,
  //           showModal: !applicationState.showModal,
  //           selectedPhoto: selected.length > 0 ? selected : "",
  //         };
  //       }
  //     case "FAV_PHOTO_ADDED":

  //     case "CLOSE_MODAL":
  //       if (state.showModal) {
  //         return {
  //           ...state,
  //           showModal: false,
  //           selectedPhoto: null,
  //         };
  //       }
  //     default:
  //       return state;
  //   }
  // };

  return {
    showModal,
    favouritePhotos,
    setModalPhoto,
    closeModal,
  };
};

export default useApplicationData;
