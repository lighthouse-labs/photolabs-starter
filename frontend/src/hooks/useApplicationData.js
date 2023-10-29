import { useState, useReducer, useEffect } from "react";
import axios from 'axios';

export const ACTIONS = {
  // FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED', // provided on Compass
  // FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED', //provided on Compass
  UPDATE_FAV_LIST: 'UPDATE_FAV_LIST', //created new
  TOGGLE_PHOTO_LIKE: 'TOGGLE_PHOTO_LIKE', //created new
  SHOW_MODAL: 'SHOW_MODAL', //created new
  SET_PHOTO_DATA: 'SET_PHOTO_DATA', // provided on Compass
  SET_TOPIC_DATA: 'SET_TOPIC_DATA', // provided on Compass - to be implemented later 
  SET_SELECTED_TOPIC: 'SET_SELECTED_TOPIC' //provided on Compass later on
  // SELECT_PHOTO: 'SELECT_PHOTO', // provided on Compass - to be implemented later 
  // DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS' // provided on Compass - to show modal 
}

const initialState = {
  favList: [],
  liked: {},
  showModal: null,
  photoData: [],
  topicData: [], 
  selectedTopic: []
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
    axios.get(`http://localhost:8001/api/topics/photos/${topicSelected}`)
    .then((response) => {
      dispatch({ type: 'SET_PHOTO_DATA', payload: response.data })
    });
  }, [topicSelected])
  

  return { 
    state, 
    reducer, 
    dispatch
  };

};

export default useApplicationData;