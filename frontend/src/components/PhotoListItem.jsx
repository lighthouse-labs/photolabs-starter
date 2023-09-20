import React from "react";
import PhotoFavButton from "./PhotoFavButton";

import "../styles/PhotoListItem.scss";
import TopicListItem from "./TopicListItem";
const PhotoListItem = (props) => {
  return (
    <li
      className="photo-list__item"
      onClick={() => {
        props.onPhotoClick(props.photo);
      }}
    >
      <PhotoFavButton photo={props.photo} addFavourite={props.addFavourite} />
      <img
        className="photo-list__image"
        src={props.imageSource}
        alt="User's photo"
      />
      <section className="photo-list__user-details">
        <img
          className="photo-list__user-profile"
          src={props.profile}
          alt="User's profile"
        />
        <div className="photo-list__user-info">
          <p>{props.username}</p>
          <p className="photo-list__user-location">{`${props.location.city}, ${props.location.country}`}</p>
        </div>
      </section>
    </li>
  );
};
PhotoListItem.defaultProps = {
  imageSource: "Rahul",
  profile: "deepblue",
  username: "Rabia Abdur Rehman",
  location: {
    city: "Saskatoon",
    country: "Canada",
  },
};
export default PhotoListItem;
