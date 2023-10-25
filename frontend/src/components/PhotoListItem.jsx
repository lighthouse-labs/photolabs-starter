import React, {useState} from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from './PhotoFavButton';

const PhotoListItem = ({ photo, openModal, state, handleFav }) => {

  return (
    <div>
      <ul className="photo-list__item">
        < PhotoFavButton photo={photo} state={state} handleFav={handleFav} />
        <img
          src={photo.urls.full}
          className="photo-list__image"
          onClick = {() => openModal(photo)}
        />
        <h2 className="photo-list__user-details">{photo.user.username}</h2>
        <h2 className="photo-list__user-location">
          {photo.location.city}, {photo.location.country}
        </h2>
        <img
          src={photo.user.profile}
          alt={`Photo of ${photo.user.username}`}
          className="photo-list__user-profile"
        />
      </ul>
  </div>
  )
};

export default PhotoListItem;
