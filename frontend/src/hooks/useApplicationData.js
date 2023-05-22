import { useState, useEffect } from "react";
import axios from "axios";
// import photos from "../mocks/photos";

const useApplicationData = () => {
  const [initialState, setInitialState] = useState({
    showModal: false,
    selectedPhoto: null,
    favouritePhotos: [],
    photos: [],
  });

  useEffect(() => {
    axios("/api/photos").then((response) =>
      setInitialState({ ...initialState, photos: response.data })
    );
  }, []);

  const reducer = (state, action) => {
    switch (action.type) {
      case "SELECT_PHOTO":
        const selected = state.photos.filter((photo) => {
          return photo.id === action.payload;
        });
        if (!state.showModal) {
          return {
            ...state,
            showModal: !initialState.showModal,
            selectedPhoto: selected.length > 0 ? selected : "",
          };
        }
      case "FAV_PHOTO_ADDED":
        const likedPhoto = state.photos.find((photo) => {
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
            isFavourite: !state.isFavourite,
            favouritePhotos: [...state.favouritePhotos, likedPhoto],
          };
        } else {
          return {
            ...state,
            isFavourite: !state.isFavourite,
            favouritePhotos: removedFromFavourite,
          };
        }
      case "CLOSE_MODAL":
        if (state.showModal) {
          return {
            ...state,
            showModal: false,
            selectedPhoto: null,
          };
        }

      // ?? When our photolabs/backend successfully returns our request with the application data
      default:
        return state;
    }
  };

  // Old FAV_PHOTO_ADDED
  // const updateToFavPhotoIds = (id) => {
  //   const photo = photos.filter((photo) => photo.id === id);
  //   const removedFromFavourite = initialState.favouritePhotos.filter(
  //     (photo) => photo.id === id
  //   );

  //   if (!initialState.isFavourite) {
  //     setInitialState((prevState) => ({
  //       ...prevState,
  //       isFavourite: !prevState.isFavourite,
  //       favouritePhotos: [...prevState.favouritePhotos, photo],
  //     }));
  //   } else {
  //     setInitialState((prevState) => ({
  //       ...prevState,
  //       isFavourite: !prevState.isFavourite,
  //       favouritePhotos: [removedFromFavourite],
  //     }));
  //   }
  // };

  // Old SELECT_PHOTO
  // const setPhotoSelected = (id) => {
  //   const photo = photos.filter((photo) => photo.id === id);

  //   setInitialState((prevState) => ({
  //     ...prevState,
  //     showModal: !prevState.showModal,
  //     selectedPhoto: photo,
  //   }));
  // };

  // Old showModal
  // const onClosePhotoDetailsModal = () => {
  //   console.log("Close modal - console from custom hooks");
  //   setInitialState((prevState) => ({
  //     ...prevState,
  //     showModal: !prevState.showModal,
  //     selectedPhoto: null,
  //   }));
  //   // !setShow;
  //   console.log("click finished");
  // };

  return {
    initialState,
    reducer,
    // onClosePhotoDetailsModal,
  };
};

export default useApplicationData;
