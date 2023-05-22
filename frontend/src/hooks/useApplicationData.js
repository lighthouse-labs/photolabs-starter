import { useState, useEffect } from "react";
import mockPhotos from "../mocks/photos";

const useApplicationData = () => {
  const [state, setState] = useState({
    showModal: false,
    selectedPhoto: null,
    favouritePhotos: [],
    isFavourite: false,
  });

  const updateToFavPhotoIds = (id) => {
    const photo = mockPhotos.filter((photo) => photo.id === id);
    const removedFromFavourite = state.favouritePhotos.filter(
      (photo) => photo.id === id
    );

    if (!state.isFavourite) {
      setState((prevState) => ({
        ...prevState,
        isFavourite: !prevState.isFavourite,
        favouritePhotos: [...prevState.favouritePhotos, photo],
      }));
    } else {
      setState((prevState) => ({
        ...prevState,
        isFavourite: !prevState.isFavourite,
        favouritePhotos: [removedFromFavourite],
      }));
    }
  };

  const setPhotoSelected = (id) => {
    const photo = mockPhotos.filter((photo) => photo.id === id);

    setState((prevState) => ({
      ...prevState,
      showModal: !prevState.showModal,
      selectedPhoto: photo,
    }));
  };

  const onClosePhotoDetailsModal = () => {
    setState((prevState) => ({
      ...prevState,
      showModal: !prevState.showModal,
      selectedPhoto: null,
    }));
  };

  return {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal,
  };
};

export default useApplicationData;
