import React, { useState, useReducer, useEffect } from "react";
import "./App.scss";

import mockPhotos from "./mocks/photos";
import HomeRoute from "./routes/HomeRoute";
import PhotoDetailsModal from "./routes/PhotoDetailsModal";
import useApplicationData from "./hooks/useApplicationData";

const App = () => {
  const { initialState, reducer, onClosePhotoDetailsModal } =
    useApplicationData();

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <HomeRoute
        mockPhotos={mockPhotos}
        imageContainerClassName="photo-list--item"
        imageClassName="photo-list--image"
        isFavourite={state.isFavourite}
        favouritePhotos={state.favouritePhotos}
        showModal={state.showModal}
        dispatch={dispatch}
      />
      {state.showModal && (
        <PhotoDetailsModal
          imageContainerClassName="photo-list--item photo-details-modal--images-wrapper"
          imageClassName="photo-details-modal--images"
          favouritePhotos={state.favouritePhotos}
          showModal={state.showModal}
          selectedPhoto={state.selectedPhoto}
          isFavourite={state.isFavourite}
          dispatch={dispatch}
        />
      )}
    </div>
  );
};

export default App;
