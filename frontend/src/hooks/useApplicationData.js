import { useState } from 'react';
import { useReducer } from 'react';
import { useEffect } from 'react';

//Add level actions
export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS'
}

const initialState = {
  favorite: [],
  displayModal: false,
  photoData: [],
  topicData: []
};


// Refactoring using useState =>
const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED:
      return { ...state, favorite: [...state.favorite, action.payload] };
    case ACTIONS.FAV_PHOTO_REMOVED:
      return {
        ...state, favorite: state.favorite.filter(id => id !== action.payload)
      };
    case ACTIONS.DISPLAY_PHOTO_DETAILS:
      return {
        ...state, displayModal: action.payload
      };
    case ACTIONS.SET_PHOTO_DATA:
      return { ...state, photoData: action.payload };
    case ACTIONS.SET_TOPIC_DATA:
      return { ...state, topicData: action.payload };
    default:
      return state;
  }
};

export const useApplicationData = () => {

  const [state, dispatch] = useReducer(reducer, initialState);

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
    getPhotos();

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
    getTopics();
  }, []);



  const toggleFavorite = id => {
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
 
  return { favorite: state.favorite, displayModal: state.displayModal, toggleFavorite, updateDisplayModal, photoData: state.photoData, topicData: state.topicData };
};
