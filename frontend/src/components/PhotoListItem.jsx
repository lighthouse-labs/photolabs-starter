import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from './PhotoFavButton';

const PhotoListItem = (props) => {
  const {city, country}= props.location;

  return (
    <div>
      <ul key={props.key} className="photo-list__item">
        < PhotoFavButton />
        <img src={props.imageSource} className="photo-list__image"/>
        <h2 className="photo-list__user-details">{props.username}</h2>
        <h2 className="photo-list__user-location">{city}, {country}</h2>
        <img src={props.profile} alt={`Photo of ${props.username}`} className="photo-list__user-profile"></img>
      </ul>
  </div>
  )
};

export default PhotoListItem;
