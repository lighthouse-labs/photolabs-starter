import { useReducer } from "react";
import photosData from "../mocks/photos";
import topicsData from "../mocks/topics";
import * as photoHelpers from "../helpers/photolabsHelpers";

export const ACTIONS = {
  FAV_PHOTO_TOGGLE: "FAV_PHOTO_ADDED_REMOVED",
  CHECK_FAV_PHOTO: "CHECK_FAV_PHOTO",
  IS_ANY_FAV_PHOTO: "IS_ANY_FAV_PHOTO",
  OPEN_MODAL: "OPEN_MODAL",
  CLOSE_MODAL: "CLOSE_MODAL",

  // FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  // SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  // SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  // SELECT_PHOTO: 'SELECT_PHOTO',
  // DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS'
};
const reducer = function (state, action) {
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_TOGGLE: {
      const updatedPhotos = state.photos.map((photo) =>
        photo.id === action.payload.photoId
          ? { ...photo, isFavorite: !photo.isFavorite }
          : photo
      );
      return {
        // ...state,
        updatedPhotos,
      };
    }
    case ACTIONS.CHECK_FAV_PHOTO: {
      const photo = state.photos.find(
        (photo) => photo.id === action.payload.photoId
      );

      const isPhotoFavorite = photo ? !!photo.isFavorite : false;
      return {
        // ...state,
        isPhotoFavorite,
      };
      // isPhotoFavorite: photo ? !!photo.isFavorite : false,
    }
    case ACTIONS.IS_ANY_FAV_PHOTO: {
      const isAnyFavorite = state.photos.some((el) => el.isFavorite);

      return {
        // ...state,
        isAnyFavorite,
      };
    }
    case ACTIONS.OPEN_MODAL: {
      return {
        ...state,
        clickedPhoto: action.payload.photoId,
        isOpenModal: true,
      };
    }
    case ACTIONS.CLOSE_MODAL: {
      return {
        ...state,
        isOpenModal: false,
        clickedPhoto: null,
      };
    }
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
};

export const useApplicationData = () => {
  const initialState = {
    photo: photosData,
    topic: topicsData,
  };

  const [photos, dispatchPhotos] = useReducer(reducer, initialState.photo);
  const [topics, dispatchTopics] = useReducer(reducer, initialState.topic);

  // const [photos, dispatchPhotos] = useReducer(reducer, initialState.photosData);

  // const [topics, dispatchTopics] = useReducer(reducer, initialState.topicsData);

  // const photos = { state: photoData, dispatch: setPhotoData };

  // const topics = { state: topicData, dispatch: setTopicData };

  const [modal, setModal] = useReducer(reducer, {
    isOpenModal: false,
    clickedPhoto: null,
  });

  const toggleFavoritePhoto = (photoId) => {
    dispatchPhotos({ type: ACTIONS.FAV_PHOTO_TOGGLE, payload: { photoId } });
  };
  const isPhotoFavorite = (photoId) => {
    dispatchPhotos({ type: ACTIONS.CHECK_FAV_PHOTO, payload: { photoId } });
  };

  const checkFavorites = () => {
    dispatchPhotos({ type: ACTIONS.IS_ANY_FAV_PHOTO });
  };
  // Close modal
  const closeModal = () => {
    setModal({ type: ACTIONS.CLOSE_MODAL });
  };

  // Handler when photo is clicked
  const photoClickHandler = (photoId) => {
    setModal({ type: ACTIONS.OPEN_MODAL, payload: { photoId } });
  };

  // return photo ? photo.isFavorite : false;

  return {
    photos,
    topics,
    modal,
    setModal,
    toggleFavoritePhoto,
    isPhotoFavorite,
    closeModal,
    checkFavorites,
    photoClickHandler,
  };
};
