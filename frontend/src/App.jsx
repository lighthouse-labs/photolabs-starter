import React, { useReducer } from "react";
import "./App.scss";
import HomeRoute from "./routes/HomeRoute";
import PhotoDetailsModal from "./routes/PhotoDetailsModal";
import useApplicationData from "./hooks/useApplicationData";

const App = () => {
  // const { applicationState, reducer, onClosePhotoDetailsModal } =
  const { state, reducer, onClosePhotoDetailsModal, dispatch } =
    useApplicationData();

  // const [state, dispatch] = useReducer(reducer, applicationState);

  // console.log("applicationState", applicationState);
  // console.log("applicationState.photos", applicationState.photos);

  return (
    <div className="App">
      <HomeRoute
        // photos={applicationState.photos}
        // topics={applicationState.topics}
        photos={state.photos}
        topics={state.topics}
        imageContainerClassName="photo-list--item"
        imageClassName="photo-list--image"
        // isFavourite={state.isFavourite}
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
