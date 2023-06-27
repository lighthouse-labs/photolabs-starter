import { useReducer, useEffect } from "react";

const initialState = {
  favPhotos: [],
  openModal: false,
  clickedPhoto: null,
  topic: undefined,
  photos: [],
  topics: [],
};

export const ACTIONS = {
  OPEN_MODAL: "OPEN_MODAL",
  CLOSE_MODAL: "CLOSE_MODAL",
  TOGGLE_FAVORITE: "TOGGLE_FAVORITE",
  CLICKED_PHOTO: "CLICKED_PHOTO",
  PHOTOS_BY_TOPIC: "PHOTOS_BY_TOPIC",
  SET_PHOTOS: "SET_PHOTOS",
  SET_TOPICS: "SET_TOPICS",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.SET_TOPICS:
      return {
        ...state,
        topics: action.payload,
      };
    case ACTIONS.SET_PHOTOS:
      return {
        ...state,
        photos: action.payload,
      };
    case ACTIONS.OPEN_MODAL:
      return {
        ...state,
        openModal: true,
        clickedPhoto: action.photoProps,
      };
    case ACTIONS.CLOSE_MODAL:
      return {
        ...state,
        openModal: false,
        clickedPhoto: null,
      };
    case ACTIONS.TOGGLE_FAVORITE:
      const { photoId } = action.payload;
      const isFavorited = state.favPhotos.includes(photoId);

      return {
        ...state,
        favPhotos: isFavorited
          ? state.favPhotos.filter((id) => id !== photoId)
          : [...state.favPhotos, photoId],
      };
    case ACTIONS.CLICKED_PHOTO:
      return {
        ...state,
        clickedPhoto: action.photoProps,
      };
    case ACTIONS.PHOTOS_BY_TOPIC:
      return {
        ...state,
        topic: action.payload,
      };
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    // Fetching photos from the API
    fetch("http://localhost:8001/api/photos")
      .then((res) => res.json())
      .then((data) => {
        // Updating the photos state with the fetched data
        dispatch({ type: ACTIONS.SET_PHOTOS, payload: data });
      });
  }, []);

  useEffect(() => {
    // Fetching topics from the API
    fetch("http://localhost:8001/api/topics")
      .then((res) => res.json())
      .then((data) => {
        // Updating the topics state with the fetched data
        dispatch({ type: ACTIONS.SET_TOPICS, payload: data });
      });
  }, []);

  const toggleFavorite = (photoId) => {
    // Toggling the favorite status of a photo
    dispatch({ type: ACTIONS.TOGGLE_FAVORITE, payload: { photoId } });
  };

  const openModal = (photoProps) => {
    // Opening the modal and setting the clicked photo
    dispatch({ type: ACTIONS.OPEN_MODAL, photoProps });
  };

  const closeModal = () => {
    // Closing the modal
    dispatch({ type: ACTIONS.CLOSE_MODAL });
  };

  const photoClickHandler = (photoProps) => {
    // Handling the click on a photo
    dispatch({ type: ACTIONS.CLICKED_PHOTO, photoProps });
    openModal(photoProps);
  };

  const getPhotosByTopic = (topicId) => {
    return fetch(`/api/topics/photos/${topicId}`)
      .then(response => response.json())
      .then((data) => {
        dispatch({ type: ACTIONS.SET_PHOTOS, payload: data })
      })
      .catch(error => {
        console.error(`Error fetching photos for topic ${topicId}: ${error}`);

        return [];
      });
  };

  return {
    // Exposing the necessary states and functions
    favPhotos: state.favPhotos,
    toggleFavorite,
    openModal: state.openModal,
    photoClickHandler,
    clickedPhoto: state.clickedPhoto,
    closeModal,
    getPhotosByTopic,
    photos: state.photos,
    topics: state.topics,
  };
};

export default useApplicationData;
