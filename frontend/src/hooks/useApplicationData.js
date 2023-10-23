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
    searchTerm: null,
    displayFavorites: false,
    darkMode: false
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

  const setSearchTerm = (searchTerm) => {
    dispatch({ type: ACTIONS.SET_SEARCH_TERM, payload: searchTerm });
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

  const showFavorites = () => {
    if (state.displayFavorites) {
      dispatch({ type: ACTIONS.HIDE_FAVORITES });
    } else {
      dispatch({ type: ACTIONS.SHOW_FAVORITES });
    }
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

  const toggleDarkMode = () => {
    dispatch({ type: ACTIONS.TOGGLE_DARK_MODE });
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
      .then((res) => {
        if (state.displayFavorites) {
          const favoritedPhotos = res.data.filter((photo) => state.favorites.has(photo.id));
          setPhotoData(favoritedPhotos);
        } else {
          setPhotoData(res.data);
        }
      })
      .catch((error) => console.error("Error occurred: ", error));
  }, [setPhotoData]);

  const fetchSearchResult = useCallback(() => { 
    axios.get(`/api/photos/${state.searchTerm}`)
      .then((res) => {
        if (state.displayFavorites) {
          const favoritedPhotos = res.data.filter((photo) => state.favorites.has(photo.id));
          setPhotoData(favoritedPhotos);
        } else {
          setPhotoData(res.data);
        }
      })
      .catch((error) => console.error("Error occurred: ", error));
  }, [setPhotoData]);

  const fetchFavorites = useCallback(() => {
    axios.get('/api/photos')
      .then((res) => {
        const favoritedPhotos = res.data.filter((photo) => state.favorites.has(photo.id));
        setPhotoData(favoritedPhotos);
      })
      .catch((error) => console.error("Error occurred: ", error));
  });

  // fetch + render photos/topics and if the current topic changes, re-render with the right photos
  useEffect(() => {
    fetchTopics();
    if (state.searchTerm) {
      fetchSearchResult();
    } else
    if (state.currentTopic) {
      fetchCurrentTopic();
    } else
    if (state.displayFavorites) {
      fetchFavorites();
    } else {
      fetchPhotos();
    }
    
  }, [state.currentTopic, state.searchTerm, state.displayFavorites, state.favorites, state.darkMode]);
  

  return {
    isModalOpen: state.isModalOpen,
    selectedPhoto: state.selectedPhoto,
    favorites: state.favorites,
    selected: state.selected,
    displayAlert: state.displayAlert,
    photos: state.photos,
    topics: state.topics,
    searchTerm: state.searchTerm,
    displayFavorites: state.displayFavorites,
    darkMode: state.darkMode,
    addFavPhoto,
    removeFavPhoto,
    updateAlert,
    toggleFavorite,
    setCurrentTopic,
    openModal,
    closeModal,
    setSearchTerm,
    showFavorites,
    toggleDarkMode
  };
};

export default useApplicationData;