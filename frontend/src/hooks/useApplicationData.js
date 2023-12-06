import { useReducer, useEffect } from 'react'
import photos from "mocks/photos";
import axios from 'axios'

export const useApplicationData = () => {

  const ACTIONS = {
    FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
    FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
    SET_PHOTO_DATA: 'SET_PHOTO_DATA',
    SET_TOPIC_DATA: 'SET_TOPIC_DATA',
    SELECT_PHOTO: 'SELECT_PHOTO',
    DISPLAY_MODAL: 'DISPLAY_MODAL',
    GET_PHOTOS_BY_TOPICS: 'GET_PHOTOS_BY_TOPICS'
  }

  const states = {
    modal: false,
    photoDetails: {},
    liked: [],
    photos: [],
    topics: [],
  }


  function reducer(state, action) {
    switch (action.type) {
      case "FAV_PHOTO_ADDED":
        const currentFav = [...state.liked, action.payload]
        return { ...state, liked: currentFav };
      case "FAV_PHOTO_REMOVED":
        const removedFav = state.liked.filter((id) => id !== action.payload)
        return { ...state, liked: removedFav }
      case "SELECT_PHOTO":
        return { ...state, photoDetails: action.payload }
      case "DISPLAY_MODAL":
        return { ...state, modal: action.payload }
      case "SET_PHOTO_DATA":
        return { ...state, photos: action.payload }
      case "SET_TOPIC_DATA":
        return { ...state, topics: action.payload }
      case "GET_PHOTOS_BY_TOPICS":
        return { ...state, photos: action.payload }
      default:
        throw new Error(
          `Tried to reduce with unsupported action type: ${action.type}`
        )
    }
  }

  const [state, dispatch] = useReducer(reducer, states);

  useEffect(() => {
    axios('/api/photos')
      .then(photos => {
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: photos.data })
      })
      .catch(e => {
        console.log("error receiving photos", e.message)
      })
  }, [])


  useEffect(() => {
    axios('/api/topics')
      .then(topics => {
        dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: topics.data })
      })
      .catch(e => {
        console.log("error receiving TOPICS", e.message)
      })
  }, [])


  const onTopicClick = (topicId) => {
    axios.get(`/api/topics/photos/${topicId}`)
      .then((photos) => {
        dispatch({ type: ACTIONS.GET_PHOTOS_BY_TOPICS, payload: photos.data });
      })
      .catch((error) => {
        console.log("error receiving photos by topic", error.message);
      });
  }

  const toggleFavModal = () => {

  }
  //1. create new component 2. modal has photolist of liked id of filter

  const toggleModal = (detail) => {
    console.log("details", detail)
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: detail });
    dispatch({ type: ACTIONS.DISPLAY_MODAL, payload: true });
  }

  const closeModal = () => {
    dispatch({ type: ACTIONS.DISPLAY_MODAL, payload: false });
  }


  const toggleLike = (photoId) => {
    console.log('Liked Photos:', photoId);
    if (state.liked.includes(photoId)) {
      dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: photoId });
    } else {
      dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: photoId });
    }
  };

  return {
    state,
    updateToFavPhotoIds: toggleLike,
    setPhotoSelected: toggleModal,
    closeModal: closeModal,
    onTopicClick: onTopicClick
  }
}






