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
  const {
    initialState,
    ACTIONS,
    reducer,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal,
  } = useApplicationData();
  console.log("initialState.favouritePhotos", initialState.favouritePhotos);
  // console.log("actions", ACTIONS);
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToLike = (id) => {
    updateToFavPhotoIds(id);
  };

  // const openModal = (id) => {
  //   if (!state.showModal) {
  //     setPhotoSelected(id);
  //   }
  // };

  const closeModal = () => {
    console.log("closed was clicked");
    onClosePhotoDetailsModal();
  };

  return (
    <div className="App">
      {/* <button onClick={testClick}>BUTTON</button> */}
      <button
        onClick={() => dispatch({ type: ACTIONS.SELECT_PHOTO, payload: "2" })}
      >
        useReducer TEST
      </button>
      {state.count}
      <HomeRoute
        mockPhotos={mockPhotos}
        imageContainerClassName="photo-list--item"
        imageClassName="photo-list--image"
        isFavourite={state.isFavourite}
        favouritePhotos={state.favouritePhotos}
        showModal={state.showModal}
        // openModal={openModal}
        closeModal={closeModal}
        dispatch={dispatch}
      />
      {state.showModal && (
        <PhotoDetailsModal
          imageContainerClassName="photo-list--item photo-details-modal--images-wrapper"
          imageClassName="photo-details-modal--images"
          showModal={state.showModal}
          addToLike={addToLike}
          // openModal={openModal}
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
