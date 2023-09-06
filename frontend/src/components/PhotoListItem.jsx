import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  return (
    <div className="photo-list__item">
      <PhotoFavButton
        isLiked={props.isLiked}
        handleButtonClick={props.handleButtonClick}
      />
      <img src={props.sampleImage.urls.regular} className="photo-list__image" onClick={() => props.onClickPhoto(props.sampleImage)} />
      <div className="photo-list__user-details">
        <img src={props.sampleImage.user.profile} className="photo-list__user-profile photo-list__user-details" />
        <div>
          <h3 className="photo-list__user-info">{props.sampleImage.user.username}</h3>
          <h3 className="photo-list__user-location photo-list__user-info">{props.sampleImage.location.city}, {props.sampleImage.location.country}</h3>
        </div>
      </div>
    </div>
  )
};

export default PhotoListItem;