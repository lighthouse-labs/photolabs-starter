import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = (props) => {
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
      addToLike={props.addToLike}
      id={photo.id}
      dispatch={props.dispatch}
      // openModal={props.openModal}
      showProfile={props.showProfile}
      imageContainerClassName={props.imageContainerClassName}
      imageClassName={props.imageClassName}
      showModal={props.showModal}
      isFavourite={props.isFavourite}
      handleFavClick={props.handleFavClick}
      // openModal={props.openModal}
    />
  ));

  return <ul className="photo-list">{renderPhotos}</ul>;
};

export default PhotoList;
