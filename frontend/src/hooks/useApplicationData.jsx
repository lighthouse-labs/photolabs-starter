import { useReducer } from 'react';
import { useEffect } from 'react';

export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  FETCH_BY_TOPIC: 'FETCH_BY_TOPIC',
  SELECT_PHOTO: 'SELECT_PHOTO',
  OPEN_MODAL: 'OPEN_MODAL',
  CLOSE_MODAL: 'CLOSE_MODAL'
}

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED:
      return { ...state, favoritedPhotos: [...state.favoritedPhotos, action.payload] };
      
    case ACTIONS.FAV_PHOTO_REMOVED:
      return { ...state, favoritedPhotos: state.favoritedPhotos.filter(id => id !== action.payload) };
      
    case ACTIONS.SET_PHOTO_DATA:
      return { ...state, photoData: action.payload };
      
    case ACTIONS.SET_TOPIC_DATA:
      return { ...state, topicData: action.payload };
      
    case ACTIONS.SELECT_PHOTO:
      return { ...state, selectedPhoto: action.payload };

    case ACTIONS.OPEN_MODAL:
      return { ...state, isModalOpen: true };

    case ACTIONS.CLOSE_MODAL:
      return { ...state, isModalOpen: false, selectedPhoto: null };

    case ACTIONS.FETCH_BY_TOPIC:
      return { ...state, photoData: action.payload };
      
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}



const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, {
    isModalOpen: false,
    selectedPhoto: null,
    favoritedPhotos: [],
    photoData: [],
    topicData: []
  });
  
  
   
  // Existing actions
  const openModal = (photo) => {
    
    // dispatch({ type: ACTIONS.OPEN_MODAL });
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: photo });
  };

  const closeModal = () => {
    dispatch({ type: ACTIONS.CLOSE_MODAL });
  };

  // Add or remove a photo from favorites
  const updateToFavPhotoIds = (photoId) => {
    
    if (state.favoritedPhotos.includes(photoId)) {
      
      dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: photoId });
    } else {
      
      dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: photoId });
    }
  };

  useEffect(() => {
    fetch('/api/photos') // Fetching from the provided API endpoint
      .then(response => {
        if (response.ok) {
          return response.json(); // Parse the JSON response
        }
        throw new Error('Failed to fetch photos.');
      })
      .then(data => {
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data });
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  useEffect(() => {
    fetch('/api/topics') 
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Failed to fetch topics.');
      })
      .then(data => {
        dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data });
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  const fetchPhotosByTopic = (topic_id) => {
    fetch(`/api/topics/photos/${topic_id}`)
      .then(response => response.json())
      .then(data => {
        dispatch({ type: ACTIONS.FETCH_BY_TOPIC, payload: data });
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return {
    state, 
    openModal,
    closeModal,
    updateToFavPhotoIds,
    fetchPhotosByTopic,
  };
};

export default useApplicationData;
