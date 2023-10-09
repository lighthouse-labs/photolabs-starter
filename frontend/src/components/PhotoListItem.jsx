import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  return (<div>
  <img className="imageSource" src={props.imageSource} id={props.id} />
  <img className="profile" src={props.profile} />
  <h2>{props.username}</h2>
  <h2>{props.city} {props.country}</h2>
  </div>);
};

export default PhotoListItem;
