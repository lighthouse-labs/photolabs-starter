import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = (props) => {
  function isPhotoFavourite(photoListItem) {
    const foundPhoto = props.favouritePhotos.find((favouritePhoto) => {
      return photoListItem.id === favouritePhoto.id;
    });
    return !!foundPhoto;
  }

  const renderPhotos = props.photos.map((photo) => (
    <PhotoListItem
      key={photo.id}
      imageSource={photo.urls.regular}
      username={photo.user.username}
      city={photo.location.city}
      country={photo.location.country}
      thumbnail={photo.user.profile}
      id={photo.id}
      dispatch={props.dispatch}
      imageContainerClassName={props.imageContainerClassName}
      imageClassName={props.imageClassName}
      showModal={props.showModal}
      isFavourite={isPhotoFavourite(photo)}
      favouritePhotos={props.favouritePhotos}
    />
  ));

  return <ul className="photo-list">{renderPhotos}</ul>;
};

export default PhotoList;
