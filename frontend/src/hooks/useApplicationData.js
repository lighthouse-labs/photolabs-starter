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
        favourites: newFavourites
      };

    case ACTIONS.REMOVE_FAV_PHOTO: {
      const newFavourites = [...state.favourites].filter((id) => id !== action.photoId);
      return {
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
      console.log('currentPhoto :', currentPhoto, action.id);
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

  const selectedPhoto = (photoId) => {
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

  const selectedPhotoHandler = (id) => {
    selectedPhoto(id);
  };

  const isFavourite = (photoId) => {
    //should return true if the id exists in the selected array
    return state.favourites.includes(photoId);
  };

  const isFavPhotoExist = () => state.favourites.length > 0; //checks if any photo has been liked

  //function to change modal state
  const setModalHandler = (id) => {
    dispatch({
      type: ACTIONS.OPEN_PHOTO_DETAILS_MODAL,
      display: true
    });

    dispatch({
      type: ACTIONS.SET_CLICKED_PHOTO,
      id: id
    });
  };

  // function to close modal
  const closeModal = () => {
    dispatch({
      type: ACTIONS.CLOSE_PHOTO_DETAILS_MODAL
    });
  };

  return {
    favourites: state.favourites,
    isModalOpen: state.isModalOpen,
    clickedPhoto: state.clickedPhoto,
    isFavourite,
    isFavPhotoExist,
    setModalHandler,
    selectedPhoto,
    selectedPhotoHandler,
    closeModal,
    photos
  };
};
