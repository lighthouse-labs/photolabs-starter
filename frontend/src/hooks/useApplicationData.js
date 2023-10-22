import React, { useReducer, useEffect } from "react";

const initialState = {
  photo: null,
  isFav: false,
  favPhotos: [],
  photoData: [],
  topicData: [],
};

const actionTypes = {
  openModal: 'openModal',
  closeModal: 'closeModal',
  toggleFav: 'toggleFav',
  addFav: 'addFav',
  setPhotoData: 'setPhotoData',
  setTopicData: 'setTopicData',
};

const appReducer = (state, action) => {
  switch (action.type) {
    case 'openModal':
      return {...state, photo: action.payload };
    case 'closeModal':
      return {...state, photo: null };
    case 'toggleFav':
      return {...state, isFav: !state.isFav};
    case 'addFav':
      return {...state, favPhotos: action.payload};
    case 'setPhotoData':
      return {...state, photoData: action.payload};
    case 'setTopicData':
      return {...state, topicData: action.payload};
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
};

const useApplicationData = () => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  useEffect(() => {
    fetch("/api/photos", {
      method: 'GET'
    })
      .then((response) => response.json())
      .then((photo) => dispatch({ type: actionTypes.setPhotoData, payload: photo }))
      .catch((error) => {
        console.log(error);
      })
  }, []);

  useEffect(() => {
    fetch(`/api/topics`, {
      method: 'GET'
    })
      .then(res => res.json())
      .then(topic => dispatch({ type: actionTypes.setTopicData, payload: topic }))
      .catch((error) => {
        console.log(error);
      })
   }, [])

  const openModal = (photo) => {
    dispatch({ type: actionTypes.openModal, payload: photo });
  };
  const closeModal = () => {
    dispatch({ type: actionTypes.closeModal });
  };
  const addFav = (photo) => {
    dispatch({ type: actionTypes.addFav, payload: photo });
  };
  const toggleFav = () => {
    dispatch({ type: actionTypes.toggleFav });
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
