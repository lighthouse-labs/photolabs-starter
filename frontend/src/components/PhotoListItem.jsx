import React, { useState } from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  // console.log("props", props);
  const handleModalClick = (id) => {
    if (!props.showModal) {
      props.openModal(id);
    }
  };

  return (
    <div
      key={props.id}
      className={props.imageContainerClassName}
      // className={`${props.className}`}
      // onClick={() => handleModalClick(props.id)} //Modal Open
      onClick={() => handleModalClick(props.id)} //Modal Open
    >
      <PhotoFavButton
        photoId={props.id}
        isFavourite={props.isFavourite}
        favouritePhotos={props.favouritePhotos}
        addToLike={props.addToLike}
        // isFavourite={props.isFavourite}
      />
      <img
        src={props.imageSource}
        alt={`${props.username}'s photo`}
        // className="photo-list--image"
        className={props.imageClassName}
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
