import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = (props) => {
  console.log("props", props);
  const renderPhotos = props.mockPhotos.map((photo) => (
    <PhotoListItem
      key={photo.id}
      imageSource={photo.urls.regular}
      username={photo.user.username}
      city={photo.location.city}
      country={photo.location.country}
      thumbnail={photo.user.profile}
      favouritePhotos={props.favouritePhotos}
      addFavouritePhoto={props.addFavouritePhoto}
      id={photo.id}
      openModal={props.openModal}
      profile={props.profile}
    />
  ));

  return <ul className="photo-list">{renderPhotos}</ul>;
};

export default PhotoList;
