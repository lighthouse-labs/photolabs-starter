import React, { useEffect, useReducer } from 'react';

export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  FAV_ICON_LIKED: 'FAV_ICON_LIKED',
  FAV_ICON_UNLIKED: 'FAV_ICON_UNLIKED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS',
  OPEN_MODAL: 'OPEN_MODAL',
  CLOSE_MODAL: 'CLOSE_MODAL',
  ADD_FAV_NOTIFICATION: 'ADD_FAV_NOTIFICATION',
  REMOVE_FAV_NOTIFICATION: 'REMOVE_FAV_NOTIFICATION'
};

const reducer = (state, action) => {
  switch (action.type) {
  case ACTIONS.OPEN_MODAL:
    return { ...state, isModalOpen: true, selectedPhoto: action.payload };
  case ACTIONS.CLOSE_MODAL:
    return { ...state, isModalOpen: false, selectedPhoto: null };
  case ACTIONS.FAV_PHOTO_ADDED:
    return { ...state, favorites: new Set([...state.favorites, action.payload]) };
  case ACTIONS.FAV_PHOTO_REMOVED:
    return {...state, favorites: new Set([...state.favorites].filter(item => item !== action.payload)) };
  case ACTIONS.FAV_ICON_LIKED:
    return { ...state, selected: true };
  case ACTIONS.FAV_ICON_UNLIKED:
    return {...state, selected: false };
  case ACTIONS.ADD_FAV_NOTIFICATION:
    return {...state, displayAlert: state.favorites && state.favorites.size > 0 };
  default:
    return state;
  }
};

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, {
    isModalOpen: false,
    selectedPhoto: null,
    selected: false,
    displayAlert: false,
    favorites: new Set()
  });

  const isFavPhotoExist = state.favorites.size > 0 ? true : false;

  useEffect(() => {
    dispatch({ type: ACTIONS.ADD_FAV_NOTIFICATION });
  }, [isFavPhotoExist]);

  const closeModal = () => {
    dispatch({ type: ACTIONS.CLOSE_MODAL });
  };

  const openModal = (photoData) => {
    dispatch({ type: ACTIONS.OPEN_MODAL, payload: photoData });
  };

  const addFavPhoto = (photoId) => {
    dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: photoId });
  };

  const removeFavPhoto = (photoId) => {
    dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: photoId });
  };

  const iconLiked = () => {
    dispatch({ type: ACTIONS.FAV_ICON_LIKED});
  };
  
  const iconUnliked = () => {
    dispatch({ type: ACTIONS.FAV_ICON_UNLIKED });
  };

  const favPhotoExists = () => {
    dispatch({ type: ACTIONS.ADD_FAV_NOTIFICATION });
  };
  

  return {
    isModalOpen: state.isModalOpen,
    selectedPhoto: state.selectedPhoto,
    favorites: state.favorites,
    selected: state.selected,
    displayAlert: state.displayAlert,
    addFavPhoto,
    removeFavPhoto,
    iconLiked,
    iconUnliked,
    favPhotoExists,
    openModal,
    closeModal
  };
};

export default useApplicationData;