import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  return (
    <div className="photoListItem">
      <img className="image" src={props.imageSource}></img>
      <img className="profile" src={props.profile}></img>
      <p className="username"> {props.username} </p>
      <p className="location"> {props.city} {props.country} </p>
    </div>
  )
};


export default PhotoListItem;
