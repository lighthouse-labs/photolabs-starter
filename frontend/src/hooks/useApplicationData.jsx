import { useState, useReducer, useEffect } from "react";
import axios from 'axios';

// favPhotos = array of favourited photos
// addFavourite = function to add photos to favourite array
// removeFavourite = function to remove photos from favourite array

// clickedPhoto = state of a photo having been clicked or null
// openModal = set clickedPhoto to photo
// closeModal = set clickedPhoto to null
// handlePhotoClick = onClick event calls openModal setting clickedPhoto to photo
// handleCloseClick = onClick event calls closeModal setting clickedPhoto to null

// isFav = set photos state as favourited or not
// handleFavClick = onClick event toggles between favourited state or not 


const SET_PHOTO_DATA = 'SET_PHOTO_DATA';
const SET_TOPIC_DATA = 'SET_TOPIC_DATA';
const SET_USE_PHOTOS = 'SET_USE_PHOTOS';

const ADD_FAV_PHOTOS = 'ADD_FAV_PHOTOS';
const REMOVE_FAV_PHOTOS = 'REMOVE_FAV_PHOTOS';
const SET_IS_FAV = 'SET_IS_FAV';

const SET_CLICKED_PHOTO = 'SET_CLICKED_PHOTO';
const SET_CLICKED_PHOTO_INFO = 'SET_CLICKED_PHOTO_INFO';
const SET_SIMILAR_PHOTOS = 'SET_SIMILAR_PHOTOS';

const SET_PHOTO_LIST_TOPIC = 'SET_PHOTO_LIST_TOPIC';
const SET_TOPIC_ID = 'SET_TOPIC_ID';



function reducer(state, action) {
  switch (action.type) {

    case SET_PHOTO_DATA:
      return { ...state, allPhotos: action.payload };

    case SET_USE_PHOTOS:
      return { ...state, photos: action.payload };

    case SET_TOPIC_DATA:
      return { ...state, topics: action.payload };

    case SET_CLICKED_PHOTO:
      return { ...state, clickedPhoto: action.payload };

    case ADD_FAV_PHOTOS: 
      return { ...state, favPhotos: action.payload };

    case REMOVE_FAV_PHOTOS:
      return { ...state, favPhotos: action.payload };
    
    case SET_CLICKED_PHOTO_INFO:
      return { ...state, clickedPhotoInfo: action.payload };

    case SET_SIMILAR_PHOTOS:
      return { ...state, similarPhotos: action.payload };

    case SET_IS_FAV:
      return { ...state, isFav: action.payload };

    case SET_PHOTO_LIST_TOPIC:
      return { ...state, setTopic: action.payload };

    case SET_TOPIC_ID:
      return { ...state, topicId: action.payload }

  
  default:
    throw new Error (
      `Tried to reduce with unsupported action type: ${action.type}`
    );
  }
}

const initialState = {
  allPhotos: [],
  photos: [],
  topics: [],
  favPhotos: [],
  clickedPhoto: null,
  clickedPhotoInfo: {},
  similarPhotos: [],
  isFav: false,
  setTopic: [],
  topicId: null,
};

const useApplicationData = () => {

  const [state, dispatch] = useReducer(reducer, initialState);
  

  useEffect(() => {

    const photoPromise = axios.get('/api/photos');
    const topicPromise = axios.get('/api/topics');

    const dataPromises = [photoPromise, topicPromise];

    Promise.all(dataPromises)
      .then((resArray) => {  
        const photosData = resArray[0].data;
        const topicsData = resArray[1].data;

        dispatch({ type: 'SET_PHOTO_DATA', payload: photosData })
        dispatch({ type: 'SET_USE_PHOTOS', payload: photosData })
        dispatch({ type: 'SET_TOPIC_DATA', payload: topicsData })
      })
      .catch((err) => {
        console.error("ERROR GETTING DATA:", err)
      })
  }, []);


  // get photo data by topic when topicId updated by click event
  useEffect(() => {
      const topicId = state.topicId;
 
      axios.get(`/api/topics/photos/${topicId}`)
        .then((res) => { 
          const topic = res.data 
    
        dispatch({ type: 'SET_PHOTO_LIST_TOPIC', payload: topic})
      })
  }, [state.topicId]);


  // set which data array is being shown to user

  useEffect(() => {
    {state.topicId ? dispatch({ type: 'SET_USE_PHOTOS', payload: state.setTopic }) :
    dispatch({ type: 'SET_USE_PHOTOS', payload: state.allPhotos })}
  }, [state.setTopic])



  // set state of favourite/not favourite photos

  const addFavourite = (photoID) => {
    if (!state.favPhotos.includes(photoID)) {
      dispatch({ type: 'ADD_FAV_PHOTOS', payload: [...state.favPhotos, photoID] });
    }
  };

  const removeFavourite = (photoID) => {
    if (state.favPhotos.includes(photoID)) {
      const filteredState = state.favPhotos.filter((id) => id !== photoID)
      dispatch({ type: 'REMOVE_FAV_PHOTOS', payload: filteredState });
    }
  };


  // set state of clicked photo to open modal/set clicked photo state to null to close modal
  
  const openModal = (photo) => {
    dispatch({ type: 'SET_CLICKED_PHOTO', payload: photo });
  };

  const closeModal = () => {
    dispatch({ type: 'SET_CLICKED_PHOTO', payload: null });
  };

  const handlePhotoClick = (photo) => {
    openModal(photo);

    const targetId = Number(photo.target.id);
    const photos = state.photos;  

    // get similar photos and set information about clicked photo

    for(const p of photos) {
      if (p.id === targetId) {
        const info = {...p};
        const simPhotos = Object.values(info.similar_photos);
        dispatch({ type: 'SET_CLICKED_PHOTO_INFO', payload: info });
        dispatch({ type: 'SET_SIMILAR_PHOTOS', payload: simPhotos});
      } 
    }   
  };

  const handleCloseClick = () => {
    closeModal();
  };

  // set state of a favourite button
 
  const handleFavClick = ()=> { 
    {isFav === true ? 
      dispatch({ type: 'SET_IS_FAV', payload: false }) : 
      dispatch({ type: 'SET_IS_FAV', payload: true })
    }
  };

  // const handleTopicClick = () => {null}

  const handleTopicClick = (topic) => {
    const topicId = topic.target.id;
    dispatch({ type: 'SET_TOPIC_ID', payload: topicId })
  }

  const handleAllClick = () => {
    dispatch({ type: 'SET_TOPIC_ID', payload: null })
  }

 
  return { 
    state,
    openModal,
    closeModal,
    addFavourite,
    handleAllClick,
    handleTopicClick,
    handlePhotoClick, 
    handleCloseClick,
    removeFavourite,
    handleFavClick,
    photos: state.photos,
    topics: state.topics,
    favPhotos: state.favPhotos,
    clickedPhoto: state.clickedPhoto, 
    clickedPhotoInfo: state.clickedPhotoInfo,
    similarPhotos: state.similarPhotos,
    ifFav: state.isFav,  
    }

};


export default useApplicationData;