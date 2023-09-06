import { useReducer, useEffect } from "react";

export const ACTIONS = {
  FAV_PHOTO_ADDED: "FAV_PHOTO_ADDED",
  FAV_PHOTO_REMOVED: "FAV_PHOTO_REMOVED",
  SET_PHOTO_DATA: "SET_PHOTO_DATA",
  SET_TOPIC_DATA: "SET_TOPIC_DATA",
  SELECT_PHOTO: "SELECT_PHOTO",
  DISPLAY_PHOTO_DETAILS: "DISPLAY_PHOTO_DETAILS",
  GET_PHOTOS_BY_TOPICS: "GET_PHOTOS_BY_TOPICS",
};

export default function useApplicationData() {
  const defaultState = {
    currentPhoto: undefined,
    likedPhotos: [],
    photoData: [],
    topicData: [],
    selectedTopicPhotos: [],
  };

  const [state, dispatch] = useReducer(reducer, defaultState);

  //set up a GET request to /api/photos
  useEffect(() => {
    fetch("http://localhost:8001/api/photos")
      .then((res) => res.json())
      .then((data) =>
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data })
      );
  }, []);

  //set up a GET request to /api/topics
  useEffect(() => {
    fetch("http://localhost:8001/api/topics")
      .then((res) => res.json())
      .then((data) =>
        dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data })
      );
  }, []);

  //outline what the reducer function should be
  function reducer(state, action) {
    switch (action.type) {
      case "FAV_PHOTO_ADDED":
        return {
          ...state,
          likedPhotos: [...state.likedPhotos, action.payload],
        };
      case "FAV_PHOTO_REMOVED":
        return {
          ...state,
          likedPhotos: [...action.payload],
        };
      case "SET_PHOTO_DATA":
        return {
          ...state,
          photoData: action.payload,
        };
      case "SET_TOPIC_DATA":
        return {
          ...state,
          topicData: action.payload,
        };
      case "SELECT_PHOTO":
        return {
          ...state,
          currentPhoto: action.payload,
        };
      case "DISPLAY_PHOTO_DETAILS":
        return {};
      case "GET_PHOTOS_BY_TOPICS":
        console.log(action.payload)
        return {
          ...state,
          photoData: action.payload,
        };
      default:
        throw new Error(
          `Tried to reduce with unsupported action type: ${action.type}`
        );
    }
  }

  function setPhotoSelected(photo) {
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: photo });
  }

  function getPhotosByTopics(topic_id) {
    console.log("topic ID here", topic_id);

    fetch(`http://localhost:8001/api/topics/photos/${topic_id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("data", data)
        dispatch({ type: ACTIONS.GET_PHOTOS_BY_TOPICS, payload: data })
      }
    );
  }

  function updateToFavPhotoIds(photoId) {
    if (state.likedPhotos.includes(photoId)) {
      dispatch({
        type: ACTIONS.FAV_PHOTO_REMOVED,
        payload: [...state.likedPhotos].filter((id) => id !== photoId),
      });
    } else {
      dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: photoId });
    }
  }

  function onClosePhotoDetailsModal() {
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: undefined });
  }

  return {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal,
    getPhotosByTopics,
  };
}
