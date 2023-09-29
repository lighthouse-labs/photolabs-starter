import React from "react";

import "../styles/PhotoListItem.scss";



const PhotoListItem = (props) => {
  return (
    <div className="photo-list-item">
      <img src={props.imageSource} alt={`Photo by ${props.username}`} />
      <p>{props.username}</p>
      <p>{`${props.location.city}, ${props.location.country}`}</p>
      <img src={props.profile} alt={`Profile of ${props.username}`} />
    </div>
  );
};

export default PhotoListItem;

