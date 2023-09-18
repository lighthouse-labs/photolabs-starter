import { useReducer, useState } from "react";


const ACTIONS = {
  ADD_FAV_PHOTO: 'ADD_FAV_PHOTO',
  DELETE_FAV_PHOTO: 'DELETE_FAV_PHOTO'
};

const reducer = (state, action) => {
  switch (action.type) {
  case ACTIONS.ADD_FAV_PHOTO:
    return {
      ...state,
      favPhotos: [...state.favPhotos, action.payload.photoId]};
  case ACTIONS.DELETE_FAV_PHOTO:
    return {
      ...state,
      favPhotos: state.favPhotos.filter((id) => id !== action.payload.photoId)};
  default:
    return state;
  }
};

const useApplicationData = () => {
  // const [favPhotos, setFavPhotos] = useState([]);
  const [isShown, setIsShown] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  
  const initialState = {
    favPhotos: [],
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleFav = (id) => {
    if (state.favPhotos.includes(id)) {
      dispatch({ type: ACTIONS.DELETE_FAV_PHOTO, payload: { photoId: id } });
    } else {
      dispatch({ type: ACTIONS.ADD_FAV_PHOTO, payload: { photoId: id } });
    }
  };


  return {
    state,
    dispatch,
    toggleFav,
    // favPhotos,
    // setFavPhotos,
    isShown,
    setIsShown,
    selectedPhoto,
    setSelectedPhoto
  };
};

export default useApplicationData;