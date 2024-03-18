import { useState } from 'react';
import { useReducer } from 'react';
import { useEffect } from 'react';
import axios from "axios";

//Add level actions
export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS',
  GET_PHOTOS_BY_TOPICS: 'GET_PHOTOS_BY_TOPICS'
}

const initialState = {
  favorite: [],
  displayModal: false,
  photoData: [],
  topicData: []
};


// Refactoring using useState =>
//A function that takes the current state and action, returns a new state based on the action type.
const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED:
      return { ...state, favorite: [...state.favorite, action.payload] };
    case ACTIONS.FAV_PHOTO_REMOVED:
      return { ...state, favorite: state.favorite.filter(id => id !== action.payload) };
    case ACTIONS.DISPLAY_PHOTO_DETAILS:
      return { ...state, displayModal: action.payload };
    case ACTIONS.SET_PHOTO_DATA:
      try {
        return { ...state, photoData: action.payload };
      } catch (error) {
        console.error('Error updating photoData:', error);
        return state;
      }
    case ACTIONS.SET_TOPIC_DATA:
      try {
        return { ...state, topicData: action.payload };
      } catch (error) {
        console.error('Error updating topicData:', error);
        return state;
      }
    case ACTIONS.GET_PHOTOS_BY_TOPICS:
      return { ...state, photoData: action.payload }
    default:
      return state;
  }
};

//Custom hook utilizes useReducer to manage the application's state with the defined reducer function and initialState.
export const useApplicationData = () => {

  const [state, dispatch] = useReducer(reducer, initialState);

  //useEffect is used to fetch initial photo and topic data from the API when the component mounts.
  useEffect(() => {

    async function getPhotos() {
      try {
        const response = await fetch("/api/photos");
        if (!response.ok) {
          throw new Error('Failed to fetch photoes');
        }
        const data = await response.json();
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data });
      } catch (error) {
        console.log('Error fething photoData is:', error);
      }
    }

    async function getTopics() {
      try {
        const response = await fetch('/api/topics');
        if (!response.ok) {
          throw new Error('Failed to fetch topics');
        }
        const data = await response.json();
        dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data });
      } catch (error) {
        console.log('Error fething topicData is:', error);
      }
    }

    getPhotos();
    getTopics();


  }, []);

  async function photoByTopic(id) {
    try {
      const response = await axios.get(`/api/topics/photos/${id}`);
      dispatch({ type: ACTIONS.GET_PHOTOS_BY_TOPICS, payload: response.data });
    }
    catch (error) {
      console.error(error);
    }
  };


  const toggleFavorite = (id) => {
    const actionType = state.favorite.includes(id);
    if (actionType) {
      dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: id })
    } else {
      dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: id })
    }
  };

  const updateDisplayModal = (props) => {
    const modalState = state.displayModal ? false : props;
    dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS, payload: modalState });
  };


  return { favorite: state.favorite, displayModal: state.displayModal, toggleFavorite, updateDisplayModal, photoData: state.photoData, topicData: state.topicData, photoByTopic };
};


