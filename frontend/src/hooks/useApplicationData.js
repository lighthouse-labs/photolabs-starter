import React, { useReducer } from "react";

const initialState = {
  photo: null,
  isFav: false,
  favPhotos: [],
};

const actionTypes = {
  openModal: 'openModal',
  closeModal: 'closeModal',
  toggleFav: 'toggleFav',
  addFav: 'addFav',
};

const appReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.openModal:
      return {...state, photo: action.payload };
    case actionTypes.closeModal:
      return {...state, photo: null };
    case actionTypes.toggleFav:
      return {...state, isFav: !state.isFav};
    case actionTypes.addFav:
      return {...state, favPhotos: action.payload};
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
};

const useApplicationData = () => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const openModal = (photo) => {
    dispatch({ type: actionTypes.openModal, payload: photo });
  };
  const closeModal = () => {
    dispatch({ type: actionTypes.closeModal });
  };
  const toggleFav = () => {
    dispatch({ type: actionTypes.toggleFav });
  };
  const addFav = (photo) => {
    dispatch({ type: actionTypes.addFav, payload: photo });
  };

  return {
    state,
    addFav,
    openModal,
    closeModal,
    toggleFav,
  };
};

export default useApplicationData;
