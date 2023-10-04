import React from "react";
import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  return (
    <div>
      <img src={props.imageSource} alt="" />
      <img src={props.profile} alt="" />
      <p>
      {props.username}
      </p>
      <p>{props.location.city} {props.location.country}</p>
    </div>
  )
};

export default PhotoListItem;
