import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  return (
    <div className="photo-list__item">
      <PhotoFavButton />
      <img src={props.imageSource} alt="" className="photo-list__image" />
      <div className="photo-list__user-details">
      <img src={props.profile} alt="" className="photo-list__user-profile" />
      <p className="photo-list__user-info">
      {props.username}
      <span className="photo-list__user-location">{props.location.city}, {props.location.country}</span>
      </p>
      </div>
    </div>
  )
};

export default PhotoListItem;
