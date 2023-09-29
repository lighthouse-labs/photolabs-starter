import React from "react";

import "../styles/PhotoListItem.scss";



const PhotoListItem = ({ id, location, imageSource, username, profile }) => {
  return (
    <div className="photo-list-item">
      <img src={imageSource} alt={`Photo by ${username}`} />
      <p>{username}</p>
      <p>{`${location.city}, ${location.country}`}</p>
      <img src={profile} alt={`Profile of ${username}`} />
    </div>
  );
};

export default PhotoListItem;

