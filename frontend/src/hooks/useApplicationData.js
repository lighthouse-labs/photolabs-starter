import { useReducer } from 'react';
import { useEffect } from 'react';

const initialState = {
  isModalVisible: false,
  selectedPhotoData: null,
  favoritedPhotoIds: [],
  // Added empty arrays
  photoData: [],
  topicData: [],
  //state to store fetched photos by topic
  photosByTopic: {},
};

// Added actions
const ACTIONS = {
  TOGGLE_FAVORITE: 'TOGGLE_FAVORITE',
  OPEN_MODAL: 'OPEN_MODAL',
  CLOSE_MODAL: 'CLOSE_MODAL',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SET_PHOTOS_BY_TOPIC: 'SET_PHOTOS_BY_TOPIC',
};

const reducer = (state, action) => {
  const actionHandlers = {
    TOGGLE_FAVORITE: () => {
      const photoId = action.photoId;
      if (state.favoritedPhotoIds.includes(photoId)) {
        return {
          ...state,
          favoritedPhotoIds: state.favoritedPhotoIds.filter((id) => id !== photoId),
        };
      } else {
        return {
          ...state,
          favoritedPhotoIds: [...state.favoritedPhotoIds, photoId],
        };
      }
    },
    OPEN_MODAL: () => ({
      ...state,
      selectedPhotoData: action.photoData,
      isModalVisible: true,
    }),
    CLOSE_MODAL: () => ({
      ...state,
      selectedPhotoData: null,
      isModalVisible: false,
    }),
    SET_PHOTO_DATA: () => ({
      ...state,
      photoData: action.payload, // Set the photoData from the payload
    }),
    SET_TOPIC_DATA: () => ({
      ...state,
      topicData: action.payload, // Set the topicData from the payload
    }),
    SET_PHOTOS_BY_TOPIC: () => ({
      ...state,
      photosByTopic: {
        ...state.photosByTopic,
        [action.topicId]: action.payload,
      },
    }),
    default: () => state,
  };
  const handler = actionHandlers[action.type] || actionHandlers.default;
  return handler();
};

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleFavorite = (photoId) => {
    dispatch({ type: ACTIONS.TOGGLE_FAVORITE, photoId });
  };

  const openModal = (photoData) => {
    dispatch({ type: ACTIONS.OPEN_MODAL, photoData });
  };

  const closeModal = () => {
    dispatch({ type: ACTIONS.CLOSE_MODAL });
  };

  const setPhotoData = (photoData) => {
    dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload:photoData });
  };

  const setTopicData = (topicData) => {
    dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload:topicData });
  };

  const fetchPhotosByTopic = (topicId) => {
    // Make an API request to fetch photos for the specified topic
    return fetch(`http://localhost:8001/api/topics/photos/${topicId}`)
      .then((response) => response.json())
      .then((data) => {
        // Dispatch an action to update the state with the fetched photos for the topic
        dispatch({
          type: ACTIONS.SET_PHOTOS_BY_TOPIC,
          topicId,
          payload: data,
        });
      })
      .catch((error) => {
        console.error(`Error fetching photos for topic ${topicId}:`, error);
      });
  };


  return {
    ...state,
    toggleFavorite,
    openModal,
    closeModal,
    setPhotoData,
    setTopicData,
    fetchPhotosByTopic
  };
};

export default useApplicationData;
