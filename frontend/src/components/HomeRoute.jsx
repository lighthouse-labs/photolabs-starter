import React from 'react';
import TopNavigationBar from './TopNavigationBar';
import PhotoList from './PhotoList';
import '../styles/HomeRoute.scss'

const HomeRoute = ({ photos, topics}) => {
  return (
    <div className="home-route">
      <TopNavigationBar topics={topics}/>
      <PhotoList photos={photos}/>
   </div>
  )
}

export default HomeRoute;