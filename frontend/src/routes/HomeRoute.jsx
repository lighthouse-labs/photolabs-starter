import React from 'react';
import TopNavigationBar from '../components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import '../styles/HomeRoute.scss';
import topics from 'mocks/topics';
import photos from 'mocks/photos';

const HomeRoute = ({ openModal, favoritedPhotos, setFavoritedPhotos }) => {
  
  return (
    <div className="home-route">
    <TopNavigationBar topics={topics} favoritedPhotos={favoritedPhotos} />
    <PhotoList photos={photos} 
    favoritedPhotos={favoritedPhotos} 
    setFavoritedPhotos={setFavoritedPhotos} 
    openModal={openModal}
    />
    </div>
  );
};

export default HomeRoute; 
