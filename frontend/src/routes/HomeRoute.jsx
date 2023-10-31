import React from 'react';

import '../styles/HomeRoute.scss';
import TopNavigationBar from "../components/TopNavigationBar";
import PhotoList from "../components/PhotoList";

const HomeRoute = (props) => {

  //keeps track of if any photo has been favourited to determine badge notification 
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
        state={props.state}
        favList={props.favList}
        topicData={props.topicData}
        dispatch={props.dispatch}
        darkMode={props.darkMode}
        darkModeValue={props.darkModeValue}
      />
      <PhotoList 
        state={props.state}
        favList={props.favList}
        setFavList={props.setFavList}
        liked={props.liked}
        showModal={props.showModal}
        dispatch={props.dispatch}
        photoData={props.photoData}
        topicData={props.topicData}
      />
    </div>
  );
};

export default HomeRoute;
