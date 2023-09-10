import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";


const PhotoListItem = ({username, imageSource, id, location, profile, favoritedPhotos, setFavoritedPhotos}) => {
  return (
    <div className="photo-list__item">
      <PhotoFavButton photoId={id} favoritedPhotos={favoritedPhotos} setFavoritedPhotos={setFavoritedPhotos} />
      <img src={imageSource} alt={`photo ${id}`} className="photo-list__image" />

      <div className="photo-list__user-details">
        <img src={profile} alt={`${username} profile`} className="photo-list__user-profile" />
        <div className="photo-list__user-info">
          <span>{username}</span>
          <div className="photo-list__user-location">{location.city}, {location.country}</div>
        </div>
      </div>
      
    </div>
  );
};

export default PhotoListItem;
