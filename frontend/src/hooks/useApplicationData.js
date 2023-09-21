import { useReducer, useEffect } from "react";
import ACTIONS from "./helper-actions";
import reducer from "./helper-reducer";

const useApplicationData = () => {

  // initialze the reducer with default states
  const [state, dispatch] = useReducer(reducer, {
    favPhotos: [],
    showPhotoDetails: [],
    showModal: false,
    photoData: [],
    topicData: [],
    topicId: "",
  });

  // destructure states
  const {
    favPhotos,
    showPhotoDetails,
    showModal,
    photoData,
    topicData,
    topicId,
  } = state;

  /********************/
  /* UseEffect Hooks */
  /*******************/

  // Fetch photos from API
  useEffect(() => {
    fetch("/api/photos")
      .then((res) => res.json())
      .then((data) => dispatch({ type: ACTIONS.SET_PHOTO_DATA, value: data }))
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  // Fetch topics from API
  useEffect(() => {
    fetch("/api/topics")
      .then((res) => res.json())
      .then((data) => dispatch({ type: ACTIONS.SET_TOPIC_DATA, value: data }))
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  // Fetch photos from API
  useEffect(() => {
    if (topicId) {
      fetch(`/api/topics/photos/${topicId}`)
        .then((res) => res.json())
        .then((data) => dispatch({ type: ACTIONS.SET_PHOTO_DATA, value: data }))
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  }, [topicId]);

  /********************/
  /* Event Handlers  */
  /*******************/

  //selectTopic handler
  const selectTopic = (id) => {
    dispatch({ type: ACTIONS.GET_PHOTOS_BY_TOPICS, id });
  };

  //Create new favourite handler
  const createFavorite = (id) => {
    dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, id });
  };

  //Delete new favourite handler
  const deleteFavorite = (id) => {
    dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, id });
  };

  //handle click on photo handler
  const handleClick = (photoDetails) => {
    dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS, value: true });
    dispatch({ type: ACTIONS.SELECT_PHOTO, photoDetails });
  };

  //handle click on close button of modal handler
  const handleClose = () => {
    dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS, value: false });
  };


  return {
    showModal,
    showPhotoDetails,
    favPhotos,
    photoData,
    topicData,
    createFavorite,
    deleteFavorite,
    handleClick,
    handleClose,
    selectTopic
  };
};

export default useApplicationData;
