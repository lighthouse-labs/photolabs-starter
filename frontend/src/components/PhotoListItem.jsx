import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = ({data}) => {
  const { id, location, urls, user } = data;

  return (
    <li className="photo-list__item">
      <PhotoFavButton />
      <img className="photo-list__image" src={urls.full} alt="Image photo" />
      <section className="photo-list__user-details">
        <img className="photo-list__user-profile" src={user.profile} alt="Profile image"/>
        <div className="photo-list__user-info">
          <span>{user.username}</span>
          <span className="photo-list__user-location">{location.city},{location.country}</span>
        </div>
      </section>
      
    </li>
  );
};

export default PhotoListItem;
