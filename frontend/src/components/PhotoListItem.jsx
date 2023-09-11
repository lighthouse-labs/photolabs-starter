import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";


const PhotoListItem = ({photo, favoritedPhotos, setFavoritedPhotos, openModal}) => {
  const { username, imageSource, id, location, profile } = photo;
  
  return (
    <div className="photo-list__item" onClick={() => openModal(photo)}>
      <PhotoFavButton photoId={id} favoritedPhotos={favoritedPhotos} setFavoritedPhotos={setFavoritedPhotos} />
      <img 
        src={photo.urls.regular} 
        alt={`photo ${id}`} 
        className="photo-list__image" 
        onClick={(e) => { e.stopPropagation(); openModal(photo); }} 
      />
      <div className="photo-list__user-details">
      <img 
    src={photo.user.profile} 
    alt={`${photo.user.username} profile`} 
    className="photo-list__user-profile" 
/>
        <div className="photo-list__user-info">
          <span>{photo.user.username}</span>
          <div className="photo-list__user-location">{location.city}, {location.country}</div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
