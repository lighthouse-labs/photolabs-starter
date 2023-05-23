import { useState, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "../reducer/reducer";

const useApplicationData = () => {
  // const [applicationState, setApplicationState] = useState({
  //   showModal: false,
  //   selectedPhoto: [],
  //   favouritePhotos: [],
  //   photos: [],
  //   topics: [],
  // });

  const SET_PHOTO_DATA = "SET_PHOTO_DATA";
  const SET_TOPIC_DATA = "SET_TOPIC_DATA";

  const applicationState = {
    showModal: false,
    selectedPhoto: [],
    favouritePhotos: [],
    photos: [],
    topics: [],
  };

  const [state, dispatch] = useReducer(reducer, applicationState);

  useEffect(() => {
    const fetchData = async () => {
      const photos = await axios("/api/photos");
      dispatch({
        type: SET_PHOTO_DATA,
        payload: photos.data,
      });
      // const topics = await axios("/api/topics");

      // setApplicationState({
      //   ...applicationState,
      //   photos: photos.data,
      //   topics: topics.data,
      // });
    };
    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      const topics = await axios("/api/topics");
      dispatch({
        type: SET_TOPIC_DATA,
        payload: topics.data,
      });
      // const topics = await axios("/api/topics");

      // setApplicationState({
      //   ...applicationState,
      //   photos: photos.data,
      //   topics: topics.data,
      // });
    };
    fetchData();
  }, []);

  // const reducer = (state, action) => {
  //   switch (action.type) {
  //     case "SET_PHOTO_DATA":
  //       const photos = {
  //         ...state,
  //         photos: action.payload,
  //       };
  //       return photos;
  //     case "SELECT_PHOTO":
  //       console.log("state.photos", state.photos);
  //       console.log("applicationState.photos", applicationState.photos);
  //       const selected = applicationState.photos.filter((photo) => {
  //         return photo.id === action.payload;
  //       });
  //       console.log("selected", selected);
  //       if (!state.showModal) {
  //         return {
  //           ...state,
  //           showModal: !applicationState.showModal,
  //           selectedPhoto: selected.length > 0 ? selected : "",
  //         };
  //       }
  //     case "FAV_PHOTO_ADDED":
  //       const likedPhoto = applicationState.photos.find((photo) => {
  //         return photo.id === action.payload;
  //       });

  //       const removedFromFavourite = state.favouritePhotos.filter((photo) => {
  //         return photo.id !== action.payload;
  //       });

  //       const foundPhoto = state.favouritePhotos.find((favouritePhoto) => {
  //         return likedPhoto.id === favouritePhoto.id;
  //       });

  //       if (!foundPhoto) {
  //         return {
  //           ...state,
  //           // isFavourite: !state.isFavourite,
  //           favouritePhotos: [...state.favouritePhotos, likedPhoto],
  //         };
  //       } else {
  //         return {
  //           ...state,
  //           // isFavourite: !state.isFavourite,
  //           favouritePhotos: removedFromFavourite,
  //         };
  //       }
  //     case "CLOSE_MODAL":
  //       if (state.showModal) {
  //         return {
  //           ...state,
  //           showModal: false,
  //           selectedPhoto: null,
  //         };
  //       }
  //     default:
  //       return state;
  //   }
  // };

  return {
    // applicationState,
    state,
    // reducer,
    dispatch,
  };
};

export default useApplicationData;
