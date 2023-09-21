import photos from 'mocks/photos';
import { useReducer, useState } from 'react';

export const ACTIONS = {
  ADD_FAV_PHOTO: 'ADD_FAV_PHOTO',
  REMOVE_FAV_PHOTO: 'REMOVE_FAV_PHOTO'
};

function reducer(state, action) {
  console.log('action :', action);
  switch (action.type) {
    case ACTIONS.ADD_FAV_PHOTO:
      // if (!state.favourites.includes(action.photoId)) {
      const newFavourites = [...state.favourites, action.photoId];
      return {
        favourites: newFavourites
      };
    // }

    case ACTIONS.REMOVE_FAV_PHOTO: {
      // if (state.favourites.includes(action.photoId)) {
      const newFavourites = [...state.favourites].filter((photoId) => photoId !== action.photoId);
      return {
        favourites: newFavourites
      };
      // }
    }
    default:
      throw new Error(`Tried to reduce with unsupported action type: ${action.type}`);
  }
}

export const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, {
    favourites: []
  });
  //state to contain all the favourited photos
  // const [favourites, setFavourites] = useState([]);

  //set as state to check if the modal is open or not
  const [isModalOpen, setIsModalOpen] = useState(false);

  //setting state to show the currently clicked photo
  const [clickedPhoto, setClickedPhoto] = useState(null);

  const selectedPhoto = (photoDataId) => {
    //checks if photoId exists in the selected array, if it does it removes from the array and resets the selected state
    if (state.favourites.includes(photoDataId)) {
      // const copyFavourites = [...favourites].filter((photoId) => photoId !== photoDataId);
      // setFavourites(copyFavourites);
      dispatch({
        type: ACTIONS.REMOVE_FAV_PHOTO,
        // payload: { photoId: photoDataId },
        photoId: photoDataId
      });
    } else {
      // setFavourites((prevState) => [...prevState, photoDataId]);
      dispatch({
        type: ACTIONS.ADD_FAV_PHOTO,
        // payload: { photoId: photoDataId },
        photoId: photoDataId
      });
    }
  };

  const selectedPhotoHandler = (id) => {
    selectedPhoto(id);
  };

  const isFavourite = (photoDataId) => {
    //should return true if the id exists in the selected array
    return state.favourites.includes(photoDataId);
  };

  const isFavPhotoExist = (arr) => arr.length > 0; //checks if any photo has been liked

  //function to change modal state
  const setModalHandler = (id) => {
    setIsModalOpen(true);
    //current photo is the result of a search through photos array to get photo with the selected id
    const currentPhoto = photos.find((photo) => photo.id === id);
    setClickedPhoto(currentPhoto);
  };

  // function to close modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return {
    favourites: state.favourites,
    isModalOpen,
    clickedPhoto,
    isFavourite,
    isFavPhotoExist,
    setModalHandler,
    selectedPhoto,
    selectedPhotoHandler,
    setClickedPhoto,
    closeModal,
    photos
  };
};
