import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";
import mockPhotos from "../mocks/photos";

const PhotoList = (props) => {
  console.log("mockPhotos", mockPhotos);
  const renderPhotos = mockPhotos.map((photo) => (
    <PhotoListItem
      key={photo.id}
      imageSource={photo.urls.regular}
      username={photo.user.username}
      city={photo.location.city}
      country={photo.location.country}
      thumbnail={photo.user.profile}
      dispatch={props.dispatch}
      handleFavClick={props.handleFavClick}
      isFav={props.isFav}
      id={photo.id}
    />
  ));

  return <ul className="photo-list">{renderPhotos}</ul>;
};

export default PhotoList;
