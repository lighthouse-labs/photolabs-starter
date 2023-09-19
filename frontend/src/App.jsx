import React from "react";
import HomeRoute from "./routes/HomeRoute";
import photos from "./mocks/photos";
import topics from "./mocks/topics";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import { useState } from "react";
import "./App.scss";

// Note: Rendering a single component to build components in isolation
const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [showPhotoDetails, setShowPhotoDetails] = useState([]);
  const [favPhotos, setFavPhotos] = useState([]);
  

  const createFavorite = (id) => {
    setFavPhotos([...favPhotos, id]);
  };

  const deleteFavorite = (id) => {
    const updatedFavorites = favPhotos.filter((favId) => favId !== id);
    setFavPhotos(updatedFavorites);
  };

  const handleClick = (photoDetails) => {
    setShowModal(true);
    setShowPhotoDetails([photoDetails]);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const modal = (
    <PhotoDetailsModal onClose={handleClose} photos={showPhotoDetails}  createFavorite={createFavorite} deleteFavorite={deleteFavorite} favPhotos={favPhotos}/>
  );

  return (
    <div className="App">
      <HomeRoute topics={topics} photos={photos} onPhotoClick={handleClick} createFavorite={createFavorite} deleteFavorite={deleteFavorite} favPhotos={favPhotos}/>
      {showModal && modal}
    </div>
  );
};

export default App;
