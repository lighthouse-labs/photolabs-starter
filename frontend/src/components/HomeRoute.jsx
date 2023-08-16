import React from "react";

import "../styles/HomeRoute.scss";

import TopNavigation from './TopNavigationBar';
import PhotoList from './PhotoList';

const HomeRoute = (props) => {
  return (
    <div className="home-route">
      <TopNavigation topicListData={props.topicListData}/>
      <PhotoList photoListData={props.photoListData} />

    </div>
  );
};

export default HomeRoute;