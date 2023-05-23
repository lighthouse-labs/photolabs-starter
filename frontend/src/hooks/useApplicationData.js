import { useState, useEffect } from "react";
import axios from "axios";

const useApplicationData = () => {
  const [applicationState, setApplicationState] = useState({
    showModal: false,
    selectedPhoto: [],
    favouritePhotos: [],
    photos: [],
    topics: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      const photos = await axios("/api/photos");
      const topics = await axios("/api/topics");

      setApplicationState({
        ...applicationState,
        photos: photos.data,
        topics: topics.data,
      });
    };
    fetchData();
  }, []);

  const reducer = (state, action) => {
    switch (action.type) {
      case "SELECT_PHOTO":
        const selected = applicationState.photos.filter((photo) => {
          return photo.id === action.payload;
        });
        console.log("selected", selected);
        if (!state.showModal) {
          return {
            ...state,
            showModal: !applicationState.showModal,
            selectedPhoto: selected.length > 0 ? selected : "",
          };
        }
      case "FAV_PHOTO_ADDED":
        const likedPhoto = applicationState.photos.find((photo) => {
          return photo.id === action.payload;
        });

        const removedFromFavourite = state.favouritePhotos.filter((photo) => {
          return photo.id !== action.payload;
        });

        const foundPhoto = state.favouritePhotos.find((favouritePhoto) => {
          return likedPhoto.id === favouritePhoto.id;
        });

        if (!foundPhoto) {
          return {
            ...state,
            // isFavourite: !state.isFavourite,
            favouritePhotos: [...state.favouritePhotos, likedPhoto],
          };
        } else {
          return {
            ...state,
            // isFavourite: !state.isFavourite,
            favouritePhotos: removedFromFavourite,
          };
        }
      case "CHANGE_CATEGORY":
        console.log("Category name", action.payload);
      case "CLOSE_MODAL":
        if (state.showModal) {
          return {
            ...state,
            showModal: false,
            selectedPhoto: null,
          };
        }
      default:
        return state;
    }
  };

  return {
    applicationState,
    reducer,
  };
};

export default useApplicationData;
