import React, { useState, useReducer, useEffect } from "react";
import "./App.scss";

import mockPhotos from "./mocks/photos";
import HomeRoute from "./routes/HomeRoute";
import PhotoDetailsModal from "./routes/PhotoDetailsModal";
import useApplicationData from "./hooks/useApplicationData";

// const initialState = {
//   count: 2,
// };

const App = () => {
  const { initialState, reducer, onClosePhotoDetailsModal } =
    useApplicationData();

  const [state, dispatch] = useReducer(reducer, initialState);
  console.log("state.favouritePhotos", state.favouritePhotos);

  const closeModal = () => {
    console.log("closed was clicked");
    onClosePhotoDetailsModal();
  };

  return (
    <div className="App">
      <HomeRoute
        mockPhotos={mockPhotos}
        imageContainerClassName="photo-list--item"
        imageClassName="photo-list--image"
        isFavourite={state.isFavourite}
        favouritePhotos={state.favouritePhotos}
        showModal={state.showModal}
        closeModal={closeModal}
        dispatch={dispatch}
      />
      {state.showModal && (
        <PhotoDetailsModal
          imageContainerClassName="photo-list--item photo-details-modal--images-wrapper"
          imageClassName="photo-details-modal--images"
          showModal={state.showModal}
          closeModal={closeModal}
          selectedPhoto={state.selectedPhoto}
          isFavourite={state.isFavourite}
          dispatch={dispatch}
        />
      )}
    </div>
  );
};

export default App;
