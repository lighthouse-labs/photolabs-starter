import React from "react";
import PhotoList from "../components/PhotoList";
import TopNavigationBar from "../components/TopNavigationBar";
import "../styles/HomeRoute.scss";

const HomeRoute = ({ topics, photos, onPhotoClick, deleteFavorite, createFavorite, favPhotos }) => {

  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} isFavPhotoExist={favPhotos.length} />
      <PhotoList
        photos={photos}
        createFavorite={createFavorite}
        deleteFavorite={deleteFavorite}
        onPhotoClick={onPhotoClick}
        favPhotos={favPhotos}
      />
    </div>
  );
};

export default HomeRoute;
