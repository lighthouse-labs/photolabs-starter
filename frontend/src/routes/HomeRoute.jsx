import React from 'react';
import TopNavigationBar from '../components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import '../styles/HomeRoute.scss';
import topics from 'mocks/topics';
import photos from 'mocks/photos';

const HomeRoute = () => {
  return (
    <div className="home-route">
    <TopNavigationBar topics={topics} />
    <PhotoList photos={photos} />
    </div>
  );
};

export default HomeRoute; 
