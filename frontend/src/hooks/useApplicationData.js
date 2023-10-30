import { useReducer, useEffect } from "react";
import axios from 'axios';

export const ACTIONS = {
  UPDATE_FAV_LIST: 'UPDATE_FAV_LIST', 
  TOGGLE_PHOTO_LIKE: 'TOGGLE_PHOTO_LIKE', 
  SHOW_MODAL: 'SHOW_MODAL', 
  SET_PHOTO_DATA: 'SET_PHOTO_DATA', 
  SET_TOPIC_DATA: 'SET_TOPIC_DATA', 
  SET_SELECTED_TOPIC: 'SET_SELECTED_TOPIC', 
  SET_DARK_MODE: 'SET_DARK_MODE'
}

const initialState = {
  favList: [],
  liked: {},
  showModal: null,
  photoData: [],
  topicData: [], 
  selectedTopic: 0, 
  darkMode: false
}

function reducer(state, action) {
  switch (action.type) {

    case ACTIONS.UPDATE_FAV_LIST: 
      let newFavList = []
      newFavList = [...state.favList, action.payload]
      if (state.favList.includes(action.payload)) {
        newFavList = state.favList.filter(photo => photo !== action.payload)
      } 
      return { ...state, favList: newFavList };

    case ACTIONS.TOGGLE_PHOTO_LIKE: 
      const photoId = action.payload
      return {...state, liked: { ...state.liked, [photoId]: !state.liked[photoId]}}

    case ACTIONS.SHOW_MODAL:
      return { ...state, showModal: action.payload };
    
    case ACTIONS.SET_PHOTO_DATA:
      return { ...state, photoData: action.payload };
    
    case ACTIONS.SET_TOPIC_DATA:
      return { ...state, topicData: action.payload };

    case ACTIONS.SET_SELECTED_TOPIC:
      return { ...state, selectedTopic: action.payload };

    case ACTIONS.SET_DARK_MODE:
      return { ...state, darkMode: action.payload };

    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
        );
  }
}

function useApplicationData() {

  const [state, dispatch] = useReducer(reducer, initialState);
  let topicSelected = state.selectedTopic

  useEffect(() => {
    axios.get('http://localhost:8001/api/photos')
    .then((response) => {
      dispatch({ type: 'SET_PHOTO_DATA', payload: response.data })
    });
  }, [])

  useEffect(() => {
    axios.get('http://localhost:8001/api/topics')
    .then((response) => {
      dispatch({ type: 'SET_TOPIC_DATA', payload: response.data })
    });
  }, [])

  useEffect(() => {
    if (topicSelected > 0) {
      axios.get(`http://localhost:8001/api/topics/photos/${topicSelected}`)
      .then((response) => {
        dispatch({ type: 'SET_PHOTO_DATA', payload: response.data })
      });

      //renders all photos from photoData again
      //useful after the user has clicked on a topic, gets filtered photos, but wants to view all photos again
    } else {
      axios.get('http://localhost:8001/api/photos')
      .then((response) => {
        dispatch({ type: 'SET_PHOTO_DATA', payload: response.data })
    });
    }
  }, [topicSelected])
  

  return { 
    state, 
    dispatch
  };

};

export default useApplicationData;