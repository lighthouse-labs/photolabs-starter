import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {

  const {
    imageSource,
    id,
    profile,
    username,
    city,
    country
  } = props;

  return (<div className="photo-list__item">
    <img className="photo-list__image" src={imageSource} id={id} />
    <div className="photo-list__user-details">
      <img className="photo-list__user-profile" src={profile} />
      <div className="photo-list__user-info">
        <h2>{username}</h2>
        <h2 className="photo-list__user-location">{city} {country}</h2>
      </div>
    </div>
  </div>);
};

export default PhotoListItem;
