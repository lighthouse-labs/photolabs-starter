import { useReducer, useEffect } from "react";
import ACTIONS from "./helper-actions";
import reducer from "./helper-reducer";
import useNavigation from "../hooks/use-navigation";

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

  const { navigate } = useNavigation();

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

  // Fetch favourite photo id's from API
  useEffect(() => {
    fetch("/api/photos/favourites")
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: ACTIONS.GET_ALL_FAV_PHOTOS, value: data });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [favPhotos.length]);

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
    navigate("/");
  };

  //Create new favourite handler
  const createFavorite = (photo) => {
    // Post photos favourite status to API
    fetch(`/api/photos/${photo.id}?liked=true`, {
      method: "POST",
    })
      .then((res) => res.json())
      .then(() => dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, value: photo }))
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  //Delete new favourite handler
  const deleteFavorite = (id) => {
    // Post photos favourite status to API
    fetch(`/api/photos/${id}?liked=false`, {
      method: "POST",
    })
      .then((res) => res.json())
      .then((data) => dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, id: data }))
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  //handle click on photo handler
  const handleClick = (photoDetails) => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, photoDetails });
    dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS, value: true });
  };

  //handle click on close button of modal handler
  const handleClose = () => {
    dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS, value: false });
  };

  //handle click on favourites icon
  const handleFavsClick = () => {
    if (favPhotos.length) {
      navigate("/favourites");
    }
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
    handleFavsClick,
    handleClose,
    selectTopic,
  };
};

export default useApplicationData;
