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
  FAVORITES_MODAL_ON: "OPEN_FAVORITES_MODAL",
  FAVORITES_MODAL_OFF: "CLOSE_FAVORITES_MODAL",
  GET_PHOTOS_BY_FILTER: "GET_PHOTOS_BY_FILTER", //photos by search
  SET_SEARCH_INPUT: "SET_SEARCH_INPUT", // Action to set search input value
};

const reducer = (state, action) => {
  let favorites;
  let filtered;

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
    case ACTIONS.FAVORITES_MODAL_ON:
      return { ...state, openFavoritesModal: true };
    case ACTIONS.FAVORITES_MODAL_OFF:
      return { ...state, openFavoritesModal: false };

    case ACTIONS.SET_SEARCH_INPUT:
      return { ...state, searchInput: action.searchInput };

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
    openFavoritesModal: false,

    searchInput: "", // Initial value for search input
    searchedPhotos: [], // Photos based on search input
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
    if (
      state.topicId &&
      (!state.searchInput || state.searchInput.trim() === "")
    ) {
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
    }
  }, [state.topicId, state.searchInput]);

  const setTopic = (topicId) => {
    dispatch({ type: ACTIONS.SET_TOPIC, topicId }); //define topic clicked
  };

  useEffect(() => {
    if (state.searchInput) {
      const filteredPhotos = state.photos.filter((photo) => {
        const usernameMatch = photo.user.username
          .toLowerCase()
          .includes(state.searchInput.toLowerCase());
        const cityMatch = photo.location.city
          .toLowerCase()
          .includes(state.searchInput.toLowerCase());
        const countryMatch = photo.location.country
          .toLowerCase()
          .includes(state.searchInput.toLowerCase());
        return usernameMatch || cityMatch || countryMatch;
      });
      dispatch({
        type: ACTIONS.SET_PHOTO_DATA,
        payload: filteredPhotos,
      });
    }
  }, [state.searchInput]);

  // ADD and REMOVE favorites
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

  //Modal window to open/close big photo and similar photos
  const toggleModal = () => {
    if (state.openModal) {
      dispatch({ type: ACTIONS.CLOSE_MODAL });
    }
    dispatch({ type: ACTIONS.OPEN_MODAL, payload: photoId });
  };
  const openModal = (photoId) => {
    dispatch({ type: ACTIONS.OPEN_MODAL, payload: photoId });
  };

  // const closeModal = () => {
  //   dispatch({ type: ACTIONS.CLOSE_MODAL });
  // };

  // Modal window to show favorites
  const toggleFavoritesModal = () => {
    if (state.openFavoritesModal) {
      return dispatch({ type: ACTIONS.FAVORITES_MODAL_OFF });
    }
    dispatch({ type: ACTIONS.FAVORITES_MODAL_ON });
  };

  const getFavoritePhotos = () => {
    const photos = [];
    for (const id of state.favorites) {
      const photo = state.photos.find((photo) => photo.id === id);

      photo && photos.push(photo);
    }
    return photos;
  };

  const setSearchInput = (searchInput) => {
    dispatch({ type: ACTIONS.SET_SEARCH_INPUT, searchInput });
  };

  return {
    photos: state.photos,
    topics: state.topics,
    favorites: state.favorites,
    isOpenModal: state.openModal,
    clickedPhoto: state.clickedPhoto,
    toggleModal,
    setTopic,
    // openModal,
    // closeModal,
    toggleFavoritePhoto,
    isPhotoFavorite,
    numFavorites: state.favorites.length, //falsy if no length
    photoClickHandler,
    toggleFavoritesModal,
    isOpenFavoritesModal: state.openFavoritesModal,
    getFavoritePhotos,
    searchInput: state.searchInput,
    setSearchInput,
  };
};
