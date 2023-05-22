import { useState, useEffect } from "react";
import mockPhotos from "../mocks/photos";

const useApplicationData = () => {
  const [initialState, setInitialState] = useState({
    showModal: false,
    selectedPhoto: null,
    favouritePhotos: [],
    isFavourite: false,
    count: 0,
  });

  useEffect(() => {
    //
  }, []);

  const reducer = (state, action) => {
    switch (action.type) {
      case "SELECT_PHOTO":
        const selected = mockPhotos.filter((photo) => {
          return photo.id === action.payload;
        });
        // console.log("selected", selected);
        if (!state.showModal) {
          return {
            ...state,
            showModal: true,
            selectedPhoto: selected.length > 0 ? selected : "",
          };
        }
      case "FAV_PHOTO_ADDED":
        const likedPhoto = mockPhotos.filter((photo) => {
          return photo.id === action.payload;
        });
        // console.log("likedPhoto", likedPhoto);
        console.log("FAV_PHOTO_ADDED");
        // console.log("action.payload: ", action.payload);
        // console.log("favourite photo", initialState.favouritePhotos);

        if (!initialState.isFavourite) {
          return {
            ...state,
            isFavourite: !state.isFavourite,
            favouritePhotos: [...state.favouritePhotos, likedPhoto],
          };
        }
      // When our photolabs/backend successfully returns our request with the application data
      default:
        return state;
    }
  };

  const updateToFavPhotoIds = (id) => {
    const photo = mockPhotos.filter((photo) => photo.id === id);
    const removedFromFavourite = initialState.favouritePhotos.filter(
      (photo) => photo.id === id
    );

    if (!initialState.isFavourite) {
      setInitialState((prevState) => ({
        ...prevState,
        isFavourite: !prevState.isFavourite,
        favouritePhotos: [...prevState.favouritePhotos, photo],
      }));
    } else {
      setInitialState((prevState) => ({
        ...prevState,
        isFavourite: !prevState.isFavourite,
        favouritePhotos: [removedFromFavourite],
      }));
    }
  };

  const setPhotoSelected = (id) => {
    const photo = mockPhotos.filter((photo) => photo.id === id);

    setInitialState((prevState) => ({
      ...prevState,
      showModal: !prevState.showModal,
      selectedPhoto: photo,
    }));
  };

  const onClosePhotoDetailsModal = () => {
    console.log("Close modal - console from custom hooks");
    setInitialState((prevState) => ({
      ...prevState,
      showModal: false,
      selectedPhoto: null,
    }));
  };

  return {
    initialState,
    reducer,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal,
  };
};

export default useApplicationData;
