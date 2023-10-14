import React from 'react';

import '../styles/HomeRoute.scss';
import PhotoList from './PhotoList';
import TopNavigationBar from './TopNavigationBar';

const HomeRoute = (props) => {
  return (
    <div className="home-route">
      <TopNavigationBar topics={props.topics}/>
      {/* { Array.from(Array(3)).map((_, index) => <PhotoListItem key={index}/>) } */}
      <PhotoList photos={props.photos}/>
    </div>
  );
};

export default HomeRoute;