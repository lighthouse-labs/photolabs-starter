import React, { useState } from 'react';
import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import photos from 'mocks/photos';

const HomeRoute = () => {
  const [favPhotos, setFavPhotos] = useState([]);

  return (
    <div className="home-route">
      <TopNavigation />
      <PhotoList favPhotos={favPhotos} setFavPhotos={setFavPhotos}/>
    </div>
  );
};

export default HomeRoute;
