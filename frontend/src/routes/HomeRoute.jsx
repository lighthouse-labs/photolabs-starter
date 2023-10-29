import React from 'react';
import { useState } from "react";

import '../styles/HomeRoute.scss';
import TopNavigationBar from "../components/TopNavigationBar";
import PhotoList from "../components/PhotoList";

const HomeRoute = (props) => {
  // console.log('HomeRoute topicData', props.topicData)

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
        state={props.state}
        topicData={props.topicData}
        dispatch={props.dispatch}
        topicSelected={props.topicSelected}
        setTopicSelected={props.setTopicSelected}
      />
      <PhotoList 
        favList={props.favList}
        setFavList={props.setFavList}
        liked={props.liked}
        setLiked={props.setLiked}
        showModal={props.showModal}
        setShowModal={props.setShowModal}
        addFavPhoto={props.addFavPhoto}
        removeFavPhoto={props.removeFavPhoto}
        displayModal={props.displayModal}
        reducer={props.reducer}
        dispatch={props.dispatch}
        state={props.state}
        photoData={props.photoData}
        topicData={props.topicData}
      />
    </div>
  );
};

export default HomeRoute;
