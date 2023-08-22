import { useReducer, useEffect } from "react";
import axios from 'axios';


///////////// State Descriptions /////////////

// allPhotos = array of all photo data
// photos = array to toggle between all photos or topic photos
// topics = array to hold all topics data
// favPhotosArray = array of favourited photo ids
// clickedPhoto = value set to clicked photo id or null / truthy/falsey value to toggle modal open/close
// clickedPhotoInfo = object holding clicked photo information
// similarPhotos = array holding info of photos similar to clicked photo
// setTopic = array to hold info of selected topic photos
// topicId = value set to topic id or null

/////////// Function Descriptions ///////////

// addFavourite = function to add photos to favourite array
// removeFavourite = function to remove photos from favourite array
// clickedPhoto = state of a photo having been clicked or null
// openModal = set clickedPhoto to photo
// closeModal = set clickedPhoto to null
// handlePhotoClick = onClick event calls openModal setting clickedPhoto to photo
// handleCloseClick = onClick event calls closeModal setting clickedPhoto to null


const SET_PHOTO_DATA = 'SET_PHOTO_DATA';
const SET_TOPIC_DATA = 'SET_TOPIC_DATA';
const SET_USE_PHOTOS = 'SET_USE_PHOTOS';

const ADD_FAV_PHOTOS = 'ADD_FAV_PHOTOS';
const REMOVE_FAV_PHOTOS = 'REMOVE_FAV_PHOTOS';

const SET_CLICKED_PHOTO = 'SET_CLICKED_PHOTO';
const SET_CLICKED_PHOTO_INFO = 'SET_CLICKED_PHOTO_INFO';
const SET_SIMILAR_PHOTOS = 'SET_SIMILAR_PHOTOS';

const SET_PHOTO_LIST_TOPIC = 'SET_PHOTO_LIST_TOPIC';
const SET_TOPIC_ID = 'SET_TOPIC_ID';

const SET_SHOW_FAVS = 'SET_SHOW_FAVS';
const SET_FAV_INFO = 'SET_FAV_INFO';


const reducer = (state, action) => {
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
    return { ...state, favPhotosArray: action.payload };

  case REMOVE_FAV_PHOTOS:
    return { ...state, favPhotosArray: action.payload };
    
  case SET_CLICKED_PHOTO_INFO:
    return { ...state, clickedPhotoInfo: action.payload };

  case SET_SIMILAR_PHOTOS:
    return { ...state, similarPhotos: action.payload };

  case SET_PHOTO_LIST_TOPIC:
    return { ...state, setTopic: action.payload };

  case SET_TOPIC_ID:
    return { ...state, topicId: action.payload };

  case SET_SHOW_FAVS:
    return { ...state, showFavs: action.payload};

  case SET_FAV_INFO:
    return { ...state, favInfo: action.payload};

  default:
    throw new Error(
      `Tried to reduce with unsupported action type: ${action.type}`
    );
  }
};

const initialState = {
  allPhotos: [],
  photos: [],
  topics: [],
  favPhotosArray: [],
  clickedPhoto: null,
  clickedPhotoInfo: {},
  similarPhotos: [],
  setTopic: [],
  topicId: null,
  showFavs: false,
  favInfo: [],
};


