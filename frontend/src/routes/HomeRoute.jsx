import React from 'react';
import { useState } from "react";

import '../styles/HomeRoute.scss';
import TopNavigationBar from "../components/TopNavigationBar";
import PhotoList from "../components/PhotoList";

const HomeRoute = (props) => {
  console.log('HomeRoute favList', props.favList)

  const favPhotoNotification = () => {
    if (props.favList.length > 0) {
      isFavPhotoExist = 1;
    }
    return isFavPhotoExist;
  }

  return (
    <div className="home-route">
      <TopNavigationBar 
        favBadgeNotification={favPhotoNotification}
        favList={props.favList}
      />
      <PhotoList 
        favList={props.favList}
        setFavList={props.setFavList}
        liked={props.liked}
        setLiked={props.setLiked}
        showModal={props.showModal}
        setShowModal={props.setShowModal}
      />
    </div>
  );
};

export default HomeRoute;
