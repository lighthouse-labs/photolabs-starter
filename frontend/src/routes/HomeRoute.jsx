import React, { useState, useReducer } from "react";
import PhotoListItem from "../components/PhotoListItem";
import PhotoList from "../components/PhotoList";
import TopNavigationBar from "../components/TopNavigationBar";
import PhotoFavButton from "../components/PhotoFavButton";
import "../styles/HomeRoute.scss";

const HomeRoute = (props) => {
  return (
    <>
      <TopNavigationBar favouritePhotos={props.favouritePhotos} />
      <div className="home-route">
        <PhotoList
          mockPhotos={props.mockPhotos}
          favouritePhotos={props.favouritePhotos}
          addFavouritePhoto={props.addFavouritePhoto}
          imageContainerClassName={props.imageContainerClassName}
          imageClassName={props.imageClassName}
          isFavourite={props.isFavourite}
          showModal={props.showModal}
          openModal={props.openModal}
          addToLike={props.addToLike}
        />
      </div>
    </>
  );
};

export default HomeRoute;
