import React, { useState } from "react";
import "./App.scss";

import mockPhotos from "./mocks/photos";
import HomeRoute from "./routes/HomeRoute";
import PhotoDetailsModal from "./routes/PhotoDetailsModal";
import useApplicationData from "./hooks/useApplicationData";

const App = () => {
  const {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal,
  } = useApplicationData();
  console.log("state.favouritePhotos", state.favouritePhotos);

  const addToLike = (id) => {
    updateToFavPhotoIds(id);
  };

  const openModal = (id) => {
    if (!state.showModal) {
      setPhotoSelected(id);
    }
  };

  const closeModal = () => {
    onClosePhotoDetailsModal();
  };

  return (
    <div className="App">
      {/* <button onClick={testClick}>BUTTON</button> */}
      <button onClick={addToLike}>testFavAddClick</button>
      <HomeRoute
        mockPhotos={mockPhotos}
        imageContainerClassName="photo-list--item"
        imageClassName="photo-list--image"
        isFavourite={state.isFavourite}
        favouritePhotos={state.favouritePhotos}
        showModal={state.showModal}
        openModal={openModal}
        closeModal={closeModal}
      />
      {state.showModal && (
        <PhotoDetailsModal
          imageContainerClassName="photo-details-modal--images-wrapper"
          imageClassName="photo-details-modal--images"
          showModal={state.showModal}
          addToLike={addToLike}
          openModal={openModal}
          closeModal={closeModal}
          selectedPhoto={state.selectedPhoto}
          isFavourite={state.isFavourite}
        />
      )}
    </div>
  );
};

export default App;
