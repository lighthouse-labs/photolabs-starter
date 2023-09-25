import axios from 'axios';
// import photos from 'mocks/photos';
import { useEffect, useReducer, useState } from 'react';

export const ACTIONS = {
  ADD_FAV_PHOTO: 'ADD_FAV_PHOTO',
  REMOVE_FAV_PHOTO: 'REMOVE_FAV_PHOTO',
  OPEN_PHOTO_DETAILS_MODAL: 'OPEN_PHOTO_DETAILS_MODAL',
  SET_CLICKED_PHOTO: 'SET_CLICKED_PHOTO',
  CLOSE_PHOTO_DETAILS_MODAL: 'CLOSE_PHOTO_DETAILS_MODAL',
  GET_PHOT0_DATA: 'GET_PHOTO_DATA',
  GET_TOPIC_DATA: 'GET_TOPIC_DATA',
  GET_PHOTOS_BY_TOPIC: 'GET_PHOTOS_BY_TOPIC',
  SET_SELECTED_TOPIC: 'SET_SELECTED_TOPIC'
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD_FAV_PHOTO:
      const newFavourites = [...state.favourites, action.photoId];
      return {
        ...state,
        favourites: newFavourites
      };

    case ACTIONS.REMOVE_FAV_PHOTO: {
      const newFavourites = [...state.favourites].filter((id) => id !== action.photoId);
      return {
        ...state,
        favourites: newFavourites
      };
    }

    case ACTIONS.OPEN_PHOTO_DETAILS_MODAL: {
      return {
        ...state,
        isModalOpen: true
      };
    }
    case ACTIONS.SET_CLICKED_PHOTO: {
      const currentPhoto = state.photoData.find((photo) => photo.id === action.id);

      return {
        ...state,
        clickedPhoto: currentPhoto
      };
    }
    case ACTIONS.CLOSE_PHOTO_DETAILS_MODAL: {
      return {
        ...state,
        isModalOpen: false
      };
    }
    case ACTIONS.GET_PHOT0_DATA: {
      return {
        ...state,
        photoData: action.data
      };
    }
    case ACTIONS.GET_TOPIC_DATA: {
      return {
        ...state,
        topicData: action.data
      };
    }
    case ACTIONS.SET_SELECTED_TOPIC: {
      const currentTopic = state.topicData.find((topic) => topic.id === action.id);
      return {
        ...state,
        selectedTopic: currentTopic.id //setting the id as the selectedTopic
      };
    }
    case ACTIONS.GET_PHOTOS_BY_TOPIC: {
      return {
        ...state,
        photoData: action.data
      };
    }
    default:
      throw new Error(`Tried to reduce with unsupported action type: ${action.type}`);
  }
}

export const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, {
    favourites: [],
    isModalOpen: false,
    clickedPhoto: null,
    photoData: [],
    topicData: [],
    selectedTopic: null
  });

  useEffect(() => {
    //use axios to fetch photo data from database
    axios.get('/api/photos').then((res) => {
      dispatch({
        type: ACTIONS.GET_PHOT0_DATA,
        data: res.data
      });
    });
    //use axios to fetch topic data from database
    axios.get('/api/topics').then((res) => {
      dispatch({
        type: ACTIONS.GET_TOPIC_DATA,
        data: res.data
      });
    });
  }, []);

  //setting photoData state by topic id
  const getTopicId = (id) => {
    dispatch({
      type: ACTIONS.SET_SELECTED_TOPIC,
      id: id
    });
    axios.get(`/api/topics/photos/${id}`).then((res) => {
      console.log('by topic :', res.data);
      dispatch({
        type: ACTIONS.GET_PHOT0_DATA,
        data: res.data
      });
    });
  };
  console.log(`state.photoData : ${state.photoData},${state.photoData.length}`);

  const toggleFavourites = (photoId) => {
    //checks if photoId exists in the selected array, if it does it removes from the array and resets the selected state
    if (state.favourites.includes(photoId)) {
      dispatch({
        type: ACTIONS.REMOVE_FAV_PHOTO,
        photoId: photoId
      });
    } else {
      dispatch({
        type: ACTIONS.ADD_FAV_PHOTO,
        photoId: photoId
      });
    }
  };

  //function to open modal
  const openModal = (id) => {
    //sets the selected photo to the current item
    dispatch({
      type: ACTIONS.SET_CLICKED_PHOTO,
      id: id
    });
    dispatch({
      type: ACTIONS.OPEN_PHOTO_DETAILS_MODAL,
      display: true
    });
  };

  // function to close modal
  const closeModal = () => {
    dispatch({
      type: ACTIONS.CLOSE_PHOTO_DETAILS_MODAL,
      display: false
    });
  };

  return {
    favourites: state.favourites,
    isModalOpen: state.isModalOpen,
    clickedPhoto: state.clickedPhoto,
    openModal,
    toggleFavourites,
    closeModal,
    photos: state.photoData,
    topics: state.topicData,
    getTopicId
  };
};
