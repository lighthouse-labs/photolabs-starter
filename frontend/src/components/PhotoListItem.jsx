import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = ({data}) => {
  const { id, location, imageSource, username, profile } = data;

  return (
    <li className="photo-list__item">
      <img className="photo-list__image" src={imageSource} alt="Image photo" />
      <section className="photo-list__user-details">
        <img className="photo-list__user-profile" src={profile} alt="Profile image"/>
        <div className="photo-list__user-info">
          <span>{username}</span>
          <span className="photo-list__user-location">{location.city},{location.country}</span>
        </div>
      </section>
      
    </li>
  );
};

export default PhotoListItem;
