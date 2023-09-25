import React from "react";
import PhotoList from "../components/PhotoList";
import "../styles/FavouritesRoute.scss";

const FavouritesRoute = ({
  photos,
  onPhotoClick,
  deleteFavorite,
  createFavorite,
  favPhotos,
}) => {
  return (
    <div className="favourite-route">
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

export default FavouritesRoute;
