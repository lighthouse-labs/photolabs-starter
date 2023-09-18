import React, { useState } from "react";
import PhotoList from "../components/PhotoList";
import TopNavigationBar from "../components/TopNavigationBar";
import "../styles/HomeRoute.scss";

const HomeRoute = ({ topics, photos, onPhotoClick }) => {
  const [favPhotos, setFavPhotos] = useState([]);

  const createFavorite = (photo) => {
    setFavPhotos([...favPhotos, photo]);
  };

  const deleteFavorite = (id) => {
    const updatedFavorites = favPhotos.filter((photo) => photo.id !== id);
    setFavPhotos(updatedFavorites);
  };

  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} isFavPhotoExist={favPhotos.length} />
      <PhotoList
        photos={photos}
        createFavorite={createFavorite}
        deleteFavorite={deleteFavorite}
        onPhotoClick={onPhotoClick}
      />
    </div>
  );
};

export default HomeRoute;