const useApplicationData = () => {

  const [state, dispatch] = useReducer(reducer, initialState);
  

  // use axios request to get photo and topic data

  useEffect(() => {

    const photoPromise = axios.get('/api/photos');
    const topicPromise = axios.get('/api/topics');

    const dataPromises = [photoPromise, topicPromise];

    Promise.all(dataPromises)
      .then((resArray) => {
        const photosData = resArray[0].data;
        const topicsData = resArray[1].data;

        dispatch({ type: 'SET_PHOTO_DATA', payload: photosData });
        dispatch({ type: 'SET_USE_PHOTOS', payload: photosData });
        dispatch({ type: 'SET_TOPIC_DATA', payload: topicsData });
      })
      .catch((err) => {
        console.error("ERROR GETTING DATA:", err);
      });
  }, []);


  // get photo data by topic when topicId updated by click event

  useEffect(() => {
    const topicId = state.topicId;
    axios.get(`/api/topics/photos/${topicId}`)
      .then((res) => {
        const topic = res.data;
        dispatch({ type: 'SET_PHOTO_LIST_TOPIC', payload: topic});
      })
      .catch((err) => {
        console.error("ERROR GETTING DATA:", err);
      });
  }, [state.topicId]);


  // set which data array is being shown to user

  useEffect(() => {
    state.topicId ? dispatch({ type: 'SET_USE_PHOTOS', payload: state.setTopic }) :
      dispatch({ type: 'SET_USE_PHOTOS', payload: state.allPhotos });
  }, [state.setTopic]);


  // set state of favourite/not favourite photos

  const addFavourite = (photoID) => {
    if (!state.favPhotosArray.includes(photoID)) {
      dispatch({ type: 'ADD_FAV_PHOTOS', payload: [...state.favPhotosArray, photoID] });
    }
  };

  const removeFavourite = (photoID) => {
    if (state.favPhotosArray.includes(photoID)) {
      const filteredState = state.favPhotosArray.filter((id) => id !== photoID);
      dispatch({ type: 'REMOVE_FAV_PHOTOS', payload: filteredState });
    }
  };


  // set state of clicked photo to open modal/set clicked photo state to null to close modal
  
  const openModal = (photo) => {
    const clickedPhoto = photo.target.id;
    dispatch({ type: 'SET_CLICKED_PHOTO', payload: clickedPhoto });
  };

  const closeModal = () => {
    dispatch({ type: 'SET_CLICKED_PHOTO', payload: null });
  };

  const handlePhotoClick = (photo) => {
    openModal(photo);

    const targetId = Number(photo.target.id);
    const photos = state.photos;


    // get similar photos and set information about clicked photo

    for (const p of photos) {
      if (p.id === targetId) {
        const info = {...p};
        const simPhotos = Object.values(info.similar_photos);
        dispatch({ type: 'SET_CLICKED_PHOTO_INFO', payload: info });
        dispatch({ type: 'SET_SIMILAR_PHOTOS', payload: simPhotos});
      }
    }
  };


  // handle click event to close modal

  const handleCloseClick = () => {
    closeModal();
  };


  // set topic id on click event

  const handleTopicClick = (topic) => {
    const topicId = topic.target.id;
    dispatch({ type: 'SET_TOPIC_ID', payload: topicId });
  };


  // set topic click to null on all click event

  const handleAllClick = () => {
    dispatch({ type: 'SET_TOPIC_ID', payload: null });
  };


  // handles click on nav bar fav icon
  // gets faved photos from favPhotosArray and sets them as favInfo
  // toggles showsFavs off and on

  const handleShowFavsClick = () => {
    const favInfo = [];
    for (const id of state.favPhotosArray) {
      for (const photo of state.allPhotos) {
        if (id === photo.id) {
          favInfo.push(photo);
          dispatch({ type: 'SET_FAV_INFO', payload: favInfo});
        }
      }
    }
    state.showFavs === true ?
      dispatch({ type: 'SET_SHOW_FAVS', payload: false}) :
      dispatch({ type: 'SET_SHOW_FAVS', payload: true});
  };

  // watches for change in showFavs state and displays either allPhotos or photos saved in favInfo
  // displays no photos if showFavs is true, but there are no faved photos

  useEffect(() => {
    state.showFavs === true ?
      dispatch({ type: 'SET_USE_PHOTOS', payload: state.favInfo }) :
      dispatch({ type: 'SET_USE_PHOTOS', payload: state.allPhotos });
  }, [state.showFavs]);
 
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
    handleShowFavsClick,
    photos: state.photos,
    topics: state.topics,
    favPhotosArray: state.favPhotosArray,
    clickedPhoto: state.clickedPhoto,
    clickedPhotoInfo: state.clickedPhotoInfo,
    similarPhotos: state.similarPhotos,
  };
};


export default useApplicationData;