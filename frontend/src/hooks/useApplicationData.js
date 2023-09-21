import { useReducer, useEffect } from "react";

const ACTIONS = {
  FAV_PHOTO_ADDED: "FAV_PHOTO_ADDED",
  FAV_PHOTO_REMOVED: "FAV_PHOTO_REMOVED",
  SET_PHOTO_DATA: "SET_PHOTO_DATA",
  SET_TOPIC_DATA: "SET_TOPIC_DATA",
  SELECT_PHOTO: "SELECT_PHOTO",
  DISPLAY_PHOTO_DETAILS: "DISPLAY_PHOTO_DETAILS",
};

const useApplicationData = function() {
  //reducer function that sets state
  const reducer = function(state, action) {
    switch (action.type) {
    case "FAV_PHOTO_ADDED":
      return { ...state, favPhotos: [...state.favPhotos, action.id] };
    case "FAV_PHOTO_REMOVED":
      return {
        ...state,
        favPhotos: state.favPhotos.filter((favId) => favId !== action.id),
      };
    case "SELECT_PHOTO":
      return { ...state, showPhotoDetails: [action.photoDetails] };
    case "DISPLAY_PHOTO_DETAILS":
      return { ...state, showModal: action.value };
    case "SET_PHOTO_DATA":
      return { ...state, photoData: action.value };
    case "SET_TOPIC_DATA":
      return { ...state, topicData: action.value };
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
    }
  };

  // initialze the reducer with default states
  const [state, dispatch] = useReducer(reducer, {
    favPhotos: [],
    showPhotoDetails: [],
    showModal: false,
    photoData: [],
    topicData: [],
  });

  // destructure states
  const { favPhotos, showPhotoDetails, showModal, photoData, topicData } = state;

  // Fetch photos from API
  useEffect(() => {
    fetch("/api/photos")
      .then((res) => res.json())
      .then((data) =>
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, value: data })
      );
  }, []);

  // Fetch topics from API
  useEffect(() => {
    fetch("/api/topics")
      .then((res) => res.json())
      .then((data) =>
        dispatch({ type: ACTIONS.SET_TOPIC_DATA, value: data })
      );
  }, []);

  //Create new favourite
  const createFavorite = (id) => {
    dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, id });
  };

  //Delete new favourite
  const deleteFavorite = (id) => {
    dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, id });
  };

  //handle clickk on photo
  const handleClick = (photoDetails) => {
    dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS, value: true });
    dispatch({ type: ACTIONS.SELECT_PHOTO, photoDetails });
  };

  //handle click on close button of modal
  const handleClose = () => {
    dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS, value: false });
  };

  return {
    showModal,
    showPhotoDetails,
    favPhotos,
    photoData,
    topicData,
    createFavorite,
    deleteFavorite,
    handleClick,
    handleClose,
    reducer,
  };
};

export default useApplicationData;
