import React from 'react';
import PhotoList from './PhotoList';
import TopNavigationBar from './TopNavigationBar';
import "../styles/HomeRoute.scss";

const HomeRoute = () => (
  <div className="home-route">
    <TopNavigationBar />
    <PhotoList />
  </div>
);

export default HomeRoute;