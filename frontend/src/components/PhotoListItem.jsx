import React, { useState } from "react";

import "../styles/PhotoListItem.scss";
import "../styles/PhotoFavButton.scss";
import { assertClassImplements } from "@babel/types";

import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  return (
    <li className="photo-list__item">
      <PhotoFavButton onClick={props.addPhotoFavorite} />

      <img
        className="photo-list__image"
        src={props.urls.regular}
        alt="portfolio picture"
        onClick={props.photoClickHandler}
      />
      <div className="photo-list__user-details">
        <img
          className="photo-list__user-profile"
          src={props.user.profile}
          alt="photographer picture"
        />
        <p className="photo-list__user-info">
          {props.user.username}
          <br />
          <span className="photo-list__user-location">
            {props.location.city}
            {","}
          </span>
          <span className="photo-list__user-location">
            {props.location.country}
          </span>
        </p>
      </div>
    </li>
  );
};

export default PhotoListItem;
