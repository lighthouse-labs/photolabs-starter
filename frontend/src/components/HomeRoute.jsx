import React, { useState } from 'react';

import '../styles/HomeRoute.scss';
import PhotoList from './PhotoList';
import TopNavigationBar from './TopNavigationBar';

const HomeRoute = (props) => {
  const [favorites, setFavorites] = useState([]);
  const addToFavorites = (photo) => {
    setFavorites([...favorites, photo]);
  }
  const {topics, photos} = props;

  return (
    <div className="home-route">
      <TopNavigationBar topics={topics}/>
      <PhotoList photos={photos} setFavorites={setFavorites}/>
    </div>
  );
};

export default HomeRoute;