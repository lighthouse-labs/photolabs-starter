import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";


const PhotoListItem = ({photo, favoritedPhotos, updateToFavPhotoIds, openModal}) => {
  const { username, imageSource, id, location, profile } = photo;
  
  return (
    <div className="photo-list__item">
      <PhotoFavButton photoId={id} favoritedPhotos={favoritedPhotos} updateToFavPhotoIds={updateToFavPhotoIds} />
      <img onClick={() => {
      
      openModal(photo)}}
  src={photo.urls.regular} 
  alt={`photo ${id}`} 
  className="photo-list__image" 
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
