import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {

  const {
    full,
    id,
    profile,
    name,
    city,
    country,
    setFavorites
  } = props;

  return (<div className="photo-list__item">
    <PhotoFavButton setFavorites={setFavorites} photoId={id}/>
    <img className="photo-list__image" src={full} id={id} />
    <div className="photo-list__user-details">
      <img className="photo-list__user-profile" src={profile} />
      <div className="photo-list__user-info">
        <h2>{name}</h2>
        <h2 className="photo-list__user-location">{city} {country}</h2>
      </div>
    </div>
  </div>);
};

export default PhotoListItem;
