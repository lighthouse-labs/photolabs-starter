import { useReducer } from "react";
import photosData from "../mocks/photos";
import topicsData from "../mocks/topics";

export const ACTIONS = {
  FAV_PHOTO_TOGGLE: "FAV_PHOTO_ADDED_REMOVED", //add/remove from favorites
  SET_PHOTO_DATA: "SET_PHOTO_DATA",
  SET_TOPIC_DATA: "SET_TOPIC_DATA",
  DISPLAY_PHOTO_DETAILS: "DISPLAY_PHOTO_DETAILS",
  OPEN_MODAL: "OPEN_MODAL",
  CLOSE_MODAL: "CLOSE_MODAL",

  // FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',

  // SELECT_PHOTO: 'SELECT_PHOTO',
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_TOGGLE:
      return {
        ...state,
        photos: state.photos.map((photo) =>
          photo.id === action.payload
            ? { ...photo, isFavorite: !photo.isFavorite }
            : photo
        ),
      };
    case ACTIONS.SET_PHOTO_DATA:
      return { ...state, photos: action.payload };
    case ACTIONS.SET_TOPIC_DATA:
      return { ...state, topics: action.payload };
    case ACTIONS.OPEN_MODAL:
      return { ...state, openModal: true, clickedPhoto: action.payload };
    case ACTIONS.CLOSE_MODAL:
      return { ...state, openModal: false, clickedPhoto: null };

    default:
      return state;
  }
};

const initialState = {
  photos: photosData,
  topics: topicsData,
  openModal: false,
  clickedPhoto: null,
};

export const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setPhotos = (photos) => {
    dispatch({ type: ACTIONS.SET_PHOTOS, payload: photos });
  };

  const setTopics = (topics) => {
    dispatch({ type: ACTIONS.SET_TOPICS, payload: topics });
  };

  const openModal = (photoId) => {
    dispatch({ type: ACTIONS.OPEN_MODAL, payload: photoId });
  };

  const closeModal = () => {
    dispatch({ type: ACTIONS.CLOSE_MODAL });
  };

  const toggleFavoritePhoto = (photoId) => {
    dispatch({ type: ACTIONS.FAV_PHOTO_TOGGLE, payload: photoId }); //add and remove favorites
  };

  // check if selected photo is favorite
  const isPhotoFavorite = (photoId) => {
    const photo = state.photos.find(
      (photo) => Number(photo.id) === Number(photoId)
    );
    return photo ? !!photo.isFavorite : false;
  };
  // for heart in TopNavigationBar (to check if any of photo is favorite)
  const checkFavorites = () => {
    return state.photos.some((el) => el.isFavorite === true);
  };
  // which photo is clicked and open modal
  const photoClickHandler = (photoId) => {
    openModal(photoId);
  };
  return {
    photos: state.photos,
    topics: state.topics,
    isOpenModal: state.openModal,
    clickedPhoto: state.clickedPhoto,
    openModal,
    closeModal,
    toggleFavoritePhoto,
    isPhotoFavorite,
    checkFavorites,
    photoClickHandler,
  };
};
