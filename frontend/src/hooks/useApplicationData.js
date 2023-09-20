import { useReducer, useEffect } from 'react';

// Initial state defines the default values and shape of the application's state.
const initialState = {
  isModalOpen: false,
  selectedPhoto: null,
  favoritedPhotoIds: [],
  photoData: [],
  topicData: [],
  selectedTopicId: null,
  error: null,
  viewFavorites: false
};

// Action types define the various operations that can modify the state.
export const ACTIONS = {
  TOGGLE_MODAL: 'TOGGLE_MODAL',
  SET_PHOTO: 'SET_PHOTO',
  ADD_TO_FAVORITES: 'ADD_TO_FAVORITES',
  REMOVE_FROM_FAVORITES: 'REMOVE_FROM_FAVORITES',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SET_SELECTED_TOPIC: 'SET_SELECTED_TOPIC',
  SET_ERROR: 'SET_ERROR',
  TOGGLE_VIEW_FAVORITES: 'TOGGLE_VIEW_FAVORITES'
};

// The reducer function processes dispatched actions and produces the next state.
function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.SET_ERROR:
      return { ...state, error: action.payload };
    case ACTIONS.SET_SELECTED_TOPIC:
      return { ...state, selectedTopicId: action.payload };
    case ACTIONS.SET_PHOTO_DATA:
      return { ...state, photoData: action.payload };
    case ACTIONS.SET_TOPIC_DATA:
      return { ...state, topicData: action.payload };
    case ACTIONS.TOGGLE_MODAL:
      return { ...state, isModalOpen: !state.isModalOpen };
    case ACTIONS.SET_PHOTO:
      return { ...state, selectedPhoto: action.payload };
      case ACTIONS.TOGGLE_VIEW_FAVORITES:
      return { ...state, viewFavorites: !state.viewFavorites };
    case ACTIONS.ADD_TO_FAVORITES:
      return { ...state, favoritedPhotoIds: [...state.favoritedPhotoIds, action.payload] };
    case ACTIONS.REMOVE_FROM_FAVORITES:
      return { ...state, favoritedPhotoIds: state.favoritedPhotoIds.filter(id => id !== action.payload) };
    default:
      throw new Error(`Unsupported action type: ${action.type}`);
  }
}

// Custom Hook
function useApplicationData() {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  // Fetching list of photos from the API and updating the state.
  useEffect(() => {
    fetch('/api/photos')
      .then(res => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        return res.json();
      })
      .then(data => {
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data });
      })
      .catch(error => {
        dispatch({ type: ACTIONS.SET_ERROR, payload: error.message });
      });
  }, []);
  
  // Fetching list of topics from the API and updating the state.
  useEffect(() => {
    fetch('/api/topics')
      .then(res => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        return res.json();
      })
      .then(data => {
        dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data });
      })
      .catch(error => {
        dispatch({ type: ACTIONS.SET_ERROR, payload: error.message });
      });
  }, []);
  
  // Fetching photos associated with a selected topic and updating the state.
  useEffect(() => {
    if (state.selectedTopicId) {
      fetch(`/api/topics/photos/${state.selectedTopicId}`)
        .then(res => {
          if (!res.ok) {
            throw new Error(res.statusText);
          }
          return res.json();
        })
        .then(data => {
          dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data });
        })
        .catch(error => {
          dispatch({ type: ACTIONS.SET_ERROR, payload: error.message });
        });
    }
  }, [state.selectedTopicId]);

  // Handler functions
  // Toggles the favorited state of a photo by adding or removing its ID from the list.
  const updateToFavPhotoIds = (photoData) => {
    if (state.favoritedPhotoIds.some(photo => photo.id === photoData.id)) {
      dispatch({ type: ACTIONS.REMOVE_FROM_FAVORITES, payload: photoData });
    } else {
      dispatch({ type: ACTIONS.ADD_TO_FAVORITES, payload: photoData });
    }
  };

  const toggleFavoritesView = () => {
    dispatch({ type: ACTIONS.TOGGLE_VIEW_FAVORITES });
  };
  // Opens or closes the modal, and optionally sets the displayed photo.
  const togglePhotoModal = (photoData = null) => {
    dispatch({ type: ACTIONS.TOGGLE_MODAL });
    dispatch({ type: ACTIONS.SET_PHOTO, payload: photoData });
  };

  const setTopicSelected = (topicId) => {
    dispatch({ type: ACTIONS.SET_SELECTED_TOPIC, payload: topicId });
  };

  return {
    state,
    updateToFavPhotoIds,
    togglePhotoModal,
    setTopicSelected,
    toggleFavoritesView   
  };
}

export default useApplicationData;