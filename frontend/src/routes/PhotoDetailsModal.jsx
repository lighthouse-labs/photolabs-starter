import React from "react";

import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import PhotoFavButton from "components/PhotoFavButton";
import PhotoList from "components/PhotoList";

const PhotoDetailsModal = (props) => {
  const { selectedPhoto } = props;
  console.log("Selected photo", selectedPhoto);
  const imageUrl = selectedPhoto.urls.regular;
  const name = selectedPhoto.user.name;

  //const {city, country} = selectedPhoto.location;

  const locationCity = selectedPhoto.location.city;
  const locationCountry = selectedPhoto.location.country;
  const similarPhotos = Object.values(selectedPhoto.similar_photos);
  const userName = selectedPhoto.user.username;
  const profileForPhotographer = selectedPhoto.user.profile;

  return (
    <div className="photo-details-modal">
      <button
        className="photo-details-modal__close-button"
        onClick={props.onCloseClick}
      >
        <img src={closeSymbol} alt="close symbol" />
      </button>

      <div className="photo-details-modal__images">
        <PhotoFavButton
          photo={props.photo}
          addFavourite={props.toggleFavourite}
        />
        <img
          className="photo-details-modal__image"
          src={imageUrl}
          alt="selected_image"
        />
        <div className="photo-details-modal__photographer-details">
          <img
            className="photo-details-modalphotographer-profile"
            src={profileForPhotographer}
            alt={userName}
          />
          <div className="photo-details-modalphotographer-info">
            {name}
            <div className="photo-details-modalphotographer-location">
              {locationCity},{locationCountry}
            </div>
          </div>
        </div>
      </div>

      <PhotoList
        photos={similarPhotos}
        toggleFavourite={props.toggleFavourite}
        onPhotoClick={props.onPhotoClick}
      />
    </div>
  );
};

export default PhotoDetailsModal;
