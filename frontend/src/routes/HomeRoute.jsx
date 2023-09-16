import React, { useState } from 'react';
import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
// import photos from 'mocks/photos';

const HomeRoute = ({ openModal }) => {
  const [favPhotos, setFavPhotos] = useState([]);
  const isFavPhotoExist = favPhotos.length > 0;

  return (
    <div className="home-route">
      <TopNavigation isFavPhotoExist={isFavPhotoExist} />
      <PhotoList favPhotos={favPhotos} setFavPhotos={setFavPhotos} openModal={openModal}/>
    </div>
  );
};

export default HomeRoute;
