import React, { useState } from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  const { id, imageSource, username } = props;

  return (
    <div key={id} className="photo-list--item">
      <PhotoFavButton />
      <img
        src={imageSource}
        alt={`${username}'s photo`}
        className="photo-list--image"
      />
    </div>
  );
};

PhotoListItem.defaultProps = {
  id: 1,
  username: "Jacob",
  imageSource: `${process.env.PUBLIC_URL}/Image.jpg`,
  hideUserName: false,
};

export default PhotoListItem;
