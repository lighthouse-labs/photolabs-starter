import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = (props) => {
  // const render = props.mockPhotos.map((photo) => photo);
  // const favPhotos = props.favouritePhotos.map((el, i) => {
  //   // console.log("test", el[i].id);
  //   console.log("Favourite photo item: ", el[i]);
  //   // console.log("el", el);
  //   // console.log("i", i);
  // });

  // console.log("render", render);
  // console.log("favouritePhotos", props.favouritePhotos);
  // if (props.favouritePhotos.length > 0) {
  //   props.favouritePhotos.map((photo) => {
  //     return photo.id === props.id;
  //     // console.log("photo", photo);
  //   });
  // }

  const renderPhotos = props.mockPhotos.map((photo) => (
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
      isFavourite={props.isFavourite}
      favouritePhotos={props.favouritePhotos}
    />
  ));

  return <ul className="photo-list">{renderPhotos}</ul>;
};

export default PhotoList;
