import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = ({username, imageSource, id, location, profile}) => { 
  return (
    <div className="photo-list__item">
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
