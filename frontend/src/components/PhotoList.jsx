import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = (props) => {

  const isPhotoFavourite = (id) => props.favouritePhotos.includes(id);

  const renderPhotos = props.photos.map((photo) => (
    <PhotoListItem
      key={photo.id}
      imageSource={photo.urls.regular}
      username={photo.user.username}
      city={photo.location.city}
      country={photo.location.country}
      thumbnail={photo.user.profile}
      id={photo.id}
      imageContainerClassName={props.imageContainerClassName}
      imageClassName={props.imageClassName}
      showModal={props.showModal}
      isFavourite={isPhotoFavourite(photo.id)}
      favouritePhotos={props.favouritePhotos}
      openModal={props.openModal}
      selectTopic={props.selectTopic}
      setModalPhoto={props.setModalPhoto}
      addToFavourite={props.addToFavourite}
    />
  ));

  return <ul className="photo-list">{renderPhotos}</ul>;
};

export default PhotoList;
