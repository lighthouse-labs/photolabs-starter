import React from "react";
import HomeRoute from "./routes/HomeRoute";
import photos from "./mocks/photos";
import topics from "./mocks/topics";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import useApplicationData from "hooks/useApplicationData";

import "./App.scss";

// Note: Rendering a single component to build components in isolation
const App = () => {
  const {
    showModal,
    showPhotoDetails,
    favPhotos,
    createFavorite,
    deleteFavorite,
    handleClick,
    handleClose,
  } = useApplicationData();

  const modal = (
    <PhotoDetailsModal
      onClose={handleClose}
      photos={showPhotoDetails}
      createFavorite={createFavorite}
      deleteFavorite={deleteFavorite}
      favPhotos={favPhotos}
    />
  );

  return (
    <div className="App">
      <HomeRoute
        topics={topics}
        photos={photos}
        onPhotoClick={handleClick}
        createFavorite={createFavorite}
        deleteFavorite={deleteFavorite}
        favPhotos={favPhotos}
      />
      {showModal && modal}
    </div>
  );
};

export default App;
