import React, { useEffect, useReducer, useCallback } from 'react';
import reducer, { ACTIONS } from '../reducers/reducer';
import axios from 'axios';

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

  const fetchPhotos = useCallback(() => {
    axios.get('/api/photos')
      .then((res) => setPhotoData(res.data))
      .catch((error) => console.error("Error occurred: ", error));
  }, [setPhotoData]);

  const fetchTopics = useCallback(() => {
    axios.get('/api/topics')
      .then((res) => setTopicData(res.data))
      .catch((error) => console.error("Error occurred: ", error));
  }, [setTopicData]);

  const fetchCurrentTopic = useCallback(() => {
    axios.get(`/api/topics/photos/${state.currentTopic}`)
      .then((res) => setPhotoData(res.data))
      .catch((error) => console.error("Error occurred: ", error));
  }, [setPhotoData]);

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