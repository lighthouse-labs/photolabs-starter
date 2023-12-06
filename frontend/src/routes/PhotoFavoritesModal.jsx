import React from "react";

import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import PhotoList from "components/PhotoList";

const PhotoFavoritesModal = (props) => {
  const {
    isPhotoFavorite,
    toggleFavoritePhoto,
    toggleFavoritesModal,
    getFavoritePhotos,
  } = props;

  const photos = getFavoritePhotos();

  return (
    <div className="photo-details-modal">
      <button
        className="photo-details-modal__close-button"
        onClick={toggleFavoritesModal}
      >
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className="photo-details-modal__header ">
        <h3>Favorites Photos</h3>
        <div className="photo-details-modal__images">
          <PhotoList
            photos={photos}
            isPhotoFavorite={isPhotoFavorite}
            toggleFavoritePhoto={toggleFavoritePhoto}
          />
        </div>
      </div>
    </div>
  );
};

export default PhotoFavoritesModal;
