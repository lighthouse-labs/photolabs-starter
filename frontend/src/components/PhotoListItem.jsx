import React, { useState } from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  console.log("props.id", props.id);
  return (
    <div key={props.id} className="photo-list--item">
      <PhotoFavButton
        // handleIconClick={handleIconClick}
        // fav={fav}
        dispatch={props.dispatch}
        id={props.id}
        isFav={props.isFav}
        handleFavClick={props.handleFavClick}
      />
      <img
        src={props.imageSource}
        alt={`${props.username}'s photo`}
        className="photo-list--image"
      />
      <div className="photo-list--user-details">
        <img
          src={props.thumbnail}
          alt={props.username}
          className="photo-list--user-profile"
        />
        <div className="photo-list--user-info">
          <span>{props.username}</span>
          <br />
          <span className="photo-list--user-location">
            {props.city}, {props.country}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
