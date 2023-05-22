import React, { useReducer, useEffect, useState } from "react";
import "./App.scss";
// import axios from "axios";
// import mockPhotos from "./mocks/photos";
import HomeRoute from "./routes/HomeRoute";
import PhotoDetailsModal from "./routes/PhotoDetailsModal";
import useApplicationData from "./hooks/useApplicationData";

const App = () => {
  const { initialState, reducer, onClosePhotoDetailsModal } =
    useApplicationData();

  const [state, dispatch] = useReducer(reducer, initialState);
  // const [photos, setPhotos] = useState([]);

  console.log("initialState.photos", initialState.photos);
  // console.log("photos", photos);

  // useEffect(() => {
  //   axios("/api/photos").then((response) => setPhotos(response.data));
  // }, []);

  return (
    <div className="App">
      <HomeRoute
        photos={initialState.photos}
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
