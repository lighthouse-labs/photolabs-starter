import React from "react";
import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  return (
    <div className="photo-list-item">
      <img src={props.imageSource} alt={`Photo by ${props.username}`} className="photo-image" />
      <div className="photo-details">
        <img src={props.profile} alt={`Profile of ${props.username}`} className="profile-image" />
        <div className="text-info">
          <p className="username">{props.username}</p>
          <p className="location">{`${props.location.city}, ${props.location.country}`}</p>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
