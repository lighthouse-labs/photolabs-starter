import photos from 'mocks/photos';
import { useReducer, useState } from 'react';

export const ACTIONS = {
  ADD_FAV_PHOTO: 'ADD_FAV_PHOTO',
  REMOVE_FAV_PHOTO: 'REMOVE_FAV_PHOTO',
  OPEN_PHOTO_DETAILS_MODAL: 'OPEN_PHOTO_DETAILS_MODAL',
  SET_CLICKED_PHOTO: 'SET_CLICKED_PHOTO',
  CLOSE_PHOTO_DETAILS_MODAL: 'CLOSE_PHOTO_DETAILS_MODAL'
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD_FAV_PHOTO:
      const newFavourites = [...state.favourites, action.photoId];
      return {
        ...state,
        favourites: newFavourites
      };

    case ACTIONS.REMOVE_FAV_PHOTO: {
      const newFavourites = [...state.favourites].filter((id) => id !== action.photoId);
      return {
        ...state,
        favourites: newFavourites
      };
    }

    case ACTIONS.OPEN_PHOTO_DETAILS_MODAL: {
      return {
        ...state,
        isModalOpen: true
      };
    }
    case ACTIONS.SET_CLICKED_PHOTO: {
      const currentPhoto = photos.find((photo) => photo.id === action.id);
      console.log('currentPhoto :', currentPhoto);
      return {
        ...state,
        clickedPhoto: currentPhoto
      };
    }
    case ACTIONS.CLOSE_PHOTO_DETAILS_MODAL: {
      return {
        ...state,
        isModalOpen: false
      };
    }
    default:
      throw new Error(`Tried to reduce with unsupported action type: ${action.type}`);
  }
}

export const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, {
    favourites: [],
    isModalOpen: false,
    clickedPhoto: null
  });

  const toggleFavourites = (photoId) => {
    //checks if photoId exists in the selected array, if it does it removes from the array and resets the selected state
    if (state.favourites.includes(photoId)) {
      dispatch({
        type: ACTIONS.REMOVE_FAV_PHOTO,
        photoId: photoId
      });
    } else {
      dispatch({
        type: ACTIONS.ADD_FAV_PHOTO,
        photoId: photoId
      });
    }
  };

  //function to open modal
  const openModal = (id) => {
    //sets the selected photo to the current item
    dispatch({
      type: ACTIONS.SET_CLICKED_PHOTO,
      id: id
    });
    dispatch({
      type: ACTIONS.OPEN_PHOTO_DETAILS_MODAL,
      display: true
    });
  };

  // function to close modal
  const closeModal = () => {
    console.log('close button clicked');
    dispatch({
      type: ACTIONS.CLOSE_PHOTO_DETAILS_MODAL,
      display: false
    });
  };

  return {
    favourites: state.favourites,
    isModalOpen: state.isModalOpen,
    clickedPhoto: state.clickedPhoto,
    openModal,
    toggleFavourites,
    closeModal,
    photos
  };
};
