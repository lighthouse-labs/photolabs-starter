import React from 'react';

import { useState } from 'react';
import TopNavigationBar from '../components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import '../styles/HomeRoute.scss';
import topics from 'mocks/topics';
import photos from 'mocks/photos';

const HomeRoute = () => {
  const [favoritedPhotos, setFavoritedPhotos] = useState([]);
  return (
    <div className="home-route">
    <TopNavigationBar topics={topics} favoritedPhotos={favoritedPhotos} />
    <PhotoList photos={photos} favoritedPhotos={favoritedPhotos} setFavoritedPhotos={setFavoritedPhotos} />
    </div>
  );
};

export default HomeRoute; 
