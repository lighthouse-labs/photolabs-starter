import { useReducer } from 'react';

export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
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
      return { ...state, photos: action.payload };
      
    case ACTIONS.SET_TOPIC_DATA:
      return { ...state, topics: action.payload };
      
    case ACTIONS.SELECT_PHOTO:
      return { ...state, selectedPhoto: action.payload };

    case ACTIONS.OPEN_MODAL:
      return { ...state, isModalOpen: true };

    case ACTIONS.CLOSE_MODAL:
      return { ...state, isModalOpen: false, selectedPhoto: null };
      
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
    photos: [],
    topics: []
  });
console.log("state", state);
  // Existing actions
  const openModal = (photo) => {
    console.log("Modal open function triggered", photo);
    // dispatch({ type: ACTIONS.OPEN_MODAL });
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: photo });
  };

  const closeModal = () => {
    dispatch({ type: ACTIONS.CLOSE_MODAL });
  };

  // Add or remove a photo from favorites
  const updateToFavPhotoIds = (photoId) => {
    console.log("does this", photoId);
    if (state.favoritedPhotos.includes(photoId)) {
      console.log("if");
      dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: photoId });
    } else {
      console.log("else");
      dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: photoId });
    }
  };

  

  return {
    state, // instead of individual state values
    openModal,
    closeModal,
    updateToFavPhotoIds,
   
  };
};

export default useApplicationData;