import React, { useState, useReducer } from "react";
import PhotoListItem from "../components/PhotoListItem";
import PhotoList from "../components/PhotoList";
import TopNavigationBar from "../components/TopNavigationBar";
import PhotoFavButton from "../components/PhotoFavButton";
import "../styles/HomeRoute.scss";

const HomeRoute = (props) => {
  return (
    <>
      <TopNavigationBar
        favouritePhotos={props.favouritePhotos}
        topics={props.topics}
        dispatch={props.dispatch}
        selectTopic={props.selectTopic}
      />
      <div className="home-route">
        <PhotoList
          photos={props.photos}
          favouritePhotos={props.favouritePhotos}
          addFavouritePhoto={props.addFavouritePhoto}
          imageContainerClassName={props.imageContainerClassName}
          imageClassName={props.imageClassName}
          showModal={props.showModal}
          // dispatch={props.dispatch}
          openModal={props.openModal}
        />
      </div>
    </>
  );
};

export default HomeRoute;
