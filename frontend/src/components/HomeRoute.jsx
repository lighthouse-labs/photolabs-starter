import React from 'react';

import '../styles/HomeRoute.scss';
import PhotoList from './PhotoList';
import TopNavigationBar from './TopNavigationBar';

const HomeRoute = () => {
  return (
    <div className="home-route">
      <TopNavigationBar />
      {/* { Array.from(Array(3)).map((_, index) => <PhotoListItem key={index}/>) } */}
      <PhotoList/>
    </div>
  );
};

export default HomeRoute;