import { useReducer, useEffect } from "react";
import axios from "axios";

export const ACTIONS = {
  SET_TOPIC_DATA: "SET_TOPIC_DATA", //fetch topics
  OPEN_MODAL: "OPEN_MODAL",
  CLOSE_MODAL: "CLOSE_MODAL",
  GET_PHOTOS_BY_TOPICS: "GET_PHOTOS_BY_TOPICS", //photos by topic
  SET_TOPIC: "SET_TOPIC", //set topicId
  ADD_FAVORITE: "ADD_FAVORITE",
  REMOVE_FAVORITE: "REMOVE_FAVORITE",
  SET_PHOTO_DATA: "SET_PHOTO_DATA", //fetch photos by topicId
};

const reducer = (state, action) => {
  let favorites;

  switch (action.type) {
    case ACTIONS.ADD_FAVORITE:
      favorites = [...state.favorites, action.photoId];
      return { ...state, favorites };
    case ACTIONS.REMOVE_FAVORITE:
      favorites = state.favorites.filter((id) => id !== action.photoId);
      return { ...state, favorites };
    case ACTIONS.GET_PHOTOS_BY_TOPICS:
      return { ...state, topicId: action.payload };
    case ACTIONS.SET_PHOTO_DATA:
      return { ...state, photos: action.payload }; //state for photos after fetching by topics
    case ACTIONS.SET_TOPIC_DATA:
      return { ...state, topics: action.topics };
    case ACTIONS.OPEN_MODAL:
      return { ...state, openModal: true, clickedPhoto: action.payload };
    case ACTIONS.CLOSE_MODAL:
      return { ...state, openModal: false, clickedPhoto: null };
    case ACTIONS.SET_TOPIC:
      return { ...state, topicId: action.topicId }; //set topicId from setTopic
    default:
      return state;
  }
};

export const useApplicationData = () => {
  const initialState = {
    photos: [],
    topics: [],
    favorites: [],
    topicId: 1, //load first page
    openModal: false,
    clickedPhoto: null,
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  // GET TOPICS
  useEffect(() => {
    axios
      .get(`/api/topics`)
      .then((res) => {
        const topics = res.data;
        dispatch({ type: ACTIONS.SET_TOPIC_DATA, topics });
      })
      .catch((err) => console.log(err));
  }, []);

  //GET PHOTOS by TOPIC
  useEffect(() => {
    axios
      .get(`api/topics/photos/${state.topicId}`)
      .then((res) => {
        if (res.data) {
          dispatch({
            type: ACTIONS.SET_PHOTO_DATA,
            payload: res.data,
          });
        }
      })
      .catch((err) => console.log(err));
  }, [state.topicId]);

  const setTopic = (topicId) => {
    dispatch({ type: ACTIONS.SET_TOPIC, topicId }); //define topic clicked
  };

  // ADD and REMOVE favrites
  const toggleFavoritePhoto = (photoId) => {
    if (isPhotoFavorite(photoId)) {
      return dispatch({ type: ACTIONS.REMOVE_FAVORITE, photoId });
    }
    dispatch({ type: ACTIONS.ADD_FAVORITE, photoId });
  };

  // check if selected photo is favorite
  const isPhotoFavorite = (photoId) => {
    return state.favorites.includes(photoId);
  };
  // which photo is clicked and open modal
  const photoClickHandler = (photoId) => {
    openModal(photoId);
  };
  const openModal = (photoId) => {
    dispatch({ type: ACTIONS.OPEN_MODAL, payload: photoId });
  };

  const closeModal = () => {
    dispatch({ type: ACTIONS.CLOSE_MODAL });
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
    numFavorites: state.favorites.length, //falsy if no length
    photoClickHandler,
    setTopic,
  };
};
