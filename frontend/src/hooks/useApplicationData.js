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
  REMOVE_FAV_NOTIFICATION: 'REMOVE_FAV_NOTIFICATION',
  SET_PHOTOS_BY_TOPIC: 'SET_PHOTOS_BY_TOPIC',
  SET_CURRENT_TOPIC: 'SET_CURRENT_TOPIC'
};

const reducer = (state, action) => {
  switch (action.type) {
  case ACTIONS.OPEN_MODAL: {
    return { ...state, isModalOpen: true, selectedPhoto: action.payload };
  }
  case ACTIONS.CLOSE_MODAL: {
    return { ...state, isModalOpen: false, selectedPhoto: null };
  }
  case ACTIONS.FAV_PHOTO_ADDED: {
    return { ...state, favorites: new Set([...state.favorites, action.payload]) };
  }
  case ACTIONS.FAV_PHOTO_REMOVED: {
    return {...state, favorites: new Set([...state.favorites].filter(item => item !== action.payload)) };
  }
  case ACTIONS.ADD_FAV_NOTIFICATION: {
    return {...state, displayAlert: state.favorites && state.favorites.size > 0 };
  }
  case ACTIONS.SET_PHOTO_DATA: {
    return {...state, photos: action.payload };
  }
  case ACTIONS.SET_TOPIC_DATA: {
    return {...state, topics: action.payload };
  }

  case ACTIONS.SET_CURRENT_TOPIC: {
    return {...state, currentTopic: action.payload };
  }

  default: {
    return state;
  }
  }
};

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, {
    isModalOpen: false,
    selectedPhoto: null,
    selected: false,
    displayAlert: false,
    photos: [],
    topics: [],
    favorites: new Set(),
    currentTopic: null,
    fetchingCurrentTopic: false
  });

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

  const setPhotoData = (photos) => {
    dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: photos });
  };

  const setTopicData = (topics) => {
    dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: topics });
  };

  const setCurrentTopic = (topic) => {
    // if the topic in the nav bar is clicked twice, return back to non-selected search
    if (state.currentTopic !== null && state.currentTopic === topic) {
      dispatch({ type: ACTIONS.SET_CURRENT_TOPIC, payload: null });
    } else {
      dispatch({ type: ACTIONS.SET_CURRENT_TOPIC, payload: topic });
    }
  };

  const updateAlert = () => {
    dispatch({ type: ACTIONS.ADD_FAV_NOTIFICATION });
    return state.displayAlert;
  };

  // if already favorited, remove from favorites - else add to favorites
  const toggleFavorite = (photoId) => {
    const isFavorited = state.favorites.has(photoId);
    if (isFavorited) {
      removeFavPhoto(photoId);
    } else {
      addFavPhoto(photoId);
    }
  };

  const fetchPhotos = () => {
    fetch('http://localhost:8001/api/photos')
      .then((res) => res.json())
      .then((photos) => setPhotoData(photos))
      .catch((error) => console.error("Error occurred: ", error));
  };

  const fetchTopics = () => {
    fetch('http://localhost:8001/api/topics')
      .then((res) => res.json())
      .then((topics) => setTopicData(topics))
      .catch((error) => console.error("Error occurred: ", error));
  };

  const fetchCurrentTopic = () => {
    fetch(`http://localhost:8001/api/topics/photos/${state.currentTopic}`)
      .then((res) => res.json())
      .then((photos) => setPhotoData(photos))
      .catch((error) => console.error("Error occurred: ", error));
  };

  // fetch + render photos/topics and if the current topic changes, re-render with the right photos
  useEffect(() => {
    fetchTopics();
    if (state.currentTopic !== null) {
      fetchCurrentTopic();
    } else {
      fetchPhotos();
    }
  }, [state.currentTopic]);
  

  return {
    isModalOpen: state.isModalOpen,
    selectedPhoto: state.selectedPhoto,
    favorites: state.favorites,
    selected: state.selected,
    displayAlert: state.displayAlert,
    photos: state.photos,
    topics: state.topics,
    addFavPhoto,
    removeFavPhoto,
    updateAlert,
    toggleFavorite,
    setCurrentTopic,
    openModal,
    closeModal
  };
};

export default useApplicationData;