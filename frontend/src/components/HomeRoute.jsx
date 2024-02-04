import React from 'react';

import "../styles/HomeRoute.scss";
import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = ({photo, topic}) => {

  return (
    <div className='home-route'>
    <TopNavigationBar topics={topic}/>
    <PhotoList photos={photo}/>
    </div>
  );
};

export default HomeRoute;